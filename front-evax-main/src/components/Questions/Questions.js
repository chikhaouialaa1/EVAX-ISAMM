import React, { useState, useEffect }from 'react'

import { useDispatch, useSelector } from "react-redux"

import * as actions from '../../redux/actions/Messages/index'
import { Table } from "antd";
const columns = [
  {
    title: "Questions",
    dataIndex: "message",
    key: "name",
  },]
function Questions({msg}) {
 
    return (
        <div className="etape-container">
        <h1>Question fréquemment demandés</h1>
        <Table
        columns={columns}
        dataSource={msg}
        style={{
          width: 700,
          marginTop: 100,
          marginLeft: 400,
          paddingLeft:50,
          borderRadius: "25px",
        }}
      >
        {" "}
      </Table>
          
       
        
      </div>
    )
}

export default Questions
