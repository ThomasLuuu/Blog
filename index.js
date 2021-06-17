const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

app.use(morgan('combined'))

app.get('/',(req,res) => {
    return res.send('hello world');
})

app.get('/tintuc',(req,res) => {
      res.send('this is tin tuc page')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})