import React from 'react'
import { Button, Input} from 'antd';
import './Login.css';
import Navbar from '../../../components/Navar/Navbar';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
function Login() {
    return (
        <div className="inscri">
            <Navbar/>
        <div className="contentInscri">
        <div className="choicePage">
            <div className="choiceButton">
                <h2> Login</h2>
                <div style={{margin:"auto"}}>
                    <h6>Email</h6>
                    <Input size="large" placeholder="email" className="inputInfo"/>
                        <h6>Mot de passe</h6>
                        <Input.Password
                            className="inputInfo"
                            size="large"
                            placeholder="mot de passe"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                    <Button className="suivant">Login </Button>
                </div>
            </div>
            
            <img src="/vacc.jpg" alt="inscription" className="img"/>
            
        </div>
        </div>
        
    </div>
        
    )
}

export default Login
