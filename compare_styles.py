import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('moonlight_common.css', 'r', encoding='utf-8', errors='ignore') as f:
    m_common = f.read()

with open('moonlight_main.css', 'r', encoding='utf-8', errors='ignore') as f:
    m_main = f.read()

print("=== MOONLIGHT GNB & LNB CSS ===")
for m in re.finditer(r'(\.hsec1[^{]*\{[^}]+\}|\.lnbG[^{]*\{[^}]+\}|\.menu[^{]*\{[^}]+\}|\.sub[^{]*\{[^}]+\})', m_common):
    print(m.group(0))

print("\n=== MOONLIGHT SHOWROOM CSS ===")
for m in re.finditer(r'(\.c-showroom[^{]*\{[^}]+\})', m_main):
    print(m.group(0))

print("\n=== MOONLIGHT MSEC2 CSS ===")
for m in re.finditer(r'(\.msec2[^{]*\{[^}]+\}|\.img_con[^{]*\{[^}]+\}|\.titG[^{]*\{[^}]+\})', m_main):
    print(m.group(0))
