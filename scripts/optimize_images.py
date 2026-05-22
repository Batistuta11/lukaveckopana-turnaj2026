#!/usr/bin/env python3
from PIL import Image
from pathlib import Path

src = Path('public/images/lukavec2026.png')
out = Path('public/images')

if not src.exists():
    print('Source image not found:', src)
    raise SystemExit(1)

img = Image.open(src)
# Ensure RGBA -> RGB for webp
if img.mode in ('RGBA', 'LA'):
    background = Image.new('RGB', img.size, (255,255,255))
    background.paste(img, mask=img.split()[3])
    img = background
else:
    img = img.convert('RGB')

# Save large optimized webp
out_large = out / 'lukavec2026.webp'
img.save(out_large, 'WEBP', quality=80, method=6)
print('Saved', out_large)

# Save resized 800px width
maxw = 800
wpercent = (maxw / float(img.size[0]))
hsize = int((float(img.size[1]) * float(wpercent)))
img_small = img.resize((maxw, hsize), Image.LANCZOS)
out_small = out / 'lukavec2026-800.webp'
img_small.save(out_small, 'WEBP', quality=75, method=6)
print('Saved', out_small)
