import './App.css';
import { useContext, useState, useEffect, FC} from 'react';
import { AccessContexts } from './components/Contexts';
import Context from './components/Contexts';
import { Route, Routes, BrowserRouter} from 'react-router-dom';


import Dashboard from './pages/Dashboard';
import AllServices from './pages/AllServices';
import Login from './pages/Login';
import Error from './pages/Error';
import ManageAdmin  from "./pages/ManageAdmin";
import ManageChurches from './pages/ManageChurches';
import Redirect from './pages/Redirect';
import SubmitAttendanceReport from './pages/SubmitAttendanceReport';
import SubmitCellReport from './pages/SubmitCellReport';
function App(){
  return (
    <AccessContexts>
        <MyRoutes />
    </AccessContexts>
  );
}

export default App;
function MyRoutes() {
  
     return (
       <div className="App">
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<Login />} />
             <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/error" element={<Error />} />
             <Route path="/ManageAdmin" element={<ManageAdmin />} />
             <Route path="/manage-churches" element={<ManageChurches />} />
             <Route path="/all-services" element={<AllServices />} />
             <Route path="/sucessful" element={<Redirect />} />
             <Route path="/submit-attendance-report" element={<SubmitAttendanceReport />} />
              <Route path="/submit-cell-report" element={<SubmitCellReport />} />
           </Routes>
         </BrowserRouter>
       </div>
     );

}



