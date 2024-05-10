'use client'
import React, { Fragment, useEffect, useState } from 'react';
import "./crm.scss";


function crm() {

    const [usersList, setusersList] = useState([]);
    const [searchQuery, setsearchQuery] = useState("")
    const [filteredeUsr, setFilteredUser] = useState<any>([])


    useEffect(() => {
        let users: any = localStorage.getItem("usersList")
        if (users) {
            users = JSON.parse(users)
        } else {
            users = []
        }
        setFilteredUser(users)

        setusersList(users)
    }, [])


    useEffect(() => {

        const filterduser = usersList.filter((searchFilter: any) => searchFilter.number.includes(searchQuery));
        setFilteredUser(filterduser)
        console.log(searchQuery)
    }, [searchQuery, usersList])



    function BiSearchAlt() {
        return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" ><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" /><path d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z" /></svg>;
    }
    function ImCancelCircle() {
        return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" ><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z" /><path d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z" /></svg>;
    }
    const [appointmentDetailsModal, setAppointmentDetailsModal] = useState<any>(null)


    const [entryData, setEntryData] = useState([])

    useEffect(() => {
        let entries: any = localStorage.getItem("userEntryList")
        if (entries) {
            entries = JSON.parse(entries)
        } else {
            entries = []
        }
        setEntryData(entries);
    }, [])
    console.log("entryData", entryData);
    return (
        <>
            <div className="childContainerPrev">
                <div className="stickyContainer">

                    <div className='searchBar'>
                        <div className="search">
                            <input type="number" className="search__input" placeholder="Serch Numbers....." value={searchQuery} onChange={(e) => setsearchQuery(e.target.value)} />
                            <button className="search__button">
                                <BiSearchAlt />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='childSubContainer'>


                    {filteredeUsr.map((user: any, index: number) => {
                        return <div className="card" key={index} onClick={() => setAppointmentDetailsModal(user)}>
                            <div className="top-section">
                                <div className="border"></div>
                                <div className='contentContainer'>
                                    <div> <b>Name:</b> {user.name}</div>
                                    <div> <b>Vehicle:</b> {user.vehicleModel}</div>
                                    <div> <b>Date:</b> {user.date}</div>
                                </div>
                            </div>
                            <div className="bottom-section">
                                <span className="title">{user.number}</span>
                                <div className="row row1">
                                    <div className="item">
                                        <span className="big-text">26</span>
                                        <span className="regular-text">No &nbsp;of &nbsp; Visit</span>
                                    </div>
                                    <div className="item">
                                        <span className="big-text">24</span>
                                        <span className="regular-text">Premium</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    })}



                    {Boolean(appointmentDetailsModal) && <div className='customerContentContainer'>
                        <div className='childcustomerContentContainer'>
                            <div className="closeModal" onClick={() => setAppointmentDetailsModal(null)}><ImCancelCircle /></div>
                            <h3 style={{ width: "100 %", padding: '0 30px', color: 'var(--primary-color)' }}>Personal Info</h3>
                            <div className="personalInfoContainer">
                                <div className='infoContainer'>
                                    <div className='infoContainerTags'>Date: </div>
                                    <div className='infoDetails'>{appointmentDetailsModal.date}</div>
                                </div>
                                <div className='infoContainer'>
                                    <div className='infoContainerTags'>Name: </div>
                                    <div className='infoDetails'>{appointmentDetailsModal.name}</div>
                                </div>
                                <div className='infoContainer'>
                                    <div className='infoContainerTags'>Number: </div>
                                    <div className='infoDetails'>{appointmentDetailsModal.number}</div>
                                </div>
                                <div className='infoContainer'>
                                    <div className='infoContainerTags'>Vehicle Modal:</div>
                                    <div className='infoDetails'> {appointmentDetailsModal.vehicleModel}</div>
                                </div>
                                <div className='infoContainer'>
                                    <div className='infoContainerTags'>Service: </div>
                                    <div className='infoDetails'>{appointmentDetailsModal.service}</div>
                                </div>
                                <div className='infoContainer'>
                                    <div className='infoContainerTags'>Remark: </div>
                                    <div className='infoDetails'>{appointmentDetailsModal.additional}</div>
                                </div>
                                <div className='infoContainer'>
                                    <div className='infoContainerTags'>Status: </div>
                                    <div className='infoDetails'>{appointmentDetailsModal.status}</div>
                                </div>
                                <div className='infoContainer'>
                                    <div className='infoContainerTags'>Attendant: </div>
                                    <div className='infoDetails'>{appointmentDetailsModal.attendant}</div>
                                </div>
                                <div className='infoContainer'>
                                    <div className='infoContainerTags'>Source: </div>
                                    <div className='infoDetails'>{appointmentDetailsModal.source}</div>
                                </div>
                            </div>
                            {entryData.filter((e: any) => e.number == appointmentDetailsModal.number).map((newEntry: any, i: number) => {
                                return <div key={i} className='rowContentContainer'>
                                    <div className='rowContent'>{newEntry.date}</div>
                                    <div className='rowContent'>{newEntry.name}</div>
                                    <div className='rowContent'>{newEntry.number}</div>
                                    <div className='rowContent'>{newEntry.vehicleModel}</div>
                                    <div className='rowContent'>{newEntry.service}</div>
                                    <div className='rowContent'>{newEntry.additional}</div>
                                    <div className='rowContent'>{newEntry.status}</div>
                                    <div className='rowContent'>{newEntry.attendant}</div>
                                    <div className='rowContent'>{newEntry.source}</div>
                                </div>
                            })}



                        </div>
                    </div>}

                </div>
            </div >
        </>
    )
}

export default crm
