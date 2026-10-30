import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('d:/ant/TQ_19480/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

print("File size:", len(text))

# Search for review section
print("\n=== Review Section in TQ_19480 ===")
m = re.search(r'(<section[^>]*id=["\'][^"\']*review[^"\']*["\'][^>]*>.*?</section>)', text, re.DOTALL | re.I)
if m:
    print("Found review section by id:")
    print(m.group(0)[:2000])
else:
    # search class or text
    for sec in re.finditer(r'<section[^>]*>(.*?)</section>', text, re.DOTALL):
        if '후기' in sec.group(1) or 'review' in sec.group(1).lower():
            print("Found section with 후기:")
            print(sec.group(0)[:1500])
            break

# Search for guide / rules / refund section
print("\n=== Guide & Refund Section in TQ_19480 ===")
m = re.search(r'(<section[^>]*id=["\'][^"\']*(?:guide|rule|refund|policy)[^"\']*["\'][^>]*>.*?</section>)', text, re.DOTALL | re.I)
if m:
    print("Found guide/refund section:")
    print(m.group(0)[:2000])
else:
    for sec in re.finditer(r'<section[^>]*>(.*?)</section>', text, re.DOTALL):
        if '환불' in sec.group(1) or '이용수칙' in sec.group(1) or '운영정책' in sec.group(1):
            print("Found section with 환불/수칙:")
            print(sec.group(0)[:2000])
            break

# Search SEO elements (JSON-LD, meta)
print("\n=== SEO Head in TQ_19480 ===")
head_m = re.search(r'<head>(.*?)</head>', text, re.DOTALL | re.I)
if head_m:
    head = head_m.group(1)
    json_ld = re.findall(r'<script type=["\']application/ld\+json["\']>(.*?)</script>', head, re.DOTALL)
    print(f"JSON-LD blocks found: {len(json_ld)}")
    for j in json_ld:
        print(j[:500])
