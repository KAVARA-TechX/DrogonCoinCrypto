import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactUs from "../ContactUs";
import HeaderNav from "../Nav/HeaderNav";
import Footer from "./Footer";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
const Login = () => {
    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();
    const auth = getAuth();
    const handleSignIn = () =>{
        signInWithEmailAndPassword(auth,email,pwd)
        .then((res)=>{
            console.log(res);
        })
        .catch(err=>console.log(err));
    }
    return (
        <>
        <HeaderNav/>
        <div style={{marginTop:'15%'}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                        <h4>Welcome back!</h4>
                        <input className="form-control" style={{margin:'0px'}} onChange={e=>setEmail(e.target.value)} placeholder="Email address"/>
                        <br/>
                        <input className="form-control" style={{margin:'0px'}} onChange={e=>setPwd(e.target.value)} placeholder="Password"/>
                        <br/>
                        <button className="btn" style={{backgroundImage: 'linear-gradient(to bottom left, #00FE8B, #00FEAA,#00FFBC)',display:'block',width:'100%'}}
                        onClick={handleSignIn}
                        >SIGN IN</button>
                    </div>
                </div>
            </div>
            <div className="text-center mt-3">
                <Link to="/forgot-password">Forgot password?</Link><br/>
                To create new account, Please <Link to="/create-account">Sign up</Link>
            </div>
        </div>
        <ContactUs/>
        <Footer/>
        </>

    );
}

export default Login;