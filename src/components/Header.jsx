import React, { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { GrNotification } from 'react-icons/gr';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    const navItems = <>
        <li className='cursor-pointer hover:text-blue-500'>Dashboard</li>
        <li className='cursor-pointer hover:text-blue-500'>Master Price</li>
        <li className='cursor-pointer hover:text-blue-500'>Custom Price</li>
        <li className='cursor-pointer hover:text-blue-500'>Calendar</li>
        <li className='cursor-pointer hover:text-blue-500'>Reports</li>
    </>


    return (
        <div>
            <nav className='bg-gray-700 md:px-14 p-2 max-w-screen-2xl mx-auto text-white border-b'>
                <div className='container mx-auto flex items-center justify-between text-lg font-medium'>

                    <div className='flex items-center'>
                        {/* Menu full */}
                        <ul className='md:flex space-x-12 items-center hidden '>
                            {navItems}
                        </ul>
                    </div>

                    {/* language and button */}
                    <div className='md:flex items-center space-x-12 hidden'>
                        <a href="#" className='hidden md:flex items-center space-x-2'><GrNotification /></a>
                        <button className='bg-slate-500 px-4 text-white py-2 transition-all duration-300 rounded hover:bg-slate-800 ' >Login</button>
                    </div>

                    {/* menu btn for mobile */}
                    <div className='md:hidden'>

                        <button onClick={toggleMenu} className=' text-white focus:outline-none '>
                            {
                                isMenuOpen ? (<FaXmark className='w-6 h-6 text-lg' />) : (<FaBars className='w-6 h-6 text-lg' />)
                            }
                        </button>

                    </div>
                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-5 pb-5 text-lg bg-slate-400 ${isMenuOpen ? "block" : "hidden"}`}>
                <ul className='space-y-4 text-white'>
                    {navItems}
                </ul>
                <button className='bg-slate-500 px-4 text-white py-2 transition-all duration-300 rounded hover:bg-slate-800 ' >Login</button>
            </div>

        </div>
    );
};

export default Header;