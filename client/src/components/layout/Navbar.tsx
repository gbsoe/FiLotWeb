import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Check if the link should be active
  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className={`sticky top-0 bg-white z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary mr-2">
              FiLot
            </Link>
            <span className="hidden md:inline-block text-sm text-gray-500">
              The AI-Powered Investment Advisor
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/features" className={`nav-link ${isActive('/features') ? 'active' : ''}`}>
              Features
            </Link>
            <Link href="/pools" className={`nav-link ${isActive('/pools') ? 'active' : ''}`}>
              Pools
            </Link>
            <Link href="/knowledge" className={`nav-link ${isActive('/knowledge') ? 'active' : ''}`}>
              Knowledge
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              className="text-gray-600 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden mt-4 pb-2 transition-all duration-300 ease-in-out ${
            isOpen ? 'block opacity-100' : 'hidden opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-4">
            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>
              Home
            </Link>
            <Link href="/features" className={`nav-link ${isActive('/features') ? 'active' : ''}`} onClick={closeMenu}>
              Features
            </Link>
            <Link href="/pools" className={`nav-link ${isActive('/pools') ? 'active' : ''}`} onClick={closeMenu}>
              Pools
            </Link>
            <Link href="/knowledge" className={`nav-link ${isActive('/knowledge') ? 'active' : ''}`} onClick={closeMenu}>
              Knowledge
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
