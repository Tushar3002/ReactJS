
import { useState } from 'react'
import './App.css'
import { currencyConverter } from './api/postAPI'

function App() {
  const [amount,setAmount]=useState(0)
  const [fromCurrency,setFromCurrency]=useState('INR')
  const [toCurrency,setToCurrency]=useState('USD')
  const [totalAmt,setTotalAmt]=useState(null)

  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)

  async function handleConvertCurrency(){
    setLoading(true)
    setError()
    try {
      const res=await currencyConverter(fromCurrency, toCurrency, amount)
      const {conversion_result}=res.data;
      // console.log(conversion_result);
      setTotalAmt(conversion_result)
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <section className="currency-converter">
      <div className="currency-div">
        <h1>Currency Converter</h1>
        <div>
          <label htmlFor="currency_amount">
            Amount:
            <input
              type="number"
              id="currency_amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>

        <div className="currency-selector">
          <div>
            <label>
              From:
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              To:
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </label>
          </div>
        </div>

        <button
          disabled={loading || amount <= 0}
          onClick={handleConvertCurrency}
        >
          {loading ? "Converting.." : "Convert"}
        </button>

        <hr />
        {totalAmt && (
          <div>
            <h2>
              {amount} {fromCurrency} = {totalAmt.toFixed(2)}
              {toCurrency}
            </h2>
          </div>
        )}

        {error && <p>{error}</p>}
      </div>
    </section>
  )
}

export default App
