import React from 'react';
import { Button, Card, Col, Form, FormLabel, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SingleHookProduct } from '../CustomHook/SingleHookProduct';

const Quantity = () => {
    const { id } = useParams();
    const [product, setProduct] = SingleHookProduct(id);

    const ReStock = e => {
        e.preventDefault();
        const quantity = parseInt(e.target.reStock.value) + parseInt(product.quantity);

        const updateRestock = { quantity };
        // console.log(updateRestock);
        const url = `http://localhost:5000/update/${id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',

            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(
                updateRestock
            ),
        })
            .then(response => response.json())
            .then(data => {
                e.target.reset();
                toast('Restok success')
                console.log(data);

            });

    }

    const handleQuantity = e => {
        e.preventDefault();
        const quantity = e.target.quantity.value - 1;
        const updateQuantity = { quantity }
        console.log(updateQuantity);
        const url = `http://localhost:5000/update/${id}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(
                updateQuantity
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(data => {
                setProduct(data)
                toast('Product Deliverd Success')
                console.log(data);

            });
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className=' p-5'>
                        <h4>Update Quantity</h4>
                        <Form onSubmit={ReStock} className='d-flex'>
                            <input type='number' name='reStock' placeholder="quantity" className='ps-3' />
                            <Button className='ms-2' variant="info" type="submit">
                                ADD STOCK
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <Card className='mx-auto'>
                        <Card.Img className='pt-3 w-50 mx-auto' variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Card.Text>
                                <p>Suplier: {product.suplier}</p>
                            </Card.Text>
                            <Card.Text>
                                <p>Price: {product.price} $</p>
                            </Card.Text>
                            <form onSubmit={handleQuantity}>
                                
                                <FormLabel>Quantity here: </FormLabel>
                                <input className='ms-2 border border-white' type="number" name="quantity" value={product.quantity} readOnly />

                                <button className='btn btn-warning'>DELIVERD</button>

                            </form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Quantity;