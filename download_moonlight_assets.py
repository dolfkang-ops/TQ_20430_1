import urllib.request
import ssl
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, context=ctx) as resp:
        content = resp.read()
        for enc in ['utf-8', 'euc-kr', 'cp949']:
            try:
                return content.decode(enc)
            except:
                pass
        return content.decode('utf-8', errors='ignore')

# Fetch main html with proper encoding
html = fetch('https://www.moonlightcamp.kr/')
with open('moonlight_decoded.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Saved moonlight_decoded.html")

# Fetch common.css and main.css
common_css = fetch('https://www.moonlightcamp.kr/css/common.css')
with open('moonlight_common.css', 'w', encoding='utf-8') as f:
    f.write(common_css)

main_css = fetch('https://www.moonlightcamp.kr/css/main.css')
with open('moonlight_main.css', 'w', encoding='utf-8') as f:
    f.write(main_css)

print("Fetched css files successfully.")
