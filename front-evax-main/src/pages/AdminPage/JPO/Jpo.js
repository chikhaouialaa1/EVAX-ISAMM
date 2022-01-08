import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/Jpo/Jpo'

import AdminSideBar from '../../../components/AdminSideBar/AdminSideBar'
import JpoList from '../../../components/JPO/JpoList'


function Jpo() {
    const jpos = useSelector((state) => state.Jpos)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
      }
    useEffect(() => {
        dispatch(actions.fetchJpos())
      }, [])
    const deleteJpo =  (id) => {
        dispatch(actions.deleteJpo(id))}
    return (
        <div className='jpo-content'>
            <AdminSideBar/>
            {jpos.loading  && <div>Loading ... </div>}
            {!jpos.loading && isVisible &&(
                <JpoList jpos ={jpos.listJpo} deleteJpo={deleteJpo}/>
            )}
            
        </div>
    )
}

export default Jpo
