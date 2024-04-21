----constants-----

export const ActionTypes={
    SET_PRODUCTS:"SET_PRODUCTS",
    SELECTED_PRODUCTS:"SELECTED_PRODUCTS",
    
}

-----Actions------
import { ActionTypes } from "../constants/action-types"

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

    -----reducers--------


import {ActionTypes} from "../constants/action-types"

const initialState = {
    products: [
        {
            id: 101,
            productName: 'Watch',
            category: 'Electronics'
        }
    ]
}
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state
    }
}

-----

    
import { combineReducers } from 'redux'
import { productReducer } from './productReducer'
 
const rootReducer=combineReducers({
    allProducts:productReducer
})


export default rootReducer



-----



    import { createStore } from 'redux'
 import rootReducer from './reducers/index'



const store= createStore(rootReducer)


export default store


-----


    import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import {Provider} from 'react-redux'
import appStore from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
    <App />
  </Provider>
);

 
reportWebVitals();



