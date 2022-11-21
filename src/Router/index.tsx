import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Container} from './style'
// Pages
import LoginAuth from '../Pages/Auth';
import Dashboard from "../Pages/Home";
import Clients from '../Pages/Clients';
import Employess from '../Pages/Employees'
import Telemarketing from '../Pages/Telemarketing'
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
          <Route path='/register/employess' element={<EmployessRegister />} />
          <Route path='/register/client' element={<ClientRegister />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/telemarketing' element={<Telemarketing />} />

          {/* Access */}
          <Route path='/login' element={<LoginAuth />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}