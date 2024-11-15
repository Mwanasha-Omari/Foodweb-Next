"use client";
import React, { useState, ReactNode } from 'react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 text-base text-black py-4 px-6 w-full flex font-sans items-center z-50 backdrop-blur-md bg-white/50 sm:px-8 md:px-16 lg:px-32">
      <div className="flex items-center w-full justify-between">
        <div className="flex-shrink-0 ml-24">
        <h2 className="text-yellow text-3xl font-water-brush">FoodHouse</h2>
        </div>
        <div className="hidden md:flex gap-4 mt-2 text-lg sm:text-base md:text-lg lg:text-xl mr-8 lg:mr-40 ml-auto"> 
          <NavLink href="#home" onClick={() => { handleScroll("#home"); setIsMenuOpen(false); }}>HOME</NavLink>
          <NavLink href="#about" onClick={() => { handleScroll("#resturant"); setIsMenuOpen(false); }}>RESTURANT</NavLink>
          <NavLink href="#projects" onClick={() => { handleScroll("#services"); setIsMenuOpen(false); }}>SERVICES</NavLink>
          <NavLink href="#skills" onClick={() => { handleScroll("#cart"); setIsMenuOpen(false); }}>CART</NavLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none backdrop-blur-lg bg-white/70 p-2 rounded">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/80 backdrop-blur-md z-50 flex flex-col items-center justify-start pb-12 h-screen">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-black focus:outline-none p-2 rounded">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex-grow flex flex-col items-center justify-center">
            <MobileNavLink href="#home" onClick={() => { handleScroll("#home"); setIsMenuOpen(false); }}>HOME</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => { handleScroll("#resturant"); setIsMenuOpen(false); }}>RESTURANT</MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => { handleScroll("#services"); setIsMenuOpen(false); }}>SERVICES</MobileNavLink>
            <MobileNavLink href="#skills" onClick={() => { handleScroll("#cart"); setIsMenuOpen(false); }}>CART</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className="ml-4 text-primary-amber hover:text-yellow hover:font-bold text-lg"  
      onClick={onClick}>
      {children}
    </a>
  );
}

interface MobileNavLinkProps {
  href: string;
  children: ReactNode;
  onClick: () => void;
}

function MobileNavLink({ href, children, onClick }: MobileNavLinkProps) {
  return (
    <a 
      href={href} 
      onClick={onClick} 
      className="block px-3 py-4 text-lg text-primary-amber hover:text-yellow hover:font-bold"> 
      {children}
    </a>
  );
}

export default Navbar;
