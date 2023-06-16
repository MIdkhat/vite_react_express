import express from 'express'
const PORT = 8080
const app = express()

app.get('/api/v1', (req, res) => {
  res.send('hello !!!!')
})

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`))
