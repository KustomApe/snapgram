import {Routes, Route} from 'react-router-dom';

import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import { Home } from './_root/pages';
import './global.css';

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* Public routes */}
            <Route path='/sign-in' element={<SigninForm />} />
            <Route path='/sign-up' element={<SignupForm />} />

            {/* Private routes */}
            <Route index element={<Home />} />
        </Routes>
    </main>
  )
}

export default App
