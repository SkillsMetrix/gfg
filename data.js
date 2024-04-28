import {ActionTypes} from "../constants/action-types"

const initialState = {
    products: []
}
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload}
            case ActionTypes.FETCH_PRODUCTS:
                return {...state,products:payload}
        default:
            return state
    }
}

export const selectedProduct = (state ={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state,...payload}
        default:
            return state
    }
}


-----


    import { ActionTypes } from "../constants/action-types"
import axios from "axios"
import fakeStore from "../../apis/fakeStore"




export const fetchProducts=()=>async(dispatch)=>{
      const response=await fakeStore.get('/products')
     dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
     
}
export const fetchProduct=(id)=>async(dispatch)=>{
    const response=await fakeStore.get(`/products/${id}`)
   dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
   
}

export const setProducts=(products)=>{
    return {
    type:ActionTypes.SET_PRODUCTS,
    payload:products
    }
}



export const selectedProduct=(product)=>{
    return {
    type:ActionTypes.SELECTED_PRODUCTS,
    payload:product
    }
}




-----

    import React, {useEffect} from 'react';
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {selectedProduct, fetchProduct} from '../redux/actions/productActions';

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

    
    useEffect(() => {
       dispatch(fetchProduct(productid))
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
