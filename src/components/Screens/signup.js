import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {useProfile} from "../../context/profile-context";

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    let role = "USER";
    const navigate = useNavigate()
    const {signup} = useProfile()
    const handleSignup = async () => {
        try {
            await signup(
                emailRef.current.value,
                passwordRef.current.value,
                role
            )
            navigate('/profile')
        } catch (e) {
            alert('oops')
        }
    }
    return (
        <div>
            <h1>Signup</h1>
            <input ref={emailRef} placeholder="email" className="form-control" type="email"/>
            <input ref={passwordRef} placeholder="password" className="form-control"
                   type="password"/>

            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input onChange={() => role = "USER"} type="radio" className="btn-check" name="btnradio" id="btnradio1"
                       autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio1">User</label>

                <input onChange={() => role = "REVIEWER"} type="radio" className="btn-check" name="btnradio" id="btnradio2"
                       autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio2">Reviewer</label>

                <input onChange={() => role = "ADMIN"} type="radio" className="btn-check" name="btnradio" id="btnradio3"
                       autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio3">Admin</label>
            </div>

            <hr/>
            <button onClick={handleSignup} className="btn btn-primary">
                Signup
            </button>
        </div>
    );
};

export default Signup;