import React from 'react'
import {Input, Button, Select } from 'antd';
import 'antd/dist/antd.css';
import './AddCenterFrom.css'
const { Option } = Select;

function onChange(value) {
    console.log(`selected ${value}`);
  }
  
function AddCenterForm({gouvernorat}) {
    const options = gouvernorat.map((item, index)=>{
      console.log(item);
      return(
        <Option value={item._id}>{item.name}</Option>
      )
    })
    return (
        <div className="addForm">
          
            <h6>Nom Centre</h6>
            <Input placeholder="Entrer centre" className="input"/>
            <h6>Gouvernorat</h6>
            <Select
                className="input"
                placeholder="Choisir gouvernorat"
                onChange={onChange}
                filterOption={false}
            >
              {options}
                
                
            </Select>
            <h6>Ville</h6>
            <Select
                className="input"
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
            <h6>Responsable</h6>
            <Input placeholder="Entrer centre" className="input"/>
            <h6>Capacité</h6>
            <Input placeholder="Entrer capacité du centre pour chaque 1/2 heure" className="input"/>
            <Button className="button">Ajouter Centre</Button>
        </div>
    )
}

export default AddCenterForm
