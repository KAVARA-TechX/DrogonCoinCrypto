import React from "react";
import contactUs from "../contact_form_img_500x350.png";
const ContactUs = () =>
    <div className="calendarIcon1" style={{ backgroundColor: "#00FFEE" }}>
        <div className="container pt-5 pb-5">
            <div className="row pt-5">
                <div className="col-md-6">
                    <img src={contactUs} alt="contact us"  className="contact"/>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="card contact-card" style={{ boxShadow: "4px 7px 4px 4px grey", borderRadius: '15px'}}>
                        <h4 className="text-center" style={{ color: '#1FFFCA', paddingTop: '10%', paddingBottom: '5%' }}>Contact Us</h4>
                        <input className="contact-input" type="text" placeholder="Full Name" />
                        <br />
                        <input className="contact-input" type="email" placeholder="E-Mail" style={{ marginTop: "8px" }} />
                        <br />
                        <textarea placeholder="Message..." style={{ marginTop: "8px",marginLeft:'20px',marginRight:'20px',padding:'10px' }} />
                        <br />
                        <div className="test">
                            <div style={{ float: 'right' }}>
                                <button className="flex p-1" style={{ marginBottom: '10%', width: '130px' }}>Submit</button>

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
                    <div className="col-md-6 mt-top">
                        <div className="card" style={{ boxShadow: "4px 7px 4px 4px grey", borderRadius: '15px' }}>
                            <h4 style={{ color: '#1FFFCA', marginLeft: '38px', marginTop: '10px' }}>Email Newsletter</h4>
                            <div style={{ paddingBottom: '15px' }}>
                                <input type="email" className="subscribe" placeholder="Email Address..." style={{ marginTop: "8px", width: '60%' }} />
                                <button className="flex p-1">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default ContactUs;