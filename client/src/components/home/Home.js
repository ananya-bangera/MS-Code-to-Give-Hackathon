import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import CarouselSection from './CarouselSection';
import Footer from '../Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <CarouselSection />
            {/* <Hero /> */}
            <Footer />
        </>
    );
};

export default Home;
