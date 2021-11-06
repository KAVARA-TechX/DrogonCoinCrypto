import { Pagination } from "antd";
import React from "react";
import UserNav from "../Nav/UserNav";

const Transactions = () => {
    return (
        <>
            <UserNav />
            <div className="container">
                <div className="row" style={{ marginTop: "20px" }}>
                    <div className="card clas">
                        <div className='card-header' style={{ border: 'none' }}>
                            User Transactions
                        </div>
                        <div className="card-body">
                            <table>
                                <tr>
                                    <th>TRANX NO</th>
                                    <th>TOKENS</th>
                                    <th>AMOUNT</th>
                                    <th>USD AMOUNT</th>
                                    <th>ADDRESS</th>
                                    <th>STATUS</th>
                                </tr>
                                <tr>
                                    <td><p><i class="far fa-times-circle fa-2x"></i> 98439482974879823.24</p></td>
                                    <td><p>0.1 BTC</p></td>
                                    <td><p>2021/10/19 17:00</p></td>
                                    <td><p>6298.5832</p>
                                        <p>USD <i class="fa fa-info-circle" aria-hidden="true"></i></p></td>
                                    <td><p>3G3noz6DhhgyQ39....</p>
                                        <p>2021/10/19 17:00</p></td>
                                </tr>
                                <tr>
                                    <td><p><i class="far fa-times-circle fa-2x"></i> 98439482974879823.24</p></td>
                                    <td><p>0.1 BTC</p></td>
                                    <td><p>2021/10/19 17:00</p></td>
                                    <td><p>6298.5832</p>
                                        <p>USD <i class="fa fa-info-circle" aria-hidden="true"></i></p></td>
                                    <td><p>3G3noz6DhhgyQ39....</p>
                                        <p>2021/10/19 17:00</p></td>
                                </tr>
                                <tr>
                                    <td><p><i class="far fa-times-circle fa-2x"></i> 98439482974879823.24</p></td>
                                    <td><p>0.1 BTC</p></td>
                                    <td><p>2021/10/19 17:00</p></td>
                                    <td><p>6298.5832</p>
                                        <p>USD <i class="fa fa-info-circle" aria-hidden="true"></i></p></td>
                                    <td><p>3G3noz6DhhgyQ39....</p>
                                        <p>2021/10/19 17:00</p></td>
                                </tr>
                                <tr>
                                    <td><p><i class="far fa-check-circle fa-2x"></i> 98439482974879823.24</p></td>
                                    <td><p>0.1 BTC</p></td>
                                    <td><p>2021/10/19 17:00</p></td>
                                    <td><p>6298.5832</p>
                                        <p>USD <i class="fa fa-info-circle" aria-hidden="true"></i></p></td>
                                    <td><p>3G3noz6DhhgyQ39....</p>
                                        <p>2021/10/19 17:00</p></td>
                                    <td><button className="border-gradient border-gradient-green">Completed</button></td>
                                </tr>
                            </table>
                        </div>
                        <div className="card-footer" style={{ border: 'none' }}>
                            <Pagination defaultCurrent={1} total={10} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Transactions;