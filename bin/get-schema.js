import https from 'https'
import process from 'process'

https.get('https://fairshake.cloud/coreapi/schema.js', (resp) => {
  resp.setEncoding('utf8')
  let data = ''
  resp.on('data', chunk => data += chunk)
  resp.on('end', () => {
    console.log("import coreapi from 'coreapi'")
    console.log("window.coreapi = coreapi")
    console.log(data)
    console.log("module.exports = window.schema")
  })
}).on('error', err => {
  console.error(err)
  process.exit(-1)
})
