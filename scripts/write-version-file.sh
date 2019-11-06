#!/bin/bash

# version to show in the generated docs
VERSION_FILE='docs/version.txt'

# versions that can be selected in the gh-pages docs index
VERSIONS_JSON='gh-pages/versions.json'

# create folders if they aren't there
mkdir -p docs
mkdir -p gh-pages

# store current version in versions txt for current docs
VERSION=$(node -p "require('./package.json').version")
echo $VERSION > $VERSION_FILE

# add new version to versions json for gh-pages
if [[ ! -w $VERSIONS_JSON ]]; then echo [] > $VERSIONS_JSON; fi
VERSIONS=$(node -p "require('./$VERSIONS_JSON')")
NEWVERSIONS=$(node -p "JSON.stringify(($VERSIONS).concat('$VERSION'))")
echo $NEWVERSIONS > $VERSIONS_JSON
