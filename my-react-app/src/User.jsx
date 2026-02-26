import React from 'react'

function User({obj,college}) {
  return (
    <div>
        {college && <h6>CollegeName: {college}</h6>}    {/*will only display if college isused */}
        Name: {obj.name} <br/>
        Age: {obj.age}<br/><br/>
        <hr />
    </div>
  )
}

export default User