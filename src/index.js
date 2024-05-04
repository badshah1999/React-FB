import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './pages/Login/Login';
import NewAccount from './pages/Login/NewAccount';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<App/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/newAccount' element={<NewAccount/>}/>
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);
