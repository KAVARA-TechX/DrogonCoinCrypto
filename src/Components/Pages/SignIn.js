import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactUs from "../ContactUs";
import HeaderNav from "../Nav/HeaderNav";
import Footer from "./Footer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createUser } from "../../Functions/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


const SignIn = ({history}) => {
    const [name,setName] = useState();
    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();
    const [confirmPassword,SetConfirmPassword] = useState();

    const dispatch = useDispatch();
    const handleSignIn = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pwd)
            .then( async(res) => {
                const { user } = res;
                const idTokenResult = await user.getIdTokenResult();
                createUser(name,user.email).then((res)=>{
                    dispatch({
                        type:'LOGGED_IN_USER',
                        payload:{
                            name:res.data.name,
                            email:res.data.email,
                            token:idTokenResult.token
                        }
                    });
                    history.push("/dashboard");
                }).catch(err=>toast.error(err));
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                      toast.error(`Email address ${email} already in use.`);
                      break;
                    case 'auth/invalid-email':
                      toast.error(`Email address ${email} is invalid.`);
                      break;
                    case 'auth/operation-not-allowed':
                      toast.error(`Error during sign up.`);
                      break;
                    case 'auth/weak-password':
                      toast.error('Password is not strong enough. Add additional characters including special characters and numbers.');
                      break;
                    default:
                      toast.error(error.message);
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
                        <input className="form-control" style={{ margin: '0px' }} onChange={e => setName(e.target.value)} placeholder="Name" />
                        <br />
                        <input className="form-control" style={{ margin: '0px' }} onChange={e => setEmail(e.target.value)} placeholder="Email address" />
                        <br />
                        <input className="form-control" style={{ margin: '0px' }} onChange={e => setPwd(e.target.value)} placeholder="Password" />
                        <br />
                        <input className="form-control" style={{ margin: '0px' }} onChange={e => SetConfirmPassword(e.target.value)} placeholder="Confirm Password" />
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