import React from 'react'
import {useFormStatus} from 'react-dom'

function UseFormStatusHook() {
    const handleSubmit=async()=>{
        await new Promise(res=> setTimeout(res,3000))
        console.log("SUBMIT");
        
    }
    function CustForm(){

        const {pending}=useFormStatus()
        console.log(pending);
        
        return(
            <>
                <input type="text" />
                <br />
                <br />
                <button disabled={pending}>{pending?"Submitting ...":"Submit"}</button>
            </>
        )
    }
  return (
    <div>
        <form action={handleSubmit} >
            <CustForm />
        </form>
    </div>
  )
}

export default UseFormStatusHook