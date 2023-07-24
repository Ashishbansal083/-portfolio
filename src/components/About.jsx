import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full bg-gradient-to-b from-gray-800 to-black text-white h-screen pt-48'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 '>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl'>I am an experienced Full Stack Web Developer with a strong skill set in creating responsive web applications using React.js, Node.js, and Git. Known for my troubleshooting abilities and attention to optimization and security, I thrive in collaborating with cross-functional teams and possess excellent end-user support skills. 
        </p>
        <br />
        <p className='text-xl'>As a successful freelancer on UpWork, I have utilized my business acumen and client understanding to deliver customized solutions that consistently exceed expectations. My dedication lies in enhancing website functionality and user experience through continuous development and maintenance.</p>
      </div>
    </div>
  )
}

export default About