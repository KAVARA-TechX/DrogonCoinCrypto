import React from "react";

const Footer = () =>
    <footer>
        <div className="footer-social-container" style={{ backgroundColor: '#00FFEE' }}>
            <div className='parallelogram1 footer-container'>
                <div className="unskew">
                    <p className="footer-heading">Copyright &copy; 2021 Drogon. All Rights Reserved -Privacy Policy -Terms&amp;Conditions</p>
                </div>
            </div>
            <div className="footer-social">
                <div className="parallelogram">
                    <div className="unskew">
                        <i className=" fab fa-facebook-f footer-facebook" style={{color: "blue" }}></i>
                    </div>
                </div>
                <div className="parallelogram">
                    <div className="unskew">
                        <i className="fab fa-twitter footer-common" style={{color: "#1DA1F2" }}></i>
                    </div>
                </div>
                <div className="parallelogram">
                    <div className="unskew">
                        <i className="fab fa-instagram footer-common" style={{color: "#CE387C" }}></i>
                    </div>
                </div>
                <div className="parallelogram">
                    <div className="unskew">
                        <i className="fab fa-discord footer-common" style={{color: "#8B9DFE" }}></i>
                    </div>
                </div>
                <div className="parallelogram">
                    <div className="unskew">
                        <i className="fab fa-reddit-alien footer-common" style={{color: "#FF5700" }}></i>
                    </div>
                </div>
                <div className="parallelogram">
                    <div className="unskew">
                        <i className="fab fa-telegram-plane footer-common" style={{color: "#67BEEA" }}></i>
                    </div>
                </div>
            </div>
        </div>

    </footer>
export default Footer;