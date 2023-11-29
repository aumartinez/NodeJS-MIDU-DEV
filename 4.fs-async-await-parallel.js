import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./text.txt', 'utf-8'),
  readFile('./text2.txt', 'utf-8')
]).then(([txt1, txt2]) => {
  console.log('First output: ', txt1)
  console.log('Second output: ', txt2)
})