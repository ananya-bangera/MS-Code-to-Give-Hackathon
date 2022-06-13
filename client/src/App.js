import React, { useEffect } from 'react';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';
import Login from './components/auth/Login';
import AdminLogin from './components/auth/AdminLogin';
import AppyAID from './components/profile/ApplyAid';
import ProfilePageFinancial from './components/profile/ProfilePageFinancial';
import Profile from './components/profile/Profile';
import HowItWorks from './components/how-it-works/HowItWorks';
import ScheduleMeet from './components/profile/ScheduleMeet';
import AdminDashboard from './components/admin/AdminDashboard';
import { AboutUs } from './components/navigation/AboutUs';
import { loadAdmin } from './redux/slices/adminAuth';
import { DisplayApplications } from './components/navigation/DisplayApplications';
import { DisplaySingleApp } from './components/navigation/DisplaySingleApp';

function App() {
    const { token } = useSelector((state) => state.adminAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAdmin());
    }, [dispatch]);

    return (
        <div className='min-h-screen'>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/how-it-works' element={<HowItWorks />} />
                    <Route path='/schedule-meet' element={<ScheduleMeet />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/admin-login' element={<AdminLogin />} />
                    <Route path='/aboutus' element={<AboutUs/>} />
                    <Route path='/admin' element={<AdminDashboard />} />
                    <Route path='/displayApplications' element={<DisplayApplications />} />
                    <Route path='/displaySingleApp' element={<DisplaySingleApp />} />
                    <Route path='/apply-aid' element={<AppyAID />} />
                    {/* <Route path='/apply-aid2' element={<ProfilePageFinancial />} /> */}
                    <Route
                        path='/ProfilePageFinancial'
                        element={<ProfilePageFinancial />}
                    />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;