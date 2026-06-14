from PIL import Image

def generate_favicon(logo_path, output_dir):
    img = Image.open(logo_path).convert("RGBA")
    w, h = img.size
    
    # We crop segment 0: X-range (9 to 379), Y-range (23 to 293)
    # Let's get the bounding box of non-transparent pixels in the first segment area
    min_x, max_x = 9, 379
    min_y, max_y = 23, 293
    
    # Crop the raw icon content
    icon_content = img.crop((min_x, min_y, max_x + 1, max_y + 1))
    icon_w = max_x - min_x + 1
    icon_h = max_y - min_y + 1
    
    # We want a square output. Let's find the max dimension and add some padding
    max_dim = max(icon_w, icon_h)
    # Add a 10% padding
    pad = int(max_dim * 0.1)
    square_size = max_dim + 2 * pad
    
    # Create a new transparent image
    square_img = Image.new("RGBA", (square_size, square_size), (0, 0, 0, 0))
    
    # Calculate position to paste the icon in the center
    paste_x = (square_size - icon_w) // 2
    paste_y = (square_size - icon_h) // 2
    
    square_img.paste(icon_content, (paste_x, paste_y), icon_content)
    
    # Save the main favicon.png (high-res)
    square_img.save(f"{output_dir}/favicon.png", "PNG")
    print(f"Saved {output_dir}/favicon.png with size {square_size}x{square_size}")
    
    # Save different standard PNG sizes
    sizes = [16, 32, 48, 96, 180, 192, 512]
    for size in sizes:
        resized = square_img.resize((size, size), Image.Resampling.LANCZOS)
        resized.save(f"{output_dir}/favicon-{size}x{size}.png", "PNG")
        if size == 180:
            resized.save(f"{output_dir}/apple-touch-icon.png", "PNG")
        print(f"Saved favicon-{size}x{size}.png")
        
    # Save standard .ico file for backward compatibility (containing 16x16, 32x32, 48x48)
    ico_img = square_img.resize((48, 48), Image.Resampling.LANCZOS)
    ico_img.save(
        f"{output_dir}/favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)]
    )
    print(f"Saved {output_dir}/favicon.ico containing 16, 32, 48 sizes.")

generate_favicon("src/Images/logo.png", "public")
