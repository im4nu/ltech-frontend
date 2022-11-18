import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Container} from './style'
// Pages
import LoginAuth from '../Pages/Auth'
import Dashboard from "../Pages/Home";

export default function Router() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path='/' element={<Dashboard />} />

          {/* Access */}
          <Route path='/login' element={<LoginAuth />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}