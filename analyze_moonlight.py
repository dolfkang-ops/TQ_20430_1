import re

with open('moonlight_sample.html', 'r', encoding='utf-8') as f:
    html = f.read()

print("=== Head links and stylesheets ===")
for m in re.finditer(r'<link\s+[^>]+>', html, re.I):
    print(m.group(0))

print("\n=== Title ===")
m = re.search(r'<title>(.*?)</title>', html, re.I | re.S)
if m:
    print(m.group(1).strip())

print("\n=== Meta description ===")
m = re.search(r'<meta[^>]*name=["\']description["\'][^>]*>', html, re.I)
if m:
    print(m.group(0))

print("\n=== Main navigation / menu structure ===")
m = re.search(r'(<nav.*?</nav>|<header.*?</header>)', html, re.I | re.S)
if m:
    print(m.group(0)[:1500])

print("\n=== All section tags and main container classes ===")
for m in re.finditer(r'<section[^>]*>', html, re.I):
    print(m.group(0))

print("\n=== First 100 lines of body ===")
m = re.search(r'<body[^>]*>(.*)', html, re.I | re.S)
if m:
    body_lines = m.group(1).splitlines()[:50]
    for line in body_lines:
        print(line)
