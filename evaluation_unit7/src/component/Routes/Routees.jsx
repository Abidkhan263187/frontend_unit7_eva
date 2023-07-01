import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { HomeComp } from '../Pagees/HomeComp'
import { LoginComp } from '../Pagees/LoginComp'
import { SignupComp } from '../Pagees/SignupComp'
import { MakeBlog } from '../Pagees/MakeBlog'



export const Routees = () => {
  return (
    <div>
<Routes>
    <Route path="/" element={<HomeComp/>} />
    <Route path="/login" element={<LoginComp/>} />
    <Route path="/signup" element={<SignupComp/>} />
    <Route path="/create" element={<MakeBlog/>} />
       
</Routes>

    </div>
  )
}
