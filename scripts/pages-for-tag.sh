#!/bin/bash

if [[ $TRAVIS_COMMIT_MESSAGE =~ ^release ]]; then
  VERSION=$(node -p "require('./package.json').version")
  mv docs $VERSION
  mkdir docs
  mv $VERSION docs/$VERSION
fi

