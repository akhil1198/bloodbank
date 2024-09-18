import React, { useState } from 'react'
import RequestTable from './requestTable'
import DonationsTable from './donationsTable'
import UnitsTable from './unitsTable'
import UserDonationsTable from './userDonationsTable'
import UserRequestTable from './userRequestsTable'

const UserHome = (user) => {
    console.log("user data -> ", user)
    const [homeTab, setHomeTab] = useState('donations')

    const handleHomeTabSwitch = (data) => {
        setHomeTab(data)
    }

    return (
        <div>
            <div className='overflow-x-hidden flex container min-h-[50vh]'>
                <div className='m-4'>
                    <div className='bg-white rounded-lg shadow-lg p-6 w-80 flex justify-start mb-4'>
                        <div className="text-left">
                            <h2 className="text-2xl font-semibold text-gray-800">{user.user && user.user.name || 'Akhil'}</h2>
                            <p className="text-gray-500 ">User ID: {user.user && user.user.id || '01'}</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg shadow-lg p-6 w-80 flex justify-start mb-4'>
                        <div className="text-left">
                            <div className="">
                                <h2 className="text-2xl font-semibold text-gray-800">Blood Group</h2>
                                <p className="text-gray-700">
                                    {user.user && user.user.bloodGroup || 'B+'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg shadow-lg p-6 w-80 flex justify-start mb-4'>
                        <div className="text-left">
                            <div className="">
                                <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
                                <p className="text-gray-600">Email : {user.user && user.user.email || 'akhil@gmail.com'}</p>
                                <p className="text-gray-600">Phone : {user.user && user.user.phone || '12312331'}</p>
                                <p className="text-gray-600">Age : {user.user && user.user.age || '1'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="rounded-lg  flex-col m-4 ">
                        {/* Tabs or Separate Sections */}
                        <div>
                            <ul className="flex mt-4">
                                <li className="mr-1">
                                    <button
                                        className={`rounded-md inline-block py-2 px-4 ${homeTab === 'donations' ? 'text-white bg-secondary' : 'bg-tertiary text-white hover:bg-secondary hover:text-white'
                                            }`}
                                        onClick={() => handleHomeTabSwitch('donations')}
                                    >
                                        Donations
                                    </button>
                                </li>
                                <li className="mr-1">
                                    <button
                                        className={`rounded-md inline-block py-2 px-4 ${homeTab === 'requests' ? 'text-white bg-secondary' : 'bg-tertiary text-white hover:bg-secondary hover:text-white'
                                            }`}
                                        onClick={() => handleHomeTabSwitch('requests')}
                                    >
                                        Requests
                                    </button>
                                </li>
                            </ul>
                            {/* table */}
                            <div className="rounded-md mt-4 shadow-lg">
                                {/* Table for Donations */}
                                {homeTab === 'donations' && (
                                    <UserDonationsTable user={user.user} />
                                )}
                                {/* Table for Requests */}
                                {homeTab === 'requests' && (
                                    <UserRequestTable user={user.user} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Edit Profile Button */}

            </div>
            <button className="bg-secondary text-white py-2 px-4 rounded hover:bg-tertiary">
                Edit Profile
            </button>
        </div>
        // <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        //     <div className="text-left"> {/* Changed to text-left for left alignment */}
        //         <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
        //         <p className="text-gray-500 mb-4">john.doe@example.com</p>

        //         <div className="mb-4">
        //             <p className="text-gray-600">Phone: (123) 456-7890</p>
        //             <p className="text-gray-600">Blood Group: O+</p>
        //         </div>

        //         <p className="text-gray-700 mb-4">
        //             Software Developer with 5 years of experience in full-stack development. Passionate about building user.user-friendly and efficient applications.
        //         </p>

        //         {/* Edit Profile Button */}
        //         <button className="bg-secondary text-white py-2 px-4 rounded hover:bg-tertiary">
        //             Edit Profile
        //         </button>
        //     </div>
        // </div>
    )
}

export default UserHome