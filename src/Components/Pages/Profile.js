import React from "react";
import UserNav from "../Nav/UserNav";
import { Tabs } from 'antd';

const { TabPane } = Tabs;
const Profile = () => {
    const callback = () => {
        console.log("It works");
    }
    return (
        <>
            <UserNav />
            <div className="container" >
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-8">
                        <div className="card clas">
                            <div className="card-body" style={{ padding: '30px' }}>
                                <Tabs defaultActiveKey="1" onChange={callback} >
                                    <TabPane tab="PROFILE INFO" key="1">
                                        <div className="row">
                                            <div className="col-md-6">
                                            <label className="ml">Full Name</label>
                                                    <br />
                                                    <input />
                                                </div>
                                                <div className="col-md-6">
                                                <label className="ml">Email Address</label>
                                                    <br />
                                                    <input />
                                                </div>
                                            </div>
                                                    <label className="ml">Nationality</label>
                                                    <select className="form-control">
                                                        <option>India</option>
                                                        <option>India</option>
                                                    </select>
                                        <br />
                                        <button className="border-gradient border-gradient-green">Update Profile</button>
                                    </TabPane>
                                    <TabPane tab="SECURITY" key="2">
                                        <p>Security Settings</p>
                                        <br />
                                        <h4>Two-Factor Verification</h4>
                                        <p>
                                            Two-factor authentication is a method for protection your web account. When it is activated you
                                            need to enter not only your password, but also a special code. You can receive this code by in
                                            mobile app. Even if third person will find your password, then can't access with that code.
                                        </p>
                                        <br />
                                        <div className="d-flex">
                                            <button className="border-gradient border-gradient-green">Enable 2FA</button>
                                            <p style={{ marginLeft: 'auto' }}>
                                                CURRENT STATUS: <button disabled className="border-gradient border-gradient-green">Disabled</button></p>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="CHANGE PASSWORD" key="3">
                                        <table>
                                            <tr>
                                                <td>
                                                    <label>Old Password</label>
                                                    <input className="form-control"  />
                                                </td>
                                                <td></td>
                                            </tr>
                                            <br/>
                                            <tr>
                                                <td>
                                                    <label>New Password</label>
                                                    <input className="form-control" />
                                                </td>
                                                <td>
                                                    <label>Confirm New Password</label>
                                                    <input className="form-control" />
                                                </td>
                                            </tr>
                                        </table>
                                        <br/>
                                        <button className="border-gradient border-gradient-green">Submit</button>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card clas">
                            <div className="card-header" style={{ border: 'none' }}>
                                <p>DROGON</p>
                            </div>
                            <div className="card-body" style={{ padding: '30px' }}>
                                <h5>Token Balance</h5>
                                <p>456789009 DROGON</p>
                                <p>Your contribution:</p>
                                <li>0.00081054 BTC</li>
                                <li>0.00081054 ETH</li>
                                <li>50.42 USD</li>
                                <p>DROGON Address:</p>
                                <input />
                                <p>
                                    Note : <span className="text-danger">Don't make any deposits to the above address, sending any other coin or
                                        token to this address may result in the loss of your deposits.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '20px' }} >
                    <div className="col-md-8">
                    </div>
                    <div className="col-md-4" style={{ marginBottom: '20px' }}>
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

export default Profile;