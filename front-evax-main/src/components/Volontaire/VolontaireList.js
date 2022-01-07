
import './VolontaireList.css'
import 'antd/dist/antd.css';

import { Table} from 'antd';
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import AdminHeader from '../AdminHeader/AdminHeader'
import AddVolantaire from './AddVolontaire/AddVolantaire';




const columns = [
    {
      title: 'Nom et prenom',
      dataIndex: 'userV',
      key: 'userV',
    },
    {
      title: 'Gouvenorat',
      dataIndex: 'gouvernorat',
      key: 'gouvernorat',
    },
    {
      title: 'Ville',
      dataIndex: 'ville',
      key: 'ville',
    },
    {
      title: 'Action',
      key: 'action',
      render:()=>{
        return(
          <>
          <EyeOutlined style={{ fontSize: '16px', color: '#ABABFD' }}/>
          <EditOutlined style={{ fontSize: '16px', color: '#ABABFD' }}/>
          <DeleteOutlined style={{ fontSize: '16px', color: '#FD9F9F' }}/>

          </>
        )
      }

    },
  ];

function VolontaireList({gouvernorat,gouv,centers}) {
 

    return (
        <div className='volontaire-list'>
            <AdminHeader/>
            <h5>Liste des volontaire</h5>
            <Table columns={columns} style={{width:'100%', borderRadius:'25px', marginTop:"20px"}}> </Table>
            <h5>Ajouter Volontaire</h5>
            <AddVolantaire gouv2={gouvernorat}  gouville={gouv} allcenters={centers}/>
            
        </div>
    )
}

export default VolontaireList
