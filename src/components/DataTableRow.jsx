import React from 'react';

const DataTableRow = ({ data, index }) => {
    console.log("data", data)



    return (
        <tr className={`text-center ${index % 2 !== 0 && "bg-slate-200 border-y border-red-500 border-opacity-50"}`}>
            <td>
                <div>
                    <p>{data.itineraries[0].segments.map(segment => (
                        <div className='space-x-1'>
                            <small>{segment.carrierCode}</small>
                            <small>{segment.aircraft}</small>
                        </div>

                    ))}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{data.itineraries[0].segments.map(segment => (
                        <div className='space-x-1'>
                            <small>{segment.flightNumber}</small>
                            {/* <small>{segment.aircraft}</small> */}
                        </div>

                    ))}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{data.class[0].map(cls => (
                        <div className='space-x-1'>
                            <small>{cls}</small>
                            {/* <small>{segment.aircraft}</small> */}
                        </div>
                    ))}</p>
                </div>
            </td >

            <td>
                <div>
                    <p>{data.fareBasis[0].map(fare => (
                        <div className='space-x-1'>
                            <small>{fare}</small>
                        </div>
                    ))}</p>
                </div>
            </td >

            <td>
                <div>
                    <p>{data.itineraries[0].segments.map(segment => (
                        <div className='space-x-1'>
                            <small>{segment.departure.iataCode} -</small>
                            <small>{segment.arrival.iataCode}</small>
                        </div>

                    ))}</p>
                </div>
            </td>

            <td>
                <div>
                    <p>{data.itineraries[0].segments.map(segment => (
                        <div className='space-x-1'>
                            <small>{segment.departure.at}</small>
                        </div>

                    ))}</p>
                </div>
            </td>

            <td>
                <div>
                    <p>{data.itineraries[0].segments.map(segment => (
                        <div className='space-x-1'>
                            <small>{segment.arrival.at}</small>
                        </div>

                    ))}</p>
                </div>
            </td>

            <td>
                <div>
                    <p>{data.itineraries[0].duration}</p>
                </div>
            </td>

            <td>
                <div>
                    <p>{data.price}</p>
                    <button className='btn bg-blue-900 rounded text-white px-2 '>Select</button>
                </div>
            </td>

        </tr >
    );
};

export default DataTableRow;