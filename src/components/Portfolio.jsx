import React from 'react'
import Recipesearch from '../assets/portfolio/Recipesearch .png'
import TodoList from '../assets/portfolio/TodoList.png'
import navbar from '../assets/portfolio/navbar.jpg'
import ecommerce from '../assets/portfolio/ecommerce.png'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Recipesearch,
      url: 'https://search-recipe-fe76b.web.app/'
    },
    {
      id: 2,
      src: ecommerce,
      url:'https://ecommerce-9a374.web.app/'
    },
    {
      id: 3,
      src: TodoList,
      url:'https://todo-list-nu-five.vercel.app/'
    },
    {
      id: 4,
      src: navbar,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='font-bold text-4xl border-b-4 inline border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, url }) =>
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>              
                <img src={src} alt='image' className='rounded-md duration-200 hover:scale-105' />              
              <div className='flex items-center justify-center '>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 '>
                  <a href={url} target='blank'>Demo</a></button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 '>Code</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Portfolio