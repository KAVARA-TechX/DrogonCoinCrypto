import { Pagination } from "antd";
import React, { useState } from "react";
import UserNav from "../Nav/UserNav";
import { Radio } from 'antd';

const { Group } = Radio;
const Records = () => {
    const [value, setValue] = useState(1);

    const onChange = e => {
        setValue(e.target.value);
    };
    return (
        <>
            <UserNav />
            <div className="container">
                <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="card clas">
                            <div className="card-header" style={{ border: 'none' }}>
                                <Group onChange={onChange} value={value}>
                                    <Radio value={1}>Request Consultation</Radio>
                                    <Radio value={2}>General Query</Radio>
                                </Group>
                            </div>
                            <div className="card-body">

                                {value === 1 ?
                                    <>
                                        <h4>Withdraw History</h4>
                                        <table>
                                            <tr>
                                                <th>DATE</th>
                                                <th>NETWORK</th>
                                                <th>ADDRESS</th>
                                                <th>AMOUNT</th>
                                                <th>TXN HASH</th>
                                                <th>STATUS</th>
                                            </tr>
                                            <tr>

                                            </tr>
                                        </table>
                                        <p className="text-center" style={{ marginTop: '20px' }}>No Data</p>
                                    </> :
                                    <table>
                                        <tr>
                                            <th>DATE</th>
                                            <th>USERNAME</th>
                                            <th>ORDER AMOUNT</th>
                                            <th>BONUS</th>
                                            <th>TOKEN</th>
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td>08/19/2021</td>
                                            <td>Randeep</td>
                                            <td>49716702</td>
                                            <td>994334</td>
                                            <td>DROGON</td>
                                        </tr>
                                    </table>
                                }
                            </div>

                            <div className="card-footer" style={{ border: 'none' }}>
                                <Pagination defaultCurrent={1} total={10} />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Records;