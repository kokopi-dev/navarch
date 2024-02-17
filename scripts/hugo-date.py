#!/usr/bin/env python3
"""Run this + filepath argument to change the time to the current time in JST of a post"""
import sys
import datetime
from datetime import timedelta, timezone

if len(sys.argv) < 2:
    print('Please provide filename')
    sys.exit(1)

with open(sys.argv[1], 'r') as f:
    lines = f.readlines()

found = False
outlines = []

now_date = ''

jst_tz = timezone(offset=timedelta(hours=9), name="JST")

for line in lines:
    if not found and line.startswith('date'):
        now_date = datetime.datetime.now(jst_tz).isoformat(timespec="seconds")
        line = 'date = ' + now_date + '\n'
        found = True

    outlines.append(line)

if not found:
    print('Date was not found in file!')
    sys.exit(1)

with open(sys.argv[1], 'w') as f:
    f.writelines(outlines)

print('Date updated to ' + now_date)

