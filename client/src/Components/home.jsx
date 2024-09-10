import React, { useState } from 'react'
import RequestTable from './requestTable';
import DonationsTable from './donationsTable';
import UnitsTable from './unitsTable';
import LoginForm from './loginForm';
import SignupForm from './signupForm';


const Home = () => {

	const [activeTab, setActiveTab] = useState('units')
	const [showLoginPopup, setShowLoginPopup] = useState(false)
	const [showSignupPopup, setShowSignupPopup] = useState(false)

	const handleTabSwitch = (tab) => {
		setActiveTab(tab)
	}

	const handleShowLoginPopup = (val) => {
		setShowLoginPopup(val)
	}

	const handleShowSignupPopup = (val) => {
		setShowSignupPopup(val)
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-secondary">
			<div className="bg-back rounded-lg shadow-lg p-8 h-[80vh] min-w-[150vh] flex flex-col justify-between max-w-sm">
				<div className='flex items-center justify-between'>
					<h1 className="text-4xl justify-start">Blood Bank Inventory</h1>
					<div className='justify-end space-x-4 items-center'>
						<button className=" bg-tertiary text-white py-2 px-4 rounded hover:bg-secondary hover:text-white" onClick={(e) => handleShowLoginPopup(true)}>
							Login
						</button>
						<button className=" bg-tertiary text-white py-2 px-4 rounded hover:bg-secondary hover:text-white" onClick={(e) => handleShowSignupPopup(true)}>
							Sign Up
						</button>
					</div>
				</div>

				{showLoginPopup && (
					<LoginForm closePopup={() => handleShowLoginPopup(false)} />
				)}

				{showSignupPopup && (
					<SignupForm closePopup={() => handleShowSignupPopup(false)} />
				)}

				{/* tabs */}
				<div>
					<ul className="flex mt-4">
						<li className="mr-1">
							<button
								className={`rounded-md inline-block py-2 px-4 ${activeTab === 'units' ? 'text-white bg-secondary' : 'bg-tertiary text-white hover:bg-secondary hover:text-white'
									}`}
								onClick={() => handleTabSwitch('units')}
							>
								Blood Units
							</button>
						</li>
						<li className="mr-1">
							<button
								className={`rounded-md inline-block py-2 px-4 ${activeTab === 'requests' ? 'text-white bg-secondary' : 'bg-tertiary text-white hover:bg-secondary hover:text-white'
									}`}
								onClick={() => handleTabSwitch('requests')}
							>
								Requests
							</button>
						</li>
						<li className="mr-1">
							<button
								className={`rounded-md inline-block py-2 px-4 ${activeTab === 'donations' ? 'text-white bg-secondary' : 'bg-tertiary text-white hover:bg-secondary hover:text-white'
									}`}
								onClick={() => handleTabSwitch('donations')}
							>
								Donations
							</button>
						</li>
					</ul>
					{/* table */}
					<div className="rounded-md mt-4">
						{/* Table for Requests */}
						{activeTab === 'requests' && (
							<RequestTable />
						)}
						{/* Table for Requests */}
						{activeTab === 'donations' && (
							<DonationsTable />
						)}
						{/* Table for Requests */}
						{activeTab === 'units' && (
							<UnitsTable />
						)}
					</div>
				</div>
				{/* <p className="text-gray-600">This is a simple card centered on the screen using Tailwind CSS.</p> */}
				{/* <button className="mt-6 bg-secondary text-white py-2 px-4 rounded hover:bg-blue-600">
          Click Me
        </button> */}
			</div>
		</div>
	)
}

export default Home