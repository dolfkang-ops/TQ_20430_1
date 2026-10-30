import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('moonlight_decoded.html', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'<title>(.*?)</title>', text)
if m:
    print('Title:', m.group(1))

# Check navigation/GNB
print("\n--- GNB / Header ---")
m = re.search(r'<div class="gnbG">.*?</div>\s*</div>', text, re.DOTALL)
if m:
    print(m.group(0)[:1500])

# Check menu list
print("\n--- Navigation Menu Items ---")
nav_items = re.findall(r'<li[^>]*>.*?<a[^>]*>(.*?)</a>.*?</li>', text, re.DOTALL)
for item in nav_items[:20]:
    clean_item = re.sub(r'<[^>]+>', ' ', item).strip()
    if clean_item:
        print("Menu item:", clean_item)

# Check all sections
print("\n--- Sections Overview ---")
sections = re.findall(r'(<section[^>]*>.*?</section>)', text, re.DOTALL)
for i, s in enumerate(sections):
    sec_tag = re.search(r'<section[^>]*>', s).group(0)
    print(f"\n[Section {i+1}] {sec_tag}")
    # print text inside
    lines = [l.strip() for l in re.sub(r'<[^>]+>', '\n', s).splitlines() if l.strip()]
    print("Content preview:", " | ".join(lines[:8]))

# Check CSS fonts and colors
print("\n--- CSS Fonts and Highlights ---")
with open('moonlight_main.css', 'r', encoding='utf-8', errors='ignore') as f:
    main_css = f.read()

fonts = re.findall(r'font-family:[^;]+;', main_css)
print("Font families:", set(fonts[:10]))

colors = re.findall(r'(?:color|background(?:-color)?):\s*(#[0-9a-fA-F]{3,6}|rgba?\([^)]+\))', main_css)
print("Key colors:", set(colors[:20]))
