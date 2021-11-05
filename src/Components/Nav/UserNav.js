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
                    <i class="fas fa-caret-down"></i>
                </button>
            </nav>
            <div className="navbar navbar-expand-lg navbar-light nvMenu" role="navigation" style={{paddingLeft:'25%'}}>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/dashboard">Dashboard <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <a href="https://kavara-techx.github.io/CryptoCurrencyProject/" className="nav-link">Buy Tokens <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/transaction">Transactions <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/profile">Profile <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Withdraw <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Records <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default UserNav;