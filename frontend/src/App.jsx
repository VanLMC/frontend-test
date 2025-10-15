import { useEffect, useState } from 'react'
import './App.css'

const API_URL = "http://localhost:3000"

async function handleSave(description, amount){
  console.log('submit')
try {
  const response = await fetch(`${API_URL}/transaction`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ description, amount }),

});
console.log(response)
  return response
} catch (error) {
  console.error(error)
}
}

async function fetchTransactions(setTransactions){
  console.log('submit')
try {
  const response = await fetch(`${API_URL}/transaction`);
  const json = await response.json()
console.log(json)
  setTransactions(json)
  return json
} catch (error) {
  console.error(error)
}
}
function App() {

  const [amount, setAmount] = useState(0)
  const [description, setDescription] = useState('')
  const [transactions, setTransactions] = useState([])

//   useEffect(() => {




//  fetchTransactions()

//   }, [])
  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">
            <label htmlFor="description">Transaction description</label>
            <input name='description' value={description} onChange={(e) => {
              setDescription(e.target.value)
            }} type="text" />
            <label htmlFor="amount">Transaction amount</label>
            <input name='amount' value={amount} type="number"  onChange={(e) => {
              setAmount(e.target.value)
            }} />
            <button type='button' onClick={async (e) => {
        
              e.preventDefault()
              handleSave(description, amount)
               fetchTransactions(setTransactions)
            }}>Submit</button>


      </div>

      <div>
            <h3>transactions</h3>
            <ul>
                {transactions.map((transaction) => <>
                    <li key={transaction.id}>description: {transaction.description} amount: {transaction.amount}</li>
                </>)}
            </ul>
      </div>

    </>
  )
}

export default App
