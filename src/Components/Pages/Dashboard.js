import React from "react";
import { Link } from "react-router-dom";
import UserNav from "../Nav/UserNav";
import { CanvasJSChart } from 'canvasjs-react-charts';
import { Slider } from 'antd';
const Dashboard = () => {
    const options = {
        animationEnabled: true,
        exportEnabled: false,
        theme: "light1", // "light1", "dark1", "dark2"
        title: {
            text: "DROGON"
        },
        axisY: {
            title: "",
            suffix: "",
            minimum: 0
        },
        axisX: {
            title: "",
            prefix: "DAY",
            interval: 1,
            minimum: 0
        },
        data: [{
            type: "line",
            toolTipContent: "DAY {x}: DROGN {y}",
            dataPoints: [
                { x: 0, y: 0 },
                { x: 1, y: 20 },
                { x: 2, y: 46 },
                { x: 3, y: 72 },
                { x: 4, y: 93 },
            ]
        }]
    }
    return (
        <div>
            <UserNav />
            <div className="container" style={{ marginTop: '20px', marginBottom: '20px' }}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card clas" style={{overflowX:'auto'}}>
                            <table>
                                <tr>
                                    <td style={{ borderRight: '1px solid black', width: '50%' }}>
                                        <div style={{ marginLeft: '10px' }}>
                                            <h4>DROGON BALANCE</h4>
                                            <p>7984345678908</p>
                                        </div>
                                    </td>
                                    <td >
                                        <div style={{ marginLeft: '10px' }}>
                                            <p >Token Name: Drogon</p>
                                            <p>Tiker: DROGON</p>
                                            <p>Price: 0.00001 USD</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* <div className="card clas">
                            <table>
                                <tr>
                                    <td>
                                        <div style={{ marginLeft: '10px' }}>
                                            <h4>DROGON BALANCE</h4>
                                            <p>7984345678908</p>
                                        </div>
                                    </td>
                                    <td >
                                        <div style={{ marginLeft: '10px' }}>
                                            <p >Token Name: Drogon</p>
                                            <p>Tiker: DROGON</p>
                                            <p>Price: 0.00001 USD</p>
                                        </div>

                                    </td>
                                </tr>
                            </table>
                        </div> */}
                    </div>
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-8">
                        <div className="card clas">
                            <div className="card-header" style={{ border: 'none' }}>
                                <h5>Transaction <Link style={{ float: 'right', textDecoration: 'none' }}>View All <em class="fas fa-angle-right"></em></Link></h5>
                            </div>
                            <div className="card-body tTable" style={{ paddingBottom: '32px' }}>
                                <table>
                                    <tr>
                                        <th>DROGON TOKENS</th>
                                        <th>AMOUNT</th>
                                        <th>DATE</th>
                                        <th>STATUS</th>
                                    </tr>
                                    <tr>
                                        <td><p><i class="far fa-times-circle fa-2x"></i> 98439482974879823.24</p></td>
                                        <td><p>0.1 BTC</p></td>
                                        <td><p>2021/10/19 17:00</p></td>
                                        <td><p></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><i class="far fa-check-circle fa-2x"></i> 98439482974879823.24</p></td>
                                        <td><p>0.1 BTC</p></td>
                                        <td><p>2021/10/19 17:00</p></td>
                                        <td>
                                                <button class="border-gradient border-gradient-green">
                                                    Completed
                                                </button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card clas">
                            <div className="card-header" style={{ border: 'none' }}>
                                <h4>Drogon</h4>
                            </div>
                            <div className="card-body" style={{ border: '1px solid black', margin: '0px 20px 10px 20px', padding: '0px' }}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ borderRight: '1px solid black', padding: '0.6rem 0.6rem' }}>
                                        <input style={{ margin: '0px', width: '50%', border: 'none' }} value="0.1" />
                                    </div>
                                    <select style={{ width: '50%', border: 'none' }}>
                                        <option>BTC</option>
                                        <option>ETH</option>
                                        <option>MATIC</option>
                                        <option>MATICERC20</option>
                                        <option>MATICBEP20</option>
                                        <option>USDTTRC</option>
                                        <option>USDTERC</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ marginLeft: '22px', marginBottom: '10px' }}>
                                <p>=567890987654 Drogon</p>
                                <p><i class="fa fa-info-circle" aria-hidden="true"></i> Amount calculated based current tokens price</p>
                                <button className="border-gradient border-gradient-green">BUY TOKENS</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-8">
                        <div className="card clas">
                            <div className="card-header" style={{ border: 'none' }}>
                                <h5>DROGON SALE GRAPH</h5>
                            </div>
                            <div className="card-body" style={{ paddingBottom: '32px', height: '320px' }}>
                                <CanvasJSChart options={options} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card clas" style={{ paddingTop: '32px' }}>
                            <div className="card-header" style={{ border: 'none' }}>
                                <h4>Drogon Sale Progress</h4>
                            </div>
                            <div className="card-body">
                                <p>Session Supply</p>
                                <h5>234567898765 <span>Drogon</span></h5>
                                <Slider defaultValue={99} disabled="true" />
                                <h5>Sale Ends in </h5>
                                <div className="row" style={{ marginBottom: '50px', paddingBottom: '50px' }}>
                                    <div className="col-3">
                                        <input value={'Day'} disabled style={{ margin: '0px', padding: '0px', width: '100%', textAlign: 'center' }} />
                                    </div>
                                    <div className="col-3">
                                        <input value={'Hour'} disabled style={{ margin: '0px', padding: '0px', width: '100%', textAlign: 'center' }} />
                                    </div>
                                    <div className="col-3">
                                        <input value={'Min'} disabled style={{ margin: '0px', padding: '0px', width: '100%', textAlign: 'center' }} />
                                    </div>
                                    <div className="col-3">
                                        <input value={'Sec'} disabled style={{ margin: '0px', padding: '0px', width: '100%', textAlign: 'center' }} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;