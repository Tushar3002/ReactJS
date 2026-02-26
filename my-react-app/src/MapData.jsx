import React from 'react'

function MapData() {

let obj=[
        {
        name:"TJ",
        age:22,
        city:"Rajkot"
    },
    {
        name:"TJ2",
        age:20,
        city:"AMD"
    },
    {
        name:"TAJ",
        age:39,
        city:"Rajkot"
    }
]

  return (
    <div>
        <table border={"2px "}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>City</td>
                </tr>
            </thead>
            <tbody>
                {obj.map((x,idx)=>(<tr key={idx}>
                        <td>{x.name}</td>
                        <td>{x.age}</td>
                        <td>{x.city}</td>     
                    </tr>)
                )}
            </tbody>
        </table>
    </div>
  )
}

export default MapData