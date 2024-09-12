import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const LandingPage = lazy(() => import('../pages/LandingPage'))
//MyAccount
const MyAccount = lazy(() => import('../pages/User/myAccount'))
const ForgotPass = lazy(() => import('../pages/User/ForgotPass'))
const Account =  lazy(() => import('../pages/Account/Account'))
//

//Shop
const Shop = lazy(() => import('../pages/Shop/Shop'))
const Product = lazy(() => import('../pages/Shop/Product'))
//
const Pages404 = lazy(() => import('../pages/404/Pages404'))
const Blog = lazy(() => import('../pages/Blog/Blog'))
const SingleBlog = lazy(() => import('../pages/Blog/Blog-Single-NoSidebar'))
export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="*" element={<Pages404 />} />
        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogSingle" element={<SingleBlog />} />

        {/* MyAccount */}
        <Route path="/sign-in" element={<MyAccount />} />
        <Route path="/ForgotPass" element={<ForgotPass />} />
        <Route path="/Account" element={<Account />} />
        {/*-----------*/}

        {/* Shop */}
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Product" element={<Product />} />
        {/*------*/}
      </Routes>
      <Footer />
    </Suspense>
  )
}
