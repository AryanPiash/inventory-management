import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
// import axiosPrivate from '../axios/axiosPrivate';

const AddedItems = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            const url = `https://laptopstorebd.herokuapp.com/item?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
             });
            console.log(data);
            setItems(data)
               
        }
        getItems()
    }, [user])
    return (
        <div>
            <h2 className='py-3 text-center text-primary'>Total items: {items.length}</h2>
            <div className="container table-responsive">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Supplier</th>
                        <th>Image</th>
                    </tr>
                </thead>
                {
                    items.map(item =>
                        <tbody key={item._id}>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.des}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.supplier}</td>
                                <td>{ <img className='border rounded-circle custom-size' src={item.img} alt="" /> }</td>

                            </tr>
                        </tbody>
                    )
                }
            </Table>
            </div>
        </div>
    );
};

export default AddedItems;
