import React from 'react'
import styled from "styled-components"
import BootstrapCss from './BootstrapCss'
import UseRefPractice from './UseRefPractice'
import UseFormStatusHook from './UseFormStatusHook'


function StyledComponents() {
    const Heading = styled.h1`
        color:red;
        border:3px dotted black;
        padding:10px;
        margin:10px;
        border-radius:10px;
        width:250px;
    `

    const Btn=styled.button({
        color:"green",
        backgroundColor:"pink",
        borderRadius:"10px",
        marginLeft:"10px"
    })
  return (
    <div>
        <h1>StyledComponents</h1>
        <Heading>Hello EveryOne</Heading>
        <Btn>CLICK ME </Btn>

        <BootstrapCss/>

        <UseRefPractice/>

        <UseFormStatusHook/>

        
    </div>
  )
}

export default StyledComponents