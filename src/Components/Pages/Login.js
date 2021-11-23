import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactUs from "../ContactUs";
import HeaderNav from "../Nav/HeaderNav";
import Footer from "./Footer";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createOrUpdateUser } from "../../Functions/auth";
const Login = ({history}) => {
    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();
    const auth = getAuth();
    const dispatch = useDispatch();
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, pwd)
            .then( async(res) => {
                const { user } = res;
                const idTokenResult = await user.getIdTokenResult();
                createOrUpdateUser(idTokenResult.token)
                    .then((res) => {
                        console.log("CREATE OR UPDATE RES", res);
                        dispatch({
                            type: "LOGGED_IN_USER",
                            payload: {
                                name: res.data.name,
                                email: res.data.email,
                                token: idTokenResult.token,
                                _id: res.data._id,
                            },
                        });
                        history.push("/dashboard");
                    }).catch();
                }).catch(err => toast.error(err.code));
            }
    return (
            <>
                <HeaderNav />
                <div style={{ marginTop: '15%' }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-4">
                                <h4>Welcome back!</h4>
                                <input className="form-control" style={{ margin: '0px' }} onChange={e => setEmail(e.target.value)} placeholder="Email address" />
                                <br />
                                <input className="form-control" style={{ margin: '0px' }} onChange={e => setPwd(e.target.value)} placeholder="Password" />
                                <br />
                                <button className="btn" style={{ backgroundImage: 'linear-gradient(to bottom left, #00FE8B, #00FEAA,#00FFBC)', display: 'block', width: '100%' }}
                                    onClick={handleSignIn}
                                >SIGN IN</button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/forgot-password">Forgot password?</Link><br />
                        To create new account, Please <Link to="/create-account">Sign up</Link>
                    </div>
                </div>
            </>

        );
    }

    export default Login;