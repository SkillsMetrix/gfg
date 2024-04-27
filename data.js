import React, { useEffect } from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

function ProductDetails(props) {
    const product=useSelector((state) => state.product)
    const {title,price,category,image,description}=product
    const dispatch=useDispatch()
    const {productid} =useParams()

    const loadProducts = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productid}`)
         //dispatch(setProducts(response.data))
         console.log(response);
         
}
    useEffect(() => {
        loadProducts()
    }, [])
 
     
    
    return (
        <div>
            <p>
            productdetails
            </p>
           
        </div>
    );
}

export default ProductDetails;
