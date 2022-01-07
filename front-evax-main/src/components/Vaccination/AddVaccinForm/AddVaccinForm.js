import React, { useState, useEffect } from 'react'
import {Input, Button, Select } from 'antd';
import 'antd/dist/antd.css';
import './AddCenterFrom.css'
import { useDispatch, useSelector } from "react-redux"
import * as vaccinActions from '../../../redux/actions/Vaccin/index'
import ReactGa from 'react-ga'

function AddVaccinForm({gouvernorat}) {
  
  const dispatch = useDispatch()
  const [vaccineName, setName] = useState("")

  const addVaccin =  (vaccineName) => {
    ReactGa.event({
      category:'Button', 
      action:'Vaccin ajouté',
      label:'Ajouter vaccin'
    })
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
            onChange={(e) => {setName(e.target.value); const value = e.target.value;
              if(!isNaN(+value)){
                console.log("false")
                ReactGa.event({
                  category:'Erreur de type', 
                  action:'type n"est pas string',
                  label:'Type mismatch'
                })}}}/>
           
            <Button className="button" onClick={handleAddVaccin}>Ajouter Vaccin</Button>
        </div>
    )
}

export default AddVaccinForm
