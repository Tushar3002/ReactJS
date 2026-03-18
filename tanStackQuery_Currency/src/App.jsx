import { currencyConverter } from './API/postAPI'
import './App.css'

import React, { useState } from 'react'
import {useQuery} from '@tanstack/react-query'

function App() {

  const [amount,setAmount]=useState(0)
  const [fromCurrency,setFromCurrency]=useState('USD')
  const [toCurrency,setToCurrency]=useState('INR')
  // const [convertedAmt,setConvertedAmt]=useState(null)

  // const [loading,setLoading]=useState(null)

  // const [error,setError]=useState(null)
  const {data:convertedAmt,isLoading,error,refetch}=useQuery({
    queryKey:['currency'],
    queryFn:()=>currencyConverter(fromCurrency,toCurrency,amount),
    enabled:false
  })
  async function handleSubmit(){
    // try {
    //   const res=await currencyConverter(fromCurrency, toCurrency, amount);
    //   console.log(res.data);
      
    // } catch (error) {
    //   console.log(error);

    // }
    refetch()
    setAmount('')
  }
  return (
    <section>
      <div>
        <h1>Currency Converter</h1>
      </div>
      <hr />
      <br />
      <div>
        <label htmlFor="">
          Amount: <input type="text" name="" id="" value={amount} onChange={e=>setAmount(e.target.value)} />
        </label>
      </div>

      <div>
        <label htmlFor="">
          From: <select name="" id="" value={fromCurrency} onChange={e=>setFromCurrency(e.target.value)}>
          {["USD","INR","EUR","GBP","AUD"].map((currency,idx)=>{
            return <option key={idx} value={currency}>{currency}</option>
          })}
        </select>
        </label>
      </div>

      <div>
        <label htmlFor="">
          To: <select name="" id="" value={toCurrency} onChange={e=>setToCurrency(e.target.value)}>
          {["INR","USD","EUR","GBP","AUD"].map((currency,idx)=>{
            return <option key={idx} value={currency}>{currency}</option>
          })}
        </select>
        </label>
      </div>

      <div>
        <button onClick={handleSubmit} disabled={isLoading||amount<=0}>{isLoading?"Converting..":"Convert"}</button>
      </div>
          <br />
      <hr />
          {convertedAmt && <div>
            <h2>
              {amount} {fromCurrency} = {convertedAmt.toFixed(2)}
              {toCurrency}
            </h2>
          </div>}

            <p>{error}</p>
    </section>
  )
}

export default App