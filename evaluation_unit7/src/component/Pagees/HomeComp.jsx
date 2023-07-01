import React from 'react'
import { useState, useEffect } from 'react'
import "../styles/home.css"

export const HomeComp = () => {
  const [homeData, setHomeData] = useState([])


  useEffect(() => {
    (async () => {
      const accessToken = JSON.parse(localStorage.getItem("token"))

      try {
        const response = await fetch(`http://localhost:7000/todo`, {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + accessToken
          }
        })
        const { todosList } = await response.json()
        setHomeData(todosList)
        // console.log(todosList)
      } catch (error) {
        console.log("error", error)
      }

    })()
  }, [])
  return (
    <div>

     
      <div id="home_container">

        {/* {homeData} */}
        {homeData ? homeData.map(({ taskname, status, tag, _id }) => {
          return (
            <div key={_id} >
              <p>{taskname}</p>
              <p>{status}</p>
              <p>{tag}</p>
            </div>

          )
        }) : <div id='empty_mssg'>No blogs please create blogs</div> }
      </div>
    </div>
  )
}
