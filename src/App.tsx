import './App.css';
import { useContext, useState, useEffect } from 'react';
import { AccessContexts } from './components/Contexts';
import Context from './components/Contexts';
import { Route, Routes, BrowserRouter} from 'react-router-dom';



import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Error from './pages/Error';
function App() {
  return (
    <AccessContexts>
         <MyRoutes />
    </AccessContexts>
  );
}

export default App;
function MyRoutes () {
     return (
        
        <div className="App">
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/error' element={<Error />}/>
          </Routes>
        </BrowserRouter>
      </div>
     )
}



