const {v4: uuidv4} = require('uuid')

class TransactionController {
    transactions = []
    async createTransaction(req, res) {
                const body = req.body;
                console.log('body', body)
                const newTransaction = {
                        id: 123,
                        description: body.description,
                        amount: body.amount

                }
                this.transactions.push(newTransaction)
                res.json(newTransaction)
    } 
}

module.exports = new TransactionController()