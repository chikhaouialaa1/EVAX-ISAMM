import React, { useState, useEffect } from "react";
import "./VolontaireDetail.css";
import { useParams } from "react-router-dom";
import VolontaireDescription from "../../../../components/Volontaire/VolontaireDescription/VolontaireDescription";
import "antd/dist/antd.css";
import { EyeOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import AdminSideBar from "../../../../components/AdminSideBar/AdminSideBar";
import AdminHeader from "../../../../components/AdminHeader/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../redux/actions/Voluntaries/index";

function VolontaireDetail() {
  const { id } = useParams();
  const voluntaries = useSelector((state) => state.voluntaries);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  console.log(voluntaries);
  useEffect(() => {
    dispatch(actions.fetchVolById(id));
  }, []);

  

  const updateVol= async (id, vol) => {
      dispatch(actions.updateVol(id, { vol }))
  } 
  var VolDescription = voluntaries.selectedVol[0];
  console.log(voluntaries);
  return (
    <div className="volantaire-content">
      <AdminSideBar />
      <div className="vaccinationCenters" style={{width:1050}}>
        <AdminHeader />
        {VolDescription && (
        <VolontaireDescription VolDescription={VolDescription} updateVol={updateVol} />)}
      </div>
    </div>
  );
}

export default VolontaireDetail;
