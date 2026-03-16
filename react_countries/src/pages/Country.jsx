import React, { useEffect, useState, useTransition } from 'react'
import { getCountry } from '../api/postAPI'
import { Loader } from '../component/UI/Loader'
import CountryCard from '../component/Layout/CountryCard'
import SearchFilter from '../component/UI/SearchFilter'

function Country() {
  const [isPending,startTransition]=useTransition()
  const [countries,setCountries]=useState([])

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");


  useEffect(()=>{
    startTransition(async()=>{
      const res=await getCountry()
      console.log(res);
      setCountries(res.data)
      
    })
  },[])

  if(isPending) return <Loader/>;
  console.log(search,filter);

  const searchCountry=(country)=>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return true
  }

  const filterRegion=(country)=>{
    if(filter==="all") return country;

    return country.region===filter
  }

  const filteredCountries = countries.filter((country)=> searchCountry(country) && filterRegion(country)); 
  

  return(
    <section className="country-section">

      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries}/>
      <ul className='grid grid-four-cols'>
        {
          filteredCountries.map((curcountry,idx)=>{
            return <CountryCard country={curcountry} key={idx}/>
          })
        }
      </ul>
    </section>
  )
}

export default Country