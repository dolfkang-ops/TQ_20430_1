import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('moonlight_common.css', 'r', encoding='utf-8', errors='ignore') as f:
    common = f.read()

print("=== Common CSS Head (imports, root, fonts) ===")
print(common[:1500])

with open('moonlight_main.css', 'r', encoding='utf-8', errors='ignore') as f:
    main_css = f.read()

print("=== Main CSS Head ===")
print(main_css[:1500])
