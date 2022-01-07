import React from 'react'
import './FirstStep.css'
import { useDispatch } from "react-redux";
import { useState } from 'react'    


import { Input, DatePicker, InputNumber, Button} from 'antd';
var data=[]

var user={
    first_name:'',
    email:'',
    role:'',
    date_nais:'',
    ncin:'',nmobile:'',password:'',
}

function FirstStep() {
    const [state1, setState1]= useState()
    const [state2, setState2]= useState()
    const [state3, setState3]= useState()
    const [state4, setState4]= useState()   

        
    const dispatch = useDispatch()   

    return (
        <div className="formulaire">

                <h6> Nom et prénom</h6>
                <Input
                    value={state1}
                    onChange={(e)=>{
                    //console.log(e.target.value)
                    setState1(e.target.value)
                    user.name=state1
                    //data.push(e.target.value)
                    }    
                }                
                
                className="inputInfo"/>
                <h6> Numéro CIN</h6>
                <Input
                    value={state2}
                    onChange={(e)=>{
                        setState2(e.target.value)
                        user.ncin=state2
                    }
                    //console.log(e.target.value)
                    //data.push(e)
    
                }                
                className="inputInfo"/>
                <h6> Date de naissance</h6>
                <DatePicker
                value={state3}
                onChange={(e)=>{
              
                user.date=e._d.toString()

                    }
               
            }
                className="inputInfo"/>
                <h6> Numéro telephone</h6>
                <InputNumber
                value={state4}
                onChange={(e)=>{
                //console.log(e)
                setState4(e)
                //data.push(state1,state2,state3,state4)
                //data.push(e)   ,
                user.nmobile=state4
                
                }

            }
                className="inputInfo"/>
                
        </div>
    )
}

export { user as data} 

export default FirstStep


