import React, { useState } from 'react';
import '../styles/signup.css'
import {Button} from '@chakra-ui/react'
export const SignupComp = () => {
  const [formData, setFormData] = useState({
   name:"",
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData,[name]: value, }));
  };

  const handleSubmit =  async(e) => {
    e.preventDefault();
   
try {
  await fetch(`http://localhost:7000/user/signup`,{
    method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
  }).then((res)=>res.json()).then((data)=> console.log(data))
  alert("signup Success")
}

 catch (error) {
  console.log("error: " + error)
  alert("please fill again")
}
   
    console.log(formData);
    // Reset form
    setFormData({
     name:'',
      email: '',
      password: '',
    });
  };

  return (
    <div>
     
      <form  id ="signup_form" onSubmit={handleSubmit}>
       
        
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter name'
            required
          />
       
        
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder='Enter email'
            onChange={handleChange}
            required
          />
     
       
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder='Enter password'
            onChange={handleChange}
            required
          />
        
        <Button colorScheme='orange'  w={"30%"} m={"auto"} size={"sm"} type="submit">Submit</Button>
      </form>
    </div>
  );
};
