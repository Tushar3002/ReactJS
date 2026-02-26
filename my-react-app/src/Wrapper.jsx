import React from 'react'

function Wrapper({children,color="green"}) {
  return (
    <div style={{color:color, border:"5px solid green" , width:"350px"}}>
        {children}
    </div>
  )
}

export default Wrapper