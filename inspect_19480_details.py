import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('d:/ant/TQ_19480/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Print full reviews section
m_rev = re.search(r'(<section id="reviews".*?</section>)', text, re.DOTALL)
if m_rev:
    print("=== FULL REVIEWS SECTION (Length:", len(m_rev.group(0)), ") ===")
    print(m_rev.group(0)[:3500])
    # check how "더보기" button is implemented
    more_m = re.findall(r'<a[^>]+href=[^>]+>.*?더보기.*?</a>', m_rev.group(0), re.DOTALL)
    print("\nMore buttons in reviews:", more_m)

# 2. Print full policy section
m_pol = re.search(r'(<section id="policy".*?</section>)', text, re.DOTALL)
if m_pol:
    print("\n=== FULL POLICY / REFUND SECTION (Length:", len(m_pol.group(0)), ") ===")
    print(m_pol.group(0)[:3500])

# 3. Check JSON-LD
m_json = re.search(r'<script type=["\']application/ld\+json["\']>(.*?)</script>', text, re.DOTALL)
if m_json:
    print("\n=== JSON-LD IN TQ_19480 ===")
    print(m_json.group(1))
