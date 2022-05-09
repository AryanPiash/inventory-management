import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleHookProduct = () => {
    const [product, setProduct] = useState([]);
    const [isReload, setIsreload] = useState(false);
    const{id} =useParams()

    useEffect(() => {
        // fetch(`https://laptopstorebd.herokuapp.com/product/${id}`)
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setIsreload(data)
                
            });
    }, [isReload])
    return [product, setProduct];
}
