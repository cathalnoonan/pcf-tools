#!/usr/bin/env bash

git checkout main
git fetch --all --prune
git pull

branches=(
  $(git branch --all | grep -v 'main' | sed 's|  remotes/origin/||')
)
for branch in "${branches[@]}"
do
  git checkout "${branch}"
  git rebase main
  git push --force-with-lease
done

git checkout main
