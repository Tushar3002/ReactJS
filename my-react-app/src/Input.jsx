import React, { useState } from 'react'
import Checkbox from './Checkbox'
import MapData from './MapData'
import Clock from './Clock'
import Student from './Student'
import College from './College'

function Input() {
    const [val,setVal]=useState("")
    const [color,setColor]=useState("white")

    const colleges = [
  {
    collegeName: "ABC College",
    city: "Rajkot",
    students: [
      { name: "Tushar", age: 22 },
      { name: "Jana", age: 20 }
    ]
  },
  {
    collegeName: "XYZ University",
    city: "Ahmedabad",
    students: [
      { name: "Amit", age: 21 },
      { name: "Neha", age: 23 }
    ]
  },
  {
    collegeName: "PQR Institute",
    city: "Surat",
    students: [
      { name: "Ravi", age: 19 },
      { name: "Simran", age: 22 }
    ]
  }
];
  return (
    <div>

        <h1>Input </h1>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
        <h3>{val}</h3>

        <button onClick={(e)=>setVal("")}>Click</button>

        <Checkbox />

        <MapData/>

        <h1>Select Your Fav Color</h1>
        <select value={color} onChange={(e)=>setColor(e.target.value)}>
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            <option value="pink">Pink</option>
        </select>
        <Clock color={color}/>

        <h1>COLLEGE DATA</h1>

        {colleges.map((val,i)=>(
            <div key={i}>
                <College val={val}/>
                    {/* <h3>Students : {val.students}</h3> */}
                    
            </div>
        ))}
        
    </div>
  )
}

export default Input