'use client';

import {  Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
import logo from '../images/CHC_png.png'
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
          className="mr-3 h-12 sm:h-20"
          src={logo}
        /></Link>
        <span className="self-center whitespace-nowrap text-yellowtheme text-xl font-bold dark:text-white">
          VEEMU
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
          <p className='text-yellowtheme font-bold md:text-lg'>
            Home
          </p>
        </Link>
        <Link to="/about" className='text-yellowtheme font-bold md:text-lg'>
          About
        </Link>
        <Link to="/services" className='text-yellowtheme font-bold md:text-lg'>
          Services
        </Link>
        
        <Link to="/contact" className='text-yellowtheme font-bold md:text-lg'>
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


