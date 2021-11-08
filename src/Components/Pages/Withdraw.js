import React, { useState } from "react";
import UserNav from '../Nav/UserNav';
const Withdraw = () => {
    const [network, setNetwork] = useState("");
    return (
        <>
            <UserNav />
            <div className="container">
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-8">
                        <div className="card clas">
                            <div className="card-body">
                            <h4>Withdraw</h4>
                            <p>Network Type</p>
                            <div>
                                <input type="radio" checked name="network" id="matic" />
                                <label  for="matic" checked>MATIC Network</label>
                                <input type="radio" name="network" style={{ marginLeft: '8px' }} id="bsc" />
                                <label  for="bsc">BSC Network</label>
                                <br />
                                <br />
                                <label className="ml">Balance</label>
                                <br />
                                <input style={{ width: '60%' }} className="form-control" placeholder="Balance" />
                                <br />
                                <label className="ml">Withdraw Address</label>
                                <br />
                                <input style={{ width: '60%' }} className="form-control" placeholder="Withdraw Address" />
                                <br />
                                <label className="ml">Amount</label>
                                <br />
                                <input style={{ width: '60%' }} className="form-control" placeholder="Amount" />
                                <br />
                                <label className="ml">Withdraw Fee: (DROGON)</label>
                                <br />
                                <input style={{ width: '60%' }} className="form-control" placeholder="100000" />
                                <br />
                                <label className="ml">Total</label>
                                <br />
                                <input style={{ width: '60%' }} className="form-control" />
                                <br />
                                <button className="border-gradient border-gradient-green">Submit</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card clas">
                            <div className="card-header" style={{ border: 'none' }}>
                                <p>DROGON</p>
                            </div>
                            <div className="card-body" >
                                <h5>Token Balance</h5>
                                <p>456789009 DROGON</p>
                                <p>Your contribution:</p>
                                <li>0.00081054 BTC</li>
                                <li>0.00081054 ETH</li>
                                <li>50.42 USD</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-8">
                    </div>
                    <div className="col-md-4 mt" style={{ marginBottom: '20px'}}>
                        <div className="card clas">
                            <div className="card-header" style={{ border: 'none' }}>
                                <p>Pre-Sale Token</p>
                            </div>
                            <div className="card-body" style={{ padding: '20px' }}>
                                <p>DROGON TOKEN PRICE</p>
                                <p>1 MATIC = 4567890877 DROGON</p>
                                <br />
                                <p>EXCHANGE RATE</p>
                                <p>1 ETH = 4098765467 DROGON</p>
                                <br />
                                <p>CURRENT INVOICE BONUS</p>
                                100%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Withdraw;