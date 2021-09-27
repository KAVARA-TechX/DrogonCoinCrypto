import React from "react";
import donation from '../donation.png';

const Donations = () =>
    <div className="pt-5 pb-5" style={{ backgroundColor: '#FBFBFB' }}>
        <h3 className="text-center" style={{ color: '#707070' }}>Charity Donations</h3>
        <div className="container">
            <div className="card donation-card mt-3" style={{ borderRadius: '25px' }}>
                <img src={donation} className="card-img-top" alt="..." style={{ borderRadius: '25px 0px 0px 25px' }} />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>


export default Donations;