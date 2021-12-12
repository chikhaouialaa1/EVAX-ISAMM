import React from "react";
import {HomeOutlined, CalendarOutlined, InboxOutlined, CarryOutOutlined, ShopOutlined } from '@ant-design/icons';
export const SideBarData=[
    {
        title: 'Dashboard',
        path:'/',
        icon: <HomeOutlined/>,
        cName:'nav-text'
    },
    {
        title: 'Centre de vaccination',
        path:'/vaccinationCenter',
        icon: <ShopOutlined />,
        cName:'nav-text'
    },
    {
        title: 'Rendez-vous',
        path:'/rendezvous',
        icon: <CalendarOutlined />,
        cName:'nav-text'
    },
    {
        title: 'Vaccin',
        path:'/vaccin',
        icon: <InboxOutlined />,
        cName:'nav-text'
    },
    {
        title: 'Journées portes ouvertes',
        path:'/jpo',
        icon: <CarryOutOutlined />,
        cName:'nav-text'
    },

]