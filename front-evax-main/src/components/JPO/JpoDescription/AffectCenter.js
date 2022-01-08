import React, { useEffect, useState} from 'react'
import { Button, Descriptions, Table, Drawer, SpaceInput, Select, Input, Space} from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from "react-redux"
import * as centerActions from '../../../redux/actions/Centres/index'
import * as voluntaireActions from '../../../redux/actions/Voluntaries/index'
import * as jpoActions from '../../../redux/actions/Jpo/Jpo'
const { Option } = Select;
function refreshPage() {
  window.location.reload(false);
}
function AffectCenter({jpoId}) {
  console.log("jpo id"+jpoId)
    const centers = useSelector((state) => state.centers)
    const voluntaries = useSelector((state) => state.voluntaries)
    const Jpos = useSelector((state) => state.Jpos)
    const dispatch = useDispatch()
    
    const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    let [centreId, setCenter] = useState("")
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
      }
    
    useEffect(() => {
        
        dispatch(centerActions.fetchCenters())
        
      }, [])
      
      const handlelocalStock = (id) => {
        dispatch(jpoActions.localStock(id))
      }
      const affectCenter =  (jpoId, centreId, volontaire) => {
        dispatch(jpoActions.affectCenterJpo({jpoId, centreId, volontaire}))
      }
      const handleAffectCenter = ()=>{
        const volontaire = Jpos.listTemp
        affectCenter(jpoId, centreId, volontaire)
        window.location.reload(false);
      }
      const options = centers.listCenter.map((item, index)=>{
        console.log(item);
        return(
          <Option value={item._id}>{item.name}</Option>
        )
      })
      const optionsV = voluntaries.listVC.map((item, index)=>{
        console.log(item);
        return(
          <Option value={item._id}>{item.username}</Option>
        )
      })
      
  
    return (
        <div style={{marginRight:"20px"}}>
            <h5 style={{color:"#FFBC6E", marginTop:"25px", fontSize:'20px'}}>Affecter centre au JPO</h5>
                    <Select
                    className="input"
                    placeholder="Choisir centre"
                    onChange={(value)=>{
                        centreId=value
                        setCenter(value)
                        dispatch(voluntaireActions.fetchVolByCenter(value))
                      
                    }}
                    filterOption={false}
                    >
                        {options}
                     
                    </Select>
                    <div style={{display:"flex"}}>
                    <Select
                    className="input"
                    placeholder="Choisir volontaire"
                    onChange={(value)=>{
                      handlelocalStock(value)
                        //onChangefetch(value)
                      //dispatch(govActions.fetchVille(value))
                      
                    }}
                    filterOption={false}
                    >
                     {optionsV}
                    </Select>
                    
                    </div>
                    <div>
                      {
                        Jpos.listTemp &&(
                          Jpos.listTemp.map((item)=>{
                            return(
                              <h6>{item}</h6>
                            )
                          })
                          
                        )
                      }
                        
                    </div>
                    <Button type="dashed" ghost danger className="input" onClick={handleAffectCenter}>Ajouter</Button>
            
        </div>
    )
}

export default AffectCenter
