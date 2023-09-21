'use client';

import {Dropdown,  Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
import logo from '../images/veemu_png.png'
export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      
      className="bg-navcolour"
    >
      <Navbar.Brand >
        <Link
          
          to="/"
        >
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-12 sm:h-24"
          src={logo}
        /></Link>
        <span className="self-center whitespace-nowrap text-fuchsia-950 text-xl font-bold dark:text-white">
          VEEMU HealthCare
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 text-white">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          active
          to="/"
        >
          <p className='text-fuchsia-950 font-bold md:text-lg'>
            Home
          </p>
        </Link>
        <Link to="/about" className='text-fuchsia-950 font-bold md:text-lg'>
          About
        </Link>
        <div className='text-fuchsia-950 font-bold md:text-lg'><Dropdown
          inline
          label="Domiciliary"
          className='text-fuchsia-950 font-bold md:text-lg'
        >
        <Dropdown.Header className='bg-gray-200'>
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-400">
        <Link to="/social" className='text-fuchsia-950 font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
          Social Inclusion
        </Link><br/>
        <Link to="/personal" className='text-fuchsia-950 font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
          Personal Care
        </Link><br/>
        <Link to="/sitting" className='text-fuchsia-950 font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
          Sitting Call
        </Link><br/>
                </ul>
          </Dropdown.Header>
          
        </Dropdown></div>
        <Link to="/services" className='text-fuchsia-950 font-bold md:text-lg'>
          Services
        </Link>
        
        <Link to="/contact" className='text-fuchsia-950 font-bold md:text-lg'>
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


