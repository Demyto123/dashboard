// 'use client'
// import React, { useEffect, useState } from 'react';
// import "./Dashboard.scss";
// import NewUser from '../NewUser/NewUser';

// function Dashboard() {
//     const [usersList, setusersList] = useState([]);
//     const [userEntryList, setuserEntryList] = useState([])
//     const [openNewEntryForm, setOpenNewEntryForm] = useState(false)


//     useEffect(() => {
//         let entries: any = localStorage.getItem("userEntryList")
//         if (entries) {
//             entries = JSON.parse(entries)
//         } else {
//             entries = []
//         }
//         setuserEntryList(entries);
//     }, [])

//     useEffect(() => {
//         let users: any = localStorage.getItem("usersList")
//         if (users) {
//             users = JSON.parse(users)
//         } else {
//             users = []
//         }
//         setusersList(users)

//         setusersList(users)
//     }, [])

//     function ImCancelCircle() {
//         return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" ><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z" /><path d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z" /></svg>;
//     }
//     return (
//         <>
//             <div className="childContainerDash">
//                 <div style={{ height: "50px", position: "fixed", top: "0px", left: "0px" }}></div>
//                 <div className='tableHeading'>
//                     <div className='rowContent'>Date</div>
//                     <div className='rowContent'>Name</div>
//                     <div className='rowContent'>Contact</div>
//                     <div className='rowContent'>Vehicle Model</div>
//                     <div className='rowContent'>Work Type</div>
//                     <div className='rowContent'>Remark</div>
//                     <div className='rowContent'>Status</div>
//                     <div className='rowContent'>Attendant</div>
//                     <div className='rowContent'>Source</div>
//                 </div>
//                 {usersList.map((user: any, index: number) => {
//                     return <div key={index} className='rowContentContainer'>
//                         <div className='rowContent'>{user.date}</div>
//                         <div className='rowContent'>{user.name}</div>
//                         <div className='rowContent'>{user.number}</div>
//                         <div className='rowContent'>{user.vehicleModel}</div>
//                         <div className='rowContent'>{user.service}</div>
//                         <div className='rowContent'>{user.additional}</div>
//                         <div className='rowContent'>{user.status}</div>
//                         <div className='rowContent'>{user.attendant}</div>
//                         <div className='rowContent'>{user.source}</div>
//                     </div>
//                 })}
//                 {userEntryList.map((user: any, index: number) => {
//                     return <div key={index} className='rowContentContainer'>
//                         <div className='rowContent'>{user.date}</div>
//                         <div className='rowContent'>{user.name}</div>
//                         <div className='rowContent'>{user.number}</div>
//                         <div className='rowContent'>{user.vehicleModel}</div>
//                         <div className='rowContent'>{user.service}</div>
//                         <div className='rowContent'>{user.additional}</div>
//                         <div className='rowContent'>{user.status}</div>
//                         <div className='rowContent'>{user.attendant}</div>
//                         <div className='rowContent'>{user.source}</div>
//                     </div>
//                 })}
//                 <button className='addNewEntry' onClick={() => setOpenNewEntryForm(true)}>Add New</button>
//                 {Boolean(openNewEntryForm) &&
//                     <div className='customerContentContainer'>
//                         <div className='childcustomerContentContainer'>
//                             <div className="closeModal" onClick={() => setOpenNewEntryForm(false)}><ImCancelCircle /></div>
//                             <NewUser />
//                         </div>
//                     </div>
//                 }
//             </div>
//             {/* {openCustomerPreview == true && <div style={{ height: "500px", width: "100%", backgroundColor: "red" }}>

//             </div>} */}
//         </>
//     )
// }

// export default Dashboard