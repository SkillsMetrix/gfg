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
