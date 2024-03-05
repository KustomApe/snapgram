import {Routes, Route} from 'react-router-dom';

import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const App = () => (
  <main className='flex h-screen'>
    <Routes>
      {/* Public routes */}
      <Route element={<AuthLayout />}>
        <Route path='/sign-in' element={<SigninForm />} />
        <Route path='/sign-up' element={<SignupForm />} />
      </Route>

      {/* Private routes */}
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </main>
)

export default App
