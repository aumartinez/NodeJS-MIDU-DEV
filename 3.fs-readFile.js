const fs = require('node:fs')

console.log('Reading first file...')
let txt = fs.readFileSync('./text.txt', 'utf-8')

console.log(txt)

console.log('Reading second file...')
txt = fs.readFileSync('./text2.txt', 'utf-8')

console.log(txt)