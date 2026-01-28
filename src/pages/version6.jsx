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
  ChevronDown,
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
  const heroRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem('chf');
    if (stored === '1') {
      setCurrency('CHF');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    <div className="min-h-screen bg-stone-50 overflow-x-hidden relative">
      {/* Elegant Brown Background Pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-900/30 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-stone-800/20 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Premium Header with Brown Theme */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-stone-900/95 backdrop-blur-xl shadow-2xl shadow-stone-900/20'
            : 'bg-gradient-to-b from-stone-900/90 to-stone-900/70 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Luxury Logo */}
            <Link href="/" className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-600/20 rounded-full blur-xl group-hover:bg-amber-600/30 transition-all"></div>
                <img
                  src="/logo.png"
                  className="h-16 relative z-10 transition-transform duration-500 group-hover:scale-110"
                  alt="Logo"
                />
              </div>
            </Link>

            {/* Elegant Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {headerItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group relative px-6 py-3 rounded-full transition-all duration-300"
                >
                  <div className="flex items-center space-x-2.5">
                    <item.icon
                      className="w-4 h-4 text-amber-400/80 group-hover:text-amber-300 transition-colors"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm font-medium text-stone-100 group-hover:text-white transition-colors tracking-wide">
                      {item.label}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-700/0 via-amber-700/10 to-amber-700/0 opacity-0 group-hover:opacity-100 rounded-full transition-opacity"></div>
                </Link>
              ))}
            </nav>

            {/* Premium Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <select
                value={currency}
                onChange={handleCurrencyChange}
                className="px-5 py-3 rounded-full bg-stone-800/60 border border-amber-900/30 text-stone-100 text-sm font-medium cursor-pointer hover:bg-stone-800 hover:border-amber-700/50 transition-all focus:outline-none focus:ring-2 focus:ring-amber-600/40 backdrop-blur-sm"
              >
                <option value="USD">USD</option>
                <option value="CHF">CHF</option>
              </select>
              <button className="group relative px-8 py-3 rounded-full font-semibold text-sm text-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 animate-gradient"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center space-x-2.5">
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 rounded-full bg-stone-800/60 hover:bg-stone-800 border border-amber-900/30 transition-all"
            >
              {mobileMenuOpen ? (
                <X className="text-stone-100 w-5 h-5" />
              ) : (
                <Menu className="text-stone-100 w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-6 animate-fade-in">
              <nav className="flex flex-col space-y-2 bg-stone-800/90 backdrop-blur-xl rounded-2xl border border-amber-900/30 p-3 shadow-2xl">
                {headerItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center space-x-3 px-5 py-3.5 rounded-xl hover:bg-stone-700/50 transition-all"
                  >
                    <item.icon className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-100 text-sm font-medium">{item.label}</span>
                  </Link>
                ))}
                <div className="pt-3 mt-2 border-t border-stone-700/50 space-y-3">
                  <select
                    value={currency}
                    onChange={handleCurrencyChange}
                    className="w-full px-5 py-3 rounded-xl bg-stone-700/50 border border-amber-900/30 text-stone-100 text-sm font-medium"
                  >
                    <option value="USD">USD</option>
                    <option value="CHF">CHF</option>
                  </select>
                  <button className="w-full px-5 py-3 bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-xl font-semibold text-sm shadow-lg">
                    Book Now
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Cinematic Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/85 via-stone-800/75 to-amber-900/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center py-32">
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
                <span className="block mb-4 text-stone-100 animate-slide-up">EXPERIENCE</span>
                <span
                  className="block bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent animate-slide-up"
                  style={{ animationDelay: '0.2s' }}
                >
                  {hotelInfos.name}
                </span>
              </h1>
            </div>

            <p
              className="text-xl md:text-2xl text-stone-200 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              Discover the perfect blend of elegance, comfort, and world-class hospitality in the heart of paradise
            </p>

            <div
              className="flex flex-wrap items-center justify-center gap-5 animate-slide-up"
              style={{ animationDelay: '0.6s' }}
            >
              <button className="group px-10 py-5 rounded-full font-bold text-lg text-stone-900 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 hover:scale-105">
                <span className="flex items-center space-x-3">
                  <span>Explore Rooms</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
              <button className="group px-10 py-5 rounded-full font-bold text-lg text-stone-100 border-2 border-stone-400/50 bg-stone-900/40 backdrop-blur-md hover:bg-stone-800/60 hover:border-amber-400/70 transition-all duration-500">
                <span className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>Contact Us</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-amber-400" />
        </div>
      </section>

      {/* Premium Search Widget */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 -mt-24 mb-24">
        <div className="bg-gradient-to-br from-stone-800 via-stone-900 to-stone-800 rounded-3xl p-10 border border-amber-900/30 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, label: 'Check In', type: 'date' },
              { icon: Calendar, label: 'Check Out', type: 'date' },
              { icon: Bed, label: 'Rooms', type: 'number', min: '1', default: '1' },
              { icon: Users, label: 'Guests', type: 'number', min: '1', default: '2' },
            ].map((field, i) => (
              <div key={i} className="space-y-4">
                <label className="flex items-center space-x-2.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
                  <field.icon className="w-5 h-5" strokeWidth={1.5} />
                  <span>{field.label}</span>
                </label>
                <input
                  type={field.type}
                  min={field.min}
                  defaultValue={field.default}
                  className="w-full px-5 py-4 bg-stone-700/50 border border-stone-600/50 rounded-xl text-stone-100 placeholder-stone-400 focus:border-amber-600 focus:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-600/30 transition-all"
                />
              </div>
            ))}
          </div>
          <button className="w-full mt-10 group px-8 py-5 rounded-xl font-bold text-lg text-stone-900 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <span className="flex items-center justify-center space-x-3">
              <span>Search Available Rooms</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </section>

      {/* Reimagined About Section */}
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            {/* Content Side */}
            <div className="lg:col-span-3 space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-gradient-to-r from-amber-100 to-amber-50 rounded-full border border-amber-300/60">
                  <Award className="w-5 h-5 text-amber-800" strokeWidth={1.5} />
                  <span className="text-amber-900 font-bold text-sm tracking-widest uppercase">
                    About {hotelInfos.name}
                  </span>
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight">
                  {hotelInfos.name} Hotel:
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900">
                    Unveiling the Enchanting Beauty of Dades Valley
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
                <p>
                  Discover the enchanting beauty of the Dades Valley at Panorama Dades Hotel, where breathtaking
                  panoramas and a tranquil ambiance combine to create an unforgettable Moroccan getaway. Nestled amidst
                  the awe-inspiring Atlas Mountains, our hotel offers a truly immersive experience amidst nature's
                  splendor.
                </p>
                <p>
                  Step into our welcoming oasis, where rustic charm blends seamlessly with modern comforts. Our
                  well-appointed rooms provide a cozy sanctuary, each designed to capture the essence of the surrounding
                  landscape. Wake up to the soothing sounds of nature and be greeted by sweeping views of the Dades
                  Valley from your private balcony.
                </p>
                <p>
                  Indulge in a delectable culinary journey at our on-site restaurant, where local flavors and
                  international cuisine harmoniously intertwine. Savor traditional Moroccan dishes expertly prepared with
                  fresh, locally sourced ingredients. As the sun sets over the valley, unwind with a refreshing drink at
                  our bar, taking in the panoramic vistas that stretch as far as the eye can see.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: '5+', label: 'Rooms', icon: Bed },
                  { number: '50K+', label: 'Happy Guests', icon: Users },
                  { number: '25+', label: 'Years Experience', icon: Award },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group text-center p-8 bg-gradient-to-br from-white to-stone-50 rounded-2xl border border-stone-200 shadow-lg hover:shadow-2xl hover:border-amber-300 transition-all duration-500"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 mb-4 group-hover:scale-110 transition-transform">
                      <stat.icon className="w-8 h-8 text-amber-800" strokeWidth={1.5} />
                    </div>
                    <div className="text-4xl font-bold text-stone-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-stone-600 font-semibold uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-2 relative group">
              <div className="absolute -inset-6 bg-gradient-to-br from-amber-200 via-amber-100 to-stone-200 rounded-[3rem] opacity-30 blur-3xl group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={`Hotel ${hotelInfos.name}`}
                  className="w-full h-[700px] object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Showcase Section */}
      <section
        className="py-24 px-6 lg:px-8 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/95 via-stone-800/90 to-amber-900/85"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-amber-900/40 backdrop-blur-md rounded-full border border-amber-600/40 mb-8">
              <Bed className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
              <span className="text-amber-200 font-bold text-sm tracking-widest uppercase">Accommodations</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Luxurious Rooms & Suites</h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Experience comfort and elegance in our carefully designed rooms
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
              <h3 className="text-4xl md:text-5xl font-bold text-white">Authentic Rooms</h3>
              <p className="text-lg text-stone-300 leading-relaxed">
                Experience a diverse range of thoughtfully curated rooms at Panorama Dades Hotel, tailored to cater to
                your individual preferences and budget. Our accommodations encompass a selection of cozy and inviting
                rooms, meticulously designed to provide a distinctive and genuine experience. Discover a blend of
                traditional Moroccan aesthetics and modern conveniences, with a multitude of options to suit solo
                travelers, couples, and groups alike.
              </p>

              {/* Gallery Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=400',
                ].map((img, i) => (
                  <div
                    key={i}
                    className="relative group/img overflow-hidden rounded-2xl border-2 border-amber-600/30 shadow-xl hover:shadow-2xl hover:border-amber-400/60 transition-all duration-500"
                  >
                    <img
                      src={img}
                      alt={`Room ${i + 1}`}
                      className="w-full h-36 object-cover transform group-hover/img:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>

              <Link
                href="/rooms"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full font-bold text-lg text-white shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 hover:scale-105 group"
              >
                <span>Explore All Rooms</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            {/* Featured Image */}
            <div className="lg:col-span-3 relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-gradient-to-br from-amber-500/30 to-amber-700/30 rounded-[3rem] blur-3xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-amber-600/30 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={`${hotelInfos.name} Room`}
                  className="w-full h-[700px] object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-10 left-10 right-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-700 opacity-0 group-hover:opacity-100">
                  <h3 className="text-3xl font-bold text-white mb-3">Premium Suite</h3>
                  <p className="text-xl text-stone-200">
                    Starting from <span className="text-amber-400 font-bold">$299/night</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Section - Alternate Layout */}
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden bg-stone-50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image First */}
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-br from-amber-300 via-amber-200 to-stone-300 rounded-[3rem] opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Restaurant"
                  className="w-full h-[700px] object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-gradient-to-r from-amber-100 to-amber-50 rounded-full border border-amber-300/60">
                <UtensilsCrossed className="w-5 h-5 text-amber-800" strokeWidth={1.5} />
                <span className="text-amber-900 font-bold text-sm tracking-widest uppercase">Fine Dining</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-stone-900">The Restaurant</h2>

              <p className="text-lg text-stone-700 leading-relaxed">
                Savor the tastes of Morocco at The Restaurant, a culinary haven nestled within Panorama Dades Hotel.
                With a menu inspired by local flavors and international influences, our talented chefs create delectable
                dishes that will tantalize your taste buds. Whether you're seeking traditional Moroccan specialties or
                exploring global cuisines, our restaurant offers a dining experience that will leave you craving more.
                Join us for an unforgettable culinary adventure at Panorama Dades Hotel's Restaurant.
              </p>

              {/* Gallery Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=400',
                ].map((img, i) => (
                  <div
                    key={i}
                    className="relative group overflow-hidden rounded-2xl border-2 border-stone-200 shadow-lg hover:shadow-2xl hover:border-amber-300 transition-all duration-500"
                  >
                    <img
                      src={img}
                      alt={`Restaurant ${i + 1}`}
                      className="w-full h-36 object-cover transform group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>

              <Link
                href="/restaurant"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-amber-700 to-amber-800 rounded-full font-bold text-lg text-white shadow-2xl hover:shadow-amber-600/50 transition-all duration-500 hover:scale-105 group"
              >
                <span>View Menu</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Swimming Pool Section - Dark Theme */}
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-blue-900/40 backdrop-blur-md rounded-full border border-blue-600/40">
                <Waves className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                <span className="text-blue-300 font-bold text-sm tracking-widest uppercase">Relaxation</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-white">Panoramic</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  pool view
                </span>
              </h2>

              <p className="text-lg text-stone-300 leading-relaxed">
                Immerse yourself in the epitome of relaxation with our breathtaking panoramic swimming pool view in the
                heart of Dades Valley. As the sun-kissed waters blend seamlessly with the majestic Atlas Mountains and
                lush greenery, you'll find yourself in a haven of serenity. Whether you're basking in the sun's gentle
                embrace or stargazing under the vast desert sky, our swimming pool offers a vista that transcends the
                ordinary. Let the enchanting landscape embrace you as you unwind and create lasting memories at Panorama
                Dades.
              </p>

              {/* Gallery Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=400',
                ].map((img, i) => (
                  <div
                    key={i}
                    className="relative group overflow-hidden rounded-2xl border-2 border-blue-600/30 shadow-xl hover:shadow-2xl hover:border-cyan-400/60 transition-all duration-500"
                  >
                    <img
                      src={img}
                      alt={`Pool ${i + 1}`}
                      className="w-full h-36 object-cover transform group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>

              <Link
                href="/swimming"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-bold text-lg text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105 group"
              >
                <span>Discover More</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            {/* Image */}
            <div className="lg:col-span-3 relative group">
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-[3rem] blur-3xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-blue-600/30 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Swimming Pool"
                  className="w-full h-[700px] object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Card Grid Layout */}
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden bg-stone-50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-white rounded-full border border-amber-300/60 mb-8 shadow-lg">
              <Star className="w-5 h-5 text-amber-600 fill-amber-600" strokeWidth={1.5} />
              <span className="text-amber-900 font-bold text-sm tracking-widest uppercase">Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">What Our Guests Say</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Read about the unforgettable experiences of our valued guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-10 border-2 border-stone-200 shadow-lg hover:shadow-2xl hover:border-amber-300 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex space-x-1.5 mb-8">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" strokeWidth={1.5} />
                  ))}
                </div>
                <p className="text-stone-700 leading-relaxed mb-10 text-lg italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-4 pt-6 border-t-2 border-stone-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-lg">{testimonial.name}</div>
                    <div className="text-sm text-stone-500 font-medium flex items-center space-x-1.5 mt-1">
                      <Check className="w-4 h-4 text-amber-600" />
                      <span>Verified Guest</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Guide - Modern Card Layout */}
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-stone-50 to-white"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-white rounded-full border border-amber-300/60 mb-8 shadow-lg">
              <MapPin className="w-5 h-5 text-amber-700" strokeWidth={1.5} />
              <span className="text-amber-900 font-bold text-sm tracking-widest uppercase">Travel Guide</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">Guide & travel plans</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover the best experiences around our hotel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((guide, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden border-2 border-stone-200 shadow-lg hover:shadow-2xl hover:border-amber-300 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative overflow-hidden h-72">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white leading-tight">{guide.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-stone-600 leading-relaxed mb-6 text-lg">{guide.text}</p>
                  <button className="inline-flex items-center space-x-2 text-amber-700 font-bold text-lg group-hover:text-amber-800 transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA - Gradient Background */}
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-amber-50">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-amber-400/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pink-500 via-purple-500 to-amber-500 rounded-3xl mb-10 shadow-2xl">
            <Instagram className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
            Follow Us on
            <br />
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
              Instagram
            </span>
          </h2>
          <p className="text-xl text-stone-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our community and get inspired by stunning photos, exclusive offers, and behind-the-scenes moments
          </p>

          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 px-12 py-6 bg-gradient-to-r from-pink-600 via-purple-600 to-amber-600 text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-500 group"
          >
            <Instagram className="w-7 h-7" />
            <span>@{hotelInfos.name}hotel</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="relative bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 border-t border-amber-900/20 pt-20 pb-10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-800 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center shadow-xl">
                  <Crown className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <span className="text-3xl font-bold text-white">{hotelInfos.name}</span>
              </div>
              <p className="text-stone-400 leading-relaxed">
                Experience unparalleled {hotelInfos.name} and comfort at {hotelInfos.name} Hotel. Where every stay
                becomes an unforgettable memory.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Quick Links</h3>
              <ul className="space-y-4">
                {['Privacy Policy', 'FAQ', 'Contact Us'].map((link, i) => (
                  <li key={i}>
                    <Link
                      href={`/${link.toLowerCase().replace(' ', '')}`}
                      className="text-stone-400 hover:text-amber-400 transition-colors flex items-center space-x-3 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-7 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      <span>{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Social Media</h3>
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
                    className="w-12 h-12 bg-stone-800/60 rounded-xl flex items-center justify-center border border-amber-900/30 hover:border-amber-600/60 hover:bg-stone-800 transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-stone-400 group-hover:text-amber-400 transition-colors" strokeWidth={1.5} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Contact</h3>
              <ul className="space-y-5">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <span className="text-stone-400 leading-relaxed text-sm">{hotelInfos.location}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaWhatsapp className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  <div className="text-stone-400 text-sm">
                    <div>{hotelInfos.whatsapp}</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div className="text-stone-400 text-sm">
                    {hotelInfos.phones.map((phone) => (
                      <div key={phone}>{phone}</div>
                    ))}
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <span className="text-stone-400 text-sm">{hotelInfos.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center border-t border-b border-stone-800 py-10">
            <img src="/footer-imgs.png" className="h-20 opacity-60" alt="Footer" />
          </div>

          <div className="text-center pt-10">
            <p className="text-stone-500 text-sm">
              © 2026 {hotelInfos.name} Hotel. All rights reserved. Crafted with excellence.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
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
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
