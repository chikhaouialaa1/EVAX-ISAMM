import React from 'react'
import './AddVolontaire.css'
import {Input, Button, Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }
function AddVolantaire() {
    return (
        <div className='add-volontaire'>
            <h6>Nom et prenom</h6>
            <Input placeholder="Donner nom et prénom" className="input"/>
            <h6>Gouvernorat</h6>
            <Select
                className="input"
                showSearch
                placeholder="choisir gouvernorat"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
            <h6>Ville</h6>
            <Select
                className="input"
                showSearch
                placeholder="choisir ville"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
            <h6>Email</h6>
            <Input placeholder="Entrer email" className="input"/>
            <h6>Mot de passe</h6>
            <Input placeholder="Entrer mot de passe" className="input"/>
            <Button className="button">Ajouter</Button>
        </div>
    )
}

export default AddVolantaire
