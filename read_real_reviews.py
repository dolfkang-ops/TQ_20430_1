import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

try:
    with open('d:/ant/TQ_20430/review_info.json', 'r', encoding='utf-8') as f:
        print("=== review_info.json ===")
        print(f.read()[:2000])
except Exception as e:
    print(e)

try:
    with open('d:/ant/TQ_20430/reviews_clean.txt', 'r', encoding='utf-8') as f:
        print("\n=== reviews_clean.txt ===")
        print(f.read()[:2000])
except Exception as e:
    print(e)
