const $fs = require('fs')
const { resolve } = require('path')

const isVoid = v => v === null || v === undefined || v === ''
const readmeRE = /readme\.md/i
const JSONsnippetRE = /```json\s*{\s*([\w\W]*?)\s*```/gi
const commaRE = /\s|,/

/**
 *
 * @param { string } readmeStr
 * @returns { string[] }
 */
function extractJSONSnippet(readmeStr) {
  const res = []
  let matched
  while ((matched = JSONsnippetRE.exec(readmeStr))) {
    res.push(matched[1])
  }
  return res
}

/**
 * @param { string } JSONstr
 * @returns { string }
 */
function formatJSONSnippet(JSONstr) {
  let i
  for (i = JSONstr.length - 1; i >= 0 && commaRE.test(JSONstr[i]); i--) {}
  return JSONstr.substr(0, i)
}

/**
 * @param { string } dir dir absolute path
 * @param prefix like sutils
 * @returns vscode snippet
 */
function generateJSON(dir) {
  let readme
  try {
    const files = $fs.readdirSync(dir)
    readme = files.find(item => readmeRE.test(item))

    const md = $fs.readFileSync(resolve(dir, readme))
    readme = md.toString()
  } catch (e) {
    console.error('Error generateSnippetByMd: ', e)
  }
  if (isVoid(readme)) {
    return
  }

  const JSONsnippets = extractJSONSnippet(readme)
  const res = []
  JSONsnippets.forEach(snippet => {
    res.push(formatJSONSnippet(snippet))
  })
  return `{\n${res.join(',')}}`
}

function run(dir, outputPath) {
  const res = generateJSON(dir)
  if ($fs.existsSync(outputPath)) {
    $fs.rmSync(outputPath)
  }
  $fs.writeFileSync(outputPath, JSON.stringify(JSON.parse(res), null, 2))
}

module.exports = run
