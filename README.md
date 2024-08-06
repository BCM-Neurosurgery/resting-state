# Resting State
<p style="float:left">
  <img alt="Resting State Icon" src="resting_state.svg" width="200" />
</p>

[![Actions Status](https://github.com/brown-ccv/task-msit/workflows/Test%2C%20Build%2C%20and%20Package/badge.svg)](https://github.com/neuromotion/resting-state/actions)
[![Actions Status](https://github.com/brown-ccv/task-msit/workflows/Build%20at%20home%20version%20%28Windows%29/badge.svg)](https://github.com/neuromotion/resting-state/actions)

## Overview

This repo contains the Resting State task. It is a [jspsych](https://www.jspsych.org/) task built with React and Electron. This task uses [Honeycomb](https://brown-ccv.github.io/honeycomb-docs/).

The task involves several relaxed tasks: following a moving dot with one's eyes, responding to beeps, and fixating on a dot.

## Quickstart

1. Clone the repo

```git clone https://github.com/neuromotion/resting-state.git```
2. Navigate to the directory

```cd resting-state```
3. Install `npm` packages

```npm install```
4. Run in development mode

```npm run dev```


## Build

export NODE_OPTIONS=--openssl-legacy-provider
npm run build


## Run

unset NODE_OPTIONS
npm run dev


## Export clinic exe

```
docker run --rm -ti \
 --env-file <(env | grep -iE 'DEBUG|NODE_|ELECTRON_|YARN_|NPM_|CI|CIRCLE|TRAVIS_TAG|TRAVIS|TRAVIS_REPO_|TRAVIS_BUILD_|TRAVIS_BRANCH|TRAVIS_PULL_REQUEST_|APPVEYOR_|CSC_|GH_|GITHUB_|BT_|AWS_|STRIP|BUILD_') \
 --env ELECTRON_CACHE="/root/.cache/electron" \
 --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder" \
 -v ${PWD}:/project \
 -v ${PWD##*/}-node-modules:/project/node_modules \
 -v ~/.cache/electron:/root/.cache/electron \
 -v ~/.cache/electron-builder:/root/.cache/electron-builder \
 electronuserland/builder:wine
```

Clear cache
```
rm yarn.lock
```

Use https
```
git config --global url."https://".insteadOf git://
```

Use newer version of node-gyp
```
npm install node-gyp --save-dev
```

Install dot-env
```
npm install dotenv-cli --save-dev
```

Install cross-env
```
npm install cross-env --dev
```

Verify env variable is set
```
dotenv -e env/.env.clinic printenv
```

gyp: name 'openssl_fips' is not defined while evaluating condition 'openssl_fips != ""' in binding.gyp while trying to load binding.gyp
```
nano /project/node_modules/@serialport/bindings/binding.gyp
```
Add
'variables' : {
    'openssl_fips': '',
}


Export to win exe
```
npm run build:clinic or NODE_OPTIONS=--openssl-legacy-provider npm run build
npm run dist:clinic
```
