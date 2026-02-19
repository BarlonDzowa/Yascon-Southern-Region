import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, MapPin, Mail, Phone, Instagram, 
  Linkedin, Facebook, Send, Calendar, Users, Leaf, 
  Award, Globe, Heart, CheckCircle, ArrowRight, BookOpen 
} from 'lucide-react';

export default function YasconWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState('malawi');
  const [activeSection, setActiveSection] = useState('home');
  
  // Form States
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', country: '', 
    education: '', experience: '', motivation: ''
  });
  const [contactForm, setContactForm] = useState({
    name: '', email: '', subject: '', message: ''
  });

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'programs', 'regions', 'volunteer', 'news', 'contact'];
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
    { title: "Environmental Education", description: "Empowering communities through knowledge and awareness about sustainable practices.", icon: "🌱", color: "#2D5016" },
    { title: "Tree Planting", description: "Restoring ecosystems by planting indigenous trees and creating green spaces.", icon: "🌳", color: "#4A7C2C" },
    { title: "Wildlife Conservation", description: "Protecting biodiversity through community-led conservation and habitat restoration.", icon: "🦋", color: "#6B9B3D" },
    { title: "Youth Leadership", description: "Building the next generation of environmental leaders through mentorship.", icon: "👥", color: "#8AB84E" },
    { title: "Sustainable Agriculture", description: "Promoting eco-friendly farming practices to ensure food security.", icon: "🌾", color: "#5D8C2F" },
    { title: "Climate Action", description: "Leading grassroots climate initiatives and advocacy for policy change.", icon: "🌍", color: "#3E6B23" }
  ];

  const regions = {
    malawi: {
      name: "Southern",
      description: "Our headquarters coordinates conservation across the 'Warm Heart of Africa', focusing on Lake Malawi protection.",
      stats: { volunteers: "150+", projects: "25", trees: "10,000+" },
      contact: "yasconmw@outlook.com",
      highlights: ["Area tree planting activities", "Community forestry", "Youth eco-camps"]
    },
    uganda: {
      name: "Northen region",
      description: "Focusing on wetland restoration and agroforestry training in the Pearl of Africa.",
      stats: { volunteers: "120+", projects: "18", trees: "8,500+" },
      contact: "yasconug@outlook.com",
      highlights: ["Wetland restoration", "Agroforestry training", "Wildlife corridors"]
    },
    kenya: {
      name: "Central",
      description: "Engaging youth in urban greening and coastal ecosystem protection across diverse landscapes.",
      stats: { volunteers: "95+", projects: "15", trees: "7,200+" },
      contact: "yasconke@outlook.com",
      highlights: ["Coastal protection", "Urban tree planting", "Climate advocacy"]
    }
  };

  const newsItems = [
    { date: "Jan 4, 2026", title: "Call for Youth Volunteers", excerpt: "We are seeking passionate graduates in Media, IT, and Finance to join our 2026 cohort...", category: "Opportunities" },
    { date: "Dec 15, 2025", title: "10,000 Trees Milestone", excerpt: "Our regional teams successfully hit our year-end reforestation target across three nations.", category: "Impact" },
    { date: "Nov 28, 2025", title: "Youth Climate Summit", excerpt: "Highlights from the East African youth dialogue on sustainable development goals.", category: "Events" }
  ];

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    alert(`Application sent! Thank you, ${formData.name}.`);
    setFormData({ name: '', email: '', phone: '', country: '', education: '', experience: '', motivation: '' });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent! We will contact you at ${contactForm.email}.`);
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-gray-900 overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        .grain-texture {
          background-image: linear-gradient(135deg, rgba(45, 80, 22, 0.95) 0%, rgba(20, 40, 10, 0.98) 100%),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
        }
        .section-fade { animation: fadeInUp 0.8s ease-out; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-green-700 rounded-lg"><Leaf className="text-white w-6 h-6" /></div>
            <span className="text-2xl font-bold text-green-900 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>YASCON</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Programs', 'Regions', 'Volunteer', 'News', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} 
                 className={`text-sm font-semibold transition-colors ${activeSection === item.toLowerCase() ? 'text-green-700' : 'text-gray-600 hover:text-green-700'}`}>
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 grain-texture relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white section-fade">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-green-300 text-xs font-bold mb-6 uppercase tracking-widest">
              <Globe className="w-3 h-3" /> <span>Youth-Led Conservation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Action Today for a Greener Tomorrow.
            </h1>
            <p className="text-lg text-green-50/80 mb-10 max-w-lg leading-relaxed">
              YASCON is a regional movement of young professionals across Malawi, Kenya, and Uganda dedicated to climate resilience and environmental advocacy.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#volunteer" className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center group">
                Join the Movement <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all">
                Our Mission
              </a>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-2xl mt-12" alt="Nature" />
              <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-2xl" alt="Planting" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Organizational Core */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-stone-50 border border-gray-100 hover:shadow-xl transition-shadow">
              <Heart className="w-12 h-12 text-green-700 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Grassroots Action</h3>
              <p className="text-gray-600 leading-relaxed">We don't just talk; we plant, clean, and protect. Our members are on the ground in local communities every single week.</p>
            </div>
            <div className="p-8 rounded-3xl bg-stone-50 border border-gray-100 hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 text-green-700 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Policy Advocacy</h3>
              <p className="text-gray-600 leading-relaxed">We bridge the gap between youth and policy-makers, ensuring environmental laws reflect the needs of the future.</p>
            </div>
            <div className="p-8 rounded-3xl bg-stone-50 border border-gray-100 hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-green-700 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Capacity Building</h3>
              <p className="text-gray-600 leading-relaxed">Training young professionals in environmental law, GIS, and sustainable agriculture to build green careers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section id="regions" className="py-24 bg-green-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-green-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Regional Impact</h2>
            <div className="flex justify-center space-x-2 mt-8">
              {Object.keys(regions).map(r => (
                <button key={r} onClick={() => setActiveRegion(r)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeRegion === r ? 'bg-green-700 text-white shadow-lg' : 'bg-white text-gray-500'}`}>
                  {regions[r].name}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-green-100 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-green-900 mb-6">{regions[activeRegion].name} Chapter</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">{regions[activeRegion].description}</p>
              <div className="space-y-4">
                {regions[activeRegion].highlights.map((h, i) => (
                  <div key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="text-green-600 w-5 h-5" /> <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(regions[activeRegion].stats).map(([label, val]) => (
                <div key={label} className="bg-green-50 p-6 rounded-2xl text-center">
                  <div className="text-2xl font-black text-green-800">{val}</div>
                  <div className="text-xs font-bold text-green-600 uppercase mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section id="news" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-green-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Latest Insights</h2>
              <p className="text-gray-500">Updates from the field and conservation blogs.</p>
            </div>
            <button className="hidden md:flex items-center text-green-700 font-bold hover:mr-2 transition-all">
              View All Blogs <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="h-56 bg-gray-200 rounded-2xl mb-6 overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-green-800 z-10">{item.category}</div>
                  <div className="w-full h-full bg-green-100 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <div className="flex items-center text-gray-400 text-xs mb-3">
                  <Calendar className="w-3 h-3 mr-2" /> {item.date}
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3 group-hover:text-green-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.excerpt}</p>
                <span className="inline-flex items-center text-green-700 font-bold text-sm">Read Article <ArrowRight className="ml-2 w-3 h-3" /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section id="volunteer" className="py-24 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Join Our Volunteer Cohort</h2>
            <p className="text-green-200">Help us shape a sustainable future for East Africa.</p>
          </div>
          <form onSubmit={handleVolunteerSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-8 md:p-12 rounded-[2rem] border border-white/10 backdrop-blur-sm">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-green-400">Full Name</label>
              <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-green-400">Email Address</label>
              <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-green-400">Motivation</label>
              <textarea rows="4" required value={formData.motivation} onChange={e => setFormData({...formData, motivation: e.target.value})}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all" 
                placeholder="Why do you want to join YASCON?"></textarea>
            </div>
            <button className="md:col-span-2 bg-green-500 hover:bg-green-400 py-4 rounded-xl font-black text-lg transition-all shadow-xl">Submit Application</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-stone-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Leaf className="text-green-500 w-8 h-8" />
                <span className="text-3xl font-black tracking-tighter uppercase">YASCON</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">National Youth Association for Conservation of Nature. Empowering youth across Malawi, Uganda, and Kenya since 2020.</p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-green-500" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-green-500" />
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-green-500" />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-green-500 uppercase tracking-widest text-xs">Contact Us</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center"><Mail className="w-4 h-4 mr-3" /> yasconmw@outlook.com</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-3" /> Lilongwe, Malawi</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-green-500 uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#programs" className="hover:text-white">Our Programs</a></li>
                <li><a href="#news" className="hover:text-white">Blog & News</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-10 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} YASCON Regional. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}