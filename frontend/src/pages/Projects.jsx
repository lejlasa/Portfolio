import React from 'react';
import { ExternalLink, Github, Calendar, TrendingUp, Users, Target } from 'lucide-react';
import { projects } from '../data/mockData';

const Projects = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Development':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Ongoing':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Health Tech':
        return 'bg-purple-100 text-purple-800';
      case 'Cloud Computing':
        return 'bg-blue-100 text-blue-800';
      case 'Sales Strategy':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of impactful projects that demonstrate my expertise in marketing, 
              business development, and entrepreneurship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{projects.length}</h3>
              <p className="text-gray-600">Featured Projects</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$588K+</h3>
              <p className="text-gray-600">Total Revenue Impact</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">6.68M+</h3>
              <p className="text-gray-600">Total Reach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - Pearl PCOS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Project</h2>
            <p className="text-xl text-gray-600">My entrepreneurial journey in health tech</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      Health Tech
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      In Development
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">Pearl PCOS</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      A comprehensive health tech platform empowering women with PCOS through 
                      personalized wellness solutions, community support, and educational content.
                    </p>
                    <p className="text-gray-600 mb-6">
                      As Founder & CMO, I've built Pearl from the ground up, creating a brand 
                      that resonates with our target audience and drives meaningful engagement 
                      across multiple social media platforms.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-3xl font-bold text-indigo-600">2.18M+</h4>
                      <p className="text-gray-600">Content Views</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-indigo-600">4,300+</h4>
                      <p className="text-gray-600">Community Members</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-indigo-600">4,500+</h4>
                      <p className="text-gray-600">Waitlist Signups</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-indigo-600">168K+</h4>
                      <p className="text-gray-600">Total Engagement</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border">Mobile App</span>
                      <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border">Health Tech</span>
                      <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border">Community Building</span>
                      <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border">Content Marketing</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href="https://www.pearlpcos.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Pearl PCOS
                    </a>
                    <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <img 
                    src="/api/placeholder/400/500" 
                    alt="Pearl PCOS App Screenshots"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Projects</h2>
            <p className="text-xl text-gray-600">A comprehensive look at my work across different domains</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="max-w-full max-h-full object-cover rounded-lg"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Metrics:</h4>
                      <ul className="space-y-1">
                        {project.metrics.map((metric, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                            <span className="text-sm text-gray-600">{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors">
                        View Details
                      </button>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <Github className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Impact */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Project Impact</h2>
            <p className="text-xl text-indigo-100">Measurable results across all initiatives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$588K+</div>
              <div className="text-indigo-100">Total Revenue</div>
              <div className="text-sm text-indigo-200 mt-1">Generated & Influenced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">6.68M+</div>
              <div className="text-indigo-100">Total Reach</div>
              <div className="text-sm text-indigo-200 mt-1">Across All Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">8,800+</div>
              <div className="text-indigo-100">Community Growth</div>
              <div className="text-sm text-indigo-200 mt-1">Followers & Supporters</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">240%</div>
              <div className="text-indigo-100">Target Exceeded</div>
              <div className="text-sm text-indigo-200 mt-1">Best Performance</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Work Together?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate on projects that create meaningful impact. 
            Let's discuss how we can work together to achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Start a Project
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;