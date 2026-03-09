import { useState } from "react";
import "../Styles/Form.css";
import { addPost } from "../api/PostApi";
import { useEffect } from "react";

export const Form=({data,setData,updateDataApi,setUpdateDataApi})=>{
    const [addData,setAddData]=useState({
        title:"",
        body:"",
    })

    useEffect(()=>{
        updateDataApi && setAddData({
            title:updateDataApi.title || '',
            body:updateDataApi.body||''
        })
    },[updateDataApi])

    const handleInputChange=(e)=>{
        const name=e.target.name
        const value=e.target.value

        setAddData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    const addPostData=async()=>{
        const res=await addPost(addData)
        console.log("REs",res);
        
        if(res.status===201){
            setData([...data,res.data])
            setAddData({title:"",body:""})
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        addPostData()
    }
  return (

      <form className="post-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" placeholder="Enter title" value={addData.title} onChange={handleInputChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="body">Body</label>
          <input type="text" name="body" id="body" placeholder="Enter body" value={addData.body} onChange={handleInputChange}/>
        </div>

        <button className="submit-btn" type="submit">
          Add Data
        </button>

      </form>

  );
}