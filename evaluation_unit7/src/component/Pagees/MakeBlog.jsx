import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/makeBlog.css'
import { Button } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'

export const MakeBlog = () => {
    const [formData, setFormData] = useState({
        task:'',
        status:'',
        tag:''
    })
    const navigate=useNavigate()
    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(formData)
        const accessToken = JSON.parse(localStorage.getItem("token"))
        try {
            await fetch(`http://localhost:7000/todo/create`,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + accessToken
                  },
                  body: JSON.stringify({
                    taskname:formData.task,
                    status:formData.status,
                    tag: formData.tag

                  }),
            }).then((res)=>res.json()).then((data)=>console.log(data))
            alert("blog created successfully")
            navigate('/')

        } catch (error) {
            console.log("error",error)
        }
        e.target.reset();
       
    
    }
    return (
        <div id="form_main_container">
            <div id='form_inner_container'>
         
                <form id="form_makeblog" onSubmit={handleSubmit}>
                   
                        <input
                            type="text"
                            value={formData.title}
                            name='task'
                            placeholder='Enter taskname'
                            onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
                        />
                   
                  
                        {/* <textarea
                        name='content'
                            value={formData.content}
                            placeholder='content'
                            onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
                        /> */}
                         <input
                            type="text"
                            value={formData.status}
                            name='status'
                            placeholder='Enter status'
                            onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
                        />
                          <input
                            type="text"
                            value={formData.tag}
                            name='tag'
                            placeholder='Enter tag'
                            onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
                        />
                    
                    <Button colorScheme='orange' w={"30%"} m={"auto"} size={"sm"} type="submit">Submit</Button>
                </form>
            </div>
        </div>
    )
}