const authReducer = (state =false, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return true
        case 'LOG_OUT':
            return false
        default:
            return state
    }

}
export default authReducer
-----


    
import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import authReducer from './authReducer'
const rootReducer= combineReducers({
    counter:counterReducer,
    auth:authReducer
})

export default rootReducer

-------


    

export function login(){
    return {
        type: 'LOG_IN'
    }
}
export function logout(){
    return {
        type: 'LOG_OUT'
    }
}

-------


    

import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../redux/actions/authActions';
function AuthComponent(props) {
    const auth= useSelector(state => state.auth)
    const dispatch=useDispatch()




    return (
        <div>
            <button onClick={()=> dispatch(login())}>Login</button>
            <button onClick={()=> dispatch(logout())}>Logout</button>

            <hr/>
            <p>Login To see the special Benifits and Discounts...!</p>

            <hr/>
            {auth ? (
                <p>Congratulations ...! you got 50% discount .. use 67UIPT to apply for</p>
            ) : (
                <p>...  </p>
            )}
        </div>
    );
}

export default AuthComponent;
