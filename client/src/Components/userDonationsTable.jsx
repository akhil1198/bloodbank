import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const UserDonationsTable = (user) => {
    const [donations, setDonations] = useState([])
    const [currentDonationsPage, setCurrentDonationsPage] = useState(1);
    const [loading, setLoading] = useState(false)

    const [totalDonationPages, setTotalDonationPages] = useState(1);

    const handleDonationsPageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalDonationPages) {
            setCurrentDonationsPage(newPage);
        }
    };

    const fetchDonations = async (page, limit) => {
        const response = await axios.get('http://localhost:5000/api/donations/id', {
            params: {
                page,
                limit,
                userid: user.id
            }
        })
        return response.data
    }

    useEffect(() => {
        const loadItems = async () => {
            setLoading(true)
            try {
                let donationsdata = await fetchDonations(currentDonationsPage, 10)
                console.log(donationsdata)
                setDonations(donationsdata.paginatedDonations);
                setTotalDonationPages(donationsdata.totalPages)
            } catch (error) {
                console.log('Error fetching data', error)
            } finally {
                setLoading(false)
            }
        }

        loadItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentDonationsPage])

    return (
        <div>
            <div className='min-h-[33.8vh] overflow-x-hidden'>
                <table className="min-w-full border border-gray-300">
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
                        {donations.map(item => {
                            return (
                                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left">{item.id}</td>
                                    <td className="py-3 px-6 text-left">{item.name}</td>
                                    <td className="py-3 px-6 text-left">{item.count}</td>
                                    <td className="py-3 px-6 text-left">{item.donatedBloodGroup}</td>
                                    <td className="py-3 px-6 text-left">{item.createdAt}</td>
                                </tr>
                            )
                        })}
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => handleDonationsPageChange(currentDonationsPage - 1)}
                    disabled={currentDonationsPage === 1}
                    className="px-2 py-2 w-10 h-10 rounded-full"
                >
                    <GrFormPrevious length="lg" />
                </button>
                {[...Array(totalDonationPages).keys()].map(page => (
                    <button
                        key={page + 1}
                        onClick={() => handleDonationsPageChange(page + 1)}
                        className={`px-4 py-2 w-10 h-10 flex items-center justify-center rounded-full  ${currentDonationsPage === page + 1 ? 'bg-secondary text-white' : 'bg-back text-secondary'
                            }`}
                    >
                        {page + 1}
                    </button>
                ))}
                <button
                    onClick={() => handleDonationsPageChange(currentDonationsPage + 1)}
                    disabled={currentDonationsPage === totalDonationPages}
                    className="px-2 py-2 w-10 h-10 rounded-full"
                >
                    <GrFormNext length="lg" />
                </button>
            </div>
        </div>
    )
}

export default UserDonationsTable