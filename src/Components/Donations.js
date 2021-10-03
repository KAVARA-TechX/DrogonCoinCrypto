import React from "react";
import donation from '../donation.png';

const Donations = () =>
    <div className="pt-5 pb-5" style={{ backgroundColor: '#FBFBFB' }}>
        <h3 className="text-center" style={{ color: '#707070' }}>Charity Donations</h3>
        <div className="container">
            <div className="card donation-card mt-3" style={{ borderRadius: '25px' }}>
                <img src={donation} className="card-img-top" alt="..." style={{ borderRadius: '25px 0px 0px 25px' }} />
                <div className="card-body">
                    <h5 className="card-title">Acumen Fund</h5>
                    <p className="card-text">We have donated 10000$ to acumen fund which is, a nonprofit impact investment fund, raises charitable donations to make equity investments in early-stage companies that provide a product or service to the poor. It invests across the agriculture, education, energy, and healthcare sectors in several geographies, including Latin America and the Caribbean, North America, South Asia, and sub-Saharan Africa</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>


export default Donations;