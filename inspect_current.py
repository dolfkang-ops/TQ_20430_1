import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('d:/ant/TQ_20430/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract title
m = re.search(r'<title>(.*?)</title>', text)
print("Title:", m.group(1) if m else "None")

# Find all section ids and classes
print("\n--- Sections in TQ_20430/index.html ---")
sections = re.findall(r'<section[^>]*id=["\']([^"\']+)["\'][^>]*>', text)
for sec in sections:
    print("Section id:", sec)

# Also check header/nav
navs = re.findall(r'<nav[^>]*>.*?</nav>', text, re.DOTALL)
print("Nav elements:", len(navs))
