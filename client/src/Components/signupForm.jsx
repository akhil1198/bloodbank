import axios from 'axios';
import React, { useState } from 'react'
import { MdClose } from "react-icons/md";

const SignupForm = ({ closePopup, onSignupSuccess }) => {
    const [selectedBloodGroup, setSelectedBloodGroup] = useState('')
    const [responseText, setResponseText] = useState('')
    const [success, setSuccess] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        bloodGroup: '',
        age: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const {
            name,
            value
        } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.password === formData.confirmPassword) {
            console.log("formdata -> ", formData)
            axios.post("http://localhost:5000/api/users/createUser", formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log("res", res)
                if (res.status === 200) {
                    setSuccess(true)
                    setResponseText('User successfully created! Redirecting to login.')
                    setTimeout(() => {
                        onSignupSuccess()
                    }, 6000)
                }
            }).catch((err) => {
                console.log("err", err.response.data)
                if (err.response.data === "User already exists!") {
                    setSuccess(true)
                    setResponseText('User already exists! Redirecting to login.')
                    setTimeout(() => {
                        onSignupSuccess()
                    }, 6000)
                }
            })
        } else {
            console.log(":asdf")
        }
    }

    return (
        <div>
            <div className={'fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center w3-animate-bottom'}>
                <div className='bg-white rounded-lg shadow-lg p-6 w-full h-auto max-w-md'>
                    <div className='flex justify-between items-center mt-3 m-2'>
                        <h2 className='text-3xl '>
                            Sign Up
                        </h2>
                        <button className='text-gray-500 hover:text-gray-700' onClick={closePopup}><MdClose fontSize={25} /></button>
                    </div>

                    {!success ?
                        <div className='m-4 h-[45vh] overflow-x-hidden'>
                            <form className='m-2' onSubmit={handleSubmit}>
                                <div className='mb-2'>
                                    <label className='flex block text-l text-gray-700 mb-2'>Name</label>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className='w-full flex justify-start p-1 border border-gray-300 rounded'
                                    />
                                    {/* <input
                                    type='text'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full flex justify-start p-1 border border-gray-300 rounded'
                                /> */}
                                </div>
                                <div className='mb-2'>
                                    <label className='flex block text-l text-gray-700 mb-2'>Email</label>
                                    <input name="email" type='email' className='w-full flex justify-start p-1 border border-gray-300 rounded' placeholder='Email' value={formData.email}
                                        onChange={handleChange} />
                                </div>
                                <div className='mb-2'>
                                    <label className='flex block text-l text-gray-700 mb-2'>Phone</label>
                                    <input name="phone" type='number' className='w-full flex justify-start p-1 border border-gray-300 rounded' placeholder='Phone' value={formData.phone}
                                        onChange={handleChange} />
                                </div>
                                <div className='mb-2'>
                                    <label className='flex block text-l text-gray-700 mb-2'>Blood Group</label>
                                    <select name='bloodGroup' value={formData.bloodGroup}
                                        onChange={handleChange} className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm'>
                                        <option>--Select Blood Group---</option>
                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>B+</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
                                        <option>O+</option>
                                        <option>O-</option>
                                    </select>
                                    {/* <input name="" type='email' className='w-full flex justify-start p-1 border border-gray-300 rounded' /> */}
                                </div>
                                <div className='mb-2'>
                                    <label className='flex block text-l text-gray-700 mb-2'>Age</label>
                                    <input name="age" type='number' className='w-full flex justify-start p-1 border border-gray-300 rounded' placeholder='Age' value={formData.age}
                                        onChange={handleChange} />
                                </div>
                                <div className='mb-4'>
                                    <label className='flex block text-l text-gray-700 mb-2'>Password</label>
                                    <input name="password" type='password' className='w-full flex justify-start p-1 border border-gray-300 rounded' placeholder='Password' value={formData.password}
                                        onChange={handleChange} />
                                </div>
                                <div className='mb-2'>
                                    <label className='flex block text-l text-gray-700 mb-2'>Confirm Password</label>
                                    <input name="confirmPassword" type='password' className='w-full flex justify-start p-1 border border-gray-300 rounded' placeholder='Confirm Password' value={formData.confirmPassword}
                                        onChange={handleChange} />
                                </div>
                                <div className='flex justify-end'>
                                    <button className=" bg-tertiary text-white py-2 px-4 rounded-full hover:bg-secondary hover:text-white" type='submit'>
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                        :
                        <div className='m-8'>
                            <h2>{responseText}</h2>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default SignupForm