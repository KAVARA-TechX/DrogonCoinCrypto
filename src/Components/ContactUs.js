import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import contactUs from "../contact_form_img_500x350.png";
import { createContact } from "../Functions/auth";
const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const { user } = useSelector((state) => ({ ...state }));
    const handleSubmit = () => {
        if (user.token == null) {
            toast.warn("Please login to continue");
        }
        else if (typeof (name) !== String || name === '') {
            toast.warn("Please enter valid name");
        }
        else if (email === '') {
            toast.warn("Email is required");
        } else if (message === '') {
            toast.warn("Message is required");
        } else {
            console.log(name, email, message);
            createContact(user.token, name, email, message).then(res => {
                console.log(res);
                toast.success("Your query has been submitted,Please wait While our experts contact you.");
            }).catch(err => console.log(err));
            setName("");
            setEmail("");
            setMessage("");
        }

    }
    return (
        <div className="calendarIcon1" style={{ backgroundColor: "#00FFEE" }}>
            <div className="container pt-5 pb-5">
                <div className="row pt-5">
                    <div className="col-md-6">
                        {/* <img src={contactUs} alt="contact us"  className="contact"/> */}
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="card contact-card" style={{ boxShadow: "4px 7px 4px 4px grey", borderRadius: '15px' }}>
                            <h4 className="text-center" style={{ color: '#000', paddingTop: '10%', paddingBottom: '5%' }}>Contact Us</h4>
                            <input style={{ borderColor: '#000' }} value={name} onChange={e => setName(e.target.value)} className="contact-input" type="text" placeholder="Full Name" />
                            <br />
                            <input type='email' className="contact-input" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-Mail" style={{ marginTop: "8px", borderColor: '#000' }} />
                            <br />
                            <textarea placeholder="Message..." value={message} onChange={e => setMessage(e.target.value)} style={{ marginTop: "8px", borderColor: '#000', marginLeft: '20px', marginRight: '20px', padding: '10px' }} />
                            <br />
                            <div className="test">
                                <div style={{ float: 'right' }}>
                                    <button className="flex p-1" onClick={handleSubmit} style={{ marginBottom: '10%', width: '130px', marginTop: '8px', borderColor: '#000', borderRadius: '15px', color: '#000' }}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" >
                    <div className="row pb-5" style={{ paddingTop: "10%" }}>
                        <div className="col-md-6">
                            Extremely active community that loves our mission. Our
                            discord channel is filled with community members 24/7 that would love to
                            help you. Do not trust random messages of people claiming to be “support”
                            or ever give out your wallet info to anyone.For more news regarding the
                            ‘DROGON’ token don’t forget to subscribe to our newsletter
                        </div>
                        <div className="col-md-6 mt-top" style={{ width: '44%' }}>
                            <div className="card" style={{ boxShadow: "4px 7px 4px 4px grey", borderRadius: '15px' }}>
                                <h4 style={{ color: '#000', marginLeft: '38px', marginTop: '10px' }}>Email Newsletter</h4>
                                <div style={{ paddingBottom: '15px' }}>
                                    <input type="email" className="subscribe" placeholder="Email Address..." style={{ borderColor: '#000', marginTop: "8px", width: '60%' }} />
                                    <button className="flex p-1" style={{ border: '2px solid #000', color: '#000' }}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ContactUs;