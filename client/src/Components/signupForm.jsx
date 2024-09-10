import React from 'react'
import { MdClose } from "react-icons/md";

const SignupForm = ({ closePopup }) => {
    return (
        <div>
            <div className='fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center'>
                <div className='bg-white rounded-lg shadow-lg p-6 w-full h-auto max-w-md'>
                    <div className='flex justify-between items-center mt-3 m-2'>
                        <h2 className='text-3xl '>
                            Sign Up
                        </h2>
                        <button className='text-gray-500 hover:text-gray-700' onClick={closePopup}><MdClose fontSize={25} /></button>
                    </div>

                    <div className='m-4 h-[45vh] overflow-x-hidden'>
                        <form className='m-2'>
                            <div className='mb-2'>
                                <label className='flex block text-l text-gray-700 mb-2'>Name</label>
                                <input type='email' className='w-full flex justify-start p-1 border border-gray-300 rounded' />
                            </div>
                            <div className='mb-2'>
                                <label className='flex block text-l text-gray-700 mb-2'>Email</label>
                                <input type='email' className='w-full flex justify-start p-1 border border-gray-300 rounded' />
                            </div>
                            <div className='mb-2'>
                                <label className='flex block text-l text-gray-700 mb-2'>Phone</label>
                                <input type='email' className='w-full flex justify-start p-1 border border-gray-300 rounded' />
                            </div>
                            <div className='mb-2'>
                                <label className='flex block text-l text-gray-700 mb-2'>Blood Group</label>
                                <input type='email' className='w-full flex justify-start p-1 border border-gray-300 rounded' />
                            </div>
                            <div className='mb-2'>
                                <label className='flex block text-l text-gray-700 mb-2'>Age</label>
                                <input type='email' className='w-full flex justify-start p-1 border border-gray-300 rounded' />
                            </div>
                            <div className='mb-4'>
                                <label className='flex block text-l text-gray-700 mb-2'>Password</label>
                                <input type='email' className='w-full flex justify-start p-1 border border-gray-300 rounded' />
                            </div>
                            <div className='mb-2'>
                                <label className='flex block text-l text-gray-700 mb-2'>Confirm Password</label>
                                <input type='email' className='w-full flex justify-start p-1 border border-gray-300 rounded' />
                            </div>
                            <div className='flex justify-end'>
                                <button className=" bg-tertiary text-white py-2 px-4 rounded-full hover:bg-secondary hover:text-white">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm