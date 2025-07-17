import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Award, Target, Users, BookOpen } from 'lucide-react';
import { personalInfo, awards } from '../data/mockData';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Me</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Mail className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Phone className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Linkedin className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">{personalInfo.linkedin}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-96 h-96 mx-auto rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <img 
                  src="/api/placeholder/350/350" 
                  alt="Lejla Sain"
                  className="w-80 h-80 rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Values</h2>
            <p className="text-xl text-gray-600">The principles that guide my work and life</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth Mindset</h3>
              <p className="text-gray-600">
                I believe in continuous learning and improvement. Every challenge is an opportunity 
                to grow and every setback is a lesson learned.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community First</h3>
              <p className="text-gray-600">
                Building meaningful connections and fostering communities is at the heart of everything 
                I do. Together, we can achieve more.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Authentic Impact</h3>
              <p className="text-gray-600">
                I'm passionate about creating genuine value and making a positive difference in 
                people's lives through thoughtful marketing and business development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Journey</h2>
            <p className="text-xl text-gray-600">From student to entrepreneur</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Education & Early Career</h3>
                <p className="text-gray-600 mb-6">
                  My journey began at Sheridan College, where I pursued a Bachelor's in Business Administration 
                  with a focus on Marketing Management. During my studies, I was fortunate to receive multiple 
                  scholarships and participate in Canada's Global Skills Opportunity program.
                </p>
                <p className="text-gray-600">
                  Through various internships at companies like AWS, Celestica, and RBC Capital Markets, 
                  I gained hands-on experience in sales, marketing, and business development.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Growth</h3>
                <p className="text-gray-600 mb-6">
                  My professional career took off at Recharge Subscriptions, where I exceeded quotas 
                  and generated significant revenue. This experience taught me the importance of 
                  strategic thinking and relationship building in business development.
                </p>
                <p className="text-gray-600">
                  Each role has contributed to my understanding of market dynamics, customer needs, 
                  and the power of authentic communication in driving business results.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Entrepreneurial Venture</h3>
                <p className="text-gray-600 mb-6">
                  In 2024, I took the leap into entrepreneurship by founding Pearl PCOS, a health tech 
                  startup focused on empowering women with PCOS. This venture combines my passion for 
                  health advocacy with my marketing expertise.
                </p>
                <p className="text-gray-600">
                  Building Pearl from the ground up has been both challenging and rewarding. It's allowed 
                  me to create meaningful impact while applying everything I've learned about community 
                  building and content strategy.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking Forward</h3>
                <p className="text-gray-600 mb-6">
                  As I continue to grow Pearl PCOS and explore new opportunities, I'm excited about 
                  the potential to make an even greater impact. I'm passionate about using technology 
                  and marketing to solve real problems and improve people's lives.
                </p>
                <p className="text-gray-600">
                  I'm always open to collaborations and partnerships that align with my values of 
                  authenticity, community, and meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Celebrating achievements and milestones</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{award.name}</h3>
                    <p className="text-gray-600 mb-2">{award.description}</p>
                    <span className="text-sm text-indigo-600 font-medium">{award.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Mission */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">My Mission</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-4xl mx-auto">
            To empower individuals and organizations through strategic marketing, authentic storytelling, 
            and community building. I believe that when we connect with people on a genuine level and 
            provide real value, we can create lasting positive change.
          </p>
          <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg text-white italic">
              "Success is not just about reaching your goals, but about lifting others up along the way 
              and creating something meaningful that lasts."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;