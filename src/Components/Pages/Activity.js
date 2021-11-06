import { Pagination } from "antd";
import React from "react";
import UserNav from "../Nav/UserNav";

const Activity = () => {
    return (
        <>
            <UserNav />
            <div className="container">
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-8">
                        <div className="card clas">
                            <div className="card-header" style={{ border: 'none', paddingLeft: '40px', paddingTop: '10px' }}>
                                <h5>Login History</h5>
                            </div>
                            <div className="card-body" style={{ padding: '40px' }}>
                                <table>
                                    <tr>
                                        <th>TIME</th>
                                        <th>STATUS</th>
                                        <th>IP</th>
                                    </tr>
                                </table>
                            </div>
                            <div className="card-footer" style={{ border: 'none' }}>
                                <Pagination defaultCurrent={1} total={30} />
                                <br />
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
                    <div className="col-md-4" style={{ marginBottom: '20px', marginTop: '' }}>
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

export default Activity;