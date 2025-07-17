import React from 'react';
import { Calendar, MapPin, ExternalLink, TrendingUp, Users, Target } from 'lucide-react';
import { education, experience, skills } from '../data/mockData';

const Experience = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From student to entrepreneur, here's how I've grown through education, 
              professional experiences, and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600">Building a strong foundation for success</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900">{education.degree}</h3>
                  <p className="text-lg text-indigo-600 font-medium">{education.school}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end space-x-2 mb-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{education.duration}</span>
                  </div>
                  <div className="bg-indigo-100 px-3 py-1 rounded-full inline-block">
                    <span className="text-sm font-medium text-indigo-800">GPA: {education.gpa}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900">Key Achievements:</h4>
                <ul className="space-y-2">
                  {education.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600">Driving growth through strategic marketing and business development</p>
          </div>
          
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={job.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <span className="text-lg font-medium text-indigo-600">{job.company}</span>
                        {job.website && (
                          <a 
                            href={job.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span className="text-sm">Visit Site</span>
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{job.duration}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                          <span className="text-gray-700 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Tools and competencies that drive results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Technical Skills</h3>
              </div>
              <div className="space-y-2">
                {skills.technical.map((skill, index) => (
                  <div key={index} className="bg-white rounded-lg px-3 py-2">
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing Skills */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Marketing Skills</h3>
              </div>
              <div className="space-y-2">
                {skills.marketing.map((skill, index) => (
                  <div key={index} className="bg-white rounded-lg px-3 py-2">
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Skills */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Business Skills</h3>
              </div>
              <div className="space-y-2">
                {skills.business.map((skill, index) => (
                  <div key={index} className="bg-white rounded-lg px-3 py-2">
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Career Highlights</h2>
            <p className="text-xl text-indigo-100">Key metrics that showcase my impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">160%</div>
              <div className="text-indigo-100">Quota Exceeded</div>
              <div className="text-sm text-indigo-200 mt-1">First full quarter</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$450K+</div>
              <div className="text-indigo-100">Revenue Generated</div>
              <div className="text-sm text-indigo-200 mt-1">In 4 months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2.18M+</div>
              <div className="text-indigo-100">Content Views</div>
              <div className="text-sm text-indigo-200 mt-1">Pearl PCOS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4,500+</div>
              <div className="text-indigo-100">Waitlist Growth</div>
              <div className="text-sm text-indigo-200 mt-1">Pre-launch</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;