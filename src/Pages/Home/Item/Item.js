import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { _id, name, img, description, price, suplier, quantity } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div className='item'>
            <img className='w-100' src={img} alt="" />
            <div className='ps-3'>
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p>Suplier: {suplier}</p>
                <p>Quantity: {quantity}</p>
                <p><small>{description}</small></p>
            </div>
            <div className='text-center my-3'>
                <button onClick={() => navigateToItemDetail(_id)} className='btn btn-warning'>Update</button>
            </div>
        </div>
    );
};

export default Item;