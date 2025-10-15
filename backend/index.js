const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
const transactions = []

app.post('/transaction', (req, res) => {
const body = req.body;
console.log('body', body)
const newTransaction = {
        description: body.description,
        amount: body.amount

}
  transactions.push(newTransaction)
  res.json(newTransaction)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})