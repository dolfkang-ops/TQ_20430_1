import json
import re
from html.parser import HTMLParser

class TagChecker(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.void_tags = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}
    def handle_starttag(self, tag, attrs):
        if tag.lower() not in self.void_tags:
            self.stack.append(tag.lower())
    def handle_endtag(self, tag):
        t = tag.lower()
        if t in self.void_tags: return
        if self.stack and self.stack[-1] == t:
            self.stack.pop()
        else:
            if t in self.stack:
                while self.stack and self.stack[-1] != t:
                    self.stack.pop()
                if self.stack: self.stack.pop()

with open('d:/ant/TQ_20430_1/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

checker = TagChecker()
checker.feed(html)
print('Unclosed HTML tags:', checker.stack)
print('HTML Length:', len(html))

# Validate JSON-LD
m = re.search(r'<script type=["\']application/ld\+json["\']>(.*?)</script>', html, re.DOTALL)
if m:
    try:
        data = json.loads(m.group(1))
        print('JSON-LD valid! Graph items:', len(data.get('@graph', [])))
        for item in data.get('@graph', []):
            print('  - @type:', item.get('@type'), 'id:', item.get('@id', 'N/A'))
    except Exception as e:
        print('JSON-LD ERROR:', e)
else:
    print('No JSON-LD found!')
