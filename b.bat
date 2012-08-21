call git add .
@echo off
:Loop
IF "%1"=="" GOTO Continue
set text=%text% %1
SHIFT
GOTO Loop
:Continue
@echo on
call git commit -m"%text:~1%"
call git push
