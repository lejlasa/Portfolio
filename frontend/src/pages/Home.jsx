import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, TrendingUp, Award } from 'lucide-react';
import { personalInfo, tiktokContent } from '../data/mockData';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    Lejla Sain
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {personalInfo.title}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  {personalInfo.bio}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  View My Work
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <img 
                    src="/api/placeholder/200/200" 
                    alt="Lejla Sain"
                    className="w-48 h-48 rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-6">
                <TrendingUp className="h-8 w-8 text-green-500" />
                <p className="text-sm font-medium text-gray-700 mt-2">Growth Expert</p>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-6">
                <Award className="h-8 w-8 text-purple-500" />
                <p className="text-sm font-medium text-gray-700 mt-2">Award Winner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">4,300+</h3>
              <p className="text-gray-600">Early Supporters</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">2.18M+</h3>
              <p className="text-gray-600">Content Views</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">$450K+</h3>
              <p className="text-gray-600">Revenue Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work - Pearl PCOS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600">Empowering women through health technology</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Health Tech Startup
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Pearl PCOS</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      As Founder & CMO, I built Pearl from the ground up, creating a health tech platform 
                      that empowers women with PCOS through personalized wellness solutions and community support.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-indigo-600">2.18M+</h4>
                      <p className="text-gray-600">Views Generated</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-indigo-600">4,500+</h4>
                      <p className="text-gray-600">Waitlist Signups</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href="https://www.pearlpcos.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                    >
                      Visit Pearl PCOS
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                    <Link
                      to="/projects"
                      className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      View All Projects
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 lg:p-12 flex items-center justify-center">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Pearl PCOS App"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TikTok Content Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pearl PCOS Content</h2>
            <p className="text-xl text-gray-600">Educational content reaching millions of women</p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="flex space-x-6 pb-4">
              {tiktokContent.map((video) => (
                <div key={video.id} className="flex-shrink-0 w-64">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{video.description}</p>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{video.views} views</span>
                        <span>{video.likes} likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            I'm passionate about driving growth and building meaningful connections. 
            Let's discuss how we can collaborate to achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Let's Connect
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;