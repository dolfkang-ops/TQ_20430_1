import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

print("=== clean_text.txt / extracted_text.txt ===")
try:
    with open('d:/ant/TQ_20430/clean_text.txt', 'r', encoding='utf-8') as f:
        print(f.read()[:1000])
except Exception as e:
    print(e)

print("\n=== notices_all.txt ===")
try:
    with open('d:/ant/TQ_20430/notices_all.txt', 'r', encoding='utf-8') as f:
        print(f.read()[:1000])
except Exception as e:
    print(e)

print("\n=== review_list.json (sample) ===")
try:
    with open('d:/ant/TQ_20430/review_list.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        print("Total reviews:", len(data))
        for r in data[:3]:
            print(r)
except Exception as e:
    print(e)
