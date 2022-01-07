import React from 'react'
import './FirstStep.css'
import { Input, DatePicker, InputNumber, Button, Select} from 'antd';
import {data} from './FirstStep'
import { useDispatch } from "react-redux";
import { useState } from 'react'    

var user={
    first_name:data.name,
    email:'',
    role:'',
    date_nais:data.date,
    ncin:data.ncin,nmobile:data.nmobile,password:'',
}

function SecondStep() {
    user.first_name=data.name

    user.ncin=data.ncin
    user.nmobile=data.nmobile
    
    user.date_nais=data.date
    const { Option } = Select;
    console.log(data)
    const [state1, setState1]= useState()
    const [state2, setState2]= useState()
    return (
        
        <div className="formulaire">

                <h6> Email</h6>
                <Input value={state1}
                    onChange={(e)=>{
                    //console.log(e.target.value)
                    setState1(e.target.value)
                    user.email=state1
                    //data.push(e.target.value)
                    }    
                }       className="inputInfo"/>
                <h6> Password</h6>
                <Input value={state2} onChange={(e)=>{
                    //console.log(e.target.value)
                    setState2(e.target.value)
                    user.password=state2
                    //data.push(e.target.value)
                    }    
                } className="inputInfo"/>
                <div className="select-centre">
                    <div>
                        <h6 style={{marginRight:"10px"}}> Centre de vaccination</h6>
                    </div>
                    <div>
                        <h6> Pharmacie</h6>
                    </div>   
                </div>
                <Input className="inputInfo"/>
                
                
                
                
        </div>
    )
}
export { user as data} 

export default SecondStep
