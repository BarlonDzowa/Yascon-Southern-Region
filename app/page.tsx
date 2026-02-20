// @ts-nocheck
"use client"
import React, { useState } from 'react';
import { MapPin, Mail, Instagram, Linkedin, Facebook, Send, Calendar, Users, Leaf, Award, Globe, Heart, CheckCircle, Target, Trees, BookOpen, Droplets, Recycle, Sun, Star } from 'lucide-react';

const SPLASHES = {
  hero: "linear-gradient(135deg,#14532d 0%,#166534 40%,#15803d 100%)",
  about1: "linear-gradient(135deg,#052e16 0%,#166534 100%)",
  about2: "linear-gradient(135deg,#14532d 0%,#4ade80 100%)",
  blantyre: "linear-gradient(160deg,#1e3a2f 0%,#2d6a4f 60%,#52b788 100%)",
  zomba: "linear-gradient(160deg,#1b4332 0%,#2d6a4f 50%,#74c69d 100%)",
  mangochi: "linear-gradient(160deg,#0c2d48 0%,#1565c0 40%,#00acc1 70%,#26c6da 100%)",
  chiradzulu: "linear-gradient(160deg,#1b4d3e 0%,#2e7d52 50%,#55a87a 100%)",
  mulanje: "linear-gradient(160deg,#2d1b69 0%,#5e35b1 40%,#7986cb 70%,#90a4ae 100%)",
  thyolo: "linear-gradient(160deg,#1b4d2e 0%,#4caf50 50%,#8bc34a 100%)",
  proj1: "linear-gradient(160deg,#0d47a1 0%,#0277bd 40%,#00acc1 100%)",
  proj2: "linear-gradient(160deg,#1b5e20 0%,#388e3c 50%,#66bb6a 100%)",
  proj3: "linear-gradient(160deg,#1a3a1a 0%,#2e7d32 50%,#81c784 100%)",
  proj4: "linear-gradient(160deg,#4a148c 0%,#7b1fa2 50%,#ab47bc 100%)",
  proj5: "linear-gradient(160deg,#e65100 0%,#f57c00 50%,#ffb74d 100%)",
  proj6: "linear-gradient(160deg,#006064 0%,#00838f 50%,#4dd0e1 100%)",
  act1: "linear-gradient(160deg,#1b5e20 0%,#2e7d32 60%,#66bb6a 100%)",
  act2: "linear-gradient(160deg,#0d47a1 0%,#1565c0 60%,#42a5f5 100%)",
  vol: "linear-gradient(160deg,#1a237e 0%,#283593 50%,#5c6bc0 100%)",
  news1: "linear-gradient(160deg,#004d40 0%,#00695c 50%,#26a69a 100%)",
  news2: "linear-gradient(160deg,#1b5e20 0%,#2e7d32 60%,#66bb6a 100%)",
  news3: "linear-gradient(160deg,#e65100 0%,#ef6c00 60%,#ffa726 100%)",
  g1: "linear-gradient(160deg,#1b5e20 0%,#2e7d32 100%)",
  g2: "linear-gradient(160deg,#0d47a1 0%,#1976d2 100%)",
  g3: "linear-gradient(160deg,#004d40 0%,#00796b 100%)",
  g4: "linear-gradient(160deg,#4a148c 0%,#6a1b9a 100%)",
  g5: "linear-gradient(160deg,#33691e 0%,#558b2f 100%)",
  g6: "linear-gradient(160deg,#bf360c 0%,#d84315 100%)",
  g7: "linear-gradient(160deg,#006064 0%,#00838f 100%)",
  g8: "linear-gradient(160deg,#1a237e 0%,#283593 100%)",
  contact: "linear-gradient(160deg,#1b5e20 0%,#2e7d32 50%,#52b788 100%)",
};

const SPLASH_ICONS = {
  mangochi: "🌊", chiradzulu: "🌿", mulanje: "🏔️", thyolo: "🌱", blantyre: "🏙️", zomba: "⛰️",
  proj1:"🌊",proj2:"🌿",proj3:"🌳",proj4:"👥",proj5:"🌾",proj6:"♻️",
  act1:"🌳",act2:"🎤",vol:"🤝",news1:"📢",news2:"🌳",news3:"🎉",
  g1:"🌱",g2:"🌍",g3:"🌿",g4:"📚",g5:"🌱",g6:"🤲",g7:"🌱",g8:"🏖️",
  contact:"📍",about1:"🌿",about2:"🌍",hero:"🌍",
};

function SplashImage({ src, alt, splashKey, className, style = {} }) {
  const [broken, setBroken] = useState(false);
  const icon = SPLASH_ICONS[splashKey] || "🌿";
  const bg = SPLASHES[splashKey] || SPLASHES.proj3;
  if (broken) {
    return (
      <div className={className} style={{ background: bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:8, ...style }}>
        <span style={{ fontSize:40 }}>{icon}</span>
        <span style={{ color:"rgba(255,255,255,0.7)", fontSize:12, textAlign:"center", padding:"0 8px" }}>{alt}</span>
      </div>
    );
  }
  return (
    <img src={src} alt={alt} className={className}
      style={{ objectFit:"cover", width:"100%", height:"100%", ...style }}
      onError={() => setBroken(true)}
    />
  );
}

// ── All 11 uploaded photos mapped to the most fitting sections ──────────────
// image1.png  → Hands cupping a fern seedling with soil
// image2.png  → Child in blue shirt holding a seedling
// image3.png  → "Planting trees benefits the whole world" poster
// image4.png  → Hands holding a green seedling (pink sleeves)
// image5.png  → Row of tall tree seedlings in black nursery pots
// image6.png  → Overhead view of a large seedling nursery
// image7.png  → Aerial drone view of dense green forest
// image8.png  → Boy planting in red Malawian soil (real community scene)
// image9.png  → Single seedling in red Malawian soil, blue sky
// image10.png → Community tree planting with mountains in background
// image11.png → Hands cupping a fern seedling (same scene as image1)
const IMGS = {
  hero:       "/image7.png",   // aerial forest — dramatic full-bleed hero bg
  about1:     "/image1.png",   // hands with fern — intimate care & nurturing
  about2:     "/image4.png",   // hands with seedling — community nurturing
  blantyre:   "/image8.png",   // real Malawi community planting scene
  zomba:      "/image10.png",  // community planting with mountains — Zomba Plateau
  mangochi:   "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
  chiradzulu: "/image9.png",   // single seedling in red soil — indigenous planting
  mulanje:    "/image11.png",  // hands with fern — cedar forest care
  thyolo:     "/image5.png",   // rows of seedlings — tea estate agroforestry
  proj1:      "/image6.png",   // large nursery — ecosystem stewardship
  proj2:      "/image9.png",   // seedling in Malawian soil — Shire River riparian
  proj3:      "/image7.png",   // aerial forest — reforestation drive
  proj4:      "/image2.png",   // child with seedling — youth leadership
  proj5:      "/image4.png",   // hands with seedling — sustainable agriculture
  proj6:      "/image8.png",   // community scene — clean-up campaigns
  act1:       "/image10.png",  // community group planting — milestone activities
  act2:       "/image3.png",   // planting poster — summits & awareness campaigns
  vol:        "/image11.png",  // hands with plant — volunteer spirit
  news1:      "/image1.png",   // hands with fern — call for volunteers
  news2:      "/image7.png",   // aerial forest — 10,000 trees milestone news
  news3:      "/image3.png",   // planting poster — youth summit events
  g1:         "/image6.png",   // seedling nursery — community conservation
  g2:         "/image7.png",   // aerial forest — tree planting drive
  g3:         "/image4.png",   // hands seedling — youth with seedlings
  g4:         "/image10.png",  // community planting — education session
  g5:         "/image5.png",   // seedling rows — nurturing new growth
  g6:         "/image1.png",   // hands fern — hands for the earth
  g7:         "/image9.png",   // seedling in soil — seedling care
  g8:         "/image8.png",   // boy planting — community initiative
  contact:    "/image10.png",  // community with mountains — connect with us
};

export default function YasconSouthern() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', education: '', experience: '', motivation: '' });
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });

  const districts = [
    { name: "Blantyre", splashKey:"blantyre", description: "Malawi's commercial capital and our Southern Region headquarters. We run urban greening, waste management, and youth leadership programs here.", highlights: ["Urban tree planting", "Waste clean-up drives", "Youth eco-clubs in schools"], volunteers: "45+", trees: "3,200+", icon: "🏙️" },
    { name: "Zomba", splashKey:"zomba", description: "Home to the iconic Zomba Plateau, we focus on montane forest conservation, university outreach, and sustainable land use education.", highlights: ["Zomba Plateau conservation", "University campus outreach", "Sustainable land use training"], volunteers: "30+", trees: "2,800+", icon: "⛰️" },
    { name: "Mangochi", splashKey:"mangochi", description: "Situated along the shores of Lake Malawi, our Mangochi chapter leads aquatic ecosystem protection and fishing community engagement.", highlights: ["Lake Malawi shoreline cleanup", "Fishing community education", "Aquatic biodiversity monitoring"], volunteers: "28+", trees: "1,900+", icon: "🌊" },
    { name: "Chiradzulu", splashKey:"chiradzulu", description: "A district rich in biodiversity, we work with local communities to protect indigenous forests and promote sustainable agriculture.", highlights: ["Indigenous forest protection", "Community agroforestry", "Biodiversity monitoring"], volunteers: "18+", trees: "1,100+", icon: "🌿" },
    { name: "Mulanje", splashKey:"mulanje", description: "At the foot of Mount Mulanje, we collaborate with communities and estates to protect the cedar forests and watershed areas.", highlights: ["Mulanje Cedar conservation", "Watershed protection", "Tea estate sustainability"], volunteers: "15+", trees: "800+", icon: "🏔️" },
    { name: "Thyolo", splashKey:"thyolo", description: "Known for its tea estates and fertile hills, we promote shade-tree planting and sustainable farming practices among smallholder farmers.", highlights: ["Shade-tree agroforestry", "Smallholder farmer training", "Soil erosion prevention"], volunteers: "14+", trees: "700+", icon: "🌱" },
  ];

  const projects = [
    { title: "Lake Malawi Ecosystem Conservation", splashKey:"proj1", description: "Protecting the biodiversity of Lake Malawi through community-led monitoring, clean-up campaigns, and awareness programs in lakeshore communities.", icon: "🌊", status: "Ongoing" },
    { title: "Shire River Basin Protection", splashKey:"proj2", description: "Restoring riparian vegetation along the Shire River to prevent erosion, improve water quality, and protect fish habitats critical to local livelihoods.", icon: "🌿", status: "Ongoing" },
    { title: "Southern Reforestation Drive", splashKey:"proj3", description: "Planting thousands of indigenous trees across Blantyre, Zomba and Mangochi districts to restore degraded land and improve the local microclimate.", icon: "🌳", status: "Ongoing" },
    { title: "Youth Environmental Leadership", splashKey:"proj4", description: "Training young people in the Southern Region to become environmental champions in their schools and communities through workshops and mentorship.", icon: "👥", status: "Ongoing" },
    { title: "Sustainable Agriculture Training", splashKey:"proj5", description: "Teaching farmers eco-friendly practices including composting, agroforestry, and water conservation techniques across the Southern Region.", icon: "🌾", status: "Completed" },
    { title: "Waste & Pollution Campaigns", splashKey:"proj6", description: "Organising beach and community clean-ups to reduce plastic pollution and promote responsible waste management across the Southern Region.", icon: "♻️", status: "Ongoing" },
  ];

  const activitiesDone = [
    { year:"2025", month:"December", splashKey:"act1", title:"10,000 Trees Milestone Reached", description:"Successfully planted the 10,000th tree across the Southern Region, with communities from Blantyre, Zomba and Mangochi participating in the celebration.", impact:"10,000 trees planted" },
    { year:"2025", month:"November", splashKey:"act2", title:"Southern Youth Climate Summit", description:"Hosted over 200 young environmental leaders for a two-day summit in Blantyre, focusing on climate solutions, conservation innovations and regional networking.", impact:"200+ participants" },
    { year:"2025", month:"October", splashKey:"act1", title:"Mangochi Lake Shoreline Cleanup", description:"Over 80 volunteers spent the day cleaning over 5km of Lake Malawi shoreline in Mangochi, removing plastic waste and educating local fishermen on pollution impacts.", impact:"5km of shoreline cleaned" },
    { year:"2025", month:"September", splashKey:"act2", title:"School Environmental Education Program", description:"Delivered environmental education workshops to 15 secondary schools across Blantyre and Zomba, reaching over 3,000 students with lessons on conservation and sustainability.", impact:"3,000+ students reached" },
    { year:"2025", month:"August", splashKey:"act1", title:"Zomba Plateau Tree Planting Day", description:"Community members and volunteers joined forces to plant 1,500 indigenous trees on degraded hillsides of the Zomba Plateau, restoring critical watershed areas.", impact:"1,500 trees planted" },
    { year:"2025", month:"July", splashKey:"act2", title:"Sustainable Agriculture Farmer Training", description:"Trained 120 smallholder farmers in Chiradzulu and Thyolo on agroforestry, soil conservation, and water-efficient farming techniques to reduce environmental impact.", impact:"120 farmers trained" },
    { year:"2025", month:"May", splashKey:"act1", title:"Community Seedling Distribution", description:"Distributed over 5,000 indigenous tree seedlings to households across Blantyre and Chiradzulu districts, providing training on proper planting and care.", impact:"5,000 seedlings distributed" },
    { year:"2025", month:"March", splashKey:"act2", title:"World Environment Day Campaign", description:"Led a major awareness campaign across all six Southern Region districts, involving clean-ups, tree planting, and public education on environmental issues.", impact:"6 districts covered" },
  ];

  const upcomingGoals = [
    { title:"Plant 5,000 More Trees by June 2026", description:"Expand our reforestation efforts to cover additional degraded areas in Mulanje and Thyolo, partnering with local schools and farmer cooperatives.", icon:<Leaf size={22}/>, deadline:"June 2026", progress:20 },
    { title:"Train 500 Youth Environmental Leaders", description:"Launch an intensive youth leadership program across all 6 Southern Region districts, equipping young people with conservation and advocacy skills.", icon:<Users size={22}/>, deadline:"August 2026", progress:10 },
    { title:"Clean 20km of Lake Malawi Shoreline", description:"Organise a series of community clean-up events targeting plastic pollution along the Lake Malawi coastline in Mangochi district.", icon:<Droplets size={22}/>, deadline:"October 2026", progress:5 },
    { title:"Establish 10 Eco-Clubs in Schools", description:"Set up active environmental clubs in 10 secondary schools across Blantyre and Zomba with trained student leaders and ongoing mentorship support.", icon:<BookOpen size={22}/>, deadline:"April 2026", progress:30 },
    { title:"Zero Plastic in 3 Districts Campaign", description:"Launch a dedicated campaign in Blantyre, Zomba and Mangochi to reduce single-use plastic through awareness, alternative promotion and policy advocacy.", icon:<Recycle size={22}/>, deadline:"December 2026", progress:5 },
    { title:"Solar-Powered Community Centres", description:"Partner with local communities to establish solar-powered environmental resource centres in Chiradzulu and Thyolo for education and meetings.", icon:<Sun size={22}/>, deadline:"September 2026", progress:15 },
  ];

  const newsItems = [
    { date:"January 4, 2026", splashKey:"news1", title:"Call for Youth Volunteers – Southern Region", excerpt:"YASCON Southern is seeking passionate young people with degrees in Media, IT, Environmental Science, Finance, and more to join our growing team.", category:"Opportunities" },
    { date:"December 15, 2025", splashKey:"news2", title:"10,000 Trees Planted in Southern Malawi", excerpt:"A major milestone reached as Southern Region volunteers plant the 10,000th tree in the ongoing reforestation initiative across Blantyre and Zomba.", category:"Impact" },
    { date:"November 28, 2025", splashKey:"news3", title:"Southern Youth Climate Summit Success", excerpt:"Over 200 young environmental leaders from across the Southern Region gathered to share conservation innovations and strengthen community networks.", category:"Events" },
  ];

  const galleryItems = [
    { splashKey:"g1", caption:"Community conservation day" },
    { splashKey:"g2", caption:"Tree planting drive" },
    { splashKey:"g3", caption:"Youth group with seedlings" },
    { splashKey:"g4", caption:"Environmental education session" },
    { splashKey:"g5", caption:"Nurturing new growth" },
    { splashKey:"g6", caption:"Hands for the earth" },
    { splashKey:"g7", caption:"Seedling care" },
    { splashKey:"g8", caption:"Beach cleanup initiative" },
  ];

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your application has been submitted. We'll contact you at ${formData.email} soon.`);
    setFormData({ name:'', email:'', phone:'', education:'', experience:'', motivation:'' });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${contactForm.name}! Your message has been sent.`);
    setContactForm({ name:'', email:'', subject:'', message:'' });
  };

  return (
    <div className="font-sans">

      {/* ══════ HOME ══════ */}
      <section className="relative overflow-hidden bg-green-900" id="home">
        <div className="absolute inset-0">
          <SplashImage src={IMGS.hero} alt="YASCON Southern Region" splashKey="hero" className="w-full h-full" style={{ objectFit:"cover", opacity:0.35 }} />
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/80 via-green-900/60 to-green-800/40" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-green-300 text-[11px] font-black tracking-[0.15em] uppercase">YASCON</span>
                <span className="text-white/50 text-xs">•</span>
                <span className="text-white/70 text-xs">Southern Region • Malawi</span>
              </div>
              <h1 className="font-display text-5xl lg:text-6xl text-white mb-4 leading-tight">
                <span className="block text-green-300 text-sm font-bold tracking-[0.2em] uppercase mb-2">SOUTHERN MALAWI</span>
                Protecting the South,<br/>
                <span className="text-green-300">Empowering Youth</span>
              </h1>
              <p className="text-green-100/80 text-base leading-relaxed mb-8 max-w-lg">
                YASCON Southern Region unites passionate young conservationists across Blantyre, Zomba, Mangochi, Chiradzulu, Mulanje and Thyolo to protect our lakes, forests and communities for future generations.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {[{n:"150+",l:"Volunteers"},{n:"25",l:"Projects"},{n:"10K+",l:"Trees"},{n:"6",l:"Districts"}].map(s => (
                  <div key={s.l} className="bg-white/10 border border-white/15 rounded-2xl p-3 text-center backdrop-blur-sm">
                    <div className="text-2xl font-black text-white">{s.n}</div>
                    <div className="text-green-300 text-[11px] font-semibold tracking-wide mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-green-300/60 text-xs tracking-widest">↓ Scroll down to explore all sections</p>
            </div>
            <div className="hidden lg:block min-w-0">
              <div className="rounded-3xl overflow-hidden h-96 shadow-2xl">
                <SplashImage src={IMGS.hero} alt="Southern Malawi conservation" splashKey="hero" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ ABOUT ══════ */}
      <section className="min-h-screen bg-white py-24" id="about">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 text-[11px] font-black tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-4">Who We Are</span>
            <h2 className="font-display text-5xl text-green-900 mb-3 leading-tight">About YASCON Southern Region</h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">A youth-led conservation movement transforming Southern Malawi, one district at a time.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <p className="text-gray-600 text-base leading-relaxed mb-6">The YASCON Southern Region chapter is a vibrant community of young people from Blantyre, Zomba, Mangochi, Chiradzulu, Mulanje and Thyolo united by a passion for nature and environmental conservation.</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">We empower the youth of Southern Malawi to take meaningful action through community initiatives, environmental education, tree planting, lake and river protection, and sustainable development programs that create lasting positive change.</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon:<Award size={20}/>, title:"NGO Status", desc:"Registered Non-Governmental Organization" },
                  { icon:<Users size={20}/>, title:"Youth-Led", desc:"Driven by passionate young leaders" },
                  { icon:<Globe size={20}/>, title:"6 Districts", desc:"Blantyre, Zomba, Mangochi & more" },
                  { icon:<Leaf size={20}/>, title:"Part of YASCON", desc:"One of three Malawi regional chapters" },
                ].map((item,i) => (
                  <div key={i} className="bg-green-50 rounded-2xl p-4 border border-green-100">
                    <div className="text-green-600 mb-2">{item.icon}</div>
                    <div className="font-bold text-green-900 text-sm mb-1">{item.title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden h-56 shadow-md">
                <SplashImage src={IMGS.about1} alt="YASCON About" splashKey="about1" className="w-full h-full" />
              </div>
              <div className="bg-green-900 rounded-2xl p-6 text-white">
                <div className="mb-4">
                  <div className="text-green-300 font-bold text-sm mb-1">🎯 Our Mission</div>
                  <p className="text-green-100/80 text-sm leading-relaxed">To empower Southern Malawian youth to protect and restore our natural environment through education, action, and community leadership.</p>
                </div>
                <div>
                  <div className="text-green-300 font-bold text-sm mb-1">🌍 Our Vision</div>
                  <p className="text-green-100/80 text-sm leading-relaxed">A Southern Malawi where thriving ecosystems and empowered youth communities exist in harmony for generations to come.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-50 rounded-3xl p-10 border border-green-100">
            <h3 className="font-display text-2xl text-green-900 mb-8 text-center">Our Impact in Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[{n:"150+",l:"Volunteers"},{n:"25",l:"Active Projects"},{n:"10,000+",l:"Trees Planted"},{n:"6",l:"Districts Covered"}].map(s => (
                <div key={s.l} className="text-center">
                  <div className="text-4xl font-black text-green-700 mb-1">{s.n}</div>
                  <div className="text-gray-500 text-sm font-semibold">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center bg-green-900 rounded-3xl p-8 text-white">
            <h3 className="font-display text-2xl mb-3">Get Involved</h3>
            <p className="text-green-200/80 text-sm leading-relaxed max-w-xl mx-auto">Your support — whether time, skills, or resources — helps us empower more youth and protect our environment. Contact us at <span className="text-green-300 font-semibold">yasconmw@outlook.com</span></p>
          </div>
        </div>
      </section>

      {/* ══════ DISTRICTS ══════ */}
      <section className="min-h-screen bg-green-50 py-24" id="districts">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 text-[11px] font-black tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-4">Where We Work</span>
            <h2 className="font-display text-5xl text-green-900 mb-3 leading-tight">Our 6 Districts</h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">Conservation work spanning six districts across Southern Malawi — each with dedicated volunteers and growing impact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {districts.map((d,i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-green-50">
                <div className="h-44 relative overflow-hidden">
                  <SplashImage src={IMGS[d.splashKey]} alt={d.name} splashKey={d.splashKey} className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{d.icon}</span>
                      <h3 className="font-display text-xl text-white">{d.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{d.description}</p>
                  <ul className="flex flex-col gap-1.5 mb-5">
                    {d.highlights.map((h,j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle size={12} className="text-green-500 flex-shrink-0" />{h}
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-green-50">
                    <div className="text-center">
                      <div className="font-black text-green-700 text-lg">{d.volunteers}</div>
                      <div className="text-gray-400 text-[11px]">Volunteers</div>
                    </div>
                    <div className="text-center">
                      <div className="font-black text-green-700 text-lg">{d.trees}</div>
                      <div className="text-gray-400 text-[11px]">Trees Planted</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PROJECTS ══════ */}
      <section className="min-h-screen bg-white py-24" id="projects">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 text-[11px] font-black tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-4">What We Do</span>
            <h2 className="font-display text-5xl text-green-900 mb-3 leading-tight">Our Projects</h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">Conservation initiatives making real impact across the Southern Region communities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p,i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-green-50">
                <div className="h-44 relative overflow-hidden">
                  <SplashImage src={IMGS[p.splashKey]} alt={p.title} splashKey={p.splashKey} className="w-full h-full" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{p.icon}</span>
                      <h3 className="font-display text-lg text-green-900 leading-snug">{p.title}</h3>
                    </div>
                    <span className={`flex-shrink-0 text-[10px] font-black px-2.5 py-1 rounded-full tracking-wide ${p.status === 'Ongoing' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{p.status}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ ACTIVITIES ══════ */}
      <section className="min-h-screen bg-green-50 py-24" id="activities">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 text-[11px] font-black tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-4">Track Record</span>
            <h2 className="font-display text-5xl text-green-900 mb-3 leading-tight">Activities Done</h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">A complete record of all conservation activities completed by the Southern Region chapter in 2025.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activitiesDone.map((a,i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-green-50">
                <div className="h-40 relative overflow-hidden">
                  <SplashImage src={IMGS[a.splashKey]} alt={a.title} splashKey={a.splashKey} className="w-full h-full" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full tracking-wide">{a.month} {a.year} ✓ Completed</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-green-900 mb-2">{a.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{a.description}</p>
                  <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold">
                    <Star size={12} /> Impact: {a.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ GOALS ══════ */}
      <section className="min-h-screen bg-white py-24" id="goals">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 text-[11px] font-black tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-4">Looking Ahead</span>
            <h2 className="font-display text-5xl text-green-900 mb-3 leading-tight">Upcoming Goals</h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">Our vision and targets for the Southern Region in 2026 and beyond.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {upcomingGoals.map((g,i) => (
              <div key={i} className="bg-green-50 rounded-3xl p-6 border border-green-100 hover:border-green-300 transition-colors">
                <div className="w-12 h-12 bg-green-900 rounded-2xl flex items-center justify-center text-green-300 mb-4">{g.icon}</div>
                <h3 className="font-display text-lg text-green-900 mb-2 leading-snug">{g.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{g.description}</p>
                <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold mb-3">
                  <Target size={12} /> Target: {g.deadline}
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Progress</span><span>{g.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600 rounded-full" style={{ width:`${g.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-green-900 rounded-3xl p-10 text-center text-white">
            <h3 className="font-display text-2xl mb-3">Help Us Achieve These Goals</h3>
            <p className="text-green-200/80 text-sm leading-relaxed max-w-xl mx-auto">Every volunteer, every tree planted, and every awareness raised brings us closer to a greener Southern Malawi. Scroll down to join us.</p>
          </div>
        </div>
      </section>

      {/* ══════ VOLUNTEERS ══════ */}
      <section className="min-h-screen bg-green-900 py-24" id="volunteer">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/10 text-green-200 text-[11px] font-black tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-4">Join the Movement</span>
            <h2 className="font-display text-5xl text-white mb-3 leading-tight">Become a Volunteer</h2>
            <p className="text-green-200/70 text-base max-w-lg mx-auto leading-relaxed">Passionate young people needed — make a real difference in Southern Malawi. Applications close January 6, 2026.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-2xl text-white mb-4">Who We're Looking For</h3>
              <p className="text-green-200/70 text-sm leading-relaxed mb-6">We're seeking passionate young people from Southern Malawi with Bachelor's degrees in:</p>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {["Media & Communications","Information Technology","Marketing","Economics & Statistics","Youth Development","Finance","Administration","Monitoring & Evaluation","Environmental Science","Related disciplines"].map(field => (
                  <div key={field} className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-xl px-3 py-2">
                    <CheckCircle size={13} className="text-green-400 flex-shrink-0" />
                    <span className="text-white/80 text-xs">{field}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-2">Why Volunteer With Us?</h4>
                <p className="text-green-200/70 text-sm leading-relaxed">Gain hands-on conservation experience, grow your professional network, develop leadership skills, and contribute meaningfully to a greener Southern Malawi.</p>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="font-display text-2xl text-white mb-6">Application Form</h3>
              <form onSubmit={handleVolunteerSubmit} className="flex flex-col gap-4">
                {[
                  { label:"Full Name *", key:"name", type:"text", placeholder:"Your full name" },
                  { label:"Email Address *", key:"email", type:"email", placeholder:"your.email@example.com" },
                  { label:"Phone Number *", key:"phone", type:"tel", placeholder:"+265 XXX XXX XXX" },
                  { label:"Educational Background *", key:"education", type:"text", placeholder:"e.g., Bachelor's in Environmental Science" },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block text-xs font-semibold mb-1.5 text-green-200">{f.label}</label>
                    <input type={f.type} required value={formData[f.key]} onChange={e => setFormData({...formData,[f.key]:e.target.value})} placeholder={f.placeholder} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/25 text-white text-sm placeholder-white/40 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20" />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-green-200">Relevant Experience</label>
                  <textarea rows={2} value={formData.experience} onChange={e=>setFormData({...formData,experience:e.target.value})} placeholder="Your conservation experience..." className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/25 text-white text-sm placeholder-white/40 resize-none focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-green-200">Why join YASCON Southern? *</label>
                  <textarea required rows={3} value={formData.motivation} onChange={e=>setFormData({...formData,motivation:e.target.value})} placeholder="Your motivation..." className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/25 text-white text-sm placeholder-white/40 resize-none focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20" />
                </div>
                <button type="submit" className="w-full mt-1 bg-white text-green-900 font-bold text-[15px] py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-green-50 transition-colors cursor-pointer">
                  <Send size={16} /> Submit Application
                </button>
              </form>
              <p className="text-xs text-green-300 mt-4 text-center">📅 Deadline: January 6, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ NEWS ══════ */}
      <section className="min-h-screen bg-white py-24" id="news">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 text-[11px] font-black tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-4">Stay Updated</span>
            <h2 className="font-display text-5xl text-green-900 mb-3 leading-tight">Latest News</h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">Stay updated with Southern Region conservation activities, milestones and opportunities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item,i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-green-50">
                <div className="h-48 overflow-hidden">
                  <SplashImage src={IMGS[item.splashKey]} alt={item.title} splashKey={item.splashKey} className="w-full h-full" />
                </div>
                <div className={`h-1.5 ${i===0?'bg-green-500':i===1?'bg-green-700':'bg-green-900'}`} />
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <span className="text-[11px] font-black text-green-700 bg-green-100 px-3 py-1 rounded-full tracking-wide">{item.category}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar size={11}/> {item.date}</span>
                  </div>
                  <h3 className="font-display text-xl text-green-900 mb-3 leading-snug">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.excerpt}</p>
                  <span className="text-green-600 font-semibold text-sm">Read more →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ GALLERY ══════ */}
      <section className="min-h-screen bg-green-50 py-24" id="gallery">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 text-[11px] font-black tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-4">In Pictures</span>
            <h2 className="font-display text-5xl text-green-900 mb-3 leading-tight">Our Gallery</h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">Southern Region conservation impact in pictures — our work, our people, our land.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((img,i) => (
              <div key={i} className="relative overflow-hidden rounded-[18px] h-56 shadow-md group">
                <SplashImage src={IMGS[img.splashKey]} alt={img.caption} splashKey={img.splashKey} className="w-full h-full" style={{ objectFit:"cover", width:"100%", height:"100%", position:"absolute", inset:0 }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-sm">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CONTACT ══════ */}
      <section className="min-h-screen bg-white py-24" id="contact">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 text-[11px] font-black tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-4">Reach Out</span>
            <h2 className="font-display text-5xl text-green-900 mb-3 leading-tight">Get In Touch</h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">We'd love to hear from you — reach out to YASCON Southern Region with any questions or ideas.</p>
          </div>
          <div className="rounded-3xl overflow-hidden h-56 mb-12 shadow-md relative">
            <SplashImage src={IMGS.contact} alt="YASCON community" splashKey="contact" className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent flex items-center px-12">
              <div>
                <p className="text-green-200 text-sm font-semibold tracking-widest uppercase mb-2">Connect With Us</p>
                <h3 className="font-display text-3xl text-white">yasconmw@outlook.com</h3>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-2xl text-green-900 mb-6">Contact Information</h3>
              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 flex-shrink-0"><Mail size={20}/></div>
                  <div>
                    <div className="font-bold text-green-900 mb-1">Email</div>
                    <div className="text-[15px] text-gray-500">yasconmw@outlook.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 flex-shrink-0"><MapPin size={20}/></div>
                  <div>
                    <div className="font-bold text-green-900 mb-1">Location</div>
                    <div className="text-sm text-gray-500 leading-relaxed">Southern Region, Malawi<br/>Blantyre • Zomba • Mangochi<br/>Chiradzulu • Mulanje • Thyolo</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 flex-shrink-0"><Globe size={20}/></div>
                  <div>
                    <div className="font-bold text-green-900 mb-3">Follow Us</div>
                    <div className="flex gap-2.5">
                      {[Facebook, Instagram, Linkedin].map((Icon,i) => (
                        <a key={i} href="#" className="w-10 h-10 bg-green-900 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-colors">
                          <Icon size={17}/>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 rounded-2xl p-7 border-l-4 border-green-600">
                <Heart size={26} className="text-green-600 mb-3"/>
                <h4 className="font-bold text-green-900 mb-2">Support Our Mission</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Your support — whether time, skills, or resources — helps us empower more Southern Region youth and protect our environment. Together, we create lasting change.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-9 shadow-lg border border-green-50">
              <h3 className="font-display text-2xl text-green-900 mb-7">Send Us a Message</h3>
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
                {[
                  { label:"Name *", key:"name", type:"text", placeholder:"Your name" },
                  { label:"Email *", key:"email", type:"email", placeholder:"your.email@example.com" },
                  { label:"Subject *", key:"subject", type:"text", placeholder:"What is this about?" },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{f.label}</label>
                    <input type={f.type} required value={contactForm[f.key]} onChange={e=>setContactForm({...contactForm,[f.key]:e.target.value})} placeholder={f.placeholder} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea required rows={5} value={contactForm.message} onChange={e=>setContactForm({...contactForm,message:e.target.value})} placeholder="Your message..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 resize-none focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100" />
                </div>
                <button type="submit" className="w-full bg-green-900 hover:bg-green-700 text-white font-bold text-base py-4 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer">
                  <Send size={17}/> Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="text-center mt-20 pt-8 border-t border-green-50 text-gray-400 text-sm">
            © 2026 YASCON Southern Region · yasconmw@outlook.com · Together, let's protect Southern Malawi 🌍
          </div>
        </div>
      </section>

    </div>
  );
}