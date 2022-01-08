import {Input, Button, Select } from 'antd';
import { Image } from "antd";
import Navbar from "../Navar/Navbar";
import "./Citoyen.css";
import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"
import * as centerActions from '../../redux/actions/Centres/index'
import * as userAction from '../../redux/actions/Citoyen/index'

const { Option } = Select;

function Citoyen() {
  const dispatch = useDispatch()
  
  useEffect(() => {
      dispatch(centerActions.fetchCenters())
    }, [])
    const user = useSelector((state) => state.user)

    const [name, setName] = useState("")
    const [token, setToken] = useState("")

const y=(localStorage.getItem("mytime"))
    let [center_id, setCenter_id] = useState("")
//const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjFkOGVjYzhjZTBkMGViNGYzNWVjNWY1IiwiZW1haWwiOiJhYWFhYUBhYWEuYyIsImFjdGl2YXRpb24iOmZhbHNlLCJyb2xlIjoidXNlciIsImlhdCI6MTY0MTYwNjM0NCwiZXhwIjoxNjQxNjEzNTQ0fQ.73sBdwRqi_TnUJMgKwensjnyzO8iZVFEynZT_5lcGu8"
    
const centers = useSelector((state) => state.centers)
    const options = centers.list.map((item, index)=>{
      console.log(item);
      return(
        <Option value={item._id}>{item.name}</Option>
      )
    })
    let x=""
    
    console.log("aaaaaaaaaaaaaaaaa",centers.list2)
    const optionsVille = centers.list2.map((item, index)=>{
      console.log(index);
       x = item.map((item2, index2)=>{
        console.log(item2)
      return(
        <Option value={item2._id}>{item2.vaccineName}</Option>
      )
    })
    })

    const handleAddCenter = () => {
      addCenter(center_id,y)
    }
    const addCenter =  (center_id,y) => {
      dispatch(userAction.rdv({center_id,y}))
    }
  return (
    <div className="citoyen">
      <Navbar />
      <div className="contentInscri">
        <div className="choicePage">
          <div className="choiceButton">
            <h2> Connexion Espace citoyen </h2>
            <Select
                className="input"
                placeholder="choisir Center"
                onChange={(value)=>{
                  dispatch(centerActions.fetchCenterVaccin(value))
                  center_id = value
                  setCenter_id(value)
                }}
            >
               {options}
            </Select>
            <Select
                className="input"
                placeholder="choisir ville"
                onChange={(value)=>{
                
                  setName(value)
                }}
            >
               {x}
            </Select>
            <div style={{ margin: "auto" }}>
              <h6>RendezVous </h6>
              <Button className="suivant"  onClick={handleAddCenter} >
              RendezVous
                    </Button>
                  <Button
                type="primary"
                shape="round"
                style={{
                  background: "#FFBC6E",
                  borderColor: "#FFBC6E",
                  paddingLeft: 5,
                  marginLeft: 130,
                }}
              >
                Envoyer
              </Button>
          
            </div>
            
          </div>

          <img src="/meter.png" alt="inscription" className="img" />
        </div>
      </div>
    </div>
  );
}

export default Citoyen;
