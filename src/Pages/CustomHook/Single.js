import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Single = () => {
    const [product, setProduct] = useState([]);
    const{id} =useParams()

    useEffect(() => {
        fetch(`https://laptop-management.herokuapp.com//product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            });
    }, [])
    return [product, setProduct];
}
