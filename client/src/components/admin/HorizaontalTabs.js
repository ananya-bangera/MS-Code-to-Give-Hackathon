import React from 'react';
import { useState } from 'react';
import CreateBtn from '../util/buttons/CreateBtn';
import Form from './Form';

const styles = {
    'tab-link':
        'nav-link w-full block font-medium  text-xs  leading-tight  uppercase  border-x-0 border-t-0 border-b-2 border-blue-500 px-6 py-3  my-2 hover:border-transparent hover:bg-gray-100  focus:border-transparent',
};

const HorizaontalTabs = ({ data, navtabs = [] }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <ul
                className='nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 '
                id='tabs-tab'
                role='tablist'
            >
                {navtabs.map((tab, idx) => {
                    return (
                        <li
                            key={tab.no}
                            className='nav-item mx-2 text-center'
                            role='presentation'
                        >
                            <button
                                href={`tabs-${tab.id}`}
                                className={`${styles['tab-link']} ${
                                    idx !== activeTab && 'border-transparent'
                                }`}
                                id={`tabs-${tab.id}-tab`}
                                onClick={() => setActiveTab(tab.no)}
                            >
                                {tab.name}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div className='tab-content ' id='tabs-tabContent'>
                <div
                    className={`'tab-pane fade show active grid grid-cols-1 md:grid-cols-5 m-1 p-1 grow' ${
                        0 !== activeTab && 'hidden'
                    }`}
                >
                    <div className='col-span-3 shadow rounded-lg p-2 bg-gray-300'>
                        <ul className='grid grid-cols-3 p-1'>
                            {data['staff'].map((el, idx) => {
                                return (
                                    <li className='bg-custom-primary p-1 m-5 rounded-[10px] ' key={idx}>
                                        {/* {el.phone_number}
                                        {el.phone_number} */}
                                        <div className='bg-gray-200 rounded-[10px] '>
                                            <div className=' bg-white w-full p-1 rounded-[10px] font-serif italic grid justify-center'>{el.admin_username}</div> 
                                            <div className=' p-1 mt-2 font-serif italic grid justify-center '>{el.admin_name}</div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='col-span-2 mx-auto'>
                        <Form name={'Staff'} />
                    </div>
                </div>
                <div
                    className={`'tab-pane fade show active grid grid-cols-1 md:grid-cols-5 m-1 p-1 grow' ${
                        1 !== activeTab && 'hidden'
                    }`}
                >
                    <div className='col-span-3 shadow rounded-lg p-2'>
                        <ul>
                            {data['beneficiary'].map((el, idx) => {
                                return (
                                    <li key={idx}>
                                        <div>{el.uid}</div>
                                        <div>
                                            {el.email} {el.phone_number}
                                        </div>
                                        <div>
                                            {el.address} {el.city} {el.state}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='col-span-2 mx-auto'>
                        <Form name={'Beneficiary'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizaontalTabs;
