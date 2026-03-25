import React, { useState } from 'react'
import UseState from './UseState'
import UseEffect from './UseEffect'
import Child from './ContextAPI/Child'
import Counter from './UseReducerHook'
import UseRefHook from './UseRefHook'
import UseLayoutEffectHook from './UseLayoutEffectHook'
import UseMemoHook from './UseMemoHook'
import UseCallbackExample from './UseCallbackHook'

function App() {
  return(
    <div>
      <UseState />
      <UseEffect/>

      <Child/>
      <Counter/>  
      <UseRefHook/>
      <UseLayoutEffectHook/>
      <UseMemoHook/>
      <UseCallbackExample/>
    </div>
  )
}

export default App