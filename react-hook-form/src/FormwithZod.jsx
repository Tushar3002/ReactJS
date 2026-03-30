import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";

function FormwithZod() {
  // Zod schema with extra validations
  const schema = z
    .object({
      name: z
        .string()
        .min(3, "Minimum 3 characters")
        .max(10, "Maximum 10 characters")
        .regex(/^[a-z]+$/i, "Only letters allowed"),
      age: z
        .string()
        .refine((val) => !val || (Number(val) >= 18 && Number(val) <= 100), {
          message: "Age must be between 18 and 100",
        }),
      city: z
        .string()
        .min(2, "City must be at least 2 characters")
        .max(50, "City can be max 50 characters")
        .optional(),
      email: z.email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submitting the form", data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">Form with Zod Validation</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Name:</label>
          <input
            className={`input-box ${errors.name ?  "error-border" : ""}`}
            {...register("name")}
          />
          {errors.name && <p className="input-error">{errors.name.message}</p>}
        </div>

        <div>
          <label>Age:</label>
          <input
            className={`input-box ${errors.age ?  "error-border" : ""}`}
            {...register("age")}
          />
          {errors.age && <p className="input-error">{errors.age.message}</p>}
        </div>

        <div>
          <label>City:</label>
          <input
            className={`input-box ${errors.city ?  "error-border" : ""}`}
            {...register("city")}
          />
          {errors.city && <p className="input-error">{errors.city.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            className={`input-box ${errors.email ?  "error-border" : ""}`}
            {...register("email")}
          />
          {errors.email && (
            <p className="input-error">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            className={`input-box ${errors.password ?  "error-border" : ""}`}
            {...register("password")}
          />
          {errors.password && (
            <p className="input-error">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            className={`input-box ${errors.confirmPassword ?  "error-border" : ""}`}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="input-error">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default FormwithZod;
