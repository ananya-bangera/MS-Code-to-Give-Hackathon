import React from 'react';
import { useTranslation,Trans } from 'react-i18next';


const Home = () => {
    // const count=1;
    const { t, i18n } = useTranslation();
    function handleClick(lang){
        i18n.changeLanguage(lang)
    };
    return (
        <div className='h-48'>
            <h1>{t('Home World')}</h1>
        <button className='bg-pink-200' onClick={() => handleClick('hi')} >
            Hindi
        </button>
        </div>
    );
};

export default Home;
