from PIL import Image

def analyze_logo(img_path):
    img = Image.open(img_path).convert("RGBA")
    w, h = img.size
    
    # Check opacity column by column to see where elements start/end
    col_has_content = []
    for x in range(w):
        has_content = False
        for y in range(h):
            r, g, b, a = img.getpixel((x, y))
            if a > 10: # low threshold for transparency
                has_content = True
                break
        col_has_content.append(has_content)
        
    # Find contiguous segments of content
    segments = []
    in_segment = False
    start = 0
    for x in range(w):
        if col_has_content[x] and not in_segment:
            start = x
            in_segment = True
        elif not col_has_content[x] and in_segment:
            segments.append((start, x - 1))
            in_segment = False
    if in_segment:
        segments.append((start, w - 1))
        
    print("Detected content segments (X-ranges):", segments)
    
    # Let's crop each segment and print info
    for i, (start, end) in enumerate(segments):
        seg_w = end - start + 1
        # Find vertical bounding box for this segment
        min_y, max_y = h, 0
        for x in range(start, end + 1):
            for y in range(h):
                r, g, b, a = img.getpixel((x, y))
                if a > 10:
                    if y < min_y: min_y = y
                    if y > max_y: max_y = y
        seg_h = max_y - min_y + 1
        print(f"Segment {i}: X-range ({start} to {end}), width={seg_w}, height={seg_h}, Y-range ({min_y} to {max_y})")

analyze_logo("src/Images/logo.png")
