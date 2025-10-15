const express = require('express')
const cors = require('cors')
const {v4: uuidv4, v4} = require('uuid')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use(cors())
const transactions = []

app.post('/transaction', (req, res) => {
const body = req.body;
console.log('body', body)
const newTransaction = {
        id: v4(),
        description: body.description,
        amount: body.amount

}
  transactions.push(newTransaction)
  res.json(newTransaction)
})

app.get('/transaction', (req, res) => {
  res.json(transactions)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})