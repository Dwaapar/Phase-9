import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, ChevronDown } from 'lucide-react';

interface MegaNavProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

const mainNavItems = [
  {
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Strategy & Consulting', href: '/services/strategy' },
      { label: 'Creative & Content', href: '/services/creative' },
      { label: 'Technology & Data', href: '/services/technology' },
      { label: 'Media & Performance', href: '/services/media' },
    ]
  },
  {
    label: 'Work',
    href: '/work',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Case Studies', href: '/work/case-studies' },
      { label: 'Portfolio', href: '/work/portfolio' },
      { label: 'Awards', href: '/work/awards' },
    ]
  },
  {
    label: 'Insights',
    href: '/insights',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Articles', href: '/insights/articles' },
      { label: 'Reports', href: '/insights/reports' },
      { label: 'Events', href: '/insights/events' },
    ]
  },
  {
    label: 'About',
    href: '/about',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Our Story', href: '/about/story' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Locations', href: '/about/locations' },
    ]
  },
  {
    label: 'Careers',
    href: '/careers',
    hasDropdown: false,
  },
  {
    label: 'Contact',
    href: '/contact',
    hasDropdown: false,
  }
];

export default function MegaNav({ onSignIn, onSignUp }: MegaNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMegaMenuEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMegaMenuLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-elevated' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl sm:text-3xl font-bold text-monks-black hover:text-monks-accent transition-colors duration-300">
              Monks
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMegaMenuEnter(item.label)}
                onMouseLeave={handleMegaMenuLeave}
              >
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-monks-black hover:text-monks-accent px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown size={12} className="lg:w-3.5 lg:h-3.5" />}
                </Link>
                
                {/* Dropdown */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-80 lg:w-96 bg-white shadow-elevated rounded-xl lg:rounded-2xl border border-monks-gray/10 py-4 lg:py-6 z-50">
                    <div className="grid gap-4 lg:gap-6 px-4 lg:px-6">
                      <div>
                        <h4 className="font-semibold text-monks-black mb-2 lg:mb-3 text-xs lg:text-sm uppercase tracking-wider">
                          {item.label}
                        </h4>
                        <ul className="space-y-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <li key={dropdownItem.label}>
                              <Link
                                to={dropdownItem.href}
                                className="block text-monks-gray hover:text-monks-accent transition-colors duration-300 text-xs lg:text-sm py-1"
                              >
                                {dropdownItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <button className="p-2 text-monks-gray hover:text-monks-black transition-colors duration-300">
              <Search size={18} className="xl:w-5 xl:h-5" />
            </button>
            <button
              onClick={onSignIn}
              className="flex items-center space-x-1 text-monks-gray hover:text-monks-black transition-colors duration-300"
            >
              <User size={14} className="xl:w-4 xl:h-4" />
              <span className="text-xs xl:text-sm">Sign In</span>
            </button>
            <button
              onClick={onSignUp}
              className="bg-monks-black hover:bg-monks-accent text-white px-4 xl:px-6 py-2 rounded-full text-xs xl:text-sm font-medium transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-monks-gray hover:text-monks-black hover:bg-monks-light-gray focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-monks-gray/10">
          <div className="px-4 sm:px-6 py-4 space-y-3 bg-white max-h-80 sm:max-h-96 overflow-y-auto">
            {mainNavItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="flex items-center justify-between text-monks-black hover:text-monks-accent py-2 text-sm sm:text-base font-medium transition-colors duration-300"
                  onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleDropdown(item.label);
                      }}
                    />
                  )}
                </Link>
                
                {/* Mobile Dropdown */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="pl-4 space-y-2 mt-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.href}
                        className="block text-monks-gray hover:text-monks-accent py-2 text-sm transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-monks-gray/10 space-y-3">
              <button
                onClick={() => {
                  onSignIn();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left text-monks-black hover:text-monks-accent py-2 text-sm sm:text-base font-medium transition-colors duration-300"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  onSignUp();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-monks-black hover:bg-monks-accent text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}