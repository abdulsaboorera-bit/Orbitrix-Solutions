import struct

def get_image_info(filename):
    with open(filename, 'rb') as f:
        data = f.read(24)
        if data[:8] == b'\x89PNG\r\n\x1a\n':
            w, h = struct.unpack('>ii', data[16:24])
            return 'PNG', w, h
        else:
            return 'Unknown', 0, 0

try:
    fmt, w, h = get_image_info("src/Images/logo.png")
    print(f"Format: {fmt}, Width: {w}, Height: {h}")
except Exception as e:
    print("Error:", e)
