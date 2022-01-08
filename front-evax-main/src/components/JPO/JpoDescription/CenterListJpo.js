import React, { useEffect, useState}  from 'react'
import { Button, Descriptions, Table, Drawer, SpaceInput, Select, Input, Space} from 'antd';
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/Jpo/Jpo'

function CenterListJpo({jpoId}) {
    const jpos = useSelector((state) => state.Jpos)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
      }
    useEffect(() => {
        dispatch(actions.fetchJpoAllCenters(jpoId))
      }, [])
    const deleteCenterJpo =  (jpoId, centreId) => {
        dispatch(actions.deleteCenterFromJpo({jpoId, centreId}))}
    const options = jpos.listcenterJpo.map((item, index)=>{
        const volontaire = item.volontaire.map((it)=>{
            return(<h7 style={{ marginRight:"10px"}}>{it.username}</h7>)
        })
        console.log(item);
        return(
            <tr>
            <div style={{display:"flex", alignContent:"center", justifyContent:"center", alignItems:'center'}}>
                <h5 style={{color:"black", marginRight:"10px"}}>{item.centreId.name}</h5>
                
                    {volontaire}
                
                
                <DeleteOutlined onClick = {
                (e) => {
                    deleteCenterJpo(jpoId, item._id)
                }}/>
            </div>
            </tr>
            
        )
      })
    return (
        <div>
            <h5 style={{color:"#FFBC6E", marginTop:"25px", fontSize:'20px'}}>Liste des centres concerné</h5>
            
                {options}
                
            
            
        </div>
    )
}

export default CenterListJpo
