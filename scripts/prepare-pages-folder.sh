#!/bin/bash

echo 'starting gh-pages creation ...'
VERSION=$(node -p "require('./package.json').version")

# checkout current gh-pages branch
echo 'creating gh-pages folder ...'
mkdir gh-pages
echo 'checking out gh-pages branch ...'
git clone -b gh-pages --single-branch https://github.com/$TRAVIS_REPO_SLUG gh-pages

# create release documentation and move to gh-pages/releases/x.x.x
if [[ $TRAVIS_COMMIT_MESSAGE =~ ^release ]]; then
  echo -n 'release commit: creating release docs ... '
  rm -rf gh-pages/releases/$VERSION
  mkdir -p gh-pages/releases/$VERSION
  ls docs/ | grep -v releases | xargs -I{} cp -r docs/{} gh-pages/releases/$VERSION
  echo 'done.'
fi

# create alpha documentation and move it to gh-pages/alpha
if [[ $TRAVIS_BRANCH == alpha ]]; then
  echo -n 'branch alpha: creating alpha docs ... '
  rm -rf gh-pages/alpha
  mkdir gh-pages/alpha
  ls docs/ | grep -v -e releases -e alpha -e master | xargs -I{} cp -r docs/{} gh-pages/alpha
  echo 'done.'
fi

# create master documentation and move it to gh-pages/master
if [[ $TRAVIS_BRANCH == master ]]; then
  echo -n 'branch master: creating master docs ... '
  rm -rf gh-pages/master
  mkdir gh-pages/master
  ls docs/ | grep -v -e releases -e alpha -e master | xargs -I{} cp -r docs/{} gh-pages/master
  echo 'done.'
fi

echo 'gh-pages creation ... done.'
