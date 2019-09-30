#!/bin/bash

VERSION=$(node -p "require('./package.json').version")
if [[ $TRAVIS_COMMIT_MESSAGE =~ ^release ]]; then
  echo -n 'release commit: creating release docs ... '
  mkdir -p docs/releases/$VERSION
  ls docs/ | grep -v releases | xargs -I{} cp -r docs/{} docs/releases/$VERSION
  echo 'done.'
fi


if [[ $TRAVIS_BRANCH == alpha ]]; then
  echo -n 'branch alpha: creating alpha docs ... '
  mkdir docs/$VERSION
  ls docs/ | grep -v -e releases -e $VERSION | xargs -I{} mv docs/{} docs/$VERSION
  echo 'done.'
fi


