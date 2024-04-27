import {ActionTypes} from "../constants/action-types"

const initialState = {
    products: []
}
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload}
        default:
            return state
    }
}

---


    import React, {useEffect} from 'react';
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';

function ProductListing(props) {
    const data = useSelector(state => state.allProducts)
    const dispatch=useDispatch()

    const loadProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
         dispatch(setProducts(response.data))
}
    useEffect(() => {
        loadProducts()
    }, [])
console.log(data);

    return (
        <div className="ui grid container">
            <h3>Product Listing</h3>
            <ProductComponent/>
        </div>
    );
}

export default ProductListing;



------



    import React from 'react';
import {useSelector} from 'react-redux'
function ProductComponent(props) {


    const data = useSelector(state => state.allProducts.products)
    //const {id, productName, category} = data[0]
    return (
        <div className="four wide column">
            <div className="ui link cards">
                <div className="card">
                    <div className="image"></div>
                    <div className="content">
                        <div className="header">
                            </div>

                    </div>
                </div>
            </div>


        </div>
    );
}

export default ProductComponent;
