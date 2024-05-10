import React, { useEffect, useState } from 'react';
import "./Dashboard.scss";
import NewUser from '../NewUser/NewUser';

function Dashboard() {
    const [usersList, setusersList] = useState([]);
    const [userEntryList, setuserEntryList] = useState([]);
    const [openNewEntryForm, setOpenNewEntryForm] = useState(false);
    const [dateFilter, setDateFilter] = useState('');
    const [contactFilter, setContactFilter] = useState('');

    useEffect(() => {
        let entries = localStorage.getItem("userEntryList");
        setuserEntryList(entries ? JSON.parse(entries) : []);
    }, []);

    useEffect(() => {
        let users = localStorage.getItem("usersList");
        setusersList(users ? JSON.parse(users) : []);
    }, []);

    function ImCancelCircle() {
        return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" ><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z" /><path d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z" /></svg>;
    }


    function FiFilter() {
        return <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" ><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>;
    }

    const filteredUsersList = usersList.filter((user: any) => {
        return user.date.includes(dateFilter) && user.number.includes(contactFilter);
    });

    const filteredUserEntryList = userEntryList.filter((user: any) => {
        return user.date.includes(dateFilter) && user.number.includes(contactFilter);
    });

    const allDates = [...new Set(usersList.map((user: any) => user.date))];
    const allNumber = [...new Set(usersList.map((user: any) => user.number))];

    const [filterToggle, setFilterToggle] = useState(false)

    return (
        <>
            <div className="childContainerDash">
                <div className="stickyContainer">

                    <div className='filterContainer'>
                        <div className="svgContainer" onClick={() => setFilterToggle(true)}>
                            <FiFilter />
                        </div>
                        {filterToggle == true && <div className='filterHoverPopup'>
                            <div className="imgcontainer" onClick={() => setFilterToggle(false)}><ImCancelCircle /></div>
                            <div className="filterPopupRow">
                                <div className="filterTag">Date</div>
                                <select name="filteredDate" className='filterDropdown' id="filteredDate" value={dateFilter} onChange={(e: any) => setDateFilter(e.target.value)}>
                                    <label htmlFor="filteredDate">Date</label>
                                    <option value="">None</option>
                                    {allDates.map((date: string, index: number) => (
                                        <option key={index} value={date}>{date}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="filterPopupRow">
                                <div className="filterTag">Number</div>
                                <select name="filteredDate" className='filterDropdown' id="filteredDate" value={contactFilter} onChange={(e: any) => setContactFilter(e.target.value)}>
                                    <option value="">None</option>
                                    {allNumber.map((number: string, index: number) => (
                                        <option key={index} value={number}>{number}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="filterPopupRow"></div>
                            <div className="filterPopupRow"></div>
                        </div>}
                    </div>

                    <div className='tableHeading'>
                        <div className='rowContent'>Date
                        </div>
                        <div className='rowContent'>Name</div>
                        <div className='rowContent'>Contact
                        </div>
                        <div className='rowContent'>Vehicle Model</div>
                        <div className='rowContent'>Work Type</div>
                        <div className='rowContent'>Remark</div>
                        <div className='rowContent'>Status</div>
                        <div className='rowContent'>Attendant</div>
                        <div className='rowContent'>Source</div>
                    </div>
                </div>

                {filteredUsersList.map((user: any, index) => (
                    <div key={index} className='rowContentContainer'>
                        <div className='rowContent'>{user.date}</div>
                        <div className='rowContent'>{user.name}</div>
                        <div className='rowContent'>{user.number}</div>
                        <div className='rowContent'>{user.vehicleModel}</div>
                        <div className='rowContent'>{user.service}</div>
                        <div className='rowContent'>{user.additional}</div>
                        <div className='rowContent'>{user.status}</div>
                        <div className='rowContent'>{user.attendant}</div>
                        <div className='rowContent'>{user.source}</div>
                    </div>
                ))}
                {filteredUserEntryList.map((user: any, index) => (
                    <div key={index} className='rowContentContainer'>
                        <div className='rowContent'>{user.date}</div>
                        <div className='rowContent'>{user.name}</div>
                        <div className='rowContent'>{user.number}</div>
                        <div className='rowContent'>{user.vehicleModel}</div>
                        <div className='rowContent'>{user.service}</div>
                        <div className='rowContent'>{user.additional}</div>
                        <div className='rowContent'>{user.status}</div>
                        <div className='rowContent'>{user.attendant}</div>
                        <div className='rowContent'>{user.source}</div>
                    </div>
                ))}
                <button className='addNewEntry' onClick={() => setOpenNewEntryForm(true)}>Add New</button>
                {Boolean(openNewEntryForm) &&
                    <div className='customerContentContainer'>
                        <div className='childcustomerContentContainer'>
                            <div className="closeModal" onClick={() => setOpenNewEntryForm(false)}><ImCancelCircle /></div>
                            <NewUser />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Dashboard;
