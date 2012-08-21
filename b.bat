call git add .
@echo off
set text=
:Loop
IF "%1"=="" GOTO Continue
set text=%text% %1
SHIFT
GOTO Loop
:Continue
for /f "tokens=* delims= " %%a in ("%text%") do set text=%%a
@echo on
call git commit -m"%text%"
call git push
