import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const UnitsTable = () => {
    const [loading, setLoading] = useState(false)
    const [currentUnitsPage, setCurrentUnitsPage] = useState(1);
    const [units, setUnits] = useState([])
    const [totalUnitPages, setTotalUnitPages] = useState(1);

    const handleUnitsPageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalUnitPages) {
            setCurrentUnitsPage(newPage);
        }
    };

    const fetchUnits = async (page, limit) => {
        try {
            const response = await axios.get('http://localhost:5000/api/units', {
                params: {
                    page,
                    limit
                }
            })
            return response.data
        } catch (error) {
            console.error('Error fetching data', error);
            throw error;
        }
    }

    useEffect(() => {
        const loadItems = async () => {
            setLoading(true)
            try {
                const unitsData = await fetchUnits(currentUnitsPage, 10)
                setUnits(unitsData.paginatedUnits);
                setTotalUnitPages(unitsData.totalPages)
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
        <div>
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
                        {units.map(item => {
                            return (
                                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left">{item.bloodGroup}</td>
                                    <td className="py-3 px-6 text-left">{item.count}</td>
                                    <td className="py-3 px-6 text-left">
                                        {item.count > 20 ? <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Sufficient</span> : <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Low</span>}
                                    </td>
                                </tr>
                            )
                        })}
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => handleUnitsPageChange(currentUnitsPage - 1)}
                    disabled={currentUnitsPage === 1}
                    className="px-2 py-2 w-10 h-10 rounded-full"
                >
                    <GrFormPrevious size='lg' />
                </button>
                {[...Array(totalUnitPages).keys()].map(page => (
                    <button
                        key={page + 1}
                        onClick={() => handleUnitsPageChange(page + 1)}
                        className={`px-4 py-2 w-10 h-10 flex items-center justify-center rounded-full ${currentUnitsPage === page + 1 ? 'bg-secondary text-white' : 'bg-back text-secondary'
                            }`}
                    >
                        {page + 1}
                    </button>
                ))}
                <button
                    onClick={() => handleUnitsPageChange(currentUnitsPage + 1)}
                    disabled={currentUnitsPage === totalUnitPages}
                    className="px-2 py-2 w-10 h-10 rounded-full"
                >
                    <GrFormNext size='lg' />
                </button>
            </div>
        </div>
    )
}

export default UnitsTable