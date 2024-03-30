
import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
const rootReducer= combineReducers({
    counter:counterReducer
})

export default rootReducer




const counterReducer=(state=10)=>{

    return state
}
export default counterReducer




   import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducers'
import reportWebVitals from './reportWebVitals';

const myStore=createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
    <App />
  </Provider>
);

 
reportWebVitals();
