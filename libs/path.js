
const path = require('path')
const fs = require('fs')

exports.readFile = (filePath, defaultPath = path.resolve(__dirname, '../')) => {
  const re = path.resolve(defaultPath, filePath)
  const file = fs.readFileSync(re, 'utf8')

  if (!file) {
    throw "ファイルが見つかりません"
  } else {
    return file
  }
}



exports.getImportLines = (fileText) => {

  // scriptタグ内を取得
  const script = fileText.split('<script>')[1].split('</script>')[0]
  // console.log(script)
  // importとfromが含まれる行を抽出
  return script
    .split('\n')
    .filter(
      line => line.indexOf('import') !== -1 && line.indexOf('from') !== -1
    )
}

exports.formatImportPath = (importLineList, alias) => {
  return importLineList.map(d => {
    let text = d
    Object.keys(alias).map(key => {
      text = text.replace(key, alias[key])
    })
    
    return text
  })
}

exports.parseImportPath = (importLineList) => {
  console.log(importLineList)
  // ファイルパスを抽出
  // @doc https://regexper.com/#%2Ffrom%20'%28%5B%40%7C%2F%7Ca-z%7C%5C-%7C.%5D*%29'%2F
  const re = /from ['|"]([@|/|a-z|A-Z|\-|.]*)['|"]/
  const aaa = importLineList.map(d => {
    const a = d.match(re)
    if (a === null) {
      return null
    }
    return a[1]
  })

  return aaa.filter(d => d !== null)
}