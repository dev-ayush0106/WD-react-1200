import React from 'react'
import { useForm } from 'react-hook-form'
import './FormHandle.css'

const FormHandle = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm()

  async function formData(data){
    // alldata.push(data);
    setTimeout(()=>{
        console.log(data);
    },2000)
    // console.log(alldata)
}
// console.log(alldata)
  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={handleSubmit(formData)}>
        <label htmlFor="">First Name:</label>
        <input type="text" placeholder="Enter First Name" {...register("firstname",{required:true, minLength:{value:3,message:"Minimum 3 Characters"} ,maxLength:{value:6,message:"Maximum 6 Characters"}})} />
        <br />
        <span className='error'>{(errors.firstname)?errors.firstname.message:""}</span>
        <br />
        <label htmlFor="">Last Name:</label>
        <input type="text" placeholder="Enter Last Name" {...register("lastname",{required:true, minLength:{value:3,message:"Minimum 3 Characters"},maxLength:{value:6,message:"Maximum 6 Characters"}})} />
        <br />
        <span className='error'>{(errors.lastname)?errors.lastname.message:""}</span>
        <br />
        <label htmlFor="">Email:</label>
        <input type="text" placeholder="Enter Your Email" {...register("email")} />
        <br />
        <input type="submit" value={(isSubmitting)?"Data Submitting....":"Submit"}  />
      </form>
    </div>
  )
}

export default FormHandle
