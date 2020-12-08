/**
 * 依存ファイルの探索用
 * 1. 基幹ファイル取得
 * 2. ファイルのパース
 * 3. aliasの整形
 * 4. 絶対パス一覧の生成
 */
const {readFile, getImportLines, parseImportPath, formatImportPath} = require('./libs/path')

const path = require('path')
const webpackPath = process.env.webpackPath
let webpackAlias = ''

if (!!webpackPath) {
  webpackAlias = require(webpackPath).resolve.alias
}


const filePath = 'example/vue-project/src/views/Home.vue'

let file = null

try {
  file = readFile(filePath)
} catch(error) {
  console.error(error)
  return
}

if (file.indexOf('</script>') === -1) {
  console.error('scriptタグがありません', file.indexOf('</script>'))
  return
} else {
  console.log('success')

  const importLineList = getImportLines(file)

  const formattedLineList = formatImportPath(importLineList, {
    '@': path.resolve(__dirname, 'example/vue-project/src')
  })

  const pathList = parseImportPath(formattedLineList)

  console.log(pathList)
}

// console.log(file)
