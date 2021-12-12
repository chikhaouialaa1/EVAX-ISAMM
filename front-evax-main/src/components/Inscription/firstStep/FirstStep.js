import React from 'react'
import './FirstStep.css'
import { Input, DatePicker, InputNumber, Button} from 'antd';
function FirstStep() {
    return (
        <div className="formulaire">

                <h6> Nom et prénom</h6>
                <Input className="inputInfo"/>
                <h6> Numéro CIN</h6>
                <Input className="inputInfo"/>
                <h6> Date de naissance</h6>
                <DatePicker className="inputInfo"/>
                <h6> Numéro telephone</h6>
                <InputNumber className="inputInfo"/>
                
        </div>
    )
}

export default FirstStep
