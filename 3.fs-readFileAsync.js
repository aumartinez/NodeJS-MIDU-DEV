const fs = require('node:fs')

console.log('Reading first file...')
let txt = fs.readFile('./text.txt', 'utf-8', (e, t) => {
  console.log('First output:', t)
})

console.log('Some process running...')

console.log('Reading second file...')
txt = fs.readFile('./text2.txt', 'utf-8', (e, t) => {
  console.log('Second output:', t)
})
