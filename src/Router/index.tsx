import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Container} from './style'
// Pages
import LoginAuth from '../Pages/Auth'
import Dashboard from "../Pages/Home";
import Employess from '../Pages/Employees'

export default function Router() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path='/' element={<Dashboard />} />
          <Route path='/employess' element={<Employess />} />

          {/* Access */}
          <Route path='/login' element={<LoginAuth />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}