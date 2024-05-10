import React, { useEffect, useState } from 'react';
import FormHead from './FormHead';
import DataTableRow from './DataTableRow';

const FlightForm = () => {

    const [data, setData] = useState([])

    const dataFetch = async () => {
        const dataResponse = await fetch('../../public/data/data.json')

        const data = await dataResponse.json()
        setData(data)
    }

    useEffect(() => {
        dataFetch()
    }, [])

    console.log(data)
    return (
        <div>
            <div>
                <FormHead></FormHead>
            </div>
            <div className='mt-2'>
                <table className='w-full mx-auto'>
                    <thead className='uppercase bg-slate-200 text-gray-700'>
                        <tr>
                            <th className='py-2'>flight</th>
                            <th>Aircraft</th>
                            <th>Class</th>
                            <th>Fare</th>
                            <th>Route</th>
                            <th>Departure</th>
                            <th>Arrival</th>
                            <th>Duration</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.flightOffer?.map((d, index) => <DataTableRow
                                key={index}
                                data={d}
                                index={index}
                            ></DataTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FlightForm;