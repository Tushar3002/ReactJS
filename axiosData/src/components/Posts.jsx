import React from 'react'
import { useEffect } from 'react';
import { deletePost, getPost } from '../api/PostApi';
import { useState } from 'react';
import "../Styles/Posts.css";
import { Form } from './Form';

function Posts() {
    const [data,setData]=useState([])
    const [updateDataApi,setUpdateDataApi]=useState({})
  const getPostData=async()=>{
    const res=await getPost()
    // console.log(res);
    setData(res.data)
    // console.log(data);
    
  }

  const handleDeletePost=async(id)=>{
    const res=await deletePost(id)
    if(res.status===200){
        const updatedPost=data.filter(x=>{
            return x.id!==id
        });
        setData(updatedPost)
    }
    
  }

  const handleUpdatePost=(obj)=>setUpdateDataApi(obj)

  useEffect(()=>{
    getPostData()
  },[])
 return (
    <>
    <div>
        <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi}/>
    </div>
    <div className="posts-container">
      <h1 className="posts-title">Posts</h1>

      <ul className="posts-grid">
        {data.map((obj) => {
          return (
            <li key={obj.id} className="post-card">
              <p className="post-title">Title: {obj.title}</p>
              <h3 className="post-body">{obj.body}</h3>

              <div className="btn-group">
                <button className="edit-btn" onClick={()=>handleUpdatePost(obj)}>Edit</button>
                <button className="delete-btn" onClick={()=>handleDeletePost(obj.id)}>Delete</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
    </>
  )
}

export default Posts