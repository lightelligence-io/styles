#!/bin/bash

# version to show in the generated docs
VERSIONFILE='docs/version.txt'

# versions that can be selected in the gh-pages docs index
VERSIONSFILE='gh-pages/versions.json'

# create folders if they aren't there
mkdir -p docs
mkdir -p gh-pages

# store current version in versions txt for current docs
VERSION=$(node -p "require('./package.json').version")
echo $VERSION > $VERSIONFILE

# add new version to versions json for gh-pages
if [[ ! -w $VERSIONSFILE ]]; then echo [] > $VERSIONSFILE; fi
VERSIONS=$(node -p "require('./$VERSIONSFILE')")
NEWVERSIONS=$(node -p "JSON.stringify(($VERSIONS).concat('$VERSION'))")
echo $NEWVERSIONS > $VERSIONSFILE
