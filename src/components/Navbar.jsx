import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setnav] = useState(false)
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'Experience'
        },
        {
            id: 5,
            link: 'Contact'
        }
    ]
    return (
        <div className='flex justify-between w-full h-20 text-white fixed items-center bg-black '>
            <div>
                <h1 className='font-signature text-5xl ml-2'>
                    Ashish
                </h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 capitalize text-gray-500 hover:scale-105 duration-200 cursor-pointer'>
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                )
                )}
            </ul>
            <div onClick={() => setnav(!nav)} className='pr-4 cursor-pointer z-10 text-gray-500 md:hidden '>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (<ul className='flex flex-col items-center justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        <Link to={link} smooth duration={500} onClick={() => setnav(!nav)}>{link}</Link>
                    </li>
                )
                )}

            </ul>)}
        </div>
    )
}

export default Navbar