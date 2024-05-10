import React, { Fragment, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Appoinment.scss";
const appointmentModel = {
    name: "",
    number: "",
    service: "",
    date: ""
}
export default function CalendarGfg() {

    const [value, onChange] = useState(new Date());
    const [openAppointmentModal, setOpenAppointmentModal] = useState<any>({ active: false, selectedDay: null })
    const [appointmentData, setappointmentData] = useState(appointmentModel)
    const [appointmentsList, setappointmentsList] = useState<any[]>([])



    useEffect(() => {
        let appointmentBooking: any = localStorage.getItem("abc")
        if (appointmentBooking) {
            appointmentBooking = JSON.parse(appointmentBooking)
        }
        else {
            appointmentBooking = []
        }
        setappointmentsList(appointmentBooking)
    },
        [])
    function FiEdit() {
        return <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" ><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>;
    }

    function ImCancelCircle() {
        return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" ><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z" /><path d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z" /></svg>;
    }


    const getUniqDate = () => {
        let dates = [...new Set(appointmentsList.map(appt => new Date(appt.date).toDateString()))]
        dates = dates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
        return dates
    }


    function addAppointment(e: any) {
        console.log("appointmentuserData", appointmentData);
        let appointmentsList: any = localStorage.getItem("abc");
        if (appointmentsList) {
            appointmentsList = JSON.parse(appointmentsList);
        } else {
            appointmentsList = [];
        }
        appointmentData.date = openAppointmentModal.selectedDay;
        appointmentsList.push(appointmentData);
        setappointmentsList(appointmentsList);
        window.localStorage.setItem("abc", JSON.stringify(appointmentsList));
        setOpenAppointmentModal({ active: false, selectedDay: null });
        e.preventDefault();
    }

    const onSelectDay = (day: any) => {
        setOpenAppointmentModal({ active: true, selectedDay: day })
        setappointmentData(appointmentModel)
    }

    const removeAppt = (index: number) => {
        const apptCopy = [...appointmentsList]
        apptCopy.splice(index, 1);
        setappointmentsList(apptCopy)
        window.localStorage.setItem("abc", JSON.stringify(apptCopy));
    }
    const [openExtraAppointment, setOpenExtraAppointment] = useState('')
    function openModal(date: any) {
        setOpenExtraAppointment(date.toDateString());
    }
    return (
        <>
            <div className='childContainer'>
                <div className="appointmentNavBarcontainer">
                    <div className="appointmentNavBar">

                        {getUniqDate().map((date: any, di: number) => {
                            return <Fragment key={di}>
                                <div className="navBarDateContainer">
                                    <div className="navDate">{date}</div>
                                    <div className="navDateLine"></div>
                                </div>
                                {appointmentsList.map((appt: any, index: number) => {
                                    return <Fragment key={index}>
                                        {date == new Date(appt.date).toDateString() && <>
                                            <div className="navAppointmentDetails" >
                                                <div className='bookigId' id={appt.number}>+91 {appt.number}</div>
                                                <div className='bookingOptions'>
                                                    <div className="imgcontainer" onClick={() => {
                                                        setappointmentData(appt);
                                                        setOpenAppointmentModal({ active: true, selectedDay: appt.date })
                                                    }}><FiEdit /></div>
                                                    <div className="imgcontainer" onClick={() => removeAppt(index)}><ImCancelCircle /></div>
                                                </div>
                                                <div className='hoverPopup'>
                                                    <div><b>Name :</b> {appt.name}</div>
                                                    <div><b>WorkType :</b> {appt.service}</div>
                                                    <div><b>Contact :</b> {appt.number}</div>
                                                </div>
                                            </div>
                                        </>}
                                    </Fragment>
                                })}
                            </Fragment>
                        })}

                        {openAppointmentModal.active && <>
                            <form onSubmit={addAppointment}>
                                <div className="form-main-container">
                                    <div className="form" id="form">

                                        <div className="form-content">
                                            <div className='tagContainer'>
                                                <div className='tag'>Appointment Information</div>
                                                <div className="imgcontainer" onClick={() => setOpenAppointmentModal({ active: false, selectedDay: null })}><ImCancelCircle /></div>
                                            </div>

                                            <div className="input-row">
                                                <input
                                                    type="text"
                                                    value={appointmentData.name} onChange={(e: any) => setappointmentData({ ...appointmentData, name: e.target.value })}
                                                />
                                                <label htmlFor="name" className={`${appointmentData.name == "" ? "" : "active"}`}>
                                                    Name
                                                </label>
                                            </div>

                                            <div className="input-list-row">
                                                <label htmlFor="Service" className={`${appointmentData.service == "" ? "" : "active"}`}>
                                                    Service Type
                                                </label>

                                                <select id="Service" value={appointmentData.service} onChange={(e: any) => setappointmentData({ ...appointmentData, service: e.target.value })}>
                                                    <option value="NA"></option>
                                                    <option value="Servicing">Servicing</option>
                                                    <option value="Servicing">Repairing</option>
                                                    <option value="Denting Penting">Denting Penting</option>
                                                    <option value="Interior Detailing">Interior Detailing</option>
                                                    <option value="Inspection">Inspection</option>
                                                    <option value="Washing">Washing</option>
                                                    <option value="Rubbing Polish">Rubbing Polish</option>
                                                </select>
                                            </div>
                                            <div className="input-row">
                                                <input value={appointmentData.number} onChange={(e: any) => setappointmentData({ ...appointmentData, number: e.target.value })} type="text" name="" required />
                                                <label htmlFor="number" className={`${appointmentData.number == "" ? "" : "active"}`}>
                                                    Number
                                                </label>
                                            </div>
                                            <br />
                                            <br />
                                            <button type='submit' className='submit'>Create</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </>}


                    </div>
                </div>

                <Calendar
                    className="calendar-wrap"
                    tileClassName="day-wrap"

                    tileContent={({ date, view }) => <div className='gap'>
                        {appointmentsList.filter((d: any) => date.toDateString() == new Date(d.date).toDateString()).map((appt: any, i: number) => {
                            return <Fragment key={i}>
                                {i < 2 &&
                                    <div className="navAppointmentDetails"
                                        onClick={(e) => {
                                            setappointmentData(appt);
                                            setOpenAppointmentModal({ active: true, selectedDay: appt.date })
                                            e.stopPropagation()
                                        }}>
                                        <div className='bookigId'>{appt.number}</div>
                                    </div>
                                }
                                {(i >= 2 && i == (appointmentsList.filter((d: any) => date.toDateString() == new Date(d.date).toDateString()).length - 1)) &&
                                    <div onClick={(e) => { openModal(date); e.stopPropagation() }} className='more'> {i - 1} More... </div>}

                                {openExtraAppointment == date.toDateString() && <div className='extraAppointmentModal'>
                                    <div className="imgcontainer" onClick={(e) => { setOpenExtraAppointment(""); e.stopPropagation() }}><ImCancelCircle /></div>
                                    <div className="extraAppointmentdate">{new Date(openExtraAppointment).getDate()}</div>
                                    {appointmentsList.map((appt: any, i: number) => {
                                        return <Fragment key={i}>
                                            {openExtraAppointment == new Date(appt.date).toDateString() && <>
                                                <div className="navAppointmentDetails" >
                                                    <div className='bookigId' id={appt.number}>+91 {appt.number}</div>
                                                    <div className='hoverPopup'>
                                                        <div> <b>Name :</b> {appt.name}</div>
                                                        <div><b>WorkType :</b> {appt.service}</div>
                                                        <div><b>Contact :</b> {appt.number}</div>
                                                    </div>
                                                </div>
                                            </>}
                                        </Fragment>
                                    })}
                                </div>}

                            </Fragment>
                        })}

                    </div>}
                    onChange={() => onChange}
                    value={value}
                    onClickDay={(selectedDay) => onSelectDay(selectedDay)}
                />


            </div >
        </>
    );
}
