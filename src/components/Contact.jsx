import React from 'react'

function Contact() {
  return (
    <div name='Contact' className='bg-gradient-to-b from-black to-gray-800 w-full h-screen p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-gray-500 border-b-4 inline'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <form action='https://getform.io/f/131ba1fb-7841-44fa-8344-8352a7f396da' method='POST' className='flex flex-col gap-4 w-full md:w-1/2
                '>
                    <input
                    name='name'
                    placeholder='Enter your name'
                    type='text'
                    className='bg-transparent rounded-md p-2 border-2 text-white focus:outline-none'         
                    />
                    <input
                    name='email'
                    type='text'
                    placeholder='Enter your email'    
                    className='bg-transparent rounded-md p-2 border-2 text-white focus:outline-none'        
                    />
                    <textarea
                    name='message'
                    placeholder='Enter your message'
                    rows='10'
                    className='bg-transparent rounded-md p-2 border-2 text-white focus:outline-none'          
                    />
                    <button className='bg-gradient-to-b from-cyan-500 to-blue-500 py-3 px-6 my-8 mx-auto text-white flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact