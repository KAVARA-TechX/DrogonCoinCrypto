import React from "react";
import { Link } from "react-router-dom";
import ContactUs from "../ContactUs";
import HeaderNav from "../Nav/HeaderNav";
import Footer from "./Footer";

const SignIn = () => {
    return (
        <div>
            <HeaderNav />
            <div className="container-fluid" style={{ marginTop: '15%' }}>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <h4>Welcome to Drogon!</h4>
                        <input className="form-control" style={{ margin: '0px' }} placeholder="Name" />
                        <br />
                        <input className="form-control" style={{ margin: '0px' }} placeholder="Email address" />
                        <br />
                        <input className="form-control" style={{ margin: '0px' }} placeholder="Password" />
                        <br />
                        <input className="form-control" style={{ margin: '0px' }} placeholder="Confirm Password" />
                        <br />
                        <button className="btn" style={{ backgroundImage: 'linear-gradient(to bottom left, #00FE8B, #00FEAA,#00FFBC)', 
                        color: '#fff', display: 'block', width: '100%' }}>SIGN UP</button>
                    </div>
                    <div className="text-center mt-3">
                        Already have an account ? <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
            <ContactUs/>
            <Footer/>
        </div>
    );
}

export default SignIn;