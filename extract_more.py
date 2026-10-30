import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('moonlight_decoded.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Showroom part
idx = html.find('c-showroom')
if idx != -1:
    print("=== SHOWROOM HTML ===")
    print(html[idx-50:idx+2500])

# Quick menu
idx2 = html.find('quick_menu')
if idx2 != -1:
    print("\n=== QUICK MENU HTML ===")
    print(html[idx2-50:idx2+1200])

# Footer
idx3 = html.find('footer')
if idx3 != -1:
    print("\n=== FOOTER HTML ===")
    print(html[idx3-50:idx3+2500])
