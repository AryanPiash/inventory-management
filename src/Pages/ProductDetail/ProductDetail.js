import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';

const ProductDetail = () => {
    const { productId: productId } = useParams();
    const [product] = useProductDetail(productId);
    const {name,img,price,suplier,quantity,description} = product
    const [itemQuantity,setItemQuantity] = useState(1)


    // useEffect(() => {
    //     const url = 
    // },[])
    const handleQuantity = () => {
        // const newQantity = quantity + 1
        // setItemQuantity(newQantity)


    }

    return (
        <div className='w-25 mx-auto'>
            <h2 className='text-center my-3'>{name}</h2>

            <div className='item'>
            <img className='w-100' src={img} alt="" />
            <div className='ps-3'>
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p>Suplier: {suplier}</p>
                <p>Quantity: {itemQuantity}</p>
                <p><small>{description}</small></p>
            </div>
            <div className='text-center my-3'>
                <button onClick={handleQuantity} className='btn btn-warning'>Delivered</button>
            </div>
        </div>

        </div>
    );  
};

export default ProductDetail;