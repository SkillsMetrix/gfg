import React, {useEffect} from 'react';
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {selectedProduct} from '../redux/actions/productActions';

function ProductDetails(props) {
    const product = useSelector((state) => state.product)
    const {
        title,
        price,
        category,
        image,
        description
    } = product
    const dispatch = useDispatch()
    const {productid} = useParams()

    const loadProducts = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productid}`)
        // dispatch(setProducts(response.data))
        dispatch(selectedProduct(response.data))

    }
    useEffect(() => {
        loadProducts()
    }, [])


    return (
        <div className="ui grid container">
            <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img className="ui fluid image"
                                src={image}/>
                        </div>
                        <div className="column rp">
                            <h1>{title}</h1>
                            <h2>
                                <a className="ui teal tag label">${price}</a>
                            </h2>
                            <h3 className="ui brown block header">
                                {category}</h3>
                            <p>{description}</p>
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                                <div className="visible content">Add To Cart</div>
                            </div>

                        </div>


                    </div>


                </div>

            </div>

        </div>
    );
}

export default ProductDetails;
