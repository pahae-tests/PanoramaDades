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
  Search,
  Shield,
  Clock,
  Wifi,
  Coffee,
  Car,
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
      setScrolled(window.scrollY > 80);
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Floating Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white shadow-lg shadow-slate-900/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Minimalist Logo */}
            <Link href="/" className="relative group">
              <img 
                src="/logo.png" 
                className="h-16 transition-all duration-300 group-hover:scale-110" 
                alt="Logo" 
              />
            </Link>

            {/* Center Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-2 bg-white/90 backdrop-blur-xl rounded-full px-3 py-2 shadow-lg shadow-slate-900/5 border border-slate-200/50">
              {headerItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="px-6 py-2.5 rounded-full text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <select
                value={currency}
                onChange={handleCurrencyChange}
                className="px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200/50 text-slate-900 text-sm font-medium shadow-md hover:shadow-lg transition-all"
              >
                <option value="USD">USD</option>
                <option value="CHF">CHF</option>
              </select>
              <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Reserve</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-6 pt-2">
              <nav className="bg-white rounded-2xl shadow-xl p-4 space-y-2">
                {headerItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-all"
                  >
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-900 font-medium">{item.label}</span>
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <select
                    value={currency}
                    onChange={handleCurrencyChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium"
                  >
                    <option value="USD">USD</option>
                    <option value="CHF">CHF</option>
                  </select>
                  <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg">
                    Book Now
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Split Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 lg:pr-12">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                {hotelInfos.name}
                <span className="block text-blue-600 mt-2">Hotel</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Discover the perfect blend of elegance, comfort, and world-class hospitality in the heart of paradise
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center space-x-2">
                  <span>Explore Rooms</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-full font-semibold hover:border-slate-400 transition-all flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Contact</span>
                </button>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { value: '5+', label: 'Rooms' },
                  { value: '50K+', label: 'Guests' },
                  { value: '25+', label: 'Years' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Hotel View"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Room"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Interior"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Pool"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Search Bar */}
      <section className="relative z-20 -mt-10 mb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 p-8 border border-slate-200/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: Calendar, label: 'Check In', type: 'date' },
                { icon: Calendar, label: 'Check Out', type: 'date' },
                { icon: Bed, label: 'Rooms', type: 'number', min: '1', default: '1' },
                { icon: Users, label: 'Guests', type: 'number', min: '1', default: '2' },
              ].map((field, i) => (
                <div key={i} className="space-y-2">
                  <label className="flex items-center space-x-2 text-xs font-bold text-slate-700 uppercase">
                    <field.icon className="w-4 h-4 text-blue-600" />
                    <span>{field.label}</span>
                  </label>
                  <input
                    type={field.type}
                    min={field.min}
                    defaultValue={field.default}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              ))}
              <div className="flex items-end">
                <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Card Style */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-5 py-2 bg-amber-50 rounded-full mb-4">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-amber-900 font-bold text-sm">About Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Unveiling the Enchanting Beauty
              <br />
              <span className="text-amber-600">of Dades Valley</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/5 overflow-hidden border border-slate-200/50">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Discover the enchanting beauty of the Dades Valley at Panorama Dades Hotel, where breathtaking panoramas and a tranquil ambiance combine to create an unforgettable Moroccan getaway. Nestled amidst the awe-inspiring Atlas Mountains, our hotel offers a truly immersive experience amidst nature's splendor.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Step into our welcoming oasis, where rustic charm blends seamlessly with modern comforts. Our well-appointed rooms provide a cozy sanctuary, each designed to capture the essence of the surrounding landscape.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Indulge in a delectable culinary journey at our on-site restaurant, where local flavors and international cuisine harmoniously intertwine.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-8">
                  {[
                    { icon: Bed, value: '5+', label: 'Rooms' },
                    { icon: Users, value: '50K+', label: 'Guests' },
                    { icon: Award, value: '25+', label: 'Years' },
                  ].map((item, i) => (
                    <div key={i} className="text-center p-4 bg-slate-50 rounded-2xl">
                      <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                      <div className="text-xs text-slate-600 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-full min-h-[500px]">
                <img
                  src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Hotel"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section - Alternating Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-5 py-2 bg-white rounded-full mb-4 shadow-md">
              <Bed className="w-4 h-4 text-blue-600" />
              <span className="text-slate-900 font-bold text-sm">Accommodations</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Authentic Rooms
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Room"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-slate-900">
                Luxurious Rooms & Suites
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Experience a diverse range of thoughtfully curated rooms at Panorama Dades Hotel, tailored to cater to your individual preferences and budget. Our accommodations encompass a selection of cozy and inviting rooms, meticulously designed to provide a distinctive and genuine experience.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=400',
                ].map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={img}
                      alt={`Room ${i + 1}`}
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <Link
                href="/rooms"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-xl transition-all"
              >
                <span>Explore All Rooms</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant & Pool - Two Column Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Restaurant Card */}
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/5 overflow-hidden border border-slate-200/50">
              <div className="relative h-80">
                <img
                  src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Restaurant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-3">
                    <UtensilsCrossed className="w-4 h-4 text-white" />
                    <span className="text-white font-bold text-sm">Fine Dining</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">The Restaurant</h3>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-slate-600 leading-relaxed">
                  Savor the tastes of Morocco at The Restaurant, a culinary haven nestled within Panorama Dades Hotel. With a menu inspired by local flavors and international influences, our talented chefs create delectable dishes that will tantalize your taste buds.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=400',
                  ].map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden shadow-md">
                      <img src={img} alt={`Food ${i + 1}`} className="w-full h-24 object-cover" />
                    </div>
                  ))}
                </div>
                <Link
                  href="/restaurant"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold transition-all"
                >
                  <span>View Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Pool Card */}
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/5 overflow-hidden border border-slate-200/50">
              <div className="relative h-80">
                <img
                  src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pool"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-3">
                    <Waves className="w-4 h-4 text-white" />
                    <span className="text-white font-bold text-sm">Relaxation</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Panoramic Pool</h3>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-slate-600 leading-relaxed">
                  Immerse yourself in the epitome of relaxation with our breathtaking panoramic swimming pool view in the heart of Dades Valley. As the sun-kissed waters blend seamlessly with the majestic Atlas Mountains and lush greenery, you'll find yourself in a haven of serenity.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=400',
                  ].map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden shadow-md">
                      <img src={img} alt={`Pool ${i + 1}`} className="w-full h-24 object-cover" />
                    </div>
                  ))}
                </div>
                <Link
                  href="/swimming"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Masonry Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-5 py-2 bg-white rounded-full mb-4 shadow-md">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-slate-900 font-bold text-sm">Testimonials</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-slate-600">
              Read about the unforgettable experiences of our valued guests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200/50"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500 flex items-center space-x-1">
                      <Check className="w-3 h-3 text-blue-600" />
                      <span>Verified Guest</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Guide - Horizontal Scroll */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 px-5 py-2 bg-blue-50 rounded-full mb-4">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-blue-900 font-bold text-sm">Travel Guide</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Guide & Travel Plans
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((guide, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-200/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {guide.text}
                  </p>
                  <div className="inline-flex items-center space-x-2 text-blue-600 font-semibold group-hover:space-x-3 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA - Full Width */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-500 via-purple-500 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl mb-6 shadow-2xl">
            <Instagram className="w-10 h-10 text-pink-600" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Follow Us on Instagram
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join our community and get inspired by stunning photos, exclusive offers, and behind-the-scenes moments
          </p>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-pink-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
          >
            <Instagram className="w-6 h-6" />
            <span>@{hotelInfos.name}hotel</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-slate-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Crown className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold text-white">{hotelInfos.name}</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Experience unparalleled luxury and comfort at {hotelInfos.name} Hotel. Where every stay becomes an unforgettable memory.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Privacy Policy', 'FAQ', 'Contact Us'].map((link, i) => (
                  <li key={i}>
                    <Link href={`/${link.toLowerCase().replace(' ', '')}`} className="text-slate-400 hover:text-blue-400 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Social Media</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Facebook, href: hotelInfos.facebook },
                  { icon: Linkedin, href: hotelInfos.linkedin },
                  { icon: Twitter, href: hotelInfos.twitter },
                  { icon: Instagram, href: hotelInfos.instagram },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-400 text-sm">{hotelInfos.location}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaWhatsapp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-400 text-sm">{hotelInfos.whatsapp}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div className="text-slate-400 text-sm">
                    {hotelInfos.phones.map(phone => (
                      <div key={phone}>{phone}</div>
                    ))}
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-400 text-sm">{hotelInfos.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center border-t border-b border-slate-800 py-8 mb-8">
            <img src="/footer-imgs.png" className="h-16 opacity-60" alt="Footer" />
          </div>

          <div className="text-center">
            <p className="text-slate-500 text-sm">
              © 2026 {hotelInfos.name} Hotel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
