import { nodeName } from "jquery";
import React from "react";
import { Link } from "react-router-dom";
import ContactUs from "../ContactUs";
import HeaderNav from "../Nav/HeaderNav";
import Footer from "./Footer";

const ForgotPassword = () => {
    return (
        <div>
            <HeaderNav />
            <div className="container-fluid" style={{ marginTop: '15%' }}>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <h4 >Password Recovery</h4>
                        <input className="form-control" style={{ margin: '0px' }} placeholder="Email address" />
                        <br />
                        <button className="btn" style={{ backgroundImage: 'linear-gradient(to bottom left, #00FE8B, #00FEAA,#00FFBC)', 
                        display: 'block', width: '100%' }}>SUBMIT</button>
                    </div>
                    <div className="text-center mt-3">
                    Go To <Link to="/login" >Login</Link>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
            <ContactUs />
            <Footer />

        </div>
    )
}

export default ForgotPassword;