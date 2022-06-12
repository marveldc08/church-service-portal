import './App.css';
import { useContext, useState, useEffect, FC} from 'react';
import { AccessContexts } from './components/Contexts';
import Context from './components/Contexts';
import { Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';


import Dashboard from './pages/Dashboard';
import AllServices from './pages/AllServices';
import Login from './pages/Login';
import Error from './pages/Error';
import ManageAdmin  from "./pages/ManageAdmin";
import ManageChurches from './pages/ManageChurches';
import CreateAdmin from './pages/CreateAdmin';
import Redirect from './pages/Redirect';
import AttendanceReports from './pages/AttendanceReports';
import SubmitAttendanceReport from './pages/SubmitAttendanceReport';
import SubmitCellReport from './pages/SubmitCellReport';
import PartnershipReports from './pages/PartnershipReports';
import SubmitPartnershipReport from './pages/SubmitPartnershipReport';
function App(){
  return (
    <div className="App">
      <AccessContexts>
        <MyRoutes/>
      </AccessContexts>
    </div>
  );
}

export default App;
function MyRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userContext = useContext(Context)
  const token = localStorage.getItem('token')
  useEffect(() => {
    // const token = localStorage.getItem('token')
    if(token){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  }, [token])
  
     return (
         <BrowserRouter>
           <Routes>
            {(!isLoggedIn) ? <Route path="/" element={<Login />} /> : <Route path="/dashboard" element={<Dashboard />} />}
             <Route path="/error" element={<Error />} />
             {isLoggedIn && <Route path="/manage-admin" element={<ManageAdmin />} />}
             {isLoggedIn && <Route path="/manage-churches" element={<ManageChurches />} />}
             {isLoggedIn && <Route path='/all-services' element={<AllServices />}/>}
             <Route path='/create-account' element ={<CreateAdmin/>} />
             <Route path="/sucessful" element={<Redirect />} />
             <Route path="/attendance-reports" element={<AttendanceReports />} />
             <Route path="/submit-attendance-report" element={<SubmitAttendanceReport />} />
              <Route path="/submit-cell-report" element={<SubmitCellReport />} />
              <Route path="/partnership-reports" element={<PartnershipReports />} />
              <Route path="/submit-partnership-report" element={<SubmitPartnershipReport />} />
             < Route path='*' element={<Navigate to={ (!isLoggedIn ) ? '/' : '/dashboard'  } />} />
           </Routes>
         </BrowserRouter>
     );
}



