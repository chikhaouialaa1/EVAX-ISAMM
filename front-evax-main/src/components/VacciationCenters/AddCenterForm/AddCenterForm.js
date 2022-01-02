import React, { useState, useEffect } from 'react'
import {Input, Button, Select } from 'antd';
import 'antd/dist/antd.css';
import './AddCenterFrom.css'
import { useDispatch, useSelector } from "react-redux"
import * as govActions from '../../../redux/actions/Gouvernorat/index'
import * as centerActions from '../../../redux/actions/Centres/index'
import {Link} from 'react-router-dom'

const { Option } = Select;

  

function AddCenterForm({gouvernorat}) {
  
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  let [ville, setVille] = useState("")
  const [manager, setManager] = useState("")
  const [capacity, setCapacity] = useState("")
  const addCenter =  (name, ville, manager, capacity) => {
    dispatch(centerActions.addCenter({name, ville, manager, capacity}))
  }

  const handleAddCenter = () => {
    addCenter(name, ville, manager, capacity)
    setName("")
    setVille("")
    setManager("")
    setCapacity("")
    
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
  /*  <Link to={"/addCenter/"+id}>
    <Button type="dashed" ghost danger style={{marginTop:'5px', marginBottom:'5px'}}>Ajouter centre</Button>
  </Link>*/
    return (
        <div className="addForm">
          
            <h6>Nom Centre</h6>
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
            <h6>Capacité</h6>
            <Input placeholder="Entrer capacité du centre pour chaque 1/2 heure" className="input"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}/>
            <Button className="button" onClick={handleAddCenter}>Ajouter Centre</Button>
        </div>
    )
}

export default AddCenterForm
