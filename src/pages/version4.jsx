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
  Clock,
  Globe,
  Heart,
  Eye,
  Palette,
  Sunrise,
  Moon,
  Coffee,
  Wind,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import { headerItems, hotelInfos, blogs, testimonials } from '@/utils/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';

export default function HotelHome() {
  const [currency, setCurrency] = useState('USD');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const stored = localStorage.getItem('chf');
    if (stored === '1') setCurrency('CHF');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Section tracking
      const sections = ['home', 'about', 'rooms', 'dining', 'wellness', 'experiences'];
      const current = sections.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCurrencyChange = (e) => {
    const value = e.target.value;
    setCurrency(value);
    localStorage.setItem('chf', value === 'CHF' ? '1' : '0');
  };

  return (
    <div className="min-h-screen bg-stone-50 relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-radial from-amber-200/60 via-amber-100/30 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-radial from-stone-300/50 via-stone-200/20 to-transparent rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-radial from-amber-300/40 via-transparent to-transparent rounded-full blur-3xl animate-float-slow" />
      </div>

      {/* Minimal Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-stone-50/90 backdrop-blur-xl border-b border-stone-200/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-24">
            {/* Logo with elegant typography */}
            <Link href="/" className={`group flex items-center space-x-4 ${!scrolled && "-translate-y-100"} duration-500`}>
              <div className="h-16 relative">
                <img 
                  src="/logo.png" 
                  className="relative z-10 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" 
                  alt="Logo" 
                />
              </div>
            </Link>

            {/* Center Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-1">
              {headerItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="relative px-6 py-3 group"
                >
                  <span className={`text-sm tracking-wider uppercase font-medium ${scrolled ? "text-stone-700 group-hover:text-amber-900" : "text-white group-hover:text-amber-500"} transition-colors duration-300`}>
                    {item.label}
                  </span>
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-amber-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <select
                value={currency}
                onChange={handleCurrencyChange}
                className={`px-4 py-2 bg-transparent border border-stone-300 ${scrolled ? "text-stone-900" : "text-white"} text-sm tracking-wider uppercase font-medium rounded cursor-pointer hover:border-amber-900 transition-all focus:outline-none focus:border-amber-900`}
              >
                <option value="USD">USD</option>
                <option value="CHF">CHF</option>
              </select>
              <button className="group relative px-8 py-3 overflow-hidden rounded font-medium text-sm tracking-wider uppercase text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-800" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-900 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10">BOOK NOW</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 rounded hover:bg-stone-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-stone-900" />
              ) : (
                <Menu className="w-6 h-6 text-stone-900" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-6 animate-slide-down">
              <nav className="flex flex-col space-y-1 bg-white rounded-xl border border-stone-200 p-4 shadow-2xl">
                {headerItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-4 rounded-lg hover:bg-stone-50 transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-amber-900" />
                      <span className="text-stone-900 font-medium">{item.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-amber-900 transition-colors" />
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-stone-200 space-y-3">
                  <select
                    value={currency}
                    onChange={handleCurrencyChange}
                    className="w-full px-4 py-3 border border-stone-300 text-stone-900 rounded-lg"
                  >
                    <option value="USD">USD</option>
                    <option value="CHF">CHF</option>
                  </select>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-lg font-medium shadow-lg">
                    BOOK NOW
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Dramatic Full Height */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-6">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-110"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920)',
              transform: `translateY(${scrolled ? '20px' : '0'})`,
              transition: 'transform 0.6s ease-out',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <div className="space-y-12">
            {/* Main Heading */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight text-white leading-none">
                {hotelInfos.name}
              </h1>
              <div className="flex items-center justify-center space-x-4 text-amber-200">
                <div className="h-px w-20 bg-amber-400/50" />
                <p className="text-xl md:text-2xl tracking-[0.4em] uppercase font-light">
                  Dades Valley Retreat
                </p>
                <div className="h-px w-20 bg-amber-400/50" />
              </div>
            </div>

            {/* Tagline */}
            <p
              className="text-xl md:text-2xl text-stone-100 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              Where the Atlas Mountains meet timeless hospitality,
              <br />
              creating moments that echo through eternity
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <button className="group relative px-10 py-5 overflow-hidden rounded font-medium tracking-wider uppercase">
                <div className="absolute inset-0 bg-white" />
                <div className="absolute inset-0 bg-amber-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 text-stone-900 flex items-center space-x-3">
                  <span>Discover More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              <button className="group px-10 py-5 rounded font-medium tracking-wider uppercase border-2 border-white text-white hover:bg-white hover:text-stone-900 transition-all duration-300">
                View Availability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Panel - Floating */}
      <section className="relative z-40 max-w-6xl mx-auto px-8 lg:px-16">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 lg:p-10 shadow-2xl border border-stone-200/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calendar, label: 'Arrival', type: 'date', placeholder: 'Select date' },
              { icon: Calendar, label: 'Departure', type: 'date', placeholder: 'Select date' },
              { icon: Users, label: 'Guests', type: 'number', min: '1', default: '2', placeholder: '2 guests' },
              { icon: Bed, label: 'Rooms', type: 'number', min: '1', default: '1', placeholder: '1 room' },
            ].map((field, i) => (
              <div key={i} className="space-y-3 group">
                <label className="flex items-center space-x-2 text-xs font-semibold text-stone-600 uppercase tracking-wider">
                  <field.icon className="w-4 h-4 text-amber-900" />
                  <span>{field.label}</span>
                </label>
                <input
                  type={field.type}
                  min={field.min}
                  defaultValue={field.default}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-4 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:border-amber-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-900/10 transition-all"
                />
              </div>
            ))}
          </div>
          <button className="w-full mt-8 group relative px-6 py-5 rounded-lg font-semibold tracking-wider uppercase text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-800" />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Check Availability</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </div>
      </section>

      {/* About Section - Editorial Layout */}
      <section id="about" className="py-32 px-8 lg:px-16 relative">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* Left Column - Text */}
            <div className="lg:col-span-5 space-y-10">
              {/* Section Label */}
              <div className="space-y-4">
                <div className="text-xs tracking-[0.4em] uppercase text-amber-900 font-semibold">
                  About Us
                </div>
                <div className="w-16 h-px bg-amber-900" />
              </div>

              {/* Heading */}
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 leading-tight">
                A Valley
                <br />
                Embraced by
                <br />
                <span className="italic text-amber-900">Mountains</span>
              </h2>

              {/* Body Text */}
              <div className="space-y-6 text-stone-600 text-lg leading-loose font-light">
                <p className="first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-amber-900 first-letter:leading-none first-letter:mt-1">
                  Nestled in the heart of Morocco's majestic Dades Valley, {hotelInfos.name} stands as a testament to the timeless beauty of the Atlas Mountains. Our hotel is more than a destination—it is an experience woven from centuries of Berber hospitality and contemporary comfort.
                </p>
                <p>
                  Each sunrise paints the rust-colored cliffs in hues of gold and crimson, while the valley floor awakens with the gentle whisper of ancient traditions. Here, modern luxury meets authentic Moroccan charm in perfect harmony.
                </p>
                <p>
                  Our philosophy is simple: to create spaces where travelers can disconnect from the ordinary and reconnect with nature, culture, and themselves. Every corner of our hotel tells a story, every meal celebrates local flavors, and every moment invites you to slow down and truly experience Morocco.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: '25+', label: 'Years', sublabel: 'Of Excellence' },
                  { number: '50K', label: 'Guests', sublabel: 'Welcomed' },
                  { number: '5⭐', label: 'Rating', sublabel: 'Average' },
                ].map((stat, i) => (
                  <div key={i} className="text-center group cursor-default">
                    <div className="text-4xl font-serif font-bold text-amber-900 mb-2 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-stone-900 uppercase tracking-wider">
                      {stat.label}
                    </div>
                    <div className="text-xs text-stone-500 mt-1">
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>

              {/* Awards */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-stone-200">
                {[
                  { icon: Award, text: 'Best Valley Hotel 2025' },
                  { icon: Heart, text: 'Guest Favorite' },
                ].map((award, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm text-stone-600">
                    <award.icon className="w-4 h-4 text-amber-900" />
                    <span>{award.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="lg:col-span-7 space-y-8">
              {/* Large Featured Image */}
              <div className="relative group overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Hotel View"
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
                </div>
              </div>

              {/* Two Column Images */}
              <div className="grid grid-cols-2 gap-8">
                <div className="relative group overflow-hidden rounded-2xl">
                  <div className="aspect-square relative">
                    <img
                      src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Interior"
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl">
                  <div className="aspect-square relative">
                    <img
                      src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Detail"
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section - Asymmetric Gallery */}
      <section id="rooms" className="py-32 px-8 lg:px-16 relative bg-stone-100/50">
        <div className="max-w-[1600px] mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="space-y-4 mb-8">
              <div className="text-xs tracking-[0.4em] uppercase text-amber-900 font-semibold">
                Accommodations
              </div>
              <div className="w-16 h-px bg-amber-900" />
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
              Rooms & Suites
              <br />
              Designed for
              <br />
              <span className="italic text-amber-900">Serenity</span>
            </h2>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              Each room is a sanctuary, carefully curated to blend traditional Moroccan craftsmanship with contemporary comfort. Wake up to panoramic valley views and fall asleep under a blanket of stars.
            </p>
          </div>

          {/* Rooms Grid - Masonry Style */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Large Feature Room */}
            <div className="lg:col-span-7 group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
                <div className="aspect-[16/11] relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Premium Suite"
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Room Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-serif font-bold mb-2">Valley View Suite</h3>
                        <p className="text-stone-200 text-sm tracking-wider uppercase">Premium Collection</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-stone-300">From</div>
                        <div className="text-3xl font-serif font-bold text-amber-400">$299</div>
                        <div className="text-sm text-stone-300">per night</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span className="flex items-center space-x-2">
                        <Bed className="w-4 h-4" />
                        <span>King Bed</span>
                      </span>
                      <span className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>2-3 Guests</span>
                      </span>
                      <span className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>Valley View</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Two Stacked Rooms */}
            <div className="lg:col-span-5 space-y-8">
              {[
                {
                  image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
                  title: 'Deluxe Room',
                  category: 'Comfort Collection',
                  price: '$199',
                },
                {
                  image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
                  title: 'Traditional Room',
                  category: 'Classic Collection',
                  price: '$149',
                },
              ].map((room, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={room.image}
                        alt={room.title}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-end justify-between">
                          <div>
                            <h3 className="text-xl font-serif font-bold mb-1">{room.title}</h3>
                            <p className="text-stone-200 text-xs tracking-wider uppercase">{room.category}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-stone-300">From</div>
                            <div className="text-2xl font-serif font-bold text-amber-400">{room.price}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All Link */}
          <div className="mt-16 text-center">
            <Link
              href="/rooms"
              className="inline-flex items-center space-x-3 group"
            >
              <span className="text-lg tracking-wider uppercase font-medium text-stone-900 group-hover:text-amber-900 transition-colors">
                Explore All Rooms
              </span>
              <ArrowRight className="w-5 h-5 text-amber-900 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dining Section - Split Screen */}
      <section id="dining" className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Image */}
          <div className="relative h-[600px] lg:h-auto lg:min-h-screen">
            <img
              src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Restaurant"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-stone-900/30 lg:to-stone-900/60" />
          </div>

          {/* Right - Content */}
          <div className="bg-stone-900 text-white p-12 lg:p-20 flex items-center">
            <div className="max-w-xl">
              <div className="space-y-4 mb-8">
                <div className="text-xs tracking-[0.4em] uppercase text-amber-400 font-semibold">
                  Culinary Experience
                </div>
                <div className="w-16 h-px bg-amber-400" />
              </div>

              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                The
                <br />
                <span className="italic text-amber-400">Restaurant</span>
              </h2>

              <div className="space-y-6 text-stone-300 text-lg leading-relaxed font-light mb-10">
                <p>
                  Our restaurant celebrates the rich tapestry of Moroccan cuisine, where every dish tells a story of tradition, passion, and local bounty. From aromatic tagines to fresh valley produce, each meal is a journey through flavor.
                </p>
                <p>
                  Dine under the stars on our terrace, or enjoy intimate meals in our atmospheric dining room. Our chefs blend time-honored recipes with contemporary techniques, creating experiences that delight both palate and soul.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { icon: Coffee, text: 'Local Ingredients' },
                  { icon: Sunrise, text: 'Farm to Table' },
                  { icon: Moon, text: 'Sunset Dining' },
                  { icon: UtensilsCrossed, text: 'Traditional Flavors' },
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <feature.icon className="w-5 h-5 text-amber-400" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Gallery Preview */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=400',
                ].map((img, i) => (
                  <div key={i} className="relative group overflow-hidden rounded-lg aspect-square">
                    <img
                      src={img}
                      alt={`Dish ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <Link
                href="/restaurant"
                className="inline-flex items-center space-x-3 px-8 py-4 border-2 border-amber-400 rounded font-medium tracking-wider uppercase hover:bg-amber-400 hover:text-stone-900 transition-all group"
              >
                <span>View Menu</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pool & Wellness - Horizontal Scroll */}
      <section id="wellness" className="py-32 px-8 lg:px-16 relative overflow-hidden bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="text-xs tracking-[0.4em] uppercase text-amber-900 font-semibold">
                  Wellness & Relaxation
                </div>
                <div className="w-16 h-px bg-amber-900" />
              </div>

              <h2 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 leading-tight">
                Panoramic
                <br />
                <span className="italic text-amber-900">Pool Vista</span>
              </h2>

              <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
                <p>
                  Our infinity pool seems to merge with the horizon, creating a seamless connection between water, sky, and mountains. It's not just a place to swim—it's a meditation on the majesty of nature.
                </p>
                <p>
                  Whether you're taking a refreshing morning dip as the sun rises over the Atlas peaks, or lounging poolside with a cocktail at sunset, the panoramic views create an ever-changing canvas of natural beauty.
                </p>
              </div>

              {/* Pool Features */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Waves, title: 'Infinity Edge', desc: 'Seamless views' },
                  { icon: Sunrise, title: 'All Day Sun', desc: 'Perfect climate' },
                  { icon: Wind, title: 'Mountain Breeze', desc: 'Natural cooling' },
                  { icon: Star, title: 'Starlit Evenings', desc: 'Night swimming' },
                ].map((feature, i) => (
                  <div key={i} className="group">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                        <feature.icon className="w-6 h-6 text-amber-900" />
                      </div>
                      <div>
                        <div className="font-semibold text-stone-900 mb-1">{feature.title}</div>
                        <div className="text-sm text-stone-600">{feature.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/swimming"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded font-medium tracking-wider uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all group"
              >
                <span>Discover More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Images Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="relative group overflow-hidden rounded-2xl">
                    <div className="aspect-[3/4] relative">
                      <img
                        src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Pool"
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl">
                    <div className="aspect-square relative">
                      <img
                        src="https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Pool Detail"
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-6 pt-16">
                  <div className="relative group overflow-hidden rounded-2xl">
                    <div className="aspect-square relative">
                      <img
                        src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Pool Lounge"
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl">
                    <div className="aspect-[3/4] relative">
                      <img
                        src="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Pool View"
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Carousel Style */}
      <section className="py-32 px-8 lg:px-16 relative bg-stone-900 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-6 py-2 border border-amber-400/30 rounded-full mb-8">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm tracking-[0.3em] uppercase text-amber-400 font-light">
                Testimonials
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Stories from
              <br />
              <span className="italic text-amber-400">Our Guests</span>
            </h2>
            <p className="text-xl text-stone-400 max-w-2xl mx-auto font-light">
              Real experiences from travelers who made memories in our valley
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-stone-200 leading-relaxed mb-8 font-light italic text-lg">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">
                      {testimonial.name}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-stone-400">
                      <Check className="w-3 h-3 text-amber-400" />
                      <span>Verified Guest</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences - Travel Guide */}
      <section id="experiences" className="py-32 px-8 lg:px-16 relative">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-20">
            <div className="space-y-4 mb-8">
              <div className="text-xs tracking-[0.4em] uppercase text-amber-900 font-semibold">
                Local Experiences
              </div>
              <div className="w-16 h-px bg-amber-900 mx-auto" />
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-6">
              Discover the
              <br />
              <span className="italic text-amber-900">Valley</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light">
              Curated experiences that reveal the magic of Dades Valley
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((guide, index) => (
              <article
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <div className="aspect-[4/5] relative">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs tracking-wider uppercase font-semibold text-stone-900">
                        Experience
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed font-light">
                    {guide.text}
                  </p>
                  <div className="flex items-center space-x-2 text-amber-900 font-medium group-hover:space-x-3 transition-all">
                    <span className="text-sm tracking-wider uppercase">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA - Full Width */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-amber-600" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-white">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-10 shadow-2xl">
            <Instagram className="w-12 h-12" />
          </div>

          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Follow Our Journey
          </h2>

          <p className="text-2xl mb-12 opacity-90 font-light">
            Daily moments of beauty from the valley
          </p>

          <Link
            href={hotelInfos.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 px-12 py-6 bg-white text-stone-900 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all group"
          >
            <Instagram className="w-6 h-6" />
            <span>@{hotelInfos.name}hotel</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer - Refined */}
      <footer className="relative bg-stone-900 text-white pt-24 pb-12">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Brand */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <div className="text-3xl font-serif font-bold mb-2">
                  {hotelInfos.name}
                </div>
                <div className="text-sm tracking-[0.3em] uppercase text-stone-500">
                  Dades Valley
                </div>
              </div>
              <p className="text-stone-400 leading-relaxed font-light">
                A sanctuary in the Atlas Mountains, where tradition meets contemporary luxury.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm tracking-[0.3em] uppercase font-semibold mb-6 text-amber-400">
                Navigate
              </h3>
              <ul className="space-y-3">
                {['Rooms', 'Dining', 'Experiences', 'Contact'].map((link, i) => (
                  <li key={i}>
                    <Link
                      href={`/${link.toLowerCase()}`}
                      className="text-stone-400 hover:text-white transition-colors inline-flex items-center space-x-2 group"
                    >
                      <span className="w-0 h-px bg-amber-400 group-hover:w-4 transition-all" />
                      <span>{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm tracking-[0.3em] uppercase font-semibold mb-6 text-amber-400">
                Contact
              </h3>
              <ul className="space-y-4 text-stone-400 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{hotelInfos.location}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaWhatsapp className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{hotelInfos.whatsapp}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{hotelInfos.email}</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm tracking-[0.3em] uppercase font-semibold mb-6 text-amber-400">
                Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Facebook, href: hotelInfos.facebook },
                  { icon: Instagram, href: hotelInfos.instagram },
                  { icon: Twitter, href: hotelInfos.twitter },
                  { icon: Linkedin, href: hotelInfos.linkedin },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Awards Strip */}
          <div className="flex justify-center items-center border-t border-b border-white/10 py-8 mb-8">
            <img src="/footer-imgs.png" className="h-20 opacity-60" alt="Awards" />
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-stone-500">
            <p>© 2026 {hotelInfos.name} Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(20px); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 30s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
