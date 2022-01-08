import React from 'react'
import { Button, Input} from 'antd';
import './Login.css';
import Navbar from '../../../components/Navar/Navbar';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import AuthService from '../../../../src/services/auth-Service'

import { useState } from 'react'    

import { useDispatch } from "react-redux";
import  authUser from "../../../redux/actions/auth-user-action"

import {badpassword} from '../../../services/auth-Service'

import { Alert } from 'antd';
//import { Redirect } from 'react-router-dom';

import { Navigate } from 'react-router-dom';



function Login() {
    //console.log(badpassword)
   let  badpassword=false

/*
    console.log("teeessstttt")  
    let res =  AuthService("mayssamelliti@gmail.com","123")
    console.log(res)
    console.log(AuthService("mayssamelliti@gmail.com","123"))
     {badpassword ?
                    <Alert message="bad password please try again" type="error" showIcon />
                    :
                    <Navigate to="/" /> 
                }
*/
    const [state1, setState1]= useState()
    const [state2, setState2]= useState()    
    const dispatch = useDispatch()   
       
    return (
        <div className="inscri">
            <Navbar/>
        <div className="contentInscri">
        <div className="choicePage">
            <div className="choiceButton">
                <h2> Login</h2>
                <div style={{margin:"auto"}}>
                    <h6>Email</h6>
                    <Input
                    key={1}
                    value={state1}
                    onChange={(e)=>
                        //console.log(e.target.value),
                        setState1(e.target.value)
                    }
                    key={2}
                    type="text" className="col form-control"
                    size="large" placeholder="email" className="inputInfo"/>
                        <h6>Mot de passe</h6>
                        <Input.Password
                         index="2"
                         value={state2}
                         onChange={(e)=>setState2(e.target.value)}
                            className="inputInfo"
                            size="large"
                            placeholder="mot de passe"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                    <Button 
                    onClick={()=>{
                        dispatch(  authUser({
                         email: state1,
                         password: state2
                     }));
                         setState1('');
                         setState2('');
                         
                     }}
                    className="suivant">Login </Button>
                </div>
               
            
            </div>
            
            <img src="/vacc.jpg" alt="inscription" className="img"/>
            
        </div>
        </div>
        
    </div>
        
    )
}

export default Login
