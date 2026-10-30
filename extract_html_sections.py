import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('moonlight_decoded.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's inspect the sections in moonlightcamp:
# 1. header (hsec1)
m = re.search(r'<section class="hsec1">.*?</section>', html, re.DOTALL)
if m:
    print("=== HEADER SECTION (hsec1) ===")
    print(m.group(0)[:2000])

# 2. msec1 (hero)
m = re.search(r'<section class="msec1">.*?</section>', html, re.DOTALL)
if m:
    print("\n=== HERO SLIDER (msec1) ===")
    print(m.group(0)[:2000])

# 3. msec2_new (checkin/out bar)
m = re.search(r'<section class="msec2_new">.*?</section>', html, re.DOTALL)
if m:
    print("\n=== CHECKIN/OUT (msec2_new) ===")
    print(m.group(0)[:1500])

# 4. msec2 (sites list)
m = re.search(r'<section class="msec2">.*?</section>', html, re.DOTALL)
if m:
    print("\n=== SITES / CAMPSITE (msec2) ===")
    print(m.group(0)[:2000])

# 5. showroom (c-showroom)
m = re.search(r'<div class="c-showroom">.*?</div>\s*</div>\s*</div>', html, re.DOTALL)
if m:
    print("\n=== SHOWROOM (c-showroom) ===")
    print(m.group(0)[:2000])
else:
    m = re.search(r'class="c-showroom[^"]*".*?</div>\s*</div>', html, re.DOTALL)
    if m:
        print("\n=== SHOWROOM (c-showroom) ===")
        print(m.group(0)[:2000])

# 6. msec5 / promo
m = re.search(r'<section class="msec5">.*?</section>', html, re.DOTALL)
if m:
    print("\n=== MSEC5 PROMO ===")
    print(m.group(0)[:1500])

# 7. footer
m = re.search(r'<footer.*?</footer>', html, re.DOTALL)
if m:
    print("\n=== FOOTER ===")
    print(m.group(0)[:2000])
else:
    # Look for last div or footer
    m = re.search(r'<div class="footer.*?</div\s*>\s*</body\s*>', html, re.DOTALL)
    if m:
        print("\n=== FOOTER DIV ===")
        print(m.group(0)[:2000])
