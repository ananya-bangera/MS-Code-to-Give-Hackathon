import React from 'react';

import Navbar from '../Navbar';
import Hero from './Hero';
import Footer from '../Footer';
import { Login } from '../Login';
import { UserProfile } from './UserProfile';

const Home = () => {
    return (
        <>
            <Navbar />
            <br />
            <UserProfile/>
            <br></br>
            <Footer />
        </>
    );
};

export default Home;
