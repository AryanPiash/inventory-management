import React from 'react';
import { Table } from 'react-bootstrap';
import { CustomHook } from '../CustomHook/CustomHook';
import ProductDe from '../ProductDe/ProductDe';
// import './ProductList.css';

const ProductList = () => {
    const [products] = CustomHook([]);
    return (
        <div className='container table-responsive'>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Suplier</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <ProductDe
                            key={product._id}
                            product={product}
                        />)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ProductList;