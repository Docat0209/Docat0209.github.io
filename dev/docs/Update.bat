@echo off
set /p var=PleaseEnterCommitMessage:
call cmd /c " cd/d .. &&yarn docs:build && cd/d .. && rmdir /s/q .\docs&&mkdir .\docs&&XCOPY .\dev\docs\.vuepress\dist  .\docs  /e /d /y && git add -A && git commit -m"%var%"&& git push -u origin master"
