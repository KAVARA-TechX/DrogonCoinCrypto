import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactUs from "../ContactUs";
import HeaderNav from "../Nav/HeaderNav";
import Footer from "./Footer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const SignIn = ({history}) => {
    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();


    const handleSignIn = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pwd)
            .then((res) => {
                console.log(res);
                history.push("/dashboard");
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                      console.log(`Email address ${email} already in use.`);
                      break;
                    case 'auth/invalid-email':
                      console.log(`Email address ${email} is invalid.`);
                      break;
                    case 'auth/operation-not-allowed':
                      console.log(`Error during sign up.`);
                      break;
                    case 'auth/weak-password':
                      console.log('Password is not strong enough. Add additional characters including special characters and numbers.');
                      break;
                    default:
                      console.log(error.message);
                      break;
                  }
            });
    }
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
                        <input className="form-control" style={{ margin: '0px' }} onChange={e => setEmail(e.target.value)} placeholder="Email address" />
                        <br />
                        <input className="form-control" style={{ margin: '0px' }} onChange={e => setPwd(e.target.value)} placeholder="Password" />
                        <br />
                        <input className="form-control" style={{ margin: '0px' }} placeholder="Confirm Password" />
                        <br />
                        <button className="btn" style={{
                            backgroundImage: 'linear-gradient(to bottom left, #00FE8B, #00FEAA,#00FFBC)',
                            display: 'block', width: '100%'
                        }} onClick={handleSignIn}>SIGN UP</button>
                    </div>
                    <div className="text-center mt-3">
                        Already have an account ? <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
            <ContactUs />
            <Footer />
        </div>
    );
}

export default SignIn;