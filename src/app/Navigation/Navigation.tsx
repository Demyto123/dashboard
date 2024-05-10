'use client'
import React, { useState } from 'react';
import "./Navigation.scss";
import Logo from "../../../public/Logo_1.png";
import Image from 'next/image';
import NewUser from '../NewUser/NewUser';
import Dashboard from '../Dashboard/Dashboard';
import Appoinment from '../Appoinment/Appoinment';
import Preview from "../Coustomerpreview/Coustomerpreview";
import CRM from '../crm/crm';

function Navigation() {

  function RiDashboardFill() {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em"><g><path fill="none" d="M0 0h24v24H0z" /><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" /></g></svg>;
  }

  function FaUser() {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" /></svg>;
  }

  function SiGooglecalendar() {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} role="img" viewBox="0 0 24 24" height="1em" width="1em"><title /><path d="M1.84 4.15c-.993 0-1.8.787-1.84 1.772.003.058.004.116.012.172l1.19 7.597h6.384v-.43h.873c1.145 0 2.083-.567 2.083-1.793 0-1.227-.659-1.835-1.827-1.835-1.213 0-1.861.79-1.88 1.75h-1.25c.024-1.643 1.411-2.77 3.132-2.77 1.932 0 3.078 1.096 3.078 2.882 0 1.138-.869 1.895-1.563 2.196h6.079v-3.468l-2.619.873V9.922l3.647-1.31h.203v5.08h5.256l1.19-7.598c.008-.057.01-.115.012-.172a1.842 1.842 0 0 0-1.84-1.772zm-.615 9.696l-.611 7.877a1.846 1.846 0 0 0 1.843 1.974h19.087a1.846 1.846 0 0 0 1.842-1.974l-.611-7.877h-5.233v5.233H16.31v-5.233h-5.806c.635.277 1.443.908 1.44 2.255 0 1.95-1.457 2.98-3.224 2.98-1.53 0-3.176-.815-3.23-2.771h1.258c.028 1.214.955 1.758 1.972 1.758 1.168 0 1.976-.613 1.976-1.94 0-1.014-.554-1.888-2.238-1.888h-.873v-.394zM3.076.304c-1.02 0-1.846.826-1.846 1.846l.006 1.957a1.83 1.83 0 0 1 .61-.112h20.308c.217 0 .422.045.616.113V2.15c0-1.02-.826-1.846-1.846-1.846zm3.078.922a.923.923 0 0 1 .922.924.923.923 0 0 1-.922.921.923.923 0 0 1-.924-.921.923.923 0 0 1 .924-.924zm11.692 0a.923.923 0 0 1 .924.924.923.923 0 0 1-.924.921.923.923 0 0 1-.922-.921.923.923 0 0 1 .922-.924Z" /></svg>;
  }

  function MdSettings() {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" ><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" /></svg>;
  }

  function VscPreview() {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" ><path fillRule="evenodd" clipRule="evenodd" d="M2 2h12l1 1v10l-1 1H2l-1-1V3l1-1zm0 11h12V3H2v10zm11-9H3v3h10V4zm-1 2H4V5h8v1zm-3 6h4V8H9v4zm1-3h2v2h-2V9zM7 8H3v1h4V8zm-4 3h4v1H3v-1z" /></svg>;
  }


  const [activeTab, setActiveTab] = useState("Dashboard");


  return (
    <div className='parentMain'>
      <main>
        <nav className="main-menu">
          <div className='logo'>
            <Image src={Logo} alt=''></Image>
          </div>
          <ul>

            <li className={`nav-item ${activeTab == "Dashboard" ? "active" : ""}`} onClick={() => setActiveTab("Dashboard")}>
              <b></b>
              <b></b>
              <a href="#">
                <i className="nav-icon"><RiDashboardFill /></i>
                <span className="nav-text">Dashboard</span>
              </a>
            </li>

            <li className={`nav-item ${activeTab == "New Request" ? "active" : ""}`} onClick={() => setActiveTab("New Request")}>
              <b></b>
              <b></b>
              <a href="#">
                <i className="nav-icon"><FaUser /></i>
                <span className="nav-text">New Request</span>
              </a>
            </li>

            <li className={`nav-item ${activeTab == "appoinment" ? "active" : ""}`} onClick={() => setActiveTab("appoinment")}>
              <b></b>
              <b></b>
              <a href="#">
                <i className="nav-icon"><SiGooglecalendar /></i>
                <span className="nav-text">Appointment</span>
              </a>
            </li>

            <li className={`nav-item ${activeTab == "Preview" ? "active" : ""}`} onClick={() => setActiveTab("Preview")}>
              <b></b>
              <b></b>
              <a href="#">
                <i className="nav-icon"><VscPreview /></i>
                <span className="nav-text">Preview</span>
              </a>
            </li>

            <li className={`nav-item ${activeTab == "CRM" ? "active" : ""}`} onClick={() => setActiveTab("CRM")}>
              <b></b>
              <b></b>
              <a href="#">
                <i className="nav-icon"><MdSettings /></i>
                <span className="nav-text">CRM</span>
              </a>
            </li>
          </ul>
        </nav>
      </main>
      <div className="ContentContainer">
        {activeTab == "Dashboard" && <Dashboard />}
        {activeTab == "New Request" && <NewUser />}
        {activeTab == "appoinment" && <Appoinment />}
        {activeTab == "Preview" && <Preview />}
        {activeTab == "CRM" && <CRM />}
      </div>
    </div>
  )
}

export default Navigation  