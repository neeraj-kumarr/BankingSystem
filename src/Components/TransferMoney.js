import React from 'react'

export default function TransferMoney(props) {

    const handleTransfer = () => {
        props.showAlert("Transfer Completed", "success")
    };
    return (
        <>
            <div className='border border-2 rounded p-4' style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7t3TPoPgmhbrIGkY5iLCfENgExc44sWJUg&usqp=CAU')" }}>
                <div className="row g-3 align-items-center justify-content-center">
                    <div className="col-auto">
                        <label for="inputPassword6" className="col-form-label">Name :</label>
                        <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                    </div>
                    <div className="col-auto">
                        <label for="inputPassword6" className="col-form-label">Amount :</label>
                        <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='p-3'>
                        <button type="button" className="btn btn-outline-success" onClick={handleTransfer}>Transfer</button>
                    </div>
                    <div className='p-3'>
                        <button type="button" className="btn btn-outline-danger">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
