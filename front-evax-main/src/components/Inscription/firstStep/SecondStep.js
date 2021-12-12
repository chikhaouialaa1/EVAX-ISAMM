import React from 'react'
import './FirstStep.css'
import { Input, DatePicker, InputNumber, Button, Select} from 'antd';

function SecondStep() {
    const { Option } = Select;
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
