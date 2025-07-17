import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', emoji: '🏠' },
    { name: 'About', path: '/about', emoji: '✨' },
    { name: 'Experience', path: '/experience', emoji: '💼' },
    { name: 'Certificates', path: '/certificates', emoji: '🏆' },
    { name: 'Projects', path: '/projects', emoji: '🚀' },
    { name: 'Personal', path: '/personal', emoji: '💖' },
    { name: 'Contact', path: '/contact', emoji: '📩' }
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b-2 border-pink-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center float-animation">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient-pink">Lejla Sain</span>
              <Sparkles className="h-5 w-5 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity pulse-pink" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-1 ${
                    isActiveLink(link.path)
                      ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 hover:shadow-md hover:scale-105'
                  }`}
                >
                  <span>{link.emoji}</span>
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white hover:shadow-lg transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-pink-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-2xl text-base font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  isActiveLink(link.path)
                    ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg'
                    : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 hover:shadow-md'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xl">{link.emoji}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;