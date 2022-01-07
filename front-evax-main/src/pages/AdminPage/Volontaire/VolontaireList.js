import React, { useState, useEffect }from 'react'
import AdminSideBar from '../../../components/AdminSideBar/AdminSideBar'
import VolontaireLists from '../../../components/Volontaire/VolontaireLists'
import './VolontaireList.css'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/Voluntaries/index'



function VolontaireList() {
    const voluntaries = useSelector((state) => state.voluntaries)
    
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
      }
    
    useEffect(() => {
        
        dispatch(actions.fetchVol())
      }, [])
      console.log(voluntaries)
    return (
        <div className="vaccinationCenter">
            <AdminSideBar/>
          
            <VolontaireLists vol={voluntaries} />
            
            
        </div>
    )
}

export default VolontaireList
