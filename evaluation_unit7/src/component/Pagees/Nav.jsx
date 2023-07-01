import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import { useEffect } from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'
export const Nav = () => {


  const {name}=useSelector((store)=>{
    return store
  })
  
  return (
    <div>

      <nav>
        <ul style={{
          listStyle: "none", display: "flex",
          justifyContent: "space-evenly",
          background: "orange", color: "white",
          padding: "12px",
          fontWeight: "700",
          fontSize: "20px",
          alignItems:"center"

        }}>
          <li><Link to={"/"}> <img src="https://api.logo.com/api/v2/images?logo=logo_7d12a0ea-797a-4301-bdba-52ad98af877e&format=webp&margins=0&quality=60&width=500&background=transparent&u=1680772232" alt="logo" id='logo' /> </Link></li>
       
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/signup"> signup</Link></li>
          <li><Link to="/create"> create</Link></li>
          <li><input id='search' type="text" placeholder='search' /></li>
          <li style={{color:"#176bb5",fontSize:"small"}}>{name} </li>

        </ul>
      </nav>
    </div>
  )
}
