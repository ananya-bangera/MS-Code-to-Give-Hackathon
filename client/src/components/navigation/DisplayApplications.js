import React from 'react'
import { Link } from 'react-router-dom';
import ShowAllBtn from '../util/buttons/ShowAllBtn';
import { DesignBox } from './DesignBox';
import { DisplaySingleApp } from './DisplaySingleApp';

export const DisplayApplications = () => {
  return (
    <div>
        <div className='m-5'>
            <label className='m-2'>Search Applications</label>
            <input className='rounded-[10px]' type="text"></input>
            <button type='submit' className='m-1 bg-custom-primary hover:bg-custom-primary-dark9 font-bold text-sm py-2 px-4 rounded-[10px]'>Search</button>
        </div>
        <div className='shadow m-1 p-3 bg-gray-100 '>
            <h1 className='underline m-2 font-bold text-xl'><DesignBox text={'Search Results'}></DesignBox></h1>
            <div>
                <ul className='list-none  grid grid-cols-3'>

                    {[1, 2, 3,4,5,6,7,8,9].map((el, idx) => {
                        return (
                            <div className='m-6 bg-white p-4 rounded-[10px] grid justify-center'>
                                <div className='font-mono p-1'>Scheme Name: Financial</div> 
                                <div className='font-mono p-1'>Subscheme Name: Education</div>
                                <div className='font-mono p-1'>Application Date: 11/05/2022</div> 
                                <Link to='/displaySingleApp'>
                                <button className='p-1 bg-custom-primary hover:bg-custom-primary-dark text-white font-bold py-2 px-4 rounded-full' >View Application</button>  
                                </Link>
                            </div> 
                        );
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}
