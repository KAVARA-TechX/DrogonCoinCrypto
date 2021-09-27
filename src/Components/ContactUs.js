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
                        <input type="text" placeholder="Full Name" />
                        <br />
                        <input type="email" placeholder="E-Mail" style={{ marginTop: "8px" }} />
                        <br />
                        <textarea placeholder="Message..." style={{ marginTop: "8px" }} />
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut velit rhoncus, vulputate ante sit
                        amet, sollicitudin eros. Sed vitae nisl nibh. Cras interdum scelerisque massa. Aliquam erat volutpat.
                        Nunc hendrerit vehicula sem, ac cursus lectus scelerisque id. Morbi non consectetur nibh.
                    </div>
                    <div className="col-md-6 mt-top">
                        <div className="card" style={{ boxShadow: "4px 7px 4px 4px grey", borderRadius: '15px' }}>
                            <h4 style={{ color: '#1FFFCA', marginLeft: '10px', marginTop: '10px' }}>Email Newsletter</h4>
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