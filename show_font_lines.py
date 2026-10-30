with open('d:/ant/TQ_20430_1/index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines[40:50], 41):
    print(f"{i}: {repr(line)}")
