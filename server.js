const express = require('express')
const path = require('path')
const fs = require('fs')
const cors = require('cors')

let app = express()
app.use(express.json()) // Parsing data
app.use(
  cors({
    origin: '*' //Enabling cors
  })
)
app.use(express.static(path.resolve(path.join(__dirname, './build'))))

app.get('/getfiles', (req, res, next) => {
  const jsFolder = path.resolve(path.join(__dirname, './build/js'))
  const cssFolder = path.resolve(path.join(__dirname, './build/css'))
  jsFiles = []
  cssFiles = []
  fs.readdirSync(jsFolder).forEach((eachFile) => {
    jsFiles.push(eachFile)
  })
  fs.readdirSync(cssFolder).forEach((eachFile) => {
    cssFiles.push(eachFile)
  })
  res.send({
    jsFiles,
    cssFiles
  })
})
const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log('server is running on: ', PORT)
})
