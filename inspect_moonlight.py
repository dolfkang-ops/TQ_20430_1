import re

with open('moonlight_decoded.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Check title
m = re.search(r'<title>(.*?)</title>', html, re.I | re.S)
if m:
    print("Title:", m.group(1).strip())

# Look at header/navigation
header_match = re.search(r'(<header.*?</header>|<div class="header".*?</div>)', html, re.I | re.S)
if header_match:
    print("\n--- Header Match ---")
    print(header_match.group(0)[:1000])
else:
    # Find navigation or menu
    print("\n--- Searching for nav/menu ---")
    for m in re.finditer(r'<div[^>]*class="[^"]*(?:nav|gnb|menu|header|top)[^"]*"[^>]*>', html, re.I):
        print(m.group(0))

# Print sections
print("\n--- Sections ---")
for m in re.finditer(r'<section[^>]*>.*?</section>', html, re.I | re.S):
    sec = m.group(0)
    tag_start = sec[:sec.find('>')+1]
    print(tag_start)
    # Print headings inside section
    headings = re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', sec, re.I | re.S)
    if headings:
        print("   Headings:", [re.sub(r'<[^>]+>', '', h).strip() for h in headings])
    classes = re.findall(r'class="([^"]+)"', sec)
    print("   Classes in section:", set(' '.join(classes).split()) - {'aos-init', 'aos-animate'})

print("\n--- Footer ---")
m = re.search(r'<footer.*?</footer>', html, re.I | re.S)
if m:
    print(m.group(0)[:500])
else:
    for m in re.finditer(r'<div[^>]*class="[^"]*footer[^"]*"[^>]*>', html, re.I):
        print(m.group(0))
