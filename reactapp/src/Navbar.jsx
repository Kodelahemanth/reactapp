import React, { useState } from 'react'
import HomePage from './components/HomePage'
import Details from './components/Details'
import Footer from './components/Footer'
function Navbar() {
    const [toggle, SetToggle] = useState(1)

    function updateToggle(id) {
        SetToggle(id)
    }
  return (
    <>
    <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <h1 className='text-white text-3xl font-semibold'>ReactAPP</h1>
    <a href="#" class="flex items-center">
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li onClick={()=>updateToggle (1)}>
          <button class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</button>
        </li>
        <li onClick={()=>updateToggle (2)}>
          <button class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</button>
        </li>
        <li onClick={()=>updateToggle (3)}>
          <button class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</button>
        </li>
        <li onClick={()=>updateToggle (4)}> 
          <button class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className={toggle === 1 ? "show-content" : "content"}>
<HomePage/>
<Details/>
<Footer/>
</div>
<div className={toggle === 2 ? "show-content" : "content"}>
    <h1 className='text-3xl text-gray-700 text-center my-16 font-semibold'>Services</h1>
</div>
<div className={toggle === 3 ? "show-content" : "content"}>
    <h1 className='text-3xl text-gray-700 text-center my-16 font-semibold'>Pricing</h1>
</div>
<div className={toggle === 4 ? "show-content" : "content"}>
    <h1 className='text-3xl text-gray-700 text-center my-16 font-semibold'>Contact</h1>
</div>
</>

  )
}
export default Navbar