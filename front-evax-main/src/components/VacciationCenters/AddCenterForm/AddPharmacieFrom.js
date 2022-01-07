import React, { useState, useEffect }  from 'react'
import { useDispatch, useSelector } from "react-redux"
import {Input, Button, Select } from 'antd';
import 'antd/dist/antd.css';
import * as govActions from '../../../redux/actions/Gouvernorat/index'
import * as centerActions from '../../../redux/actions/Centres/index'
import {Link} from 'react-router-dom'
import ReactGa from 'react-ga'

const { Option } = Select;

function AddPharmacieFrom({gouvernorat, type}) {
    const dispatch = useDispatch()
  const [name, setName] = useState("")
  let [ville, setVille] = useState("")
  const [manager, setManager] = useState("")
  const [capacity, setCapacity] = useState("")
  const isPharmacie = type
  
  const addPharmacie =  (name, ville, manager) => {
    dispatch(centerActions.addPharmacie({name, ville, manager, isPharmacie}))
  }
  const handleAddPharmacie = () => {
    addPharmacie(name, ville, manager, isPharmacie)
    setName("")
    setVille("")
    setManager("")
    
  }
  const options = gouvernorat.listGovs.map((item, index)=>{
    console.log(item);
    return(
      <Option value={item._id}>{item.name}</Option>
    )
  })
  const optionsVille = gouvernorat.listVille.map((item, index)=>{
    console.log(item);
    return(
      <Option value={item._id}>{item.name}</Option>
    )
  })
    return (
        <div className="addForm">
          <h5>Ajouter Pharmacie</h5>
            <h6>Titre</h6>
            <Input placeholder="Entrer centre" className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            <h6>Gouvernorat</h6>
            <Select
                className="input"
                placeholder="Choisir gouvernorat"
                onChange={(value)=>{
                  dispatch(govActions.fetchVille(value))
                }}
                filterOption={false}
            >
              {options}
                
                
            </Select>
            <h6>Ville</h6>
            <Select
                className="input"
                placeholder="choisir ville"
                onChange={(value)=>{
                  ville = value
                  setVille(value)
                }}
            >
               {optionsVille}
            </Select>
            <h6>Responsable</h6>
            <Input placeholder="Entrer centre" className="input"
            value={manager}
            onChange={(e) => setManager(e.target.value)}/>
            
            
            
            
                

                <Button className="button" onClick={handleAddPharmacie}>Ajouter</Button>
               
        </div>
    )
}

export default AddPharmacieFrom
