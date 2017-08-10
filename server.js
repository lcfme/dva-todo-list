const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/www`))

app.listen(process.env.PORT || 3000, ()=> {
  console.log('server run at 3000\n ^_^ \n Happy Coding!')
})
