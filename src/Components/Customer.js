import React, { useState, useEffect } from 'react'
import TransferMoney from './TransferMoney'
import Alert from './Alert'
import axios from 'axios'

export default function Customer() {
    const [alert, setAlert] = useState(null)
    const [records, setRecords] = useState([]);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    useEffect(() => {
        // Fetch data from the server
        axios.get('http://localhost:8080/api/users/records')
            .then((response) => {
                console.log(response.data); // Add this line
                if (!response.data) {
                    throw new Error(`No data received from the server`);
                }
                setRecords(response.data);
            })
            .catch((error) => console.error('Error fetching data:', error));

    }, []);



    return (
        <div className='container p-5'>
            <Alert alert={alert} />
            <div className='p-4 d-flex justify-content-around flex-wrap'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://totalbalance.blog/wp-content/uploads/2018/12/money_transfer-e1544123010732.jpg" style={{ height: '10rem' }} className="card-img-top" alt="..." />
                    <div className="card-body border border-1">
                        {/* <a href="#" className="btn btn-primary">Transfer Money</a> */}
                        <a className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Send Money</a>

                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://img.freepik.com/premium-vector/digital-mobile-wallet-payment-cellphone-mobile-phone-vector-illustration-icon-flat-cartoon_101884-382.jpg?w=2000" style={{ height: '10rem' }} className="card-img-top" alt="..." />
                    <div className="card-body border">
                        {/* <a href="#" className="btn btn-primary">Check Balance</a> */}
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Check Balance</button>

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                        <TransferMoney showAlert={showAlert} />
                    </div>
                </div>
                <div className="col">
                    <div className="collapse multi-collapse" id="multiCollapseExample2">
                        <div className="card card-body d-flex align-items-center " style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU')" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                            <h2 className='p-3'><i>Hello Neeraj</i></h2>
                            <h5 className='p-1'>Current Balance: 10000</h5>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className='p-3'>
                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                    <div className="card card-body" style={{ width: '300px' }}>
                        <TransferMoney showAlert={showAlert} />
                    </div>
                </div>
            </div> */}


            <table className="table table-striped">
                <thead>
                    <tr className='table-dark'>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {records.length > 0 ? (
                        <tbody>
                            {records.map((record, index) => (
                                <tr key={index}>
                                    <td>{record.name}</td>
                                    <td>{record.email}</td>
                                    <td>{record.balance}</td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <td colSpan="3">Loading...</td>
                            </tr>
                        </tbody>
                    )}



                </tbody>
            </table>
        </div>
    )
}
