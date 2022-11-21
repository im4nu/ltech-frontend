import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Container} from './style'
// Pages
import LoginAuth from '../Pages/Auth';
import Dashboard from "../Pages/Home";
import Customers from '../Pages/Customers';
import Employess from '../Pages/Employees'
import Attendances from '../Pages/Attendances'
import Telemarketing from '../Pages/Telemarketing';
import EmployessRegister from '../Pages/Register/Employess';
import ClientRegister from '../Pages/Register/Client';



export default function Router() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path='/' element={<Dashboard />} />
          <Route path='/employess' element={<Employess />} />
          <Route path='/telemarketing' element={<Telemarketing />} />
          <Route path='/register/employess' element={<EmployessRegister />} />
          <Route path='/register/client' element={<ClientRegister />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/attendaces' element={<Attendances />} />


          {/* Access */}
          <Route path='/login' element={<LoginAuth />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}