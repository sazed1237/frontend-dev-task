import React from 'react';

const FormHead = () => {
    return (
        <div>
            <div className='w-full flex justify-center items-center my-5 font-semibold'>
                <button className='px-3 border-black border'>Round Trip</button>
                <button className='px-3 border-black border-y bg-blue-800 text-white'>One Way</button>
                <button className='px-3 border-black border'>Multi city</button>
            </div>

            <div className='border-y-2 border-opacity-45 py-3 border-blue-800'>
                <div className='space-x-2 border-b pb-3 border-opacity-45 border-blue-800 w-full font-semibold flex items-center justify-center'>
                    <input type="text" placeholder='LHR' className='border-2 border-gray-300 w-full py-1 max-w-36 px-2' />
                    <input type="text" placeholder='CDG' className='border-2 border-gray-300 w-full py-1 max-w-36 px-2' />
                    <input type="date" placeholder='' className='border-2 border-gray-300 w-full py-1 max-w-36 px-2' />
                    <select name="startDay" id="startDay" className='border-2 border-gray-300 w-full py-1 max-w-24 ' >
                        <option value="day">Day-</option>
                    </select>
                    <select name="startDay" id="startDay" className='border-2 border-gray-300 w-full py-1 max-w-24 ' >
                        <option value="day">Day-</option>
                    </select>

                    <select name="startDay" id="startDay" className='border-2 border-gray-300 w-full py-1 max-w-40 ' >
                        <option value="anyTime">Any Time</option>
                    </select>

                    <p>+</p>
                    <select name="startDay" id="startDay" className='border-2 border-gray-300 w-full py-1 max-w-36 ' >
                        <option value="adt">ADT</option>
                    </select>
                    <select name="startDay" id="startDay" className='border-2 border-gray-300 w-full py-1 max-w-36 ' >
                        <option value="num">1</option>
                    </select>
                    <p>+</p>
                </div>

                <div className='flex justify-between items-center px-11 mt-4'>
                    <div className='flex gap-2'>
                        <input type="checkbox" name="extra" id="extra" />
                        <h4>Extra Options</h4>
                    </div>

                    <div className='flex gap-2'>
                        <h4>Environment</h4>
                        <div className='flex gap-1'>
                            <input type="radio" name="radio-2" checked />
                            <h4>Dummy</h4>
                        </div>
                        <div className='flex gap-1'>
                            <input type="radio" name="radio-2" />
                            <h4>PDT</h4>
                        </div>
                    </div>

                    <div className=''>
                        <input type="search" name="search" id="search" placeholder='search' className='border-2 border-gray-300 py-1 px-2' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormHead;