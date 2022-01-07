import React, { useState, useEffect } from 'react'
import AdminHeader from '../../../../components/AdminHeader/AdminHeader'
import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import JpoDescription from '../../../../components/JPO/JpoDescription/JpoDescription'
import './JpoDetail.css'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../../redux/actions/Jpo/Jpo'


function JpoDetail() {
    const  {id}  = useParams();
    const jpo = useSelector((state) => state.Jpos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.fetchJpoById(id))
    }, [])
    var jpoDescription = jpo.selectedJpo[0]
    return (
        <div>
            <AdminSideBar/>
            <div className="content">
                <AdminHeader/>
                {jpoDescription&&(
                    <JpoDescription jpoDescription={jpoDescription}/>
                )

                }
                
            </div>
        </div>
    )
}

export default JpoDetail
