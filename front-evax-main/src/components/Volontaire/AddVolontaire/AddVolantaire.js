import React, { useState }from "react";
import "./AddVolontaire.css";
import { Input, Button, Select } from "antd";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import * as govActions from "../../../redux/actions/Gouvernorat/index";
import * as volActions from "../../../redux/actions/Voluntaries/index";
import * as centerActions from '../../../redux/actions/Centres/index'

const { Option } = Select;

function AddVolantaire({ gouv2, gouville,allcenters }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  let [gouvernorat, setGouvernorat] = useState("");
  let [ville, setVille] = useState("");
  let [centre, setCentre] = useState("");
  const dispatch = useDispatch();





 
  const options = gouv2.map((item, index) => {
    
    return <Option value={item._id}>{item.name}</Option>;
  });
  const optionsCenters = allcenters.map((item, index) => {
    
    return <Option value={item._id}>{item.name}</Option>;
  });


  
  const optionvilles = gouville.map((item, index) => {
 
    return <Option value={item._id}>{item.name}</Option>;
  });
  return (
    <div className="add-volontaire">
      <h6>Nom et prenom</h6>
      <Input placeholder="Donner nom et prénom" className="input"
      value={username}
      onChange={(e) => setUsername(e.target.value)} />
        <h6>Email</h6>
      <Input placeholder="Entrer email" className="input"
      value={email}  onChange={(e) => setEmail(e.target.value)}/>
      <h6>Mot de passe</h6>
      <Input placeholder="Entrer mot de passe" className="input"
      value={password} onChange={(e) => setPassword(e.target.value)}
      />
       <h6>role</h6>
      <Input placeholder="Role" className="input"
      value={role} onChange={(e) => setRole(e.target.value)}
      />
      <h6>Gouvernorat</h6>
      <Select
        className="input"
        placeholder="Choisir gouvernorat"
        onChange={(value) => {
          dispatch(govActions.fetchVille(value));
          gouvernorat=value
          setGouvernorat(value)
        }}
        filterOption={false}
      >
        {options}
      </Select>
      <h6>Ville</h6>
      <Select
        className="input"
        placeholder="choisir ville"
        onChange={(value)=>{
          ville = value
          setVille(value)
        }}
        
      >
        {optionvilles}
      </Select>
    


      <h6>Centre</h6>
       <Select
        className="input"
        placeholder="Choisir centre"
        onChange={(value) => {
          dispatch(centerActions.fetchCenters(value));
          centre=value
          setCentre(value)
        }}
        filterOption={false}
      >
        {optionsCenters}
      </Select>
      
      <Button className="button" onClick={() => dispatch(volActions.addVol({username, email,password,role,gouvernorat,ville,centre}))}>Ajouter</Button>
    </div>
  );
}

export default AddVolantaire;
