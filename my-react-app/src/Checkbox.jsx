import React, { useState } from 'react'

function Checkbox() {

    const [skills,setSkills]=useState([])
    const [gender,setGender]=useState('male')
    const [city,setCity]=useState("AMD")
    const handleSkills=(e)=>{
        console.log(e.target.value,e.target.checked);
        if(e.target.checked){
            setSkills([...skills,e.target.value])
        }else{
            setSkills([...skills.filter((x)=>x!==e.target.value)])
        }
        
    }
    const handleGender=(e)=>{
        // console.log(e.target.value);
        setGender(e.target.value)
    }
    const handleCity=(e)=>{
        setCity(e.target.value)
    }
  return (
    <div>
        <h1>Select Skills</h1>

        <input type="checkbox" value="Math" id="Math" onChange={handleSkills}/>
        <label htmlFor="Math">Math</label>
        <br/>
        
        <input type="checkbox" value="JS" id="JS" onChange={handleSkills}/>
        <label htmlFor="JS">JS</label>
        <br/>

        <input type="checkbox" value="Eng" id="Eng" onChange={handleSkills} />
        <label htmlFor="Eng">Eng</label>
        <br/>

        <h1>{skills.join(",")}</h1>


        <h1>Selected Gender</h1>
        <input type="radio" value="male" id="male" name='1' onChange={handleGender} checked={gender=="male"}/>
        <label htmlFor="male">Male</label><br/>
        <input type="radio" value="female" id="female" name='1' onChange={handleGender} checked={gender=="female"}/>
        <label htmlFor="female">Female</label>

        <h3>Gender : {gender}</h3>


        <h1>Select City</h1>

        <select onChange={handleCity}  value={city}>
            <option value="Rajkot">Rajkot</option>
            <option value="AMD">AMD</option>
            <option value="Surat">Surat</option>

        </select>

        <h3>City : {city}</h3>
    </div>
  )
}

export default Checkbox