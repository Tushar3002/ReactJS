import React from "react";
import { useForm } from "react-hook-form";
// import './App.css'

function ReactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting},
  } = useForm();

  const onSubmit = async(data) => {
    await new Promise((res)=>setTimeout(res,3000))
    console.log("Submitting the form", data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Name : </label>
          <input className={errors.name? "input-box":""}
            type="text"
            {...register("name", {
              required: true,
              minLength: { value: 3, message: "Minimum 3" },
              maxLength: { value: 10, message: "Maximum 10" },
              pattern: {value:/^[A-Za-z]+$/i }
            })}
          />
          {errors.name && <p className="input-error">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="">Age : </label>
          <input type="text" {...register("age")} />
        </div>
        <div>
          <label htmlFor="">City : </label>
          <input type="text" {...register("city")} />
        </div>
        <div>
          <button type="submit" disabled={isSubmitting}>{isSubmitting?"Submitting...":"Submit"}</button>
        </div>
      </form>
    </div>
  );
}

export default ReactForm