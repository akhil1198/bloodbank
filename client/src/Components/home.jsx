import React, { useState } from 'react'
import RequestTable from './requestTable';
import DonationsTable from './donationsTable';
import UnitsTable from './unitsTable';
import LoginForm from './loginForm';
import SignupForm from './signupForm';
import UserHome from './userHome';
import DonationForm from './donationForm';
import RequestForm from './requestForm';


const Home = () => {

	const [activeTab, setActiveTab] = useState('units')
	const [showLoginPopup, setShowLoginPopup] = useState(false)
	const [showSignupPopup, setShowSignupPopup] = useState(false)
	const [loggedin, setLoggedin] = useState(false)
	const [loggedinUser, setLoggedinUser] = useState()
	const [activeHomeTab, setActiveHomeTab] = useState('profile')

	const handleTabSwitch = (tab) => {
		setActiveTab(tab)
	}

	const handleHomeTabSwitch = (tab) => {
		setActiveHomeTab(tab)
	}

	const handleShowLoginPopup = (val) => {
		setShowLoginPopup(val)
	}

	const handleShowSignupPopup = (val) => {
		setShowSignupPopup(val)
	}

	const handleSignupSuccess = () => {
		handleShowSignupPopup(false)
		handleShowLoginPopup(true)
	}

	const handleLogin = () => {
		handleShowLoginPopup(false)
		setLoggedin(true)
	}

	const userDetails = (user) => {
		console.log("loggedin -> ", user.data.name)
		setLoggedinUser(user.data)
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-secondary">
			<div className="bg-back rounded-lg shadow-lg p-8 h-[80vh] min-w-[150vh] flex flex-col justify-between max-w-sm">
				<div className='flex items-center justify-between'>
					<h1 className="text-4xl justify-start">Blood Bank Inventory</h1>
					{loggedin ?
						<div className='justify-end space-x-4 items-center'>
							<button className="text-xl py-2 px-4">
								Hi {loggedinUser && loggedinUser.name || 'akhil'}!
							</button>
							<button className=" bg-tertiary text-white py-2 px-4 rounded hover:bg-secondary hover:text-white" onClick={(e) => handleShowSignupPopup(true)} >
								Log out
							</button>
						</div>
						:
						<div className='justify-end space-x-4 items-center'>
							<button className=" bg-tertiary text-white py-2 px-4 rounded hover:bg-secondary hover:text-white" onClick={(e) => handleShowLoginPopup(true)}>
								Login
							</button>
							<button className=" bg-tertiary text-white py-2 px-4 rounded hover:bg-secondary hover:text-white" onClick={(e) => handleShowSignupPopup(true)} >
								Sign Up
							</button>
						</div>
					}

				</div>

				{showLoginPopup && (
					<LoginForm closePopup={() => handleShowLoginPopup(false)} loggedin={handleLogin} user={userDetails} />
				)}

				{showSignupPopup && (
					<SignupForm closePopup={() => handleShowSignupPopup(false)} onSignupSuccess={handleSignupSuccess} />
				)}

				{loggedin ?
					<div>
						<ul className="flex mt-4">
							<li className="mr-1">
								<button
									className={`rounded-md inline-block py-2 px-4 ${activeHomeTab === 'profile' ? 'text-white bg-secondary' : 'bg-tertiary text-white hover:bg-secondary hover:text-white'
										}`}
									onClick={() => handleHomeTabSwitch('profile')}
								>
									Profile
								</button>
							</li>
							<li className="mr-1">
								<button
									className={`rounded-md inline-block py-2 px-4 ${activeHomeTab === 'donate' ? 'text-white bg-secondary' : 'bg-tertiary text-white hover:bg-secondary hover:text-white'
										}`}
									onClick={() => handleHomeTabSwitch('donate')}
								>
									Donate
								</button>
							</li>
							<li className="mr-1">
								<button
									className={`rounded-md inline-block py-2 px-4 ${activeHomeTab === 'request' ? 'text-white bg-secondary' : 'bg-tertiary text-white hover:bg-secondary hover:text-white'
										}`}
									onClick={() => handleHomeTabSwitch('request')}
								>
									Request
								</button>
							</li>
						</ul>
						{/* table */}
						<div className="rounded-md mt-4">
							{/* Table for Requests */}
							{activeHomeTab === 'profile' && (
								<UserHome user={loggedinUser} />
							)}
							{/* Table for Requests */}
							{activeHomeTab === 'donate' && (
								<DonationForm />
							)}
							{/* Table for Requests */}
							{activeHomeTab === 'request' && (
								<RequestForm />
							)}
						</div>
					</div>
					:
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
					</div>}
				{/* tabs */}

				{/* <p className="text-gray-600">This is a simple card centered on the screen using Tailwind CSS.</p> */}
				{/* <button className="mt-6 bg-secondary text-white py-2 px-4 rounded hover:bg-blue-600">
          Click Me
        </button> */}
			</div>
		</div >
	)
}

export default Home