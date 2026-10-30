import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('d:/ant/TQ_20430/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect the sections in TQ_20430/index.html:
for m in re.finditer(r'<section[^>]*id=["\']([^"\']+)["\'][^>]*>(.*?)</section>', text, re.DOTALL):
    sec_id = m.group(1)
    sec_content = m.group(2)
    # get headings
    headings = re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', sec_content, re.DOTALL)
    print(f"\n=== Section: #{sec_id} ===")
    for h in headings[:5]:
        print("  H:", re.sub(r'<[^>]+>', '', h).strip())
    # find images used
    imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', sec_content)
    print("  Images:", imgs[:5])
