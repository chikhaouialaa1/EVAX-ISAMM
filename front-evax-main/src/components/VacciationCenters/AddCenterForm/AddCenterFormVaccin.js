import React, { useState, useEffect } from 'react'
import {Input, Button, Select } from 'antd';
import 'antd/dist/antd.css';
import './AddCenterFrom.css'
import { useDispatch, useSelector } from "react-redux"
import * as govActions from '../../../redux/actions/Vaccin/index'
import * as centerActions from '../../../redux/actions/Centres/index'
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";

const { Option } = Select;

  

function AddCenterForm({gouvernorat}) {
  const { id } = useParams()
  const dispatch = useDispatch()
  let [vaccin, setVaccin] = useState("")
  const [quantity, setQuantity] = useState("")
  const addCenter =  ( vaccin, quantity,id ) => {
    dispatch(govActions.addCenterVaccin({ vaccin, quantity, id}))
  }

  const handleAddCenter = () => {
    console.log(vaccin,quantity,"aaaaaaaaaaaaaaaaaaaaaaa")
    addCenter( vaccin, quantity,id)
    setVaccin("")
    setQuantity("")
    
  }
  
    const options = gouvernorat.list.map((item, index)=>{
      console.log(item);
      return(
        <Option value={item._id}>{item.vaccineName}</Option>
      )
    })
   
  /*  <Link to={"/addCenter/"+id}>
    <Button type="dashed" ghost danger style={{marginTop:'5px', marginBottom:'5px'}}>Ajouter centre</Button>
  </Link>*/
    return (
        <div className="addForm">
          
           
            <h6>Vaccin</h6>
            <Select
                className="input"
                placeholder="Choisir gouvernorat"
                onChange={(value)=>{
                  setVaccin(value)
                }}
                filterOption={false}
            >
              {options}
                
                
            </Select>
            
            <h6>Quantité</h6>
            <Input placeholder="Entrer centre" className="input"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}/>
            
            <Button className="button" onClick={handleAddCenter}>Associer Vaccin</Button>
        </div>
    )
}

export default AddCenterForm
