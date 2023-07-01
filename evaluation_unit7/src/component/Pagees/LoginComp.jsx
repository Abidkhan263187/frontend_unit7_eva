import React, { useState } from 'react';
import '../styles/login.css'
import { useNavigate } from "react-router-dom";
import {Button} from '@chakra-ui/react'
import {useDispatch} from 'react-redux'
import { authenticate } from '../Redux/action';
export const LoginComp = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleemailChange = (event) => {
    setemail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit =  async(event) => {
    event.preventDefault();
    if(email === "" || password === "" ){
      alert("please fill all the fields")
      return
    }
    // check if email and password are valid
      // Perform signup logic with formData
try {
  let tokenRes=await fetch(`http://localhost:7000/user/login`,{
    method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email:email,
            password:password
          }),
       
  })
  console.log("yes")
  let {token}=await  tokenRes.json();
  localStorage.setItem("token",JSON.stringify(token))
  
  console.log(token)
  if(token){
    dispatch(authenticate(email))
    alert("login Succesfully")
    navigate('/')
    
  }else{
    alert("user Not found")
  }

} catch (error) {
  console.log("error: " + error)
}

    setemail('');
    setPassword('');
  };

  return (
    <div>
     
      <form id='login_form' onSubmit={handleSubmit}>
        <div>
        
          <input
            type="text"
            id="email"
            placeholder='enter email'
            value={email}
            onChange={handleemailChange}
          />
        </div>
        <div>
         
          <input
            type="password"
            id="password"
            placeholder='enter password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <Button colorScheme='orange'  w={"30%"} m={"auto"} size={"sm"} type="submit">Submit</Button>
      </form>
    </div>
  );
};
