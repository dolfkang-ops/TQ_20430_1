import os
import re

with open('d:/ant/TQ_20430_1/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Check all images in index.html
imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
print('Total images in HTML:', len(imgs))
all_ok = True
for img in sorted(set(imgs)):
    path = os.path.join('d:/ant/TQ_20430_1', img)
    exists = os.path.exists(path)
    if not exists:
        all_ok = False
    print(f' - {img}: {"OK" if exists else "MISSING"}')

with open('d:/ant/TQ_20430_1/css/main.css', 'r', encoding='utf-8') as f:
    css_content = f.read()
css_imgs = re.findall(r'url\(["\']?([^"\'\)]+)["\']?\)', css_content)

print('\nTotal bg images in CSS:', len(css_imgs))
for img in sorted(set(css_imgs)):
    path = os.path.normpath(os.path.join('d:/ant/TQ_20430_1/css', img))
    exists = os.path.exists(path)
    if not exists:
        all_ok = False
    print(f' - CSS bg: {img} -> {path}: {"OK" if exists else "MISSING"}')

print(f'\nAll assets status: {"PERFECT" if all_ok else "CHECK MISSING"}')
