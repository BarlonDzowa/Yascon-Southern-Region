// @ts-nocheck
"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MapPin, Mail, Instagram, Linkedin, Facebook, Send, Calendar, Users, Leaf, Award, Globe, Heart, CheckCircle } from 'lucide-react';

export default function YasconWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState('northern');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', country: '', education: '', experience: '', motivation: '' });
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'programs', 'regions', 'volunteer', 'news', 'gallery', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    { title: "Environmental Education", description: "Empowering communities through knowledge and awareness about sustainable practices and conservation.", icon: "🌱", color: "#2D5016" },
    { title: "Tree Planting Initiatives", description: "Restoring ecosystems by planting indigenous trees and creating green spaces across our regions.", icon: "🌳", color: "#4A7C2C" },
    { title: "Wildlife Conservation", description: "Protecting biodiversity through community-led conservation efforts and habitat restoration.", icon: "🦋", color: "#6B9B3D" },
    { title: "Youth Leadership", description: "Building the next generation of environmental leaders through training and mentorship programs.", icon: "👥", color: "#8AB84E" },
    { title: "Sustainable Agriculture", description: "Promoting eco-friendly farming practices that protect the environment and ensure food security.", icon: "🌾", color: "#5D8C2F" },
    { title: "Climate Action", description: "Leading grassroots climate initiatives and advocacy for environmental policy change.", icon: "🌍", color: "#3E6B23" }
  ];

  // Regions: Northern / Southern / Central — each with a unique local photo
  const regions = {
    northern: {
      name: "Northern Region",
      description: "Our Northern chapter covers Mzimba, Rumphi, Chitipa, Karonga and Nkhata Bay districts, focusing on forest conservation and community-led environmental education.",
      stats: { volunteers: "95+", projects: "15", trees: "7,200+" },
      contact: "yasconmw@outlook.com",
      highlights: ["Nyika Plateau conservation", "Community forestry programs", "Youth eco-camps & training"],
      image: "/image9.png"   // youth group holding seedlings
    },
    southern: {
      name: "Southern Region",
      description: "Our Southern chapter covers Blantyre, Zomba, Mangochi and surrounding districts with strong reforestation and lake protection programs.",
      stats: { volunteers: "150+", projects: "25", trees: "10,000+" },
      contact: "yasconmw@outlook.com",
      highlights: ["Lake Malawi ecosystem conservation", "Shire River basin protection", "Youth environmental leadership"],
      image: "/image6.png"   // child planting in field
    },
    central: {
      name: "Central Region",
      description: "Our Central chapter is headquartered in Lilongwe and covers Dedza, Kasungu and Ntchisi districts, driving policy advocacy and sustainable agriculture.",
      stats: { volunteers: "120+", projects: "18", trees: "8,500+" },
      contact: "yasconmw@outlook.com",
      highlights: ["Lilongwe Wildlife Centre partnerships", "Sustainable agriculture training", "Climate advocacy initiatives"],
      image: "/image10.png"   // classroom education session
    }
  };

  // News: each card gets a unique image
  const newsItems = [
    {
      date: "January 4, 2026",
      title: "Call for Youth Volunteers - YASCON",
      excerpt: "We are seeking passionate youths with Bachelor's degrees in Media, Communications, IT, Marketing, Economics, Youth Development, Finance, and more...",
      image: "/image1.png",   // beach cleanup — environment awareness
      category: "Opportunities"
    },
    {
      date: "December 15, 2025",
      title: "10,000 Trees Planted Across Three Nations",
      excerpt: "Celebrating a major milestone as YASCON volunteers plant the 10,000th tree in our regional reforestation initiative.",
      image: "/image5.png",   // aerial forest
      category: "Impact"
    },
    {
      date: "November 28, 2025",
      title: "Youth Climate Summit Success",
      excerpt: "Over 200 young environmental leaders gathered at our annual summit to share innovations and strengthen networks.",
      image: "/image10.png",
      category: "Events"
    }
  ];

  // Gallery: all local photos, repeats allowed
  const galleryImages = [
    { url: "/image9.png",  caption: "Community seedling day" },
    { url: "/image6.png",  caption: "Youth planting trees" },
    { url: "/image2.png",  caption: "Nurturing new growth" },
    { url: "/image6.png",  caption: "Conservation in action" },
    { url: "/image4.png",  caption: "Hands for the earth" },
    { url: "/image8.png",  caption: "Team collaboration" }
  ];

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your volunteer application has been submitted. We'll contact you at ${formData.email} soon.`);
    setFormData({ name: '', email: '', phone: '', country: '', education: '', experience: '', motivation: '' });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${contactForm.name}! Your message has been sent. We'll respond to ${contactForm.email} shortly.`);
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        * { scroll-behavior: smooth; }
        .section-fade-in { animation: fadeInUp 0.8s ease-out; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .leaf-float { animation: leafFloat 3s ease-in-out infinite; }
        @keyframes leafFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(-10px) rotate(5deg); }
        }
        .grain-texture {
          background-image: linear-gradient(135deg, rgba(107,155,61,0.95) 0%, rgba(74,124,44,0.98) 100%);
        }
        .card-hover { transition: all 0.4s cubic-bezier(0.4,0,0.2,1); }
        .card-hover:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
      `}</style>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center leaf-float">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#2D5016' }}>YASCON</h1>
                <p className="text-xs text-green-700">Youth for Conservation</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home','About','Programs','Regions','Volunteer','News','Gallery','Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors ${activeSection === item.toLowerCase() ? 'text-green-700' : 'text-gray-700 hover:text-green-600'}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {item}
                </a>
              ))}
            </div>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {['Home','About','Programs','Regions','Volunteer','News','Gallery','Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  className="block text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero — ONE photo: image7 (community group planting with mountain backdrop) */}
      <section id="home" className="pt-20 min-h-screen flex items-center grain-texture relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white section-fade-in">
              <h2 className="text-6xl md:text-7xl font-black mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Empowering Youth to Protect Nature
              </h2>
              <p className="text-xl mb-8 text-green-50 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Join a passionate network of young conservationists across Malawi, Uganda, and Kenya making real impact through community action and environmental education.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#volunteer" className="bg-white text-green-800 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl">
                  Become a Volunteer
                </a>
                <a href="#about" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                  Learn More
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div><div className="text-4xl font-bold">365+</div><div className="text-green-100 text-sm">Volunteers</div></div>
                <div><div className="text-4xl font-bold">58</div><div className="text-green-100 text-sm">Projects</div></div>
                <div><div className="text-4xl font-bold">25K+</div><div className="text-green-100 text-sm">Trees Planted</div></div>
              </div>
            </div>
            {/* Single clean hero photo */}
            <div className="hidden md:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img src="/image7.png" alt="YASCON volunteers planting trees" className="w-full h-[420px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About — image2: hands holding fern seedling */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2D5016' }}>About YASCON</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              National Youth Association for Conservation of Nature
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/image2.png" alt="Hands nurturing a seedling" className="rounded-2xl shadow-2xl w-full h-96 object-cover" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-green-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Youth Association for Conservation of Nature and Environment (YASCON) is a vibrant network of young people from Malawi, Uganda, and Kenya with a strong passion for nature and environmental conservation.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We empower youth to take action through community initiatives, environmental education, and sustainable development projects that create lasting positive change for our planet.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-6 rounded-xl">
                  <Award className="w-10 h-10 text-green-700 mb-3" />
                  <h4 className="font-semibold text-green-900 mb-2">NGO Status</h4>
                  <p className="text-sm text-gray-600">Registered Non-Governmental Organization</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <Users className="w-10 h-10 text-green-700 mb-3" />
                  <h4 className="font-semibold text-green-900 mb-2">Youth-Led</h4>
                  <p className="text-sm text-gray-600">Driven by passionate young leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2D5016' }}>Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Making impact through diverse conservation initiatives</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: program.color, fontFamily: "'Space Grotesk', sans-serif" }}>{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions — Northern / Southern / Central */}
      <section id="regions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2D5016' }}>Regional Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Conservation action across Malawi's three regions</p>
          </div>
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {Object.keys(regions).map((region) => (
              <button key={region} onClick={() => setActiveRegion(region)}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${activeRegion === region ? 'bg-green-700 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {regions[region].name}
              </button>
            ))}
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-4xl font-bold mb-6 text-green-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {regions[activeRegion].name}
                </h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{regions[activeRegion].description}</p>
                <div className="space-y-3 mb-8">
                  {regions[activeRegion].highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-3 text-green-800">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">{regions[activeRegion].contact}</span>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-2xl text-center shadow-lg">
                    <Users className="w-10 h-10 text-green-700 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-green-900 mb-1">{regions[activeRegion].stats.volunteers}</div>
                    <div className="text-sm text-gray-600">Volunteers</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl text-center shadow-lg">
                    <Leaf className="w-10 h-10 text-green-700 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-green-900 mb-1">{regions[activeRegion].stats.projects}</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl text-center shadow-lg">
                    <Globe className="w-10 h-10 text-green-700 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-green-900 mb-1">{regions[activeRegion].stats.trees}</div>
                    <div className="text-sm text-gray-600">Trees</div>
                  </div>
                </div>
                <img src={regions[activeRegion].image} alt={`${regions[activeRegion].name} volunteers`}
                  className="rounded-2xl shadow-xl w-full h-56 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="py-24 bg-gradient-to-b from-green-600 to-green-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Join Our Team</h2>
            <p className="text-xl text-green-50">Become a YASCON volunteer and make a difference</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Volunteer Application Form</h3>
            <p className="text-green-50 mb-8">
              We're seeking volunteers with Bachelor's degrees in Media, Communications, IT, Marketing, Economics, Statistics, Youth Development, Finance, Administration, Monitoring & Evaluation, or related disciplines.
            </p>
            <form onSubmit={handleVolunteerSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="your.email@example.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="+265 XXX XXX XXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Country *</label>
                  <select required value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option value="" className="text-gray-900">Select country</option>
                    <option value="malawi" className="text-gray-900">Malawi</option>
                    <option value="uganda" className="text-gray-900">Uganda</option>
                    <option value="kenya" className="text-gray-900">Kenya</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Educational Background *</label>
                <input type="text" required value={formData.education} onChange={(e) => setFormData({...formData, education: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="e.g., Bachelor's in Environmental Science" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Relevant Experience</label>
                <textarea value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Tell us about your experience in conservation or related fields..."></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Why do you want to join YASCON? *</label>
                <textarea required value={formData.motivation} onChange={(e) => setFormData({...formData, motivation: e.target.value})} rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Share your motivation and what you hope to contribute..."></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Send className="w-5 h-5" /><span>Submit Application</span>
              </button>
            </form>
            <p className="text-sm text-green-100 mt-6 text-center">Application deadline: January 6, 2026</p>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2D5016' }}>Latest News & Updates</h2>
            <p className="text-xl text-gray-600">Stay informed about our conservation activities</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">{item.category}</span>
                    <span className="text-sm text-gray-500 flex items-center"><Calendar className="w-4 h-4 mr-1" />{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <a href="#" className="text-green-700 font-semibold hover:text-green-800 flex items-center">
                    Read more <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2D5016' }}>Our Impact in Pictures</h2>
            <p className="text-xl text-gray-600">See conservation in action across our regions</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl card-hover">
                <img src={image.url} alt={image.caption} className="w-full h-64 object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-semibold">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2D5016' }}>Get In Touch</h2>
            <p className="text-xl text-gray-600">Have questions? We'd love to hear from you</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Contact Information</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-700" />
                  </div>
                  <div><h4 className="font-semibold text-gray-900 mb-1">Email</h4><p className="text-gray-600">yasconmw@outlook.com</p></div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-700" />
                  </div>
                  <div><h4 className="font-semibold text-gray-900 mb-1">Regions</h4><p className="text-gray-600">Malawi • Uganda • Kenya</p></div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Social Media</h4>
                    <div className="flex space-x-3 mt-2">
                      <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"><Facebook className="w-5 h-5 text-white" /></a>
                      <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"><Instagram className="w-5 h-5 text-white" /></a>
                      <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"><Linkedin className="w-5 h-5 text-white" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl">
                <Heart className="w-12 h-12 text-green-700 mb-4" />
                <h4 className="font-bold text-green-900 mb-2 text-lg">Support Our Mission</h4>
                <p className="text-gray-700">Your support helps us empower more youth and protect our environment. Together, we can make a lasting impact.</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-green-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Send Us a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input type="text" required value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" required value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input type="text" required value={contactForm.subject} onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="What is this about?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea required value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="w-full bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" /><span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>YASCON</h3>
              </div>
              <p className="text-green-200 text-sm">Empowering youth across East Africa to protect our planet through conservation action.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-green-200 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#volunteer" className="hover:text-white transition-colors">Volunteer</a></li>
                <li><a href="#news" className="hover:text-white transition-colors">News</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Regions</h4>
              <ul className="space-y-2 text-green-200 text-sm">
                <li><a href="#regions" className="hover:text-white transition-colors">Northern Region</a></li>
                <li><a href="#regions" className="hover:text-white transition-colors">Southern Region</a></li>
                <li><a href="#regions" className="hover:text-white transition-colors">Central Region</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-3 mb-4">
                <a href="#" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
              <p className="text-green-200 text-sm">yasconmw@outlook.com</p>
            </div>
          </div>
          <div className="border-t border-green-800 pt-8 text-center text-green-200 text-sm">
            <p>&copy; 2026 YASCON - National Youth Association for Conservation of Nature. All rights reserved.</p>
            <p className="mt-2">Together, let's empower youths to protect nature 🌍</p>
          </div>
        </div>
      </footer>
    </div>
  );
}