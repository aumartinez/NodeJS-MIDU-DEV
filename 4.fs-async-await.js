const fs = require('node:fs/promises')

async function init() {
  console.log('Reading first async file...')
  let txt = await fs.readFile('./text.txt', 'utf-8')
  console.log('First async output:', txt)
  console.log('Some async process running...')

  console.log('Reading async second file...')
  txt = await fs.readFile('./text2.txt', 'utf-8')
  console.log('Secont async output:', txt)
}

(async () => {
  console.log('Reading first file...')
  let txt = await fs.readFile('./text.txt', 'utf-8')
  console.log('First output:', txt)
  console.log('Some process running...')

  console.log('Reading second file...')
  txt = await fs.readFile('./text2.txt', 'utf-8')
  console.log('Secont output:', txt)
})()

console.log('Test process')
init()
