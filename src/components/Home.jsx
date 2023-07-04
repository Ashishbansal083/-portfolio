import React from 'react'
import heroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black  to-gray-800 '>
            <div className=' flex flex-col justify-center items-center h-full px-4 max-w-screen-lg mx-auto md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I,m a Full Stack Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Experienced in building and designing software.
                        Currently i love to work on web application using technologies like React,Tailwind,Nextjs,Node and GraphQl
                    </p>
                    <div>
                        <Link className='w-fit rounded-md items-center flex py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white my-2 cursor-pointer group' to='portfolio' smooth duration={500}>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={heroImage} className='rounded-3xl mx-auto ' alt='profile'/>
                </div>

            </div>
        </div>
    )
}

export default Home