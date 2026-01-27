'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Home as HomeIcon,
  Bed,
  UtensilsCrossed,
  Mail,
  HelpCircle,
  BookOpen,
  Calendar,
  Users,
  ChevronRight,
  Star,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Menu,
  X,
  Sparkles,
  Award,
  Crown,
  Waves,
  ArrowRight,
  Check,
  Globe,
  Sun,
  Moon,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import { headerItems, hotelInfos, blogs, testimonials } from '@/utils/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function HotelHome() {
  const [currency, setCurrency] = useState('USD');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const stored = localStorage.getItem('chf');
    if (stored === '1') {
      setCurrency('CHF');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCurrencyChange = (e) => {
    const value = e.target.value;
    setCurrency(value);
    if (value === 'CHF') {
      localStorage.setItem('chf', '1');
    } else {
      localStorage.removeItem('chf');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden relative font-serif">
      {/* Organic Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 53, 15, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(161, 98, 7, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(78, 70, 39, 0.2) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Floating Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-amber-950/95 backdrop-blur-xl shadow-2xl shadow-amber-950/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between py-6">
            {/* Artistic Logo */}
            <Link href="/" className="group relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center space-x-4">
                <img src="/logo.png" className="h-16 transition-all duration-500 group-hover:scale-110 drop-shadow-2xl" alt="Logo" />
              </div>
            </Link>

            {/* Desktop Navigation - Minimalist */}
            <nav className="hidden lg:flex items-center space-x-2">
              {headerItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group relative px-6 py-3 transition-all duration-300"
                >
                  <span className={`text-sm font-light tracking-wider uppercase transition-all duration-300 ${
                    scrolled ? 'text-amber-100' : 'text-white'
                  } group-hover:text-amber-300`}>
                    {item.label}
                  </span>
                  <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <select
                value={currency}
                onChange={handleCurrencyChange}
                className="px-5 py-2.5 rounded-none bg-transparent border border-amber-700/40 text-amber-100 text-sm font-light tracking-wider cursor-pointer hover:border-amber-500 transition-all focus:outline-none focus:border-amber-400"
              >
                <option value="USD" className="bg-amber-950">USD</option>
                <option value="CHF" className="bg-amber-950">CHF</option>
              </select>
              <button className="group relative px-8 py-3 border border-amber-600 overflow-hidden transition-all duration-300 hover:border-amber-400">
                <div className="absolute inset-0 bg-amber-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <span className="relative z-10 flex items-center space-x-2 text-sm font-light tracking-widest uppercase text-amber-100">
                  <Calendar className="w-4 h-4" />
                  <span>Reserve</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 border border-amber-700/40 transition-colors hover:border-amber-500"
            >
              {mobileMenuOpen ? (
                <X className={`w-5 h-5 ${scrolled ? 'text-amber-100' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${scrolled ? 'text-amber-100' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-6 border-t border-amber-700/20 mt-2">
              <nav className="flex flex-col space-y-1 mt-4">
                {headerItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-4 border-b border-amber-700/10 hover:bg-amber-900/20 transition-all"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-100 text-sm font-light tracking-wider uppercase">{item.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-amber-600" />
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <select
                    value={currency}
                    onChange={handleCurrencyChange}
                    className="w-full px-4 py-3 bg-transparent border border-amber-700/40 text-amber-100 text-sm"
                  >
                    <option value="USD" className="bg-amber-950">USD</option>
                    <option value="CHF" className="bg-amber-950">CHF</option>
                  </select>
                  <button className="w-full px-4 py-3 bg-amber-600 text-white font-light tracking-widest uppercase text-sm">
                    Reserve Now
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Full Height Immersive */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/80 via-stone-900/70 to-amber-900/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
        </div>

        {/* Hero Content - Editorial Layout */}
        <div className="relative z-10 max-w-[95rem] mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-5xl mx-auto space-y-12">

            {/* Main Heading - Artistic Typography */}
            <div className="space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-white leading-[1.1] tracking-tight">
                <span className="block mb-4 text-amber-300/60 text-2xl sm:text-3xl font-light tracking-[0.5em] uppercase">
                  Welcome to
                </span>
                <span className="block font-serif italic">
                  {hotelInfos.name}
                </span>
              </h1>
              
              <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              
              <p className="text-xl sm:text-2xl text-amber-100/90 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
                Where the Dades Valley whispers stories of <span className="italic text-amber-300">timeless elegance</span> and <span className="italic text-amber-300">Moroccan charm</span>
              </p>
            </div>

            {/* CTA Buttons - Elegant */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button className="group relative px-12 py-5 border-2 border-amber-500 overflow-hidden transition-all duration-500 hover:border-amber-300">
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center space-x-3 text-base font-light tracking-[0.2em] uppercase text-white">
                  <span>Discover</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="group px-12 py-5 border border-white/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50">
                <span className="flex items-center space-x-3 text-base font-light tracking-[0.2em] uppercase text-white">
                  <Phone className="w-5 h-5" />
                  <span>Contact</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Elevated Search Box - Floating Design */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-br from-stone-800 to-amber-950 p-10 border border-amber-700/30 shadow-2xl backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-amber-100 tracking-wider uppercase">Find Your Perfect Stay</h3>
            <div className="h-[1px] w-20 mx-auto mt-4 bg-amber-500"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calendar, label: 'Arrival', type: 'date' },
              { icon: Calendar, label: 'Departure', type: 'date' },
              { icon: Bed, label: 'Rooms', type: 'number', min: '1', default: '1' },
              { icon: Users, label: 'Guests', type: 'number', min: '1', default: '2' },
            ].map((field, i) => (
              <div key={i} className="space-y-3">
                <label className="flex items-center space-x-2 text-xs font-light text-amber-300/80 uppercase tracking-[0.2em]">
                  <field.icon className="w-4 h-4" strokeWidth={1} />
                  <span>{field.label}</span>
                </label>
                <input
                  type={field.type}
                  min={field.min}
                  defaultValue={field.default}
                  className="w-full px-5 py-4 bg-stone-900/50 border border-amber-700/20 text-amber-100 placeholder-amber-700/40 focus:border-amber-500 focus:bg-stone-900/70 focus:outline-none transition-all font-light"
                />
              </div>
            ))}
          </div>
          
          <button className="w-full mt-8 group px-6 py-5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 transition-all duration-300">
            <span className="flex items-center justify-center space-x-3 text-sm font-light tracking-[0.2em] uppercase text-white">
              <span>Check Availability</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </div>
      </section>

      {/* About Section - Split Screen Design */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-stone-100">
        <div className="max-w-[95rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left - Image Collage */}
            <div className="relative h-[600px] lg:h-auto">
              <div className="absolute inset-0 grid grid-cols-2 gap-4 p-8">
                <div className="relative overflow-hidden border border-amber-900/20">
                  <img
                    src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Hotel"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 to-transparent"></div>
                </div>
                <div className="relative overflow-hidden border border-amber-900/20 mt-12">
                  <img
                    src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Room"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 to-transparent"></div>
                </div>
                <div className="relative overflow-hidden border border-amber-900/20 -mt-12 col-span-2">
                  <img
                    src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Restaurant"
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="bg-gradient-to-br from-amber-900 to-stone-900 p-12 lg:p-20 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-3 border-b border-amber-700/30 pb-3">
                  <div className="w-12 h-[1px] bg-amber-500"></div>
                  <span className="text-amber-400 font-light text-sm tracking-[0.3em] uppercase">Our Story</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-light text-white leading-tight">
                  Unveiling the Enchanting Beauty of
                  <span className="block mt-3 italic text-amber-300">Dades Valley</span>
                </h2>

                <div className="space-y-6 text-amber-100/80 text-lg font-light leading-relaxed">
                  <p>
                    Nestled amidst the awe-inspiring Atlas Mountains, Panorama Dades Hotel offers a truly immersive experience where breathtaking panoramas and tranquil ambiance combine to create an unforgettable Moroccan getaway.
                  </p>
                  <p>
                    Step into our welcoming oasis, where rustic charm blends seamlessly with modern comforts. Our well-appointed rooms provide a cozy sanctuary, each designed to capture the essence of the surrounding landscape.
                  </p>
                  <p>
                    Indulge in a delectable culinary journey at our on-site restaurant, where local flavors and international cuisine harmoniously intertwine with fresh, locally sourced ingredients.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8">
                  {[
                    { number: '5+', label: 'Rooms', icon: Bed },
                    { number: '50K+', label: 'Guests', icon: Users },
                    { number: '25+', label: 'Years', icon: Award },
                  ].map((stat, i) => (
                    <div key={i} className="text-center border-r border-amber-700/20 last:border-0">
                      <div className="text-4xl font-light text-amber-400 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-xs text-amber-100/60 uppercase tracking-wider font-light">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section - Magazine Layout */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-stone-50">
        <div className="max-w-[95rem] mx-auto">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-[1px] w-16 bg-amber-800"></div>
              <Bed className="w-6 h-6 text-amber-700" strokeWidth={1} />
              <div className="h-[1px] w-16 bg-amber-800"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-light text-stone-900 mb-6 italic">
              Authentic Rooms
            </h2>
            <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
              Experience a diverse range of thoughtfully curated rooms, tailored to cater to your individual preferences
            </p>
          </div>

          {/* Rooms Grid - Asymmetric */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Large Feature */}
            <div className="lg:col-span-7 relative group overflow-hidden border-2 border-amber-900/10 h-[600px]">
              <img
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium Suite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-amber-600 text-white text-xs font-light tracking-[0.2em] uppercase">
                    Premium Suite
                  </div>
                  <h3 className="text-4xl font-light text-white">
                    Panoramic Valley Views
                  </h3>
                  <p className="text-amber-100/80 font-light leading-relaxed max-w-md">
                    Wake up to the soothing sounds of nature with sweeping views of the Dades Valley from your private balcony
                  </p>
                  <button className="group/btn inline-flex items-center space-x-2 text-amber-300 hover:text-amber-200 transition-colors mt-4">
                    <span className="font-light tracking-wider uppercase text-sm">Explore Room</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Small Cards */}
            <div className="lg:col-span-5 space-y-8">
              {[
                {
                  img: 'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=800',
                  title: 'Deluxe Room',
                  desc: 'Traditional Moroccan aesthetics',
                },
                {
                  img: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
                  title: 'Standard Room',
                  desc: 'Cozy and inviting comfort',
                },
              ].map((room, i) => (
                <div key={i} className="relative group overflow-hidden border border-amber-900/10 h-64">
                  <img
                    src={room.img}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-2xl font-light text-white mb-2">{room.title}</h4>
                    <p className="text-amber-100/70 text-sm font-light">{room.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/rooms"
              className="inline-flex items-center space-x-3 px-12 py-5 border-2 border-amber-800 hover:bg-amber-800 hover:text-white transition-all duration-300 group"
            >
              <span className="font-light tracking-[0.2em] uppercase text-sm text-stone-900 group-hover:text-white">
                View All Rooms
              </span>
              <ArrowRight className="w-5 h-5 text-stone-900 group-hover:text-white group-hover:translate-x-2 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Section - Horizontal Split */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-950 to-stone-950">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Content */}
          <div className="p-12 lg:p-24 flex flex-col justify-center order-2 lg:order-1">
            <div className="max-w-xl space-y-8">
              <div className="flex items-center space-x-3">
                <UtensilsCrossed className="w-6 h-6 text-amber-500" strokeWidth={1} />
                <div className="h-[1px] flex-1 bg-gradient-to-r from-amber-500 to-transparent"></div>
              </div>

              <h2 className="text-5xl font-light text-white leading-tight">
                The
                <span className="block mt-2 italic text-amber-300">Restaurant</span>
              </h2>

              <div className="space-y-6 text-amber-100/70 text-lg font-light leading-relaxed">
                <p>
                  Savor the tastes of Morocco at The Restaurant, a culinary haven where our talented chefs create delectable dishes that will tantalize your taste buds.
                </p>
                <p>
                  With a menu inspired by local flavors and international influences, join us for an unforgettable culinary adventure featuring traditional Moroccan specialties and global cuisines.
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-3 gap-3 pt-6">
                {[
                  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=400',
                ].map((img, i) => (
                  <div key={i} className="relative overflow-hidden border border-amber-700/20 aspect-square">
                    <img
                      src={img}
                      alt={`Dish ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <Link
                href="/restaurant"
                className="inline-flex items-center space-x-3 px-10 py-4 bg-amber-600 hover:bg-amber-500 transition-colors group"
              >
                <span className="font-light tracking-[0.2em] uppercase text-sm text-white">
                  View Menu
                </span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-auto order-1 lg:order-2">
            <img
              src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-950 via-transparent to-transparent lg:opacity-100 opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Pool Section - Overlapping Design */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-stone-100">
        <div className="max-w-[95rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image - Framed */}
            <div className="relative">
              <div className="absolute -inset-8 border-2 border-amber-900/20"></div>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Swimming Pool"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              {/* Overlapping Small Images */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border-4 border-white shadow-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Pool View"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 lg:pl-8">
              <div className="inline-flex items-center space-x-3 border-l-4 border-amber-700 pl-4">
                <Waves className="w-6 h-6 text-amber-700" strokeWidth={1} />
                <span className="text-amber-800 font-light text-sm tracking-[0.3em] uppercase">Relaxation</span>
              </div>

              <h2 className="text-5xl font-light text-stone-900 leading-tight">
                Panoramic
                <span className="block mt-3 italic text-amber-800">Pool View</span>
              </h2>

              <div className="h-[2px] w-24 bg-gradient-to-r from-amber-700 to-transparent"></div>

              <div className="space-y-6 text-stone-600 text-lg font-light leading-relaxed">
                <p>
                  Immerse yourself in the epitome of relaxation with our breathtaking panoramic swimming pool view in the heart of Dades Valley.
                </p>
                <p>
                  As the sun-kissed waters blend seamlessly with the majestic Atlas Mountains and lush greenery, you'll find yourself in a haven of serenity.
                </p>
                <p>
                  Let the enchanting landscape embrace you as you unwind and create lasting memories at Panorama Dades.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=400',
                ].map((img, i) => (
                  <div key={i} className="relative overflow-hidden border border-amber-900/10 h-32">
                    <img
                      src={img}
                      alt={`Pool ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <Link
                href="/swimming"
                className="inline-flex items-center space-x-3 px-10 py-4 border-2 border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 group"
              >
                <span className="font-light tracking-[0.2em] uppercase text-sm">
                  Discover More
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Card Deck Style */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-gradient-to-b from-amber-950 to-stone-950">
        <div className="max-w-[95rem] mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Star className="w-6 h-6 text-amber-500 fill-amber-500" strokeWidth={1} />
              <div className="h-[1px] w-16 bg-amber-500"></div>
              <Star className="w-6 h-6 text-amber-500 fill-amber-500" strokeWidth={1} />
            </div>
            <h2 className="text-5xl lg:text-6xl font-light text-white mb-6 italic">
              Guest Stories
            </h2>
            <p className="text-xl text-amber-100/70 max-w-2xl mx-auto font-light">
              Unforgettable experiences from our valued guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-stone-800 to-amber-900/30 p-10 border border-amber-700/20 hover:border-amber-500/40 transition-all duration-300 group"
              >
                {/* Quote Mark */}
                <div className="absolute top-6 left-6 text-8xl font-serif text-amber-500/10 leading-none">
                  "
                </div>
                
                <div className="relative z-10 space-y-6">
                  {/* Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-500 text-amber-500"
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-amber-100/80 leading-relaxed font-light italic text-lg">
                    {testimonial.text}
                  </p>
                  
                  {/* Author */}
                  <div className="pt-6 border-t border-amber-700/20 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-light text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-light text-white text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-amber-400/70 uppercase tracking-wider flex items-center space-x-1 mt-1">
                        <Check className="w-3 h-3" />
                        <span>Verified Guest</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Guide - Masonry Grid */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-stone-50">
        <div className="max-w-[95rem] mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <MapPin className="w-6 h-6 text-amber-700" strokeWidth={1} />
              <div className="h-[1px] w-24 bg-amber-800"></div>
              <Globe className="w-6 h-6 text-amber-700" strokeWidth={1} />
            </div>
            <h2 className="text-5xl lg:text-6xl font-light text-stone-900 mb-6 italic">
              Travel Plans
            </h2>
            <p className="text-xl text-stone-600 font-light">
              Discover the best experiences around our hotel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((guide, index) => (
              <div
                key={index}
                className={`group cursor-pointer border border-amber-900/10 overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                  index === 1 ? 'lg:translate-y-12' : ''
                }`}
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
                  
                  {/* Floating Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-light text-white mb-3 leading-tight">
                      {guide.title}
                    </h3>
                    <div className="h-[1px] w-16 bg-amber-500 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
                
                <div className="p-8 bg-white">
                  <p className="text-stone-600 leading-relaxed mb-6 font-light">
                    {guide.text}
                  </p>
                  <button className="inline-flex items-center space-x-2 text-amber-800 font-light uppercase text-sm tracking-wider group-hover:text-amber-600 transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram - Minimalist CTA */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-gradient-to-br from-pink-900 via-amber-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="space-y-10">
            <Instagram className="w-20 h-20 text-white mx-auto opacity-90" strokeWidth={1} />
            
            <h2 className="text-5xl lg:text-6xl font-light text-white leading-tight">
              Follow Our
              <span className="block mt-3 italic text-amber-300">Journey</span>
            </h2>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
              Get inspired by stunning photos and exclusive moments
            </p>

            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-12 py-5 border-2 border-white/40 backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300 group"
            >
              <span className="font-light tracking-[0.2em] uppercase text-sm text-white">
                @{hotelInfos.name}hotel
              </span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Editorial Style */}
      <footer className="relative bg-gradient-to-b from-stone-950 to-amber-950 border-t border-amber-700/20 pt-24 pb-12">
        <div className="max-w-[95rem] mx-auto px-6 lg:px-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-1 h-16 bg-gradient-to-b from-amber-500 to-transparent"></div>
                <div>
                  <div className="text-3xl font-light text-white tracking-wider">
                    {hotelInfos.name}
                  </div>
                  <div className="text-amber-400/70 text-xs tracking-[0.3em] uppercase mt-1">
                    Hotel & Resort
                  </div>
                </div>
              </div>
              <p className="text-amber-100/60 leading-relaxed font-light max-w-md">
                Experience unparalleled luxury and comfort at {hotelInfos.name} Hotel. Where every stay becomes an unforgettable memory in the heart of Dades Valley.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {[
                  { icon: Facebook, href: hotelInfos.facebook },
                  { icon: Instagram, href: hotelInfos.instagram },
                  { icon: Linkedin, href: hotelInfos.linkedin },
                  { icon: Twitter, href: hotelInfos.twitter },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className="w-12 h-12 border border-amber-700/30 flex items-center justify-center hover:border-amber-500 hover:bg-amber-900/20 transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-amber-400/70 group-hover:text-amber-300 transition-colors" strokeWidth={1} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-light text-lg mb-6 uppercase tracking-[0.2em]">Navigate</h3>
              <ul className="space-y-4">
                {['Privacy Policy', 'FAQ', 'Contact Us'].map((link, i) => (
                  <li key={i}>
                    <Link
                      href={`/${link.toLowerCase().replace(' ', '')}`}
                      className="text-amber-100/60 hover:text-amber-300 transition-colors font-light text-sm flex items-center space-x-2 group"
                    >
                      <div className="w-0 h-[1px] bg-amber-500 group-hover:w-6 transition-all duration-300"></div>
                      <span>{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-light text-lg mb-6 uppercase tracking-[0.2em]">Contact</h3>
              <ul className="space-y-5">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" strokeWidth={1} />
                  <span className="text-amber-100/60 font-light text-sm leading-relaxed">
                    {hotelInfos.location}
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaWhatsapp className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  <span className="text-amber-100/60 font-light text-sm">
                    {hotelInfos.whatsapp}
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" strokeWidth={1} />
                  <div className="text-amber-100/60 font-light text-sm">
                    {hotelInfos.phones.map(phone => (
                      <div key={phone}>{phone}</div>
                    ))}
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" strokeWidth={1} />
                  <span className="text-amber-100/60 font-light text-sm">{hotelInfos.email}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Partners */}
          <div className="flex justify-center items-center border-t border-b border-amber-700/10 py-12">
            <img src="/footer-imgs.png" className='h-16 opacity-50' alt="Partners" />
          </div>

          {/* Copyright */}
          <div className="text-center pt-12">
            <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-amber-700/30 to-transparent mb-8"></div>
            <p className="text-amber-100/40 text-sm font-light tracking-wider">
              © 2026 {hotelInfos.name} Hotel · All rights reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scroll-line {
          0%, 100% {
            opacity: 0;
            transform: scaleY(0);
          }
          50% {
            opacity: 1;
            transform: scaleY(1);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scroll-line {
          animation: scroll-line 2s ease-in-out infinite;
          transform-origin: top;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
