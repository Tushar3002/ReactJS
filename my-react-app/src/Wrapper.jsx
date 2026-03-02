import React from 'react'

function Wrapper({children,color="green",borderColor="pink"}) {
  return (
    <div style={{color:color, border:"5px solid" ,borderColor:borderColor, width:"350px"}}>
        {children}
    </div>
  )
}

export default Wrapper