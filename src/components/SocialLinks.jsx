import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
  const links=[
    {
      id:1,
      child:(
        <>
        Linkedin <FaLinkedin size={30}/>
        </>
      ),
      href:'http://linkedin.com',
      style:'rounded-tr-md'
    },
    {
      id:2,
      child:(
        <>
        Github <FaGithub size={30}/>
        </>
      ),
      href:'http://github.com/Ashishbansal083'
      
    },
    {
      id:3,
      child:(
        <>
        Mail <HiOutlineMail size={30}/>
        </>
      ),
      href:'mailto:bansalgashi083@gmail.com',      
    },
    {
      id:4,
      child:(
        <>
        Resume <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href:'/Resume.pdf',
      download:true,
      style:'rounded-br-md',
    },
  ]


  return (
    <div className='hidden lg:flex flex-col top-[30%] left-0 fixed'>
      <ul>
        {links.map(({href,id,download,child,style})=>(
          <li key={id}   className={'flex justify-center items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'+" "+style}>
          <a href={href} 
          className='flex w-full items-center justify-between text-white'
          download={download}
          target='_blank'
          rel='noreferrer'>            
            {child}            
          </a>
        </li>
        ))}        
      </ul>
    </div>
  )
}

export default SocialLinks