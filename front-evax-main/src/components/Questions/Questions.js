import React, { useState, useEffect }from 'react'

import { useDispatch, useSelector } from "react-redux"

import * as actions from '../../redux/actions/Messages/index'


function Questions({msg}) {
  const lista= msg.map((item, index)=>{
    console.log(item.message)
    return(
      <div key={item._id}>{item.message}</div>
  
    )
    
  })
    return (
        <div className="etape-container">
        <h1>Question fréquemment demandés</h1>
        <div className="questions">
          {lista}
        </div>
          
       
        
      </div>
    )
}

export default Questions
