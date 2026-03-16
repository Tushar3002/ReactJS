import React, { useEffect, useState, useTransition } from 'react'
import { getCountry } from '../api/postAPI'
import { Loader } from '../component/UI/Loader'
import CountryCard from '../component/Layout/CountryCard'

function Country() {
  const [isPending,startTransition]=useTransition()
  const [countries,setCountries]=useState([])

  useEffect(()=>{
    startTransition(async()=>{
      const res=await getCountry()
      console.log(res);
      setCountries(res.data)
      
    })
  },[])

  if(isPending) return <Loader/>;

  return(
    <section className="country-section">
      <ul className='grid grid-four-cols'>
        {
          countries.map((curcountry,idx)=>{
            return <CountryCard country={curcountry} key={idx}/>
          })
        }
      </ul>
    </section>
  )
}

export default Country