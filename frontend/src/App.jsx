import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function handleSave(){
  console.log('save')
}

function App() {
  const [amount, setAmount] = useState(0)
  const [description, setDescription] = useState('')
  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">
            <label htmlFor="description">Transaction description</label>
            <input name='description' value={description} type="text" />
            <label htmlFor="amount">Transaction amount</label>
            <input name='amount' value={amount} type="number" />
            <button onClick={handleSave}>Submit</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
