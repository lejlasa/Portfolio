import React from 'react';
import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Lejla Sain</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Marketing & Business Development Professional passionate about driving growth, 
              building meaningful connections, and empowering women in health tech.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:lejlasain@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+16472780148"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/lejla-s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Me
                </a>
              </li>
              <li>
                <a href="/experience" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>lejlasain@gmail.com</p>
              <p>(647) 278-0148</p>
              <p>Toronto, Canada</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Lejla Sain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;