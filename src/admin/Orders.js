import React from 'react';
import Base from '../core/Base';
import { Link } from "react-router-dom";


const Orders = () => {
    return (
        <Base 
        title='Welcome admin'
        description='Manage Orders here'
        >
        <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
       </Link>
        <div className="row mt-5">
            <div className="col-12">
                <h1>Developer still working on this page kindly be patient and give us time</h1>
            </div>
       </div>    
    

        </Base>
    );
}

export default Orders;
