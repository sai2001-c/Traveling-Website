
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { isLoggedIn, logout, setIsAuthModalOpen, setAuthModalView } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPackageDropdownOpen, setIsPackageDropdownOpen] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginClick = () => {
    setAuthModalView("login");
    setIsAuthModalOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthModalView("register");
    setIsAuthModalOpen(true);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo/Name */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-primary"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
            </svg>
            <span className="text-2xl font-serif font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              TravelVista
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/#book" className="nav-link">
              Book
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsPackageDropdownOpen(true)}
              onMouseLeave={() => setIsPackageDropdownOpen(false)}
            >
              <Link to="/#packages" className="nav-link flex items-center">
                Packages
                <ChevronDown size={16} className="ml-1" />
              </Link>
              {isPackageDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg glass-morphism z-40 animate-fade-in">
                  <div className="py-1">
                    <Link
                      to="/#packages"
                      onClick={() => setIsPackageDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 transition-colors"
                    >
                      United States
                    </Link>
                    <Link
                      to="/#packages"
                      onClick={() => setIsPackageDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 transition-colors"
                    >
                      India
                    </Link>
                    <Link
                      to="/#packages"
                      onClick={() => setIsPackageDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 transition-colors"
                    >
                      France
                    </Link>
                    <Link
                      to="/#packages"
                      onClick={() => setIsPackageDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 transition-colors"
                    >
                      Germany
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/#services" className="nav-link">
              Services
            </Link>
            <Link to="/#gallery" className="nav-link">
              Gallery
            </Link>
            <Link to="/#about" className="nav-link">
              About
            </Link>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <Button
                variant="outline"
                onClick={logout}
                className="btn-ghost"
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={handleLoginClick}
                  className="btn-ghost"
                >
                  Login
                </Button>
                <Button
                  onClick={handleRegisterClick}
                  className="btn-primary"
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link
              to="/"
              className="block py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/#book"
              className="block py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book
            </Link>
            <div className="py-2">
              <button
                onClick={() => setIsPackageDropdownOpen(!isPackageDropdownOpen)}
                className="flex items-center justify-between w-full font-medium"
              >
                <span>Packages</span>
                <ChevronDown size={16} />
              </button>
              {isPackageDropdownOpen && (
                <div className="mt-2 pl-4 space-y-2 border-l-2 border-primary/20">
                  <Link
                    to="/#packages"
                    className="block py-1 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    United States
                  </Link>
                  <Link
                    to="/#packages"
                    className="block py-1 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    India
                  </Link>
                  <Link
                    to="/#packages"
                    className="block py-1 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    France
                  </Link>
                  <Link
                    to="/#packages"
                    className="block py-1 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Germany
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/#services"
              className="block py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/#gallery"
              className="block py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/#about"
              className="block py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Auth Buttons - Mobile */}
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              {isLoggedIn ? (
                <Button
                  variant="outline"
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full btn-ghost"
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={() => {
                      handleLoginClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full btn-ghost"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => {
                      handleRegisterClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full btn-primary"
                  >
                    Register
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
