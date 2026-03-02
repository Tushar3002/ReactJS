import React from 'react'
import { Link } from 'react-router';

function Student() {

    const studNames = [
  { id: 1, name: "Pedro", age: 20, course: "Computer Science" },
  { id: 2, name: "John", age: 22, course: "Mechanical Engineering" },
  { id: 3, name: "Aisha", age: 19, course: "Business Administration" },
  { id: 4, name: "Rahul", age: 21, course: "Electrical Engineering" },
  { id: 5, name: "Emma", age: 20, course: "Psychology" }
];
  return (
    <div>
        <h1>Student edfj</h1>

        {
            // studNames.map(x=>(
            //     // {x.id}
            //     <h3><Link>{x.name}</Link></h3>
            // ))
            studNames.map(x=>{
                return (<div key={x.id}>
                    <h3><Link to={"/student/"+ x.id}>{x.name}</Link></h3>
                    {/* <h4>{x.age}</h4> */}
                </div>)
            })
        }
    </div>
  )
}

export default Student