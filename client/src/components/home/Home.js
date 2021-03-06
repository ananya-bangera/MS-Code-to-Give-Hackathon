import React from 'react';
import CarouselSection from './CarouselSection';
import Whoarewe from './Whoarewe';
import Howitworks from './Howitworks';
import Benefeciaries from './Benefeciaries';
import { useTranslation,Trans } from 'react-i18next';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <CarouselSection />
            <Whoarewe />
            <Howitworks />
            <Benefeciaries />
        </div>
    );
};

export default Home;
