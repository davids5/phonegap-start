call git add .
:Loop
IF "%1"=="" GOTO Continue
set text=%text% %1
SHIFT
GOTO Loop
:Continue
call git commit -m"%text%"
call git push
