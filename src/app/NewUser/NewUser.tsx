'use client'
import React, { useState } from 'react';
import "./NewUser.scss";

const userModel = {
    date: "",
    name: "",
    number: "",
    vehicleModel: "",
    service: "",
    additional: "",
    status: "",
    attendant: "",
    source: "",
    image: "",
    BookAppointment: "",
    AppointmentDate: ""
}
function NewUser() {
    const [data, setData] = useState(undefined);
    const [userData, setUserData] = useState(userModel)


    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    const onOptionChangeHandler = (event: any) => {
        setData(event.target.value);
        console.log(
            event.target.value
        );
    };
    const [workType, setWorkType] = useState(undefined);
    const onWorktypeSelect = (event: any) => {
        setWorkType(event.target.value);
        console.log(
            event.target.value
        );
    };

    function TiLocationArrowOutline() {
        return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" ><path d="M11.087 20.914c-.353 0-1.219-.146-1.668-1.496l-1.209-3.627-3.628-1.209c-1.244-.415-1.469-1.172-1.493-1.587s.114-1.193 1.302-1.747l11.375-5.309c1.031-.479 1.922-.309 2.348.362.224.351.396.97-.053 1.933l-5.309 11.375c-.529 1.135-1.272 1.305-1.665 1.305zm-5.39-8.068l4.094 1.363 1.365 4.093 4.775-10.233-10.234 4.777z" /></svg>;
    }

    const adduser = (e: any) => {
        e.preventDefault();

        let usersList: any = localStorage.getItem("usersList");
        let userEntryList: any = localStorage.getItem("userEntryList");

        if (usersList) {
            usersList = JSON.parse(usersList);
        } else {
            usersList = [];
        }

        if (userEntryList) {
            userEntryList = JSON.parse(userEntryList);
        } else {
            userEntryList = [];
        }

        const isDuplicate = usersList.find((user: any) => user.number === userData.number);

        if (!isDuplicate) {
            usersList.push(userData);
            window.localStorage.setItem("usersList", JSON.stringify(usersList));
            setUserData(userModel);
        } else {
            setUserData(usersList);
            userEntryList.push(userData);
            window.localStorage.setItem("userEntryList", JSON.stringify(userEntryList));
        }
    }

    const handlePhoneNumber = (e: any) => {
        let usersList: any = localStorage.getItem("usersList");
        const phoneNumber = e.target.value;
        const existingUser = usersList.find((user: any) => user.number === phoneNumber);
        if (existingUser) {
            setUserData({ ...userData, name: "" });
        }
        setUserData({ ...userData, number: phoneNumber });
    };
    function handleChange(e: any) {
        console.log(e.target.files);
        const selectedFile = URL.createObjectURL(e.target.files[0])
        setUserData({ ...userData, image: selectedFile })
    }

    return (
        <>
            <div className="login-box">
                <form onSubmit={adduser}>
                    <div className='tagContainer'>
                        <div className='tag'>Customer Details</div>
                        <div className="user-box">
                            <input type="text" name="" value={currentDate} onChange={(e: any) => setUserData({ ...userData, date: currentDate })} required />
                        </div>
                    </div>
                    <div className="user-box">
                        <input value={userData.number} type="text" name="" required onChange={handlePhoneNumber} />
                        <label>Contact No</label>
                    </div>
                    <div className="user-box">
                        <input value={userData.name} onChange={(e: any) => setUserData({ ...userData, name: e.target.value })} type="text" name="" required />
                        <label>Name</label>
                    </div>

                    <div className="user-box">
                        <select name="cars" id="cars" value={userData.vehicleModel} onChange={(e: any) => setUserData({ ...userData, vehicleModel: e.target.value })}>
                            <option value=""></option>
                            <option value="Tata Harrier">Tata Harrier</option>
                            <option value="Tata Altroz">Tata Altroz</option>
                            <option value="Tata Nexon">Tata Nexon</option>
                            <option value="Tata Tiago">Tata Tiago</option>
                            <option value="Tata Tigor">Tata Tigor</option>
                            <option value="Tata Safari">Tata Safari</option>
                            <option value="Tata Hexa">Tata Hexa</option>
                            <option value="Maruti Suzuki Swift">Maruti Suzuki Swift</option>
                            <option value="Maruti Suzuki Baleno">Maruti Suzuki Baleno</option>
                            <option value="Maruti Suzuki Dzire">Maruti Suzuki Dzire</option>
                            <option value="Maruti Suzuki Vitara Brezza">Maruti Suzuki Vitara Brezza</option>
                            <option value="Maruti Suzuki Ertiga">Maruti Suzuki Ertiga</option>
                            <option value="Maruti Suzuki Alto">Maruti Suzuki Alto</option>
                            <option value="Maruti Suzuki Ciaz">Maruti Suzuki Ciaz</option>
                            <option value="Hyundai Creta">Hyundai Creta</option>
                            <option value="Hyundai Venue">Hyundai Venue</option>
                            <option value="Hyundai Verna">Hyundai Verna</option>
                            <option value="Hyundai i20">Hyundai i20</option>
                            <option value="Hyundai Grand i10">Hyundai Grand i10</option>
                            <option value="Hyundai Tucson">Hyundai Tucson</option>
                            <option value="Hyundai Kona">Hyundai Kona</option>
                            <option value="Honda Civic">Honda Civic</option>
                            <option value="Honda Accord">Honda Accord</option>
                            <option value="Honda City">Honda City</option>
                            <option value="Honda Jazz">Honda Jazz</option>
                            <option value="Honda Amaze">Honda Amaze</option>
                            <option value="Honda CR-V">Honda CR-V</option>
                            <option value="Toyota Camry">Toyota Camry</option>
                            <option value="Toyota Corolla">Toyota Corolla</option>
                            <option value="Toyota Fortuner">Toyota Fortuner</option>
                            <option value="Toyota Innova">Toyota Innova</option>
                            <option value="Toyota Glanza">Toyota Glanza</option>
                            <option value="Toyota Yaris">Toyota Yaris</option>
                            <option value="Ford EcoSport">Ford EcoSport</option>
                            <option value="Ford Figo">Ford Figo</option>
                            <option value="Ford Endeavour">Ford Endeavour</option>
                            <option value="Ford Aspire">Ford Aspire</option>
                            <option value="Chevrolet Cruze">Chevrolet Cruze</option>
                            <option value="Chevrolet Beat">Chevrolet Beat</option>
                            <option value="Chevrolet Enjoy">Chevrolet Enjoy</option>
                            <option value="Volkswagen Polo">Volkswagen Polo</option>
                            <option value="Volkswagen Vento">Volkswagen Vento</option>
                            <option value="Volkswagen Tiguan">Volkswagen Tiguan</option>
                            <option value="Nissan Kicks">Nissan Kicks</option>
                            <option value="Nissan Magnite">Nissan Magnite</option>
                            <option value="Renault Kwid">Renault Kwid</option>
                            <option value="Renault Duster">Renault Duster</option>
                            <option value="Renault Triber">Renault Triber</option>
                            <option value="Mercedes-Benz C-Class">Mercedes-Benz C-Class</option>
                            <option value="Mercedes-Benz E-Class">Mercedes-Benz E-Class</option>
                            <option value="Mercedes-Benz GLC">Mercedes-Benz GLC</option>
                            <option value="Mercedes-Benz GLE">Mercedes-Benz GLE</option>
                            <option value="BMW 3 Series">BMW 3 Series</option>
                            <option value="BMW 5 Series">BMW 5 Series</option>
                            <option value="BMW X3">BMW X3</option>
                            <option value="BMW X5">BMW X5</option>
                            <option value="Audi A3">Audi A3</option>
                            <option value="Audi A4">Audi A4</option>
                            <option value="Audi Q5">Audi Q5</option>
                            <option value="Audi Q7">Audi Q7</option>
                            <option value="Tesla Model S">Tesla Model S</option>
                            <option value="Tesla Model 3">Tesla Model 3</option>
                            <option value="Tesla Model X">Tesla Model X</option>
                            <option value="Tesla Model Y">Tesla Model Y</option>
                            <option value="Lamborghini Aventador">Lamborghini Aventador</option>
                            <option value="Lamborghini Huracán">Lamborghini Huracán</option>
                            <option value="Lamborghini Urus">Lamborghini Urus</option>
                            <option value="Ferrari 488">Ferrari 488</option>
                            <option value="Ferrari Portofino">Ferrari Portofino</option>
                            <option value="Ferrari F8 Tributo">Ferrari F8 Tributo</option>
                            <option value="Porsche 911">Porsche 911</option>
                            <option value="Porsche Cayenne">Porsche Cayenne</option>
                            <option value="Porsche Panamera">Porsche Panamera</option>
                            <option value="Jaguar F-Type">Jaguar F-Type</option>
                            <option value="Jaguar XF">Jaguar XF</option>
                            <option value="Jaguar F-PACE">Jaguar F-PACE</option>
                            <option value="Land Rover Range Rover">Land Rover Range Rover</option>
                            <option value="Land Rover Discovery">Land Rover Discovery</option>
                            <option value="Land Rover Defender">Land Rover Defender</option>
                            <option value="Jeep Compass">Jeep Compass</option>
                            <option value="Jeep Wrangler">Jeep Wrangler</option>
                            <option value="Jeep Grand Cherokee">Jeep Grand Cherokee</option>
                        </select>
                        <label>Vehicle Model</label>
                    </div>
                    <div className="user-box">
                        <select name="workType" id="workType" value={userData.service} onChange={(e: any) => setUserData({ ...userData, service: e.target.value })} onClick={onWorktypeSelect}>
                            <option value="NA"></option>
                            <option value="Body Wash">Body Wash</option>
                            <option value="Foam Wash">Foam Wash</option>
                            <option value="Full Wash">Full Wash</option>
                            <option value="Diesel Wash">Diesel Wash</option>
                            <option value="Interior Cleaning">Interior Cleaning</option>
                            <option value="Exterior Rubbing Polishing">Exterior Rubbing Polishing</option>
                            <option value="Under Body Coating">Under Body Coating</option>
                            <option value="Head Light Buffing">Head Light Buffing</option>
                            <option value="Window Beading Spray">Window Beading Spray</option>
                            <option value="Engine Coating">Engine Coating</option>
                            <option value="Glass Coating">Glass Coating</option>
                            <option value="Ceremic Coating">Ceremic Coating</option>
                            <option value="Rat Repellent Spray">Rat Repellent Spray</option>
                            <option value="Silencer Coating">Silencer Coating</option>
                            <option value="Servicing">Servicing</option>
                            <option value="Repair">Repair</option>
                        </select>
                        <label>Work Type</label>
                    </div>
                    {workType == 'Denting Penting' && <div className="user-box">
                        <input type="file" id='myFile' name="filename" required onChange={handleChange} />
                        <img src={userData.image} />
                    </div>}
                    <div className="user-box">
                        <input type="text" name="" value={userData.additional} onChange={(e: any) => setUserData({ ...userData, additional: e.target.value })} required />
                        <label>Additional Work / Remark</label>
                    </div>
                    <div className="user-box">
                        <select name="status" id="status" value={userData.status} onChange={(e: any) => setUserData({ ...userData, status: e.target.value })}>
                            <option value="NA"></option>
                            <option value="Close">Close</option>
                            <option value="Converted">Converted</option>
                            <option value="Want Near By">Want Near By</option>
                            <option value="Pending">Pending</option>
                            <option value="High Cost">High Cost</option>
                            <option value="High Cost">No Response</option>
                            <option value="Other">Other</option>
                        </select>
                        <label>Status</label>
                    </div>
                    {(userData.status == 'Want Near By' || userData.status == 'Other') && <div className="user-box">
                        <input type="Reason" name="" required />
                        <label>Reason</label>
                    </div>}

                    <div className="user-box">
                        <select name="Attendant" id="Attendant" value={userData.attendant} onChange={(e: any) => setUserData({ ...userData, attendant: e.target.value })}>
                            <option value="NA"></option>
                            <option value="Rohit">Rohit</option>
                            <option value="Mangesh">Mangesh</option>
                            <option value="Madhuri">Madhuri</option>
                            <option value="Gracy">Gracy</option>
                            <option value="Meghna">Meghna</option>
                        </select>
                        <label>Attendant</label>
                    </div>
                    <div className="user-box">
                        <select name="Source" id="Source" value={userData.source} onChange={(e: any) => setUserData({ ...userData, source: e.target.value })} onClick={onOptionChangeHandler}>
                            <option value="NA"></option>
                            <option value="Social Media">Social Media</option>
                            <option value="SEO">SEO</option>
                            <option value="personal">Personal</option>
                            <option value="Walk In">Walk In</option>
                        </select>
                        <label>Source</label>
                    </div>
                    <div className="user-box">
                        <select name="ServiceAt" id="ServiceAt" value={userData.source} onChange={(e: any) => setUserData({ ...userData, source: e.target.value })} onClick={onOptionChangeHandler}>
                            <option value="NA"></option>
                            <option value="Workshop">Workshop</option>
                            <option value="Door Step">Door Step</option>
                        </select>
                        <label>Service Provide At</label>
                    </div>
                    {userData.source == 'personal' && <div className="user-box">
                        <select name="ref" id="ref">
                            <option value="NA"></option>
                            <option value="Madhuri">Madhuri</option>
                            <option value="Gracy">Gracy</option>
                            <option value="Meghna">Meghna</option>
                            <option value="Meghna">Other Emp</option>
                        </select>
                        <label>Name Of Ref.</label>
                    </div>}
                    <button type='submit' className='submit button'><TiLocationArrowOutline />Create</button>
                </form>
            </div>
        </>
    )
}

export default NewUser