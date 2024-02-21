import {Routes, Route} from 'react-router-dom';

import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import { Home } from './_root/pages';
import './global.css';
import AuthLayout from './_auth/AuthLayout';

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* Public routes */}
            <Routes element={<AuthLayout />}>
              <Route path='/sign-in' element={<SigninForm />} />
              <Route path='/sign-up' element={<SignupForm />} />
            </Routes>
            

            {/* Private routes */}
            <Route index element={<Home />} />
        </Routes>
    </main>
  )
}

export default App
