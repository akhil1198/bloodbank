import React, { useState } from 'react'

const Home = () => {

	const [activeTab, setActiveTab] = useState('units')

	const handleTabSwitch = (tab) => {
		setActiveTab(tab)
	}

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
					<ul className="flex mb-4">
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
					<div class="rounded-md">
						{/* <table class="min-w-full bg-white border border-gray-300 rounded">
							<thead>
								<tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
									<th class="py-3 px-6 text-left">Blood Type</th>
									<th class="py-3 px-6 text-left">Available Units</th>
									<th class="py-3 px-6 text-left">Status</th>
								</tr>
							</thead>
							<tbody class="text-gray-600 text-sm">
								<tr class="border-b border-gray-200 hover:bg-gray-100">
									<td class="py-3 px-6 text-left">A+</td>
									<td class="py-3 px-6 text-left">120</td>
									<td class="py-3 px-6 text-left">
										<span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Sufficient</span>
									</td>
								</tr>
								<tr class="border-b border-gray-200 hover:bg-gray-100">
									<td class="py-3 px-6 text-left">O-</td>
									<td class="py-3 px-6 text-left">30</td>
									<td class="py-3 px-6 text-left">
										<span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Low</span>
									</td>
								</tr>
								<tr class="border-b border-gray-200 hover:bg-gray-100">
									<td class="py-3 px-6 text-left">B-</td>
									<td class="py-3 px-6 text-left">50</td>
									<td class="py-3 px-6 text-left">
										<span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Critical</span>
									</td>
								</tr>
							</tbody>
						</table> */}
						{/* Table for Requests */}
						{activeTab === 'requests' && (
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
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr><tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr><tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>

										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left">REQ-001</td>
											<td className="py-3 px-6 text-left">akhil</td>
											<td className="py-3 px-6 text-left">A+</td>
											<td className="py-3 px-6 text-left">10</td>
											<td className="py-3 px-6 text-left">2024-09-09</td>
										</tr>
										{/* Add more rows as needed */}
									</tbody>
								</table>
							</div>
						)}
						{/* Table for Requests */}
						{activeTab === 'donations' && (
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
						)}
						{/* Table for Requests */}
						{activeTab === 'units' && (
							<div className='h-[50vh] overflow-x-scroll'>
								{/* <h2 className="text-2xl font-semibold mb-4">Blood Requests</h2> */}
								<table className="min-w-full bg-white border border-gray-300">
									<thead>
										<tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal sticky top-0 z-10">
											<th class="py-3 px-6 text-left">Blood Type</th>
											<th class="py-3 px-6 text-left">Available Units</th>
											<th class="py-3 px-6 text-left">Status</th>
										</tr>
									</thead>
									<tbody className="text-gray-600 text-sm">
										<tr class="border-b border-gray-200 hover:bg-gray-100">
											<td class="py-3 px-6 text-left">A+</td>
											<td class="py-3 px-6 text-left">120</td>
											<td class="py-3 px-6 text-left">
												<span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Sufficient</span>
											</td>
										</tr>
										{/* Add more rows as needed */}
									</tbody>
								</table>
							</div>
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