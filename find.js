const path = require('path')
const fs = require('fs')

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
  console.log(script)
  const importLine = script
    .split('\n')
    .filter(
      line => line.indexOf('import') !== -1 && line.indexOf('from') !== -1
    )
  const re = /from '([@|/|a-z|-|.]*)'/

  const file

  console.log(importLine)
}

// console.log(file)
