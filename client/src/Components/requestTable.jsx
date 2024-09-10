import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const RequestTable = () => {
    const [currentRequestsPage, setCurrentRequestsPage] = useState(1);

    const [requests, setRequests] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalRequestPages, setTotalRequestPages] = useState(1);

    const handleRequestsPageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalRequestPages) {
            setCurrentRequestsPage(newPage);
        }
    };

    // Function to fetch paginated data from backend
    const fetchRequests = async (page, limit) => {
        try {
            // Send current page and limit as query params
            const response = await axios.get('http://localhost:5000/api/requests', {
                params: {
                    page, // Use 'page' to send the correct current page
                    limit
                }
            });
            return response.data; // Return the data object
        } catch (error) {
            console.error('Error fetching data', error);
            throw error;
        }
    };

    // Fetch data when currentRequestsPage changes
    useEffect(() => {
        const loadItems = async () => {
            setLoading(true);
            try {
                // Fetch data for the current page
                const requestsData = await fetchRequests(currentRequestsPage, 10);
                console.log('Requests data:', requestsData);
                setRequests(requestsData.paginatedRequests);
                setTotalRequestPages(requestsData.totalPages);
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        };

        loadItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentRequestsPage]);

    return (
        <div>
            <div className='h-[50vh] overflow-x-hidden'>
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
                        {loading ? (
                            <div className='flex justify-center items-center h-screen'>
                                <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-primary border-t-transparent"></div>
                            </div>
                        ) : requests.map(item => {
                            // { console.log("item", item) }
                            return (
                                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left">{item.id}</td>
                                    <td className="py-3 px-6 text-left">{item.name}</td>
                                    <td className="py-3 px-6 text-left">{item.requestedBloodGroup}</td>
                                    <td className="py-3 px-6 text-left">{item.count}</td>
                                    <td className="py-3 px-6 text-left">{item.createdAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => handleRequestsPageChange(currentRequestsPage - 1)}
                    disabled={currentRequestsPage === 1}
                    className="px-2 py-2 w-10 h-10 rounded-full"
                >
                    <GrFormPrevious size='lg' />
                </button>
                {[...Array(totalRequestPages).keys()].map(page => (
                    <button
                        key={page + 1}
                        onClick={() => handleRequestsPageChange(page + 1)}
                        className={`px-4 py-2 w-10 h-10 flex items-center justify-center rounded-full ${currentRequestsPage === page + 1 ? 'bg-secondary text-white' : 'bg-back text-secondary'
                            }`}
                    >
                        {page + 1}
                    </button>
                ))}
                <button
                    onClick={() => handleRequestsPageChange(currentRequestsPage + 1)}
                    disabled={currentRequestsPage === totalRequestPages}
                    className="px-2 py-2 w-10 h-10 rounded-full"
                >
                    <GrFormNext size='lg' />
                </button>
            </div>
        </div>
    )
}

export default RequestTable