import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

	const [activeTab, setActiveTab] = useState('units')
	const [currentUnitsPage, setCurrentUnitsPage] = useState(1);
	const [currentRequestsPage, setCurrentRequestsPage] = useState(1);
	const [currentDonationsPage, setCurrentDonationsPage] = useState(1);

	const [page, setPage] = useState(1);
	const [users, setUsers] = useState([])
	const [requests, setRequests] = useState([])
	const [donations, setDonations] = useState([])
	const [units, setUnits] = useState([])
	const [loading, setLoading] = useState(false)
	const [totalUnitPages, setTotalUnitPages] = useState(1);
	const [totalRequestPages, setTotalRequestPages] = useState(1);
	const [totalDonationPages, setTotalDonationPages] = useState(1);


	// // Get the data to display for the current page
	// const getCurrentPageData = () => {
	// 	const startIndex = (currentPage - 1) * itemsPerPage;
	// 	const endIndex = startIndex + itemsPerPage;
	// 	return data.slice(startIndex, endIndex);
	// };

	// Handle page change
	const handleUnitsPageChange = (page) => {
		setCurrentUnitsPage(page);
	};

	const handleRequestsPageChange = (page) => {
		setCurrentRequestsPage(page);
	};

	const handleDonationsPageChange = (page) => {
		setCurrentDonationsPage(page);
	};

	const handleTabSwitch = (tab) => {
		setActiveTab(tab)
	}

	// const fetchUsers = async (page, limit) => {
	// 	const response = await axios.get('http://localhost:5000/api/users', {
	// 		params: {
	// 			currentPage,
	// 			limit
	// 		}
	// 	})
	// 	return response
	// }
	const fetchRequests = async (page, limit) => {
		const response = await axios.get('http://localhost:5000/api/requests', {
			params: {
				currentRequestsPage,
				limit
			}
		})
		return response
	}
	const fetchDonations = async (page, limit) => {
		const response = await axios.get('http://localhost:5000/api/donations', {
			params: {
				currentDonationsPage,
				limit
			}
		})
		return response
	}
	const fetchUnits = async (page, limit) => {
		const response = await axios.get('http://localhost:5000/api/units', {
			params: {
				currentUnitsPage,
				limit
			}
		})
		return response
	}

	useEffect(() => {
		const loadItems = async () => {
			setLoading(true)
			try {
				let donationsdata = await fetchDonations(currentDonationsPage, 10)
				setDonations(donationsdata.data.paginatedDonations);
				setTotalDonationPages(donationsdata.data.totalPages)
			} catch (error) {
				console.log('Error fetching data', error)
			} finally {
				setLoading(false)
			}
		}

		loadItems()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentDonationsPage])

	useEffect(() => {
		const loadItems = async () => {
			setLoading(true)
			try {
				let requestsdata = await fetchRequests(currentRequestsPage, 10)
				setRequests(requestsdata.data.paginatedRequests);
				setTotalRequestPages(requestsdata.data.totalPages)
			} catch (error) {
				console.log('Error fetching data', error)
			} finally {
				setLoading(false)
			}
		}

		loadItems()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentRequestsPage])

	useEffect(() => {
		const loadItems = async () => {
			setLoading(true)
			try {
				let unitsdata = await fetchUnits(currentUnitsPage, 10)
				setUnits(unitsdata.data.paginatedUnits);
				setTotalUnitPages(unitsdata.data.totalPages)
			} catch (error) {
				console.log('Error fetching data', error)
			} finally {
				setLoading(false)
			}
		}

		loadItems()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentUnitsPage])

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white rounded-lg shadow-lg p-8 h-[80vh] min-w-[150vh] flex flex-col justify-between max-w-sm">
				<div className='flex items-center justify-between'>
					<h1 className="text-4xl justify-start font-semibold">Blood Bank Inventory</h1>
					<div className='justify-end space-x-4 items-center'>
						<button className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
							Login
						</button>
						<button className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
							Sign Up
						</button>
					</div>
				</div>

				{/* tabs */}
				<div>
					<ul className="flex mt-4">
						<li className="mr-1">
							<button
								className={`rounded-md inline-block py-2 px-4 font-semibold ${activeTab === 'units' ? 'text-white bg-blue-500' : 'text-blue-500 hover:text-blue-700'
									}`}
								onClick={() => handleTabSwitch('units')}
							>
								Blood Units
							</button>
						</li>
						<li className="mr-1">
							<button
								className={`rounded-md inline-block py-2 px-4 font-semibold ${activeTab === 'requests' ? 'text-white bg-blue-500' : 'text-blue-500 hover:text-blue-700'
									}`}
								onClick={() => handleTabSwitch('requests')}
							>
								Requests
							</button>
						</li>
						<li className="mr-1">
							<button
								className={`rounded-md inline-block py-2 px-4 font-semibold ${activeTab === 'donations' ? 'text-white bg-blue-500' : 'text-blue-500 hover:text-blue-700'
									}`}
								onClick={() => handleTabSwitch('donations')}
							>
								Donations
							</button>
						</li>
					</ul>
					{/* table */}
					<div className="rounded-md mt-4">
						{/* <table className="min-w-full bg-white border border-gray-300 rounded">
							<thead>
								<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
									<th className="py-3 px-6 text-left">Blood Type</th>
									<th className="py-3 px-6 text-left">Available Units</th>
									<th className="py-3 px-6 text-left">Status</th>
								</tr>
							</thead>
							<tbody className="text-gray-600 text-sm">
								<tr className="border-b border-gray-200 hover:bg-gray-100">
									<td className="py-3 px-6 text-left">A+</td>
									<td className="py-3 px-6 text-left">120</td>
									<td className="py-3 px-6 text-left">
										<span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Sufficient</span>
									</td>
								</tr>
								<tr className="border-b border-gray-200 hover:bg-gray-100">
									<td className="py-3 px-6 text-left">O-</td>
									<td className="py-3 px-6 text-left">30</td>
									<td className="py-3 px-6 text-left">
										<span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Low</span>
									</td>
								</tr>
								<tr className="border-b border-gray-200 hover:bg-gray-100">
									<td className="py-3 px-6 text-left">B-</td>
									<td className="py-3 px-6 text-left">50</td>
									<td className="py-3 px-6 text-left">
										<span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Critical</span>
									</td>
								</tr>
							</tbody>
						</table> */}
						{/* Table for Requests */}
						{activeTab === 'requests' && (
							<>
								<div className='h-[50vh] overflow-x-scroll'>
									<table className="min-w-full bg-white border border-gray-300">
										<thead>
											<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal sticky top-0 z-10">
												<th className="py-3 px-6 text-left">Request ID</th>
												<th className="py-3 px-6 text-left">Requested By</th>
												<th className="py-3 px-6 text-left">Blood Group</th>
												<th className="py-3 px-6 text-left">Requested Units</th>
												<th className="py-3 px-6 text-left">Date</th>
											</tr>
										</thead>
										<tbody className="text-gray-600 text-sm">
											<tr className="border-b border-gray-200 hover:bg-gray-100">
												<td className="py-3 px-6 text-left">REQ-001</td>
												<td className="py-3 px-6 text-left">akhil</td>
												<td className="py-3 px-6 text-left">A+</td>
												<td className="py-3 px-6 text-left">10</td>
												<td className="py-3 px-6 text-left">2024-09-09</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="flex justify-center">
									<button
										onClick={() => handleRequestsPageChange(currentRequestsPage - 1)}
										disabled={currentRequestsPage === 1}
										className="px-4 py-2 bg-blue-500 text-white rounded-l"
									>
										Previous
									</button>
									{[...Array(totalRequestPages).keys()].map(page => (
										<button
											key={page + 1}
											onClick={() => handleRequestsPageChange(page + 1)}
											className={`px-4 py-2 ${currentRequestsPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
												}`}
										>
											{page + 1}
										</button>
									))}
									<button
										onClick={() => handleRequestsPageChange(currentRequestsPage + 1)}
										disabled={currentRequestsPage === totalRequestPages}
										className="px-4 py-2 bg-blue-500 text-white rounded-r"
									>
										Next
									</button>
								</div>
							</>
						)}
						{/* Table for Requests */}
						{activeTab === 'donations' && (
							<>
								<div className='h-[50vh] overflow-x-scroll'>
									<table className="min-w-full bg-white border border-gray-300">
										<thead>
											<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal sticky top-0 z-10">
												<th className="py-3 px-6 text-left">Donation ID</th>
												<th className="py-3 px-6 text-left">Donor Name</th>
												<th className="py-3 px-6 text-left">Units Donated</th>
												<th className="py-3 px-6 text-left">Blood Group</th>
												<th className="py-3 px-6 text-left">Date</th>
											</tr>
										</thead>
										<tbody className="text-gray-600 text-sm">
											<tr className="border-b border-gray-200 hover:bg-gray-100">
												<td className="py-3 px-6 text-left">001</td>
												<td className="py-3 px-6 text-left">akhil</td>
												<td className="py-3 px-6 text-left">10</td>
												<td className="py-3 px-6 text-left">A+</td>
												<td className="py-3 px-6 text-left">2024-09-09</td>
											</tr>
											{/* Add more rows as needed */}
										</tbody>
									</table>
								</div>
								<div className="flex justify-center">
									<button
										onClick={() => handleDonationsPageChange(currentDonationsPage - 1)}
										disabled={currentDonationsPage === 1}
										className="px-4 py-2 bg-blue-500 text-white rounded-l"
									>
										Previous
									</button>
									{[...Array(totalDonationPages).keys()].map(page => (
										<button
											key={page + 1}
											onClick={() => handleDonationsPageChange(page + 1)}
											className={`px-4 py-2 ${currentDonationsPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
												}`}
										>
											{page + 1}
										</button>
									))}
									<button
										onClick={() => handleDonationsPageChange(currentDonationsPage + 1)}
										disabled={currentDonationsPage === totalDonationPages}
										className="px-4 py-2 bg-blue-500 text-white rounded-r"
									>
										Next
									</button>
								</div>
							</>
						)}
						{/* Table for Requests */}
						{activeTab === 'units' && (
							<>
								<div className='h-[50vh] overflow-x-scroll'>
									{/* <h2 className="text-2xl font-semibold mb-4">Blood Requests</h2> */}
									<table className="min-w-full bg-white border border-gray-300">
										<thead>
											<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal sticky top-0 z-10">
												<th className="py-3 px-6 text-left">Blood Type</th>
												<th className="py-3 px-6 text-left">Available Units</th>
												<th className="py-3 px-6 text-left">Status</th>
											</tr>
										</thead>
										<tbody className="text-gray-600 text-sm">
											<tr className="border-b border-gray-200 hover:bg-gray-100">
												<td className="py-3 px-6 text-left">A+</td>
												<td className="py-3 px-6 text-left">120</td>
												<td className="py-3 px-6 text-left">
													<span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Sufficient</span>
												</td>
											</tr>
											{/* Add more rows as needed */}
										</tbody>
									</table>
								</div>
								<div className="flex justify-center">
									<button
										onClick={() => handleUnitsPageChange(currentUnitsPage - 1)}
										disabled={currentUnitsPage === 1}
										className="px-4 py-2 bg-blue-500 text-white rounded-l"
									>
										Previous
									</button>
									{[...Array(totalUnitPages).keys()].map(page => (
										<button
											key={page + 1}
											onClick={() => handleUnitsPageChange(page + 1)}
											className={`px-4 py-2 ${currentUnitsPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
												}`}
										>
											{page + 1}
										</button>
									))}
									<button
										onClick={() => handleUnitsPageChange(currentUnitsPage + 1)}
										disabled={currentUnitsPage === totalUnitPages}
										className="px-4 py-2 bg-blue-500 text-white rounded-r"
									>
										Next
									</button>
								</div>

							</>
						)}
					</div>
				</div>
				<p className="text-gray-600">This is a simple card centered on the screen using Tailwind CSS.</p>
				{/* <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Click Me
        </button> */}
			</div>
		</div>
	)
}

export default Home