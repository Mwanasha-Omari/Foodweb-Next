"use client";
import React, { useState, ReactNode } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 text-base text-black py-4 px-6 w-full flex items-center z-50 bg-white shadow-md sm:px-8 md:px-16 lg:px-32">
      <div className="flex items-center justify-between w-full">
        <div className="flex-shrink-0">
          <h2 className="text-yellow text-3xl font-water-brush">FoodHouse</h2>
        </div>

        <div className="hidden md:flex gap-8 items-center ml-auto">
          <NavLink href="#home" onClick={() => handleScroll("#home")}>
            HOME
          </NavLink>
          <NavLink href="#about" onClick={() => handleScroll("#restaurant")}>
            RESTAURANT
          </NavLink>
          <NavLink href="#services" onClick={() => handleScroll("#services")}>
            SERVICES
          </NavLink>
          <NavLink href="#cart" onClick={() => handleScroll("#cart")}>
            CART
          </NavLink>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none bg-white p-2 rounded"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center pb-12 h-screen">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-black focus:outline-none p-2"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex-grow flex flex-col items-center justify-center space-y-6">
            <MobileNavLink
              href="#home"
              onClick={() => {
                handleScroll("#home");
                setIsMenuOpen(false);
              }}
            >
              HOME
            </MobileNavLink>
            <MobileNavLink
              href="#about"
              onClick={() => {
                handleScroll("#restaurant");
                setIsMenuOpen(false);
              }}
            >
              RESTAURANT
            </MobileNavLink>
            <MobileNavLink
              href="#services"
              onClick={() => {
                handleScroll("#services");
                setIsMenuOpen(false);
              }}
            >
              SERVICES
            </MobileNavLink>
            <MobileNavLink
              href="#cart"
              onClick={() => {
                handleScroll("#cart");
                setIsMenuOpen(false);
              }}
            >
              CART
            </MobileNavLink>
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
      className="text-black hover:text-yellow font-medium"
      onClick={onClick}
    >
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
      className="block text-xl text-black hover:text-yellow"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default Navbar;
