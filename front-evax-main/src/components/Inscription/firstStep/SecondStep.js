import React from 'react'
import './FirstStep.css'
import { Input, DatePicker, InputNumber, Button, Select} from 'antd';
import {data} from './FirstStep'

function SecondStep() {
    const { Option } = Select;
    console.log(data)
    return (
        
        <div className="formulaire">

                <h6> Gouvernorat</h6>
                <Input className="inputInfo"/>
                <h6> Ville</h6>
                <Input className="inputInfo"/>
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

export default SecondStep
