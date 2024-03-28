const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

const githubdata={
    "name":"aman",
    "age":"18",
    "school":"nit"
}
app.get('/', (req, res) => {
  res.send('Hello Worlddddddd!')
})
app.get('/a', (req, res) => {
    res.send('Hello worlss')
  })
  app.get('/data', (req, res) => {
    res.json(githubdata)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})