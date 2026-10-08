import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Services from './components/Services'
import Pricing from './components/Pricing'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AdminDashboard from './components/admin/AdminDashboard'
import AdminProject from './components/admin/AdminProject'
import AdminUsers from './components/admin/AdminUsers'
import AdminClients from './components/admin/AdminClients'
import AdminBids from './components/admin/AdminBids'
import AdminProfile from './components/admin/AdminProfile'
import AdminPlans from './components/admin/AdminPlans'
import ClientDashboard from './components/client/ClientDashboard'
import ClientPostProject from './components/client/ClientPostProject'
import ClientManageProject from './components/client/ClientManageProject'
import ClientReviewBids from './components/client/ClientReviewBids'
import ClientProfile from './components/client/ClientProfile'
import UserDashboard from './components/user/UserDashboard'
import UserProject from './components/user/UserProject'
import UserBids from './components/user/UserBids'
import UserProfile from './components/user/UserProfile'
import UserPlans from './components/user/UserPlans'
import 'aos/dist/aos.css'
import AOS from 'aos'
const App = () => {
  const location = useLocation()
  const [user, setUser] = useState(null);
  useEffect(()=>{
    AOS.init({
      offset:200,
      duration:600,
      easing:'ease-in-sine'
    })
  },[])
  useEffect(() => {
    const info = JSON.parse(localStorage.getItem('info'))
    setUser(info)
  }, [location])
  return (
    <>
      <Navbar />
      <Routes>
        {/* Common url */}
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services' element={<Services />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />

        {/* admin url */}
        {user?.type == 'admin' && <>
          <Route path='admin-dashboard' element={<AdminDashboard />} />
          <Route path='admin-project' element={<AdminProject />} />
          <Route path='admin-users' element={<AdminUsers />} />
          <Route path='admin-clients' element={<AdminClients />} />
          <Route path='admin-bids' element={<AdminBids />} />
          <Route path='admin-profile' element={<AdminProfile />} />
          <Route path='admin-plans' element={<AdminPlans />} />
        </>}
        {/* client url */}
        {user?.type == 'client' && <>

          <Route path='client-dashboard' element={<ClientDashboard />} />
          <Route path='client-post-project' element={<ClientPostProject />} />
          <Route path='client-manage-project' element={<ClientManageProject />} />
          <Route path='client-review-bids' element={<ClientReviewBids />} />
          <Route path='client-profile' element={<ClientProfile />} />
        </>}
        {/* user url */}
        {user?.type == 'user' && <>
          <Route path='user-dashboard' element={<UserDashboard />} />
          <Route path='user-project' element={<UserProject />} />
          <Route path='user-bids' element={<UserBids />} />
          <Route path='user-profile' element={<UserProfile />} />
          <Route path='user-plans' element={<UserPlans />} />
        </>}
        {/* Not Found Page */}
          <Route path='*' element={<h1 className='text-danger text-center m-5 p-5'>404 Page not found</h1>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
