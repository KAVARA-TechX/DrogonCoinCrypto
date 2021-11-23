import React from "react";

const Footer = () =>
    <footer>
        <div className="footer-social-container" style={{ backgroundColor: '#00FFEE' }}>
            <div className='parallelogram1 footer-container'>
                <div className="unskew">
                    <p className="footer-heading">Copyright &copy; 2021 Drogon.All Rights Reserved -Privacy Policy -Terms&amp; Conditions</p>
                </div>
            </div>
            <div className="footer-social">
                <div className="parallelogram">
                    <div className="unskew">
                        <a href="https://twitter.com/drogoncoin?t=c3sZfA8NW_VvoaLQPO6kyw&s=09" target="_blank">
                            <i className="fab fa-twitter footer-common" style={{ color: "#1DA1F2" }}></i>
                        </a>
                    </div>
                </div>
                <div className="parallelogram">
                    <div className="unskew">
                        <a href="https://www.instagram.com/p/CUNggi6Pb5T/?utm_source=ig_web_copy_link" target="_blank">
                            <i className="fab fa-instagram footer-common" style={{ color: "#CE387C" }}></i>
                        </a>
                    </div>
                </div>
                <div className="parallelogram">
                    <div className="unskew">
                        <a href="https://t.me/DrogonCommunity" target="_blank">
                            <i className="fab fa-telegram-plane footer-common" style={{ color: "#67BEEA" }}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </footer>
export default Footer;