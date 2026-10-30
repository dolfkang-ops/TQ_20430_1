import re

with open('css/common.css', 'r', encoding='utf-8') as f:
    common = f.read()

with open('css/main.css', 'r', encoding='utf-8') as f:
    main_css = f.read()

print("=== Checking common.css ===")
# Check potential duplicate rules or syntax issues
open_braces = common.count('{')
close_braces = common.count('}')
print(f"common.css braces: open={open_braces}, close={close_braces}")

# Check main.css
open_braces2 = main_css.count('{')
close_braces2 = main_css.count('}')
print(f"main.css braces: open={open_braces2}, close={close_braces2}")

# Check _mo / _pc usage
print("\n_mo rules in common.css:")
for line in common.splitlines():
    if '_mo' in line or '_pc' in line:
        print("  ", line)

# Check media queries in main.css
print("\nMedia queries in main.css:")
for m in re.finditer(r'@media[^{]+', main_css):
    print("  ", m.group(0).strip())
