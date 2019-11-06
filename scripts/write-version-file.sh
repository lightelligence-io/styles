#!/bin/bash

mkdir -p docs

VERSION=$(node -p "require('./package.json').version")
echo $VERSION > docs/version.txt

VERSIONS=$(node -p "require('./gh-pages/versions.json')")
NEWVERSIONS=$(node -p "JSON.stringify(($VERSIONS).concat('$VERSION'))")
echo $NEWVERSIONS > gh-pages/versions.json
