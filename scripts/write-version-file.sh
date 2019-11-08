#!/bin/bash

# version to show in the generated docs
VERSION_FILE='docs/version.txt'

# create folder if they aren't there
mkdir -p docs

# store current version in versions txt for current docs
VERSION=$(node -p "require('./package.json').version")
echo $VERSION > $VERSION_FILE
