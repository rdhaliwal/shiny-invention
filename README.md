[![Build Status](https://travis-ci.org/rdhaliwal/shiny-invention.svg?branch=master)](https://travis-ci.org/rdhaliwal/shiny-invention) 

# What?
## What is this?
It's my opinionated take on a boilerplate React/Webpack/Redux app. I plan on using it as a boilerplate for future projects. It's also my record of how to setup and configure these things; you'll see the commit notes are (kind of) detailed. It's my lazy way of writing a blog, but not.

# How (to use this)? 
## Environment:
I'm currently using:

 - node v8.0.0
 - npm v5.0.0
 - yarn 0.24.6

## Install:
 - run `yarn install`
 - run `yarn build`

## Run:
 - run `yarn start` 
 - Open `localhost:3000/app` in your browser of choice 

### Running in production:
 - run `yarn compile` to build the minified/optimized assets
 - run `yarn start`, with `NODE_ENV=production` set as an environment variable
   - or pass it in as an argument: `yarn start -- NODE_ENV=production` 

## Test

### Running tests:
 - run `yarn test`
 - run `yarn testw` to run it in watch mode (it'll stay alive, and rerun anytime you save a file)
 - run `yarn run test -- -u` if you want to pass any CLI arguments to yarn

### Snapshot/Component testing:
 - The first time you successfully run a component test, it'll create a snapshot and save it.
 - The next time you run it, it'll compare the test output with the snapshot output. If they're the same, it'll pass.
 - If the expected component output has changed, the test will fail. To update the snapshot output to the new output, run `yarn run test -- src/app/components/House.spec.jsx -u`, and then press `u` when prompted

### Debugging a test:
To debug a test, run: `node debug --harmony ./node_modules/.bin/jest --runInBand src/app/components/House.spec.jsx`

The debugger can be a bit obtuse. Basic commands are:

 - `n` for next
 - `c` for continue
 - `eval` to a open a repl to evaluate variables
 - `ctrl-c` to close the repl 
 - `ctrl-c ctrl-c` to quite debugger

 If in doubt, `console.log` if your friend.

# Why?
## Why not use {{insert react boilerplate app name here}}?
`¯\_(ツ)_/¯`
 
## Why is it called `shiny-invention`?
Because GitHub generates the best repository names.
