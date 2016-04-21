#!/usr/bin/env bash

echo 'building to html directory'
jekyll build --destination html

echo 'zipping'
pushd html
zip -r ../ds.zip .
popd

echo 'deleting'
rm -rf html

echo 'scp ds.zip to the static gateway'
