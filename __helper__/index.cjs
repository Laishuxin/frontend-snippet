const { resolve } = require('path')
const generator = require('./generator.cjs')
const basePath = resolve(__dirname, '../')
const baseResolve = _path => resolve(basePath, _path)

function main() {
  generator(baseResolve('./utils'), baseResolve('./utils/snippet.json'))
}

main()
