import { useState } from "react";
import "../Styles/Form.css";
import { addPost, updatePost } from "../api/PostApi";
import { useEffect } from "react";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(updateDataApi).length === 0;

  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const addPostData = async () => {
    const res = await addPost(addData);
    console.log("REs", res);

    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  const updatePostData = async () => {
    const res = await updatePost(updateDataApi.id, addData);
    console.log(res);

    if (res.status === 200) {
      // setData((prev)=>{
      //     return prev.map((curEle)=>{
      //         curEle.id===res.data.id?res.data:curEle
      //     })
      // })
      setData((prev) => {
        return prev.map((curEle) => {
          return curEle.id === res.data.id ? res.data : curEle;
        });
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === "ADD") {
      addPostData();
    } else if (action === "EDIT") {
      updatePostData();
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter title"
          value={addData.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="body">Body</label>
        <input
          type="text"
          name="body"
          id="body"
          placeholder="Enter body"
          value={addData.body}
          onChange={handleInputChange}
        />
      </div>

      <button
        className="submit-btn"
        type="submit"
        value={isEmpty ? "ADD" : "EDIT"}
      >
        {isEmpty ? "ADD" : "EDIT"}
      </button>
    </form>
  );
};
