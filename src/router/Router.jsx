import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const LandingPage = lazy(() => import('../pages/LandingPage'))
const MyAccount = lazy(() => import('../pages/User/myAccount'))
export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<MyAccount />} />
        </Routes>
        <Footer />
    </Suspense>
  )
}
