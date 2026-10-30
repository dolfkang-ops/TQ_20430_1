import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('moonlight_decoded.html', 'r', encoding='utf-8') as f:
    html = f.read()

imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
print("Images referenced in moonlightcamp HTML:")
for img in set(imgs):
    print(" -", img)

with open('moonlight_main.css', 'r', encoding='utf-8', errors='ignore') as f:
    css = f.read()

css_imgs = re.findall(r'url\(["\']?([^"\'\)]+)["\']?\)', css)
print("\nImages referenced in moonlightcamp CSS:")
for img in set(css_imgs):
    print(" -", img)
