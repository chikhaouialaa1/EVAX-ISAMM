import React, { useState, useEffect } from 'react'
import {Input, Button, Select } from 'antd';
import 'antd/dist/antd.css';
import './AddCenterFrom.css'
import { useDispatch, useSelector } from "react-redux"
import * as vaccinActions from '../../../redux/actions/Vaccin/index'

  

function AddVaccinForm({gouvernorat}) {
  
  const dispatch = useDispatch()
  const [vaccineName, setName] = useState("")

  const addVaccin =  (vaccineName) => {
    dispatch(vaccinActions.addVaccin({vaccineName}))
  }

  const handleAddVaccin = () => {
    addVaccin(vaccineName)
    setName("")
   
  }
  
   
    return (
        <div className="addForm">
          
            <h6>Nom Vaccin</h6>
            <Input placeholder="Entrer vaccin" className="input"
            value={vaccineName}
            onChange={(e) => setName(e.target.value)}/>
           
            <Button className="button" onClick={handleAddVaccin}>Ajouter Centre</Button>
        </div>
    )
}

export default AddVaccinForm
