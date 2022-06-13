import React,{useState} from 'react'
import ShowAllBtn from '../util/buttons/ShowAllBtn';
import { DesignBox } from './DesignBox';


export const DisplaySingleApp = () => {
    const [docs, setDocs] = useState({
        Education: [
            [
                'Level of Education:(10th/12th/Graduate)',
                'Institute Name:',
                'Amount requested',
            ],
            [
                'SSC Marksheet',
                'HSC Marksheet',
                'Aadhar Card',
                'Proof of Residence',
            ],
            [],
        ],
        Health: [
            [
                'Level of Education:(10th/12th/Graduate)',
                'Institute Name:',
                'Amount requested',
            ],
            [
                'SSC Marksheet',
                'HSC Marksheet',
                'Aadhar Card',
                'Proof of Residence',
            ],
            [],
        ],
        Livelihood:[
            [
                'Level of Education:(10th/12th/Graduate)',
                'Institute Name:',
                'Amount requested',
            ],
            [
                'SSC Marksheet',
                'HSC Marksheet',
                'Aadhar Card',
                'Proof of Residence',
            ],
            [],
        ],
        Life_Skills: [
            [
                'Level of Education:(10th/12th/Graduate)',
                'Institute Name:',
                'Amount requested',
            ],
            [
                'SSC Marksheet',
                'HSC Marksheet',
                'Aadhar Card',
                'Proof of Residence',
            ],
            [],
        ],
        Job: [
            [
                'Level of Education:(10th/12th/Graduate)',
                'Institute Name:',
                'Amount requested',
            ],
            [
                'SSC Marksheet',
                'HSC Marksheet',
                'Aadhar Card',
                'Proof of Residence',
            ],
            [],
        ],
        Counselling: [
            [
                'Level of Education:(10th/12th/Graduate)',
                'Institute Name:',
                'Amount requested',
            ],
            [
                'SSC Marksheet',
                'HSC Marksheet',
                'Aadhar Card',
                'Proof of Residence',
            ],
            [],
        ],
        Business: [
            [
                'Level of Education:(10th/12th/Graduate)',
                'Institute Name:',
                'Amount requested',
            ],
            [
                'SSC Marksheet',
                'HSC Marksheet',
                'Aadhar Card',
                'Proof of Residence',
            ],
            [],
        ],
    });
  return (
    <div>
        <div className='p-5 '>    
        <div className='font-serif bg-gray-100 rounded-[20px] p-6 '>
            <div className='grid grid-cols-2'>
                <div className='bg-gray-300'>
                <h1 className='underline m-2 font-bold text-xl'><DesignBox text={'User Details'}></DesignBox></h1>

                    {(docs['Education'][0]).map((el)=>{
                        return (

                            <li  className='p-2 rounded-[10px] bg-white m-3 grid grid-cols-2'>
                                <div className=''>
                                    <span className='font-bold mr-7'>{el}</span>
                                    
                                    <div className='bg-gray-100 rounded-[5px] p-1'>User det</div>
                                </div>
                                
                             </li>
                        
                        )
                    })}
                </div>
                <div className='bg-gray-300'>
                <h1 className='underline m-2 font-bold text-xl'><DesignBox text={'Uploaded Documents'}></DesignBox></h1>
                    {(docs['Education'][1]).map((el)=>{
                        return (
                            <li  className='p-2 rounded-[10px] bg-white m-3 grid grid-cols-2'>
                                <div className=''>
                                    <span className='font-bold mr-7'>{el}</span>
                                    
                                    <div className='bg-gray-100 rounded-[5px] p-1'>User det</div>
                                </div>
                                <div className='bg-custom-primary p-1 rounded-[5px] grid items-center justify-center'>
                                <span className='font-bold'>View Doc</span>
                                </div>
                             </li>
                        )
                    })}
                </div>
                <div className='bg-gray-100 m-2 p-2'>
                    <button className='bg-custom-primary m-2 hover:bg-custom-primary-dark font-bold text-sm py-2 px-4 rounded-full'>
                        Approve
                    </button>
                    <button className='bg-custom-secondary text-white m-2 font-bold text-sm py-2 px-4 rounded-full'>
                        Reject
                    </button>
                </div>
                
                
            </div>
            
        </div>
        </div>
    </div>
  )
}
