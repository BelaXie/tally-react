#!/usr/bin/env bash
 
 yarn build &&
 cd build &&
 git init &&
 git add . &&
 git commit -m 'deploy' &&
 git branch gh-pages &&
 git checkout gh-pages &&
 git remote add origin git@gitee.com:belaxie/tally-react.git &&
 git push -u origin gh-pages -f &&
 cd -
