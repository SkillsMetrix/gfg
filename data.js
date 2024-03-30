import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../redux/actions/counterAction';
function CounterApp(props) {
    const count= useSelector(state => state.counter)
    const dispatch= useDispatch()
    return (
        <div>
            <p>The count is : {count}</p>
            <button onClick={()=> dispatch(increment())}>Increment</button>
        </div>
    );
}

export default CounterApp;
