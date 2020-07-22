#!/bin/bash

if [ ! -d www ]
then
mkdir www
fi

cd chimera-webwallet
npm install
nodejs ./node_modules/typescript/bin/tsc --project tsconfig.prod.json
nodejs build.js
cd ../

cp -r chimera-webwallet/src/. www
cp -r src_specific/. www
