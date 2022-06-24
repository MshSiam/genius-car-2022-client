import React from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import "./addservice.css"

const Addservice = () => {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data) => {
    // post using axios
    axios
      .post("http://localhost:5000/services", data)
      .then(function (response) {
        console.log(response)
        if (response.data.insertedId) {
          alert("Added successfully.")
          reset()
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    console.log(data)
  }

  return (
    <div>
      <h2 className="title">Add a Service</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          type="text"
          placeholder="description"
          {...register("description", { required: true })}
        />
        <input
          placeholder="price"
          type="number"
          {...register("price", { required: true })}
        />
        <input
          placeholder="image-url"
          type="text"
          {...register("img", { required: true })}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Addservice
