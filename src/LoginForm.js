import React, { useState } from 'react'
import "./index.css"

const LoginForm = () => {
   
  const [fullname,setFullName]=useState({
    fName:"",
    lName:"",
    email:"",
    phone:""
  })

  const inEvent=(e)=>{
     const{value,name,email,phone} = e.target
 
     setFullName((preVal)=>{
        //console.log(preVal);
        return{
          ...preVal,
          [name]:value
        }
     })
  }
  const onSub=(e)=>{
    e.preventDefault();
    
  }
  return (
    <>
    <form onSubmit={onSub}>
            <h1>HELLO {fullname.fName} {fullname.lName}</h1>
            <p>{fullname.email}</p>
            <p>{fullname.phone}</p>
            <input
                type="text"
                placeholder='Please Enter Your Name'
                onChange={inEvent}
                name="fName"
                value={fullname.fName}
            />
            <br/>
            <br/>
            <input
               type="text"
               placeholder='Please Enter your Last Name'
               onChange={inEvent}
               name="lName"
               value={fullname.lName}
            />
            <br/>
            <br/>
            <input
              type="text"
              placeholder='enter your email address'
              onChange={inEvent}
              name="email"
              value={fullname.email}
            />
            <br/>
            <br/>
            <input
               type="number"
               placeholder='enter your phone number'
               onChange={inEvent}
               name="phone"
               value={fullname.phone}
            />
            <br/>
            <br/>
            <button className='btn1' type='submit' onClick={onSub}>Click Me!</button>
    </form>
    </>
  )
}
export default LoginForm