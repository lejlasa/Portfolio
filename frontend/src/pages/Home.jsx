import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, TrendingUp, Award, Heart, Sparkles, Star } from 'lucide-react';
import { personalInfo, tiktokContent } from '../data/mockData';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cute decorative blobs */}
      <div className="decorative-blob blob-1"></div>
      <div className="decorative-blob blob-2"></div>
      <div className="decorative-blob blob-3"></div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-purple-100/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Star className="h-6 w-6 text-pink-400 animate-pulse" />
                  <span className="text-pink-500 font-semibold text-lg">✨ Marketing Queen ✨</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="text-gradient-pink block">
                    Lejla Sain
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  💖 {personalInfo.title} 💖
                </p>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                  {personalInfo.bio}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-girly inline-flex items-center justify-center space-x-2"
                >
                  <Heart className="h-5 w-5" />
                  <span>Get In Touch</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/projects"
                  className="btn-outline-girly inline-flex items-center justify-center space-x-2"
                >
                  <Sparkles className="h-5 w-5" />
                  <span>View My Work</span>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center float-animation">
                <div className="w-64 h-64 rounded-full bg-white shadow-2xl flex items-center justify-center">
                  <img 
                    src="/api/placeholder/220/220" 
                    alt="Lejla Sain"
                    className="w-52 h-52 rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating cute elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-6 transform rotate-6 float-animation">
                <TrendingUp className="h-10 w-10 text-pink-500" />
                <p className="text-sm font-bold text-gray-700 mt-2">Growth Queen 👑</p>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-6 transform -rotate-6 float-animation" style={{animationDelay: '1s'}}>
                <Award className="h-10 w-10 text-purple-500" />
                <p className="text-sm font-bold text-gray-700 mt-2">Award Winner ⭐</p>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-white rounded-2xl shadow-xl p-4 transform rotate-12 float-animation" style={{animationDelay: '2s'}}>
                <Heart className="h-8 w-8 text-pink-400" />
                <p className="text-xs font-bold text-gray-700 mt-1">Passionate 💕</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient-purple mb-4">💫 Amazing Results 💫</h2>
            <p className="text-xl text-gray-600">Numbers that sparkle ✨</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center card-girly">
              <div className="bg-gradient-to-br from-pink-400 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 float-animation">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gradient-pink mb-2">4,300+</h3>
              <p className="text-gray-600 font-semibold">💖 Early Supporters</p>
            </div>
            <div className="text-center card-girly">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 float-animation" style={{animationDelay: '0.5s'}}>
                <Play className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gradient-purple mb-2">2.18M+</h3>
              <p className="text-gray-600 font-semibold">🎬 Content Views</p>
            </div>
            <div className="text-center card-girly">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 float-animation" style={{animationDelay: '1s'}}>
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gradient-pink mb-2">$450K+</h3>
              <p className="text-gray-600 font-semibold">💰 Revenue Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work - Pearl PCOS */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient-purple mb-4">✨ Featured Work ✨</h2>
            <p className="text-xl text-gray-600">Empowering women through health technology 💪</p>
          </div>
          
          <div className="card-girly">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                      🏥 Health Tech Startup
                    </span>
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                      🚀 In Development
                    </span>
                  </div>
                  <h3 className="text-5xl font-bold text-gradient-pink">Pearl PCOS</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A comprehensive health tech platform empowering women with PCOS through 
                    personalized wellness solutions, community support, and educational content. 💖
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    As Founder & CMO, I've built Pearl from the ground up, creating a brand 
                    that resonates with our target audience and drives meaningful engagement 
                    across multiple social media platforms. ✨
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                    <h4 className="text-3xl font-bold text-gradient-pink">2.18M+</h4>
                    <p className="text-gray-600 font-semibold">Content Views 👀</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                    <h4 className="text-3xl font-bold text-gradient-purple">4,300+</h4>
                    <p className="text-gray-600 font-semibold">Community Members 👥</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                    <h4 className="text-3xl font-bold text-gradient-pink">4,500+</h4>
                    <p className="text-gray-600 font-semibold">Waitlist Signups 📝</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                    <h4 className="text-3xl font-bold text-gradient-purple">168K+</h4>
                    <p className="text-gray-600 font-semibold">Total Engagement 💕</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href="https://www.pearlpcos.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-girly inline-flex items-center space-x-2"
                  >
                    <Heart className="h-5 w-5" />
                    <span>Visit Pearl PCOS</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Link
                    to="/projects"
                    className="btn-outline-girly inline-flex items-center space-x-2"
                  >
                    <Sparkles className="h-5 w-5" />
                    <span>View All Projects</span>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 lg:p-12 rounded-3xl flex items-center justify-center">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Pearl PCOS App"
                  className="max-w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TikTok Content Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient-purple mb-4">🎬 Pearl PCOS Content 🎬</h2>
            <p className="text-xl text-gray-600">Educational content reaching millions of women ✨</p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="flex space-x-6 pb-4">
              {tiktokContent.map((video, index) => (
                <div key={video.id} className="flex-shrink-0 w-72">
                  <div className="card-girly hover:transform hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-80 object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        #{index + 1}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{video.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{video.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-pink-500 font-semibold">👀 {video.views}</span>
                          <span className="text-sm text-purple-500 font-semibold">💖 {video.likes}</span>
                        </div>
                        <Heart className="h-5 w-5 text-pink-400 hover:text-pink-600 cursor-pointer transition-colors" />
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
      <section className="py-20 bg-gradient-to-br from-pink-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/50 to-purple-700/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-8 w-8 text-white animate-pulse" />
              <h2 className="text-4xl font-bold text-white">Ready to Work Together?</h2>
              <Star className="h-8 w-8 text-white animate-pulse" />
            </div>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              I'm passionate about driving growth and building meaningful connections. 
              Let's discuss how we can collaborate to achieve your goals! 💫
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors duration-300 inline-flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Heart className="h-6 w-6" />
                <span>Let's Connect</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;