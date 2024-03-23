import Login from "./components/Login";
import LandingPage from "./components/LandingPage";


export const appRoutes=[
    {path:'/',element: <LandingPage/>}
]



---------

    import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
reportWebVitals();




--------

    import logo from './logo.svg';
import './App.css';
 import { useRoutes } from 'react-router-dom'
 import {appRoutes} from './routes'
function App() {
  const element= useRoutes(appRoutes)
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
