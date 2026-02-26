import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Counter from './Counter'
import Toggle from './Toggle'
import User from './User'
import Wrapper from './Wrapper'
import Clock from './Clock'


  // function clk(str){
  //   alert(str)
  // }
function App() {
  const a="Tushar"
  function nm(str){
    return str
  }
  function clk(str){
    alert(str)
  }

  let obj={
    name:"Tushar",
    age:22
  }
    let obj2={
    name:"JAna",
    age:33
  }
    let obj3={
    name:"Panda",
    age:2
  }
  return (
    <div>
    <Header/>
        {/* <h1>Hello TJ</h1>
        <h3>{a}</h3>
        <h3>{nm("Jana")}</h3>
        <button onClick={()=>clk("TJ")}> Click </button>
        <Footer />

        <Counter/>
        <Toggle/> */}

        <User obj={obj} college={"MU"}/>
        <User obj={obj2} />
        <User obj={obj3} college={"FU"}/>

        <div>
            <Wrapper>
              <h1>Hello EveryOne</h1>
            </Wrapper>
            <Wrapper color='red'>
              <h1>Hello EveryOne</h1>
            </Wrapper>
            <Wrapper>
              <h1 style={{color:"yellow"}}>Hello EveryOne</h1>
            </Wrapper>
        </div>


        {/* <Clock/> */}


        </div>
  )
}

export default App


