'use client'
import React, { useState } from 'react'
import "./Loginform.scss"
import Image from 'next/image'
import loginImage from "../../../public/png.png"

function Loginform() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginFormDisplay, setloginFormDisplay] = useState("")

    const handleSubmit = (event: any) => {
        event.preventDefault()
        if (username === 'demo' && password === 'password') {
            alert("logged In");
            setloginFormDisplay("none")
        } else {
            alert("incorrect credintial");
            setloginFormDisplay("")
        }
    }

    return (
        <>
            <div className="loginFormmainContainer" style={{ display: loginFormDisplay }}>
                <div className="loginFormContainer">
                    <div className="loginFormInputContainer">
                        <div className="inputContainer">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="username"
                                    className="input"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    className="input"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <button type="submit" className="submitButton">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="loginFormImageContainer">
                        <div className="image">
                            <Image src={loginImage} alt=''></Image>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loginform