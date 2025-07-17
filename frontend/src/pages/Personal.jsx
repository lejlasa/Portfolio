import React from 'react';
import { Camera, Music, MapPin, Play, Heart, Clock, Users } from 'lucide-react';
import { personalInterests } from '../data/mockData';

const Personal = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Interests</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond the professional world, I'm passionate about capturing life's beautiful moments 
              through photography and discovering new sounds that inspire my creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Travel Photography</h3>
              <p className="text-gray-600">Capturing memories from around the world</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Music Curation</h3>
              <p className="text-gray-600">Curating playlists for every mood</p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Photography */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Travel Photography</h2>
            <p className="text-xl text-gray-600">Exploring the world one frame at a time</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {personalInterests.photography.map((photo) => (
              <div key={photo.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-indigo-100 to-purple-100">
                  <img 
                    src={photo.image} 
                    alt={photo.location}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-4 w-4 text-white" />
                      <span className="text-white font-medium">{photo.location}</span>
                    </div>
                    <p className="text-white/90 text-sm">{photo.description}</p>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Photography has always been a way for me to connect with different cultures and 
              capture the beauty I encounter during my travels. Each image tells a story and 
              represents a moment of inspiration that often influences my creative work.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200">
              <Camera className="mr-2 h-5 w-5" />
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Music Playlists */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Music Playlists</h2>
            <p className="text-xl text-gray-600">Curated sounds for every moment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalInterests.musicPlaylists.map((playlist) => (
              <div key={playlist.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 relative group">
                  <img 
                    src={playlist.image} 
                    alt={playlist.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 text-white hover:bg-white/30 transition-colors">
                      <Play className="h-8 w-8" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{playlist.name}</h3>
                  <p className="text-gray-600 mb-4">{playlist.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center space-x-1">
                        <Music className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{playlist.songCount} songs</span>
                      </span>
                      <span className="text-indigo-600 font-medium">{playlist.genre}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                      <Play className="h-4 w-4" />
                      <span>Listen on Spotify</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Music is a constant companion in my life, whether I'm working on a challenging project, 
              traveling to new places, or simply relaxing at home. I love discovering new artists 
              and creating playlists that match different moods and activities.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200">
              <Music className="mr-2 h-5 w-5" />
              Follow My Spotify
            </button>
          </div>
        </div>
      </section>

      {/* Lifestyle Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Life Philosophy</h2>
            <p className="text-xl text-gray-600">How my personal interests shape my professional approach</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                    <Camera className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Perspective Matters</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Photography has taught me that perspective is everything. Just like in business, 
                  looking at challenges from different angles often reveals opportunities that 
                  others might miss.
                </p>
                <p className="text-gray-600">
                  This mindset helps me approach marketing campaigns and business strategies with 
                  creativity and adaptability, always seeking the unique angle that will resonate 
                  with the audience.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <Music className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Rhythm & Flow</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Music has rhythm, and so does effective marketing. Understanding timing, 
                  pacing, and how to create harmonious campaigns that resonate with people's 
                  emotions is crucial for success.
                </p>
                <p className="text-gray-600">
                  Just as a good playlist takes you on a journey, effective marketing tells 
                  a story that guides the audience through an experience, building trust and 
                  connection along the way.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Work-Life Integration</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Creative Inspiration</h4>
                      <p className="text-gray-600 text-sm">Travel and music constantly fuel my creativity and bring fresh perspectives to my work</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Cultural Awareness</h4>
                      <p className="text-gray-600 text-sm">Experiencing different cultures helps me better understand diverse audiences and markets</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Emotional Intelligence</h4>
                      <p className="text-gray-600 text-sm">Music and art enhance my ability to connect with people on an emotional level</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Balance & Wellness</h3>
                <p className="text-gray-600 mb-4">
                  I believe that maintaining personal interests and hobbies is essential for 
                  professional success. They provide balance, prevent burnout, and often 
                  spark the most innovative ideas.
                </p>
                <p className="text-gray-600">
                  Whether I'm capturing a sunset in Santorini or discovering a new indie artist, 
                  these moments of joy and inspiration directly contribute to my energy and 
                  creativity in the workplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            I'd love to hear about your interests and how they inspire your work. 
            Let's have a conversation about life, creativity, and professional collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Get In Touch
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-indigo-300 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Personal;