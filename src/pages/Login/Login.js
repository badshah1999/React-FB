import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import {getService} from '../../services/base'

const Login = () => {
    
    const [data,setData] = useState([])
    const [credential,setCredential] =useState([])

    const getData=async()=>{
        const response= await getService('/credential')
        setCredential(response)
        console.log(response)
        return response
    }

    useEffect(()=>{
        getData()
        console.log("Done Api call")
    },[])

    const history = useNavigate()

    const handleData=(e)=>{
        e.preventDefault()
        const {name,value} = e.target
        setData([{...data,[name]:value}])
    }

    const performCreateNewAccount=()=>{
        history('/newAccount')
    }

    const performLogin=()=>{
        // if(data.username===credential.username && data.password===credential.password){
        if(credential.username==='sample@gmail.com' && credential.password==='Sample@123'){
        history('/home')
        }
    }

    return(
        <div className="login">
            <div className="title">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
            </div>
            <div className="points">
                <h2>Facebook helps you connect and share with the people in your life.</h2>
            </div>
            <form className="loginbox">
                <div className="input">
                    <input type="text" 
                        name="username" 
                        id="username"
                        placeholder="Email address or phone number"
                        autoFocus
                        value={data.username}
                        onChange={handleData}
                        required
                    />
                    <input type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Password"
                        value={data.password}
                        onChange={handleData}
                        required
                    />
                </div>
                <button id="loginbtn"
                    onClick={performLogin}
                    >
                    Log in
                </button>
                <div className="forgotPass">
                    <a href=" ">Forgotten Password?</a>
                </div>
                <div id="line">
                    __________________________________________
                </div>
                <div className="newAccount">
                    <button id="newAccountbtn" 
                        type="button"
                        onClick={performCreateNewAccount}
                    >
                        Create new account
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Login