#!/bin/bash

mkdir -p docs
echo $(node -p "require('./package.json').version") > docs/version.txt
