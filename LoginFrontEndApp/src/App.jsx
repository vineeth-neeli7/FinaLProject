import './App.css';
import SignUp from './Component/SignUp.jsx';
import ForgotPassword from './Component/ForgotPassword.jsx';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from './Component/Home.jsx';
import Nav from './Component/Nav.jsx';
import history from './Component/history.jsx';
import AdminViewDetails from './Component/AdminViewDetails.jsx';
import DeleteUser from './Component/DeleteUser.jsx';
import AdminHomePage from './Component/AdminHomePage.jsx';
import Login from './Component/Login.jsx';
import UpdateUser from './Component/UpdateUser.jsx';


 

function App() {
  return (
    <div className="App">
     
     <Router history={history}>
     <Nav />
       <Routes>
         <Route path="/SignUp" element={<SignUp /> } />
         <Route path="/ForgotPassword" element={<ForgotPassword />} />
         <Route path="/AdminHomePage" element={<AdminHomePage />} />
         <Route path="/AdminViewDetails" element={<AdminViewDetails />} />
         <Route path="/DeleteUser" element={<DeleteUser />} />
         <Route path="/Login" element={<Login />} />
         <Route path="/UpdateUser" element={<UpdateUser />} />
       </Routes>  
  </Router> 
     


    {/*<DeleteUser /> 

     <AdminViewDetails /> */}
     {/*<Router history={history}>
     <Route path="/AdminHomePage" component={AdminHomePage} />
    </Router> */}

    </div>
  );
} 

export default App;
