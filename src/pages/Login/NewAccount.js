import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import {postService} from '../../services/base'

const NewAccount = () =>{
    
    const navigate = useNavigate()
    const [form,setForm] = useState([])

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const id=form.id?form[form.length-1].id+1:1;
        const addData=[{id,...form}]
        const res = await postService('/data',addData)
        console.log(res)
        if(res.status===201) {
            alert("Data added successfully")
            navigate('/login')
        }
    }

    const Date=()=>{
        const date=[]
        for (let i = 1; i < 32; i++) {
             date.push(i)
        }
        return date;
    }
    const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const Year=()=>{
        const year=[]
        let first=2024
        for (let i = 1; i < 30; i++) {
            first=first-1
            year.push(first)
        }
        return year
    }

    const handleData=(e)=>{
        e.preventDefault()
        const {name,value} = e.target
        setForm({...form,[name]:value})
    }

    const navtoLogin=()=>{
        navigate('/login')
    }

    return(
        <div className="createNewAccount">
            <div className="newAcctitle">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
            </div>
            <div className="newAccheader">
                <h2>
                    Create a new Account
                </h2>
                <p>
                    it's quick and easy.
                </p>
                    <div id="newAccLine">
                    ______________________________________________________
                    </div>
                <form className="form">
                    <div className="names">
                        <input type="text" name="firstname" id="firstname" 
                            placeholder="First name"
                            value={form.firstname}
                            onChange={handleData}
                        />
                        <input type="text" name="lastname" id="lastname" 
                            placeholder="Surname"
                            value={form.lastname}
                            onChange={handleData}
                        />
                    </div>
                    <input type="text" name="number" id="number" 
                        placeholder="Mobile number or email address"
                        value={form.mobile}
                        onChange={handleData}
                    />
                    <input type="password" name="password" id="newAccpassword" 
                        placeholder="New password"
                        value={form.password}
                        onChange={handleData}
                    />
                    <div id="dob">
                        <p>Date of birth </p>
                    </div>
                    <div className="dobselect">
                        <select name="date" id="dobdate" onChange={handleData} value={form.date}>
                            {Date().map((item,index)=>(
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                        <select name="month" id="dobmonth" onChange={handleData} value={form.month}>
                            {month.map((item,index)=>(
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                        <select name="year" id="dobyear" onChange={handleData} value={form.year}>
                            {Year().map((item,index)=>(
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div id="gender">
                        <p>Gender</p>
                    </div>
                    <div className="genderselect">
                        <div id="malediv">
                        <p>Male</p>
                        <input type="radio" 
                            name="gender" 
                            id="male" 
                            value="Male"
                            onChange={handleData}
                            />
                        </div>
                        <div id="malediv">
                        <p>Female</p>
                        <input type="radio" 
                            name="gender" 
                            id="female" 
                            value="Female"
                            onChange={handleData}
                            />
                        </div>
                        <div id="malediv">
                        <p>Other</p>
                        <input type="radio" 
                            name="gender" 
                            id="custom" 
                            value="Other"
                            onChange={handleData}
                        />
                        </div>
                    </div>
                    <div id="term1">
                        <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                    </div>
                    <div id="term2">
                        <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. 
                            You may receive SMS notifications from us and can opt out at any time.</p>
                    </div>
                    <div className="signup">
                    <button id="signupbtn" type="button"
                    onClick={handleSubmit}
                    >
                        Sign Up
                    </button>
                    </div>
                    <div className="redirectLogin">
                    <a href=" " onClick={navtoLogin}
                    >Already have an account?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default NewAccount;