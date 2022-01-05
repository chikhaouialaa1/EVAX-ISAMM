import React from 'react'
import './statistics.css'

import { PieChart } from 'react-minimal-pie-chart';


  
 
function Statistcs(){
  
      
    return (
        <div className="stat">
      
      <PieChart  animation
   animationDuration={500}
   animationEasing="ease-out"
   center={[50, 50]} style={{
            height: 200,
            width: 200,
            borderRadius: 30,
            position: "absolute",
            marginLeft:"500px"
          
          }}
  data={[
    { title: 'One', value: 10, color: '#DAF7A6' ,text:'23%' },
    { title: 'Two', value: 15, color: '#ABEBC6' },
    { title: 'Three', value: 20, color: '#F7BA68' },
  ]}
 />

        </div>
    )
}

export default Statistcs
