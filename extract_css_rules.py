import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('moonlight_main.css', 'r', encoding='utf-8', errors='ignore') as f:
    main_css = f.read()

# Find all selectors in main_css
selectors = re.findall(r'([^{}]+)\{', main_css)
cleaned_sel = [s.strip() for s in selectors if s.strip() and not s.strip().startswith('@')]
print("Sample selectors from moonlight_main.css:")
for s in cleaned_sel[:40]:
    print(" -", s.replace('\n', ' '))

print("\n--- Media queries in main_css ---")
media_queries = re.findall(r'@media[^{]+\{', main_css)
for mq in media_queries:
    print(mq.strip())
