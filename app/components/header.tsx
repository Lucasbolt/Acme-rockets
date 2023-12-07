'use client';


import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    const btnAnimaion = 'toggle-btn';
    const hamburgerBtn = document.getElementById('hamburger-button');

    if (hamburgerBtn) {
      // if (!isMobileMenuOpen) {
      //   hamburgerBtn.classList.toggle(btnAnimaion, true);
      // } else {hamburgerBtn.classList.toggle(btnAnimaion, false);}      
      (isMobileMenuOpen) ? hamburgerBtn.classList.toggle(btnAnimaion, false) : hamburgerBtn.classList.toggle(btnAnimaion, true)
    }
  };
  return (
    <>
      <header className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between item-center">
          <h1 className="text-3xl font-medium">
            <a href="#hero">🚀 Acme Rockets</a>
          </h1>
          <div>
            <button
              id="hamburger-button"
              className="text-3xl md:hidden cursor-pointer relative w-8 h-8" onClick={toggleMobileMenu}
            >
              {/* &#9776; */}
              <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3"></div>
            </button>
            <nav
              className="hidden md:block space-x-8 text-xl"
              aria-label="main"
            >
              <a href="#rockets" className="hover:opacity-90">
                Our rockets
              </a>
              <a href="#testimonials" className="hover:opacity-90">
                Testimonial
              </a>
              <a href="#contact" className="hover:opacity-90">
                Contact Us
              </a>
            </nav>
          </div>
        </section>

        {isMobileMenuOpen && ( //toggle navbar/hamburger menu
        <section
          id="mobile-menu"
          className="absolute top-68 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu md:hidden" 
          onClick={toggleMobileMenu}
        >
          
          <nav className="flex flex-col min-h-screen items-center py-8 aria-lable='mobile'">
          {/* <button className="text-8xl px-6 self-end" onClick={toggleMobileMenu}>&times;</button> */}
            <a
              href="#hero"
              className="w-full text-center py-6 hover:opacity-90" onClick={toggleMobileMenu}
            >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full text-center py-6 hover:opacity-90" onClick={toggleMobileMenu}
            >
              Our Rockets
            </a>
            <a
              href="#testimonials"
              className="w-full text-center py-6 hover:opacity-90" onClick={toggleMobileMenu}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full text-center py-6 hover:opacity-90" onClick={toggleMobileMenu}
            >
              Contact Us
            </a>
            <a
              href="#footer"
              className="w-full text-center py-6 hover:opacity-90" onClick={toggleMobileMenu}
            >
              Legal
            </a>
          </nav>
        </section>
        )}
      </header>
    </>
  );
}