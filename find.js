/**
 * 依存ファイルの探索用
 */
const path = require('path')
const fs = require('fs')
const webpackAlias = require('./webpack.config').resolve.alias

console.log(webpackAlias)

const filePath = 'src/components/pages/users-show/index.vue'
const dir = __dirname

const re = path.resolve(__dirname, filePath)

console.log(filePath)
console.log(dir)
console.log(re)

const file = fs.readFileSync(re, 'utf8')

if (!file) {
  console.error('ファイルが見つかりません')
} else if (file.indexOf('</script>') === -1) {
  console.error('scriptタグがありません', file.indexOf('</script>'))
  return
} else {
  console.log('success')

  // scriptタグ内を取得
  const script = file.split('<script>')[1].split('</script>')[0]
  // console.log(script)
  // importとfromが含まれる行を抽出
  const importLine = script
    .split('\n')
    .filter(
      line => line.indexOf('import') !== -1 && line.indexOf('from') !== -1
    )

  // ファイルパスを抽出
  // @doc https://regexper.com/#%2Ffrom%20'%28%5B%40%7C%2F%7Ca-z%7C%5C-%7C.%5D*%29'%2F
  const re = /from '([@|/|a-z|\-|.]*)'/
  const aaa = importLine.map(d => d.match(re)[1])
  // console.log( JSON.stringify(aaa, null, 2))

  // aliasを解決
  const keys = Object.keys(webpackAlias)
  const resolvedAlias = aaa.map(d => {
    keys[0]
    return
  })


}

// console.log(file)
