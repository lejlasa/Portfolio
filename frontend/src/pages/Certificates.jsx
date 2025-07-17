import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle, BookOpen, Star } from 'lucide-react';
import { certifications } from '../data/mockData';

const Certificates = () => {
  const additionalCertifications = [
    {
      id: 3,
      name: "Digital Marketing Fundamentals",
      issuer: "Google",
      year: "2023",
      description: "Comprehensive digital marketing course covering SEO, SEM, social media, and analytics"
    },
    {
      id: 4,
      name: "HubSpot Content Marketing",
      issuer: "HubSpot Academy",
      year: "2023",
      description: "Content marketing strategies, planning, and optimization techniques"
    },
    {
      id: 5,
      name: "Salesforce Sales Cloud Consultant",
      issuer: "Salesforce",
      year: "2024",
      description: "Sales process optimization and CRM implementation strategies"
    }
  ];

  const allCertifications = [...certifications, ...additionalCertifications];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Credentials</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous learning and professional development through industry-recognized 
              certifications and specialized training programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{allCertifications.length}+</h3>
              <p className="text-gray-600">Certifications</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3+</h3>
              <p className="text-gray-600">Years Learning</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">100%</h3>
              <p className="text-gray-600">Completion Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
            <p className="text-xl text-gray-600">Validated expertise across multiple domains</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCertifications.map((cert, index) => (
              <div key={cert.id} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 font-medium">{cert.year}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-green-600 font-medium">Certified</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                  <p className="text-indigo-600 font-medium">{cert.issuer}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">Earned {cert.year}</span>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Journey</h2>
            <p className="text-xl text-gray-600">How continuous learning shapes my professional growth</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Why I Keep Learning</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    In today's rapidly evolving digital landscape, staying current with industry trends 
                    and best practices is essential for success. Each certification I pursue is carefully 
                    selected to enhance my ability to deliver exceptional results.
                  </p>
                  <p className="text-gray-600">
                    These credentials not only validate my expertise but also ensure I'm equipped with 
                    the latest tools and methodologies to drive meaningful impact for the organizations 
                    and communities I serve.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Key Learning Areas</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-700">Product Management & Strategy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-700">Cloud Computing & AWS Services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-700">Digital Marketing & Content Strategy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-700">Sales Operations & CRM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Impact on My Work</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    These certifications have directly contributed to my success in various roles. 
                    For example, my AWS certification enabled me to effectively communicate with 
                    technical teams and contribute to cloud migration strategies during my internship.
                  </p>
                  <p className="text-gray-600">
                    The product management certification has been invaluable in my entrepreneurial 
                    journey with Pearl PCOS, helping me develop user-centered solutions and 
                    implement effective go-to-market strategies.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Currently Pursuing</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Google Analytics 4 Certification</span>
                    <span className="text-sm text-indigo-600">In Progress</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Facebook Blueprint Certification</span>
                    <span className="text-sm text-indigo-600">Starting Soon</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Scrum Master Certification</span>
                    <span className="text-sm text-indigo-600">Planned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Collaborate?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            My diverse skill set and continuous learning mindset enable me to tackle complex 
            challenges and drive meaningful results. Let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-indigo-300 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              View My Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;