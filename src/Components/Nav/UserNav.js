import React from 'react';
import logo from '../../DROGONLogo.jpg';
import { Link } from 'react-router-dom';
const UserNav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ margin: '0px', padding: "0px 15px 0px 0px" }}>
                <div className="parallelogram2">
                    <div className="unskew-nav">
                        <img src={logo} className="logo" alt="Drogon" />
                        <Link style={{ fontSize: '42px', fontWeight: '400' }} className="navbar-brand" to="/">Drogon</Link>
                    </div>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-user" aria-hidden="true"></i><i className="fas fa-caret-down"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false"> Welcome! Randeep <i className="fa fa-user" aria-hidden="true"></i></a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/withdraw">Withdraw</Link></li>
                                <li><Link className="dropdown-item" to="/activity">Activity</Link></li>
                                <div class="dropdown-divider"></div>
                                <li><p className="dropdown-item"><i class="fas fa-power-off"></i> Logout</p></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </nav>
            <div className="navbar navbar-expand-lg navbar-light nvMenu usermenu" role="navigation">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/dashboard">Dashboard <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://kavara-techx.github.io/CryptoCurrencyProject/" className="nav-link">Buy Tokens <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/transaction">Transactions <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/withdraw">Withdraw <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/records">Records <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link dHide" to="/refer">Referral</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link dHide" to="/activity">Activity</Link>
                        </li>
                        <div class="dropdown-divider"></div>
                        <li className="nav-item">
                            <a className="nav-link dHide" to="/records"><i class="fas fa-power-off"></i> Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default UserNav;