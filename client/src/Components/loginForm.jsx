import axios from 'axios';
import React, { useState } from 'react'
import { MdClose } from "react-icons/md";

const LoginForm = ({ closePopup, loggedin, user }) => {
    const [responseText, setResponseText] = useState('')
    const [success, setSuccess] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
        if (formData.password) {
            console.log("formdata -> ", formData)
            axios.post("http://localhost:5000/api/users/login", formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                if (res.status === 200) {
                    console.log("res", res)
                    setSuccess(true)
                    setResponseText('User successfully Logged in! Redirecting.')
                    setTimeout(() => {
                        loggedin()
                        user(res.data.user)
                    }, 6000)
                }
            }).catch((err) => {
                console.log("err", err.response.data)
                if (err.response.data === 'User does not exist!') {
                    setNotFound(true)
                    setTimeout(() => {
                        setNotFound(false)
                    }, 10000)
                }
            })
        }
    }

    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center  w3-animate-bottom'>
            <div className='bg-white rounded-lg shadow-lg p-6 w-full h-auto max-w-md'>
                <div className='flex justify-between items-center mt-3 m-2'>
                    <h2 className='text-3xl '>
                        Login
                    </h2>
                    <button className='text-gray-500 hover:text-gray-700' onClick={closePopup}><MdClose fontSize={25} /></button>
                </div>
                {!success ?
                    <div className='m-4'>
                        {notFound ? <p style={{ color: 'red' }}>User not found, Try again!</p> : <p></p>}
                        <form onSubmit={handleSubmit}>
                            <div className='mb-2'>
                                <label className='flex block text-xl text-gray-700 mb-2'>Email</label>
                                <input name="email" type='email' className='w-full flex justify-start p-1 border border-gray-300 rounded' placeholder='Email' value={formData.email}
                                    onChange={handleChange} />
                            </div>
                            <div className='mb-4'>
                                <label className='flex block text-xl text-gray-700 mb-2'>Password</label>
                                <input name="password" type='password' className='w-full flex justify-start p-1 border border-gray-300 rounded' placeholder='Password' value={formData.password}
                                    onChange={handleChange} />
                            </div>
                            <div className='flex justify-end'>
                                <button className=" bg-tertiary text-white py-2 px-4 rounded-full hover:bg-secondary hover:text-white" type='submit'>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    :
                    <div className='m-8'>
                        <h2>{responseText}</h2>
                    </div>
                }
            </div>
        </div>
    )
}

export default LoginForm