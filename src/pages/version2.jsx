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
  Shield,
  Heart,
  Zap,
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
    <div className="min-h-screen bg-slate-50">
      {/* Modern Minimalist Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white shadow-lg shadow-slate-900/5'
            : 'bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            {/* Minimalist Logo */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div> */}
                <img
                  src="/logo.png"
                  className="h-16 relative z-10 transform group-hover:scale-105 transition-transform duration-300"
                  alt="Logo"
                />
              </div>
            </Link>

            {/* Clean Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {headerItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group relative px-6 py-3"
                >
                  <div className="flex items-center space-x-2.5">
                    <item.icon className="w-4.5 h-4.5 text-slate-500 group-hover:text-blue-700 transition-colors duration-300" />
                    <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 tracking-wide">
                      {item.label}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>
              ))}
            </nav>

            {/* CTA Section */}
            <div className="hidden lg:flex items-center space-x-4">
              <select
                value={currency}
                onChange={handleCurrencyChange}
                className="px-5 py-3 rounded-xl bg-slate-100 border-0 text-slate-900 text-sm font-bold cursor-pointer hover:bg-slate-200 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="USD">USD</option>
                <option value="CHF">CHF</option>
              </select>
              <button className="group relative px-8 py-3 rounded-xl font-bold text-sm text-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <span className="relative z-10 flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>BOOK NOW</span>
                </span>
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-6">
              <nav className="bg-white rounded-2xl shadow-2xl p-4 space-y-2">
                {headerItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center space-x-3 px-5 py-4 rounded-xl hover:bg-slate-50 transition-all"
                  >
                    <item.icon className="w-5 h-5 text-blue-700" />
                    <span className="font-semibold text-slate-900">{item.label}</span>
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <select
                    value={currency}
                    onChange={handleCurrencyChange}
                    className="w-full px-5 py-4 rounded-xl bg-slate-100 text-slate-900 font-bold"
                  >
                    <option value="USD">USD</option>
                    <option value="CHF">CHF</option>
                  </select>
                  <button className="w-full px-5 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-bold shadow-xl">
                    RESERVE NOW
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Bold Split Hero */}
      <section className="relative h-screen flex items-center mt-28">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
                <span className="block">DISCOVER</span>
                <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 bg-clip-text text-transparent">
                  {hotelInfos.name}
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Experience unparalleled luxury where Moroccan elegance meets modern comfort in the heart of Dades Valley
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="group px-10 py-5 rounded-xl font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300">
                  <span className="flex items-center space-x-3">
                    <span>EXPLORE ROOMS</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <button className="px-10 py-5 rounded-xl font-black text-slate-900 border-3 border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
                  <span className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>CALL US</span>
                  </span>
                </button>
              </div>

              {/* Stats Bar */}
              <div className="flex items-center space-x-8 pt-8">
                {[
                  { value: '5+', label: 'Rooms' },
                  { value: '50K+', label: 'Guests' },
                  { value: '25+', label: 'Years' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-4xl font-black text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="relative h-[600px]">
              <div className="absolute inset-0 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-[350px] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      alt="Hotel"
                    />
                  </div>
                  <div className="h-[230px] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      alt="Hotel"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-[230px] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      alt="Pool"
                    />
                  </div>
                  <div className="h-[350px] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      alt="Restaurant"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Booking Card */}
      <section className="relative mt-20 z-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 p-10 border border-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: Calendar, label: 'Check In', type: 'date' },
                { icon: Calendar, label: 'Check Out', type: 'date' },
                { icon: Bed, label: 'Rooms', type: 'number', min: '1', default: '1' },
                { icon: Users, label: 'Guests', type: 'number', min: '1', default: '2' },
              ].map((field, i) => (
                <div key={i} className="space-y-3">
                  <label className="flex items-center space-x-2 text-xs font-black text-slate-700 uppercase tracking-widest">
                    <field.icon className="w-4 h-4 text-blue-700" />
                    <span>{field.label}</span>
                  </label>
                  <input
                    type={field.type}
                    min={field.min}
                    defaultValue={field.default}
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 font-semibold focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                  />
                </div>
              ))}
              <div className="flex items-end">
                <button className="w-full px-6 py-4 rounded-xl font-black text-white bg-gradient-to-r from-blue-600 to-blue-800 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
                  <span className="flex items-center justify-center space-x-2">
                    <span>SEARCH</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Card Style */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-gradient-to-br from-amber-50 to-blue-50 rounded-3xl p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white rounded-full shadow-lg">
                  <Award className="w-5 h-5 text-amber-700" />
                  <span className="text-amber-900 font-black text-xs tracking-widest uppercase">
                    Our Story
                  </span>
                </div>

                <h2 className="text-5xl font-black text-slate-900 leading-tight">
                  Unveiling the
                  <br />
                  <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                    Enchanting Beauty
                  </span>
                </h2>

                <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                  <p className="font-medium">
                    Discover the enchanting beauty of the Dades Valley at Panorama Dades Hotel, where breathtaking panoramas and a tranquil ambiance combine to create an unforgettable Moroccan getaway.
                  </p>
                  <p>
                    Step into our welcoming oasis, where rustic charm blends seamlessly with modern comforts. Our well-appointed rooms provide a cozy sanctuary, each designed to capture the essence of the surrounding landscape.
                  </p>
                  <p>
                    Indulge in a delectable culinary journey at our on-site restaurant, where local flavors and international cuisine harmoniously intertwine. Savor traditional Moroccan dishes expertly prepared with fresh, locally sourced ingredients.
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <button className="px-8 py-4 rounded-xl font-black text-white bg-gradient-to-r from-amber-600 to-amber-800 shadow-xl hover:shadow-2xl transition-all">
                    LEARN MORE
                  </button>
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-4 border-white shadow-lg"
                      ></div>
                    ))}
                    <div className="w-12 h-12 rounded-full bg-slate-800 border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-white text-xs font-black">50K+</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-blue-600 rounded-3xl rotate-3 opacity-10"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Hotel"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-black text-slate-900">25+</div>
                        <div className="text-sm font-bold text-slate-600 uppercase">Years Experience</div>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms - Horizontal Scroll */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-100 rounded-full mb-4">
                <Bed className="w-5 h-5 text-blue-700" />
                <span className="text-blue-900 font-black text-xs tracking-widest uppercase">
                  Accommodations
                </span>
              </div>
              <h2 className="text-5xl font-black text-slate-900">
                Luxurious Rooms
              </h2>
            </div>
            <Link
              href="/rooms"
              className="px-8 py-4 rounded-xl font-black text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center space-x-2"
            >
              <span>VIEW ALL</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=800',
            ].map((img, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
              >
                <img
                  src={img}
                  alt={`Room ${i + 1}`}
                  className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-1">Premium Suite</h3>
                      <div className="flex items-center space-x-2 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-white/70">From</div>
                      <div className="text-3xl font-black text-white">$299</div>
                    </div>
                  </div>
                  <button className="w-full px-6 py-4 rounded-xl font-black text-slate-900 bg-white hover:bg-amber-400 transition-all">
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-black text-white mb-4">Authentic Moroccan Rooms</h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Experience a diverse range of thoughtfully curated rooms tailored to your individual preferences and budget. Discover a blend of traditional Moroccan aesthetics and modern conveniences.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=400"
                  className="w-full h-full object-cover"
                  alt="Room detail"
                />
              </div>
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400"
                  className="w-full h-full object-cover"
                  alt="Room detail"
                />
              </div>
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=400"
                  className="w-full h-full object-cover"
                  alt="Room detail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant & Pool - Side by Side Cards */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Restaurant Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-80">
                <img
                  src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800"
                  className="w-full h-full object-cover"
                  alt="Restaurant"
                />
                <div className="absolute top-6 left-6">
                  <div className="px-5 py-2.5 bg-white rounded-full shadow-xl">
                    <div className="flex items-center space-x-2">
                      <UtensilsCrossed className="w-5 h-5 text-amber-700" />
                      <span className="font-black text-xs tracking-widest uppercase text-amber-900">
                        Restaurant
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-black text-slate-900 mb-4">
                  Fine Dining Experience
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Savor the tastes of Morocco at our culinary haven. Our talented chefs create delectable dishes that will tantalize your taste buds with traditional specialties and global cuisines.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=400',
                  ].map((img, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden h-24">
                      <img src={img} className="w-full h-full object-cover" alt={`Food ${i}`} />
                    </div>
                  ))}
                </div>
                <Link
                  href="/restaurant"
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-black text-white bg-gradient-to-r from-amber-600 to-amber-800 hover:shadow-xl transition-all"
                >
                  <span>VIEW MENU</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Pool Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-80">
                <img
                  src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  className="w-full h-full object-cover"
                  alt="Pool"
                />
                <div className="absolute top-6 left-6">
                  <div className="px-5 py-2.5 bg-white rounded-full shadow-xl">
                    <div className="flex items-center space-x-2">
                      <Waves className="w-5 h-5 text-blue-700" />
                      <span className="font-black text-xs tracking-widest uppercase text-blue-900">
                        Swimming Pool
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-black text-slate-900 mb-4">
                  Panoramic Pool View
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Immerse yourself in relaxation with our breathtaking panoramic pool. Sun-kissed waters blend with majestic Atlas Mountains creating an unforgettable vista.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=400',
                    'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=400',
                  ].map((img, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden h-24">
                      <img src={img} className="w-full h-full object-cover" alt={`Pool ${i}`} />
                    </div>
                  ))}
                </div>
                <Link
                  href="/swimming"
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-black text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:shadow-xl transition-all"
                >
                  <span>DISCOVER MORE</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Cards */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-amber-100 rounded-full mb-6">
              <Star className="w-5 h-5 text-amber-700 fill-amber-700" />
              <span className="text-amber-900 font-black text-xs tracking-widest uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-4">
              Guest Experiences
            </h2>
            <p className="text-xl text-slate-600">
              What our valued guests say about us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-8 font-medium italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-4 pt-6 border-t-2 border-slate-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-lg">
                      {testimonial.name}
                    </div>
                    <div className="flex items-center space-x-1.5 text-sm text-blue-600 font-bold">
                      <Check className="w-4 h-4" />
                      <span>Verified Guest</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Guide - Magazine Style */}
      <section className="py-32 px-6 bg-slate-900">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span className="text-white font-black text-xs tracking-widest uppercase">
                Travel Guide
              </span>
            </div>
            <h2 className="text-5xl font-black text-white mb-4">
              Explore & Discover
            </h2>
            <p className="text-xl text-slate-300">
              Your guide to the best experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((guide, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-black text-white leading-tight">
                      {guide.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {guide.text}
                  </p>
                  <button className="inline-flex items-center space-x-2 text-blue-700 font-black group-hover:text-blue-900 transition-colors">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA - Bold */}
      <section className="py-32 px-6 bg-gradient-to-br from-pink-600 via-purple-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl mb-10 shadow-2xl">
            <Instagram className="w-12 h-12 text-pink-600" />
          </div>
          <h2 className="text-6xl font-black text-white mb-6">
            FOLLOW US ON
            <br />
            INSTAGRAM
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
            Join our community for stunning photos, exclusive offers, and behind-the-scenes moments
          </p>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="inline-flex items-center space-x-4 px-12 py-6 bg-white text-pink-600 rounded-2xl font-black text-xl shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
          >
            <Instagram className="w-7 h-7" />
            <span>@{hotelInfos.name}hotel</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Footer - Modern Grid */}
      <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-xl">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-black">{hotelInfos.name}</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                Experience unparalleled luxury and comfort. Where every stay becomes an unforgettable memory.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-4">
                {['Privacy Policy', 'FAQ', 'Contact Us'].map((link, i) => (
                  <li key={i}>
                    <Link
                      href={`/${link.toLowerCase().replace(' ', '')}`}
                      className="text-slate-300 hover:text-white transition-colors flex items-center space-x-2 group text-lg"
                    >
                      <ArrowRight className="w-5 h-5 opacity-0 -ml-7 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      <span>{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-wider">Follow Us</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Facebook, href: hotelInfos.facebook },
                  { icon: Linkedin, href: hotelInfos.linkedin },
                  { icon: Twitter, href: hotelInfos.twitter },
                  { icon: Instagram, href: hotelInfos.instagram },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all shadow-xl"
                  >
                    <social.icon className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-wider">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300 text-lg">{hotelInfos.location}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaWhatsapp className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300 text-lg">{hotelInfos.whatsapp}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div className="text-slate-300 text-lg">
                    {hotelInfos.phones.map((phone) => (
                      <div key={phone}>{phone}</div>
                    ))}
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300 text-lg">{hotelInfos.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center border-t border-b border-slate-700 py-10">
            <img src="/footer-imgs.png" className="h-20 opacity-60" alt="Footer" />
          </div>

          <div className="text-center pt-10">
            <p className="text-slate-400 text-lg font-medium">
              © 2026 {hotelInfos.name} Hotel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
