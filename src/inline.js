const fs = require('fs')
const path = require('path')
let inject = `
  try {
    let script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.innerText = unescape('${escape(fs.readFileSync(path.join(__dirname, '../dist/test.js')).toString())}')
    script.onload = function () { this.remove() }
    document.head ? document.head.prepend(script) : document.documentElement.prepend(script)
  } catch (e) {
    console.log(e)
  }
`
let dir = path.join(__dirname, '../ext/')
if (!fs.existsSync(dir)) fs.mkdirSync(dir)
fs.writeFile(path.join(__dirname, '../ext/inject.js'), inject, err => { if (err) throw err })
fs.createReadStream(path.join(__dirname, '/manifest.json')).pipe(fs.createWriteStream(path.join(__dirname, '../ext/manifest.json')))
