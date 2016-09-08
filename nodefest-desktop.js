#!/usr/bin/env node
'use strict'

let exec = require('child_process').exec
let path = require('path')
let electron = path.resolve(__dirname, 'node_modules/.bin/electron')

exec(electron + ' .',  (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    return
  }
  console.log(`stdout: ${stdout}`)
  console.log(`stderr: ${stderr}`)
})
