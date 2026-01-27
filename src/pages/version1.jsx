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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-50 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-amber-50/50 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-white/98 backdrop-blur-md shadow-sm'
            : 'bg-white/95 backdrop-blur-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <img src="/logo.png" className="h-14 transition-transform duration-300 group-hover:scale-105" alt="Logo" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {headerItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group relative px-5 py-2.5 rounded-lg transition-all duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4 text-slate-600 group-hover:text-blue-700 transition-colors" strokeWidth={1.5} />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <div className="absolute bottom-1 left-5 right-5 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full"></div>
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <select
                value={currency}
                onChange={handleCurrencyChange}
                className="px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200/60 text-slate-900 text-sm font-medium cursor-pointer hover:border-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
              >
                <option value="USD">USD</option>
                <option value="CHF">CHF</option>
              </select>
              <button className="group relative px-6 py-2.5 rounded-lg font-semibold text-sm text-white overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="text-slate-900 w-5 h-5" />
              ) : (
                <Menu className="text-slate-900 w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 animate-fade-in">
              <nav className="flex flex-col space-y-1 bg-white rounded-xl border border-slate-200/60 p-2 shadow-xl">
                {headerItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-all"
                  >
                    <item.icon className="w-4 h-4 text-blue-600" />
                    <span className="text-slate-900 text-sm font-medium">{item.label}</span>
                  </Link>
                ))}
                <div className="pt-2 mt-2 border-t border-slate-200/60 space-y-2">
                  <select
                    value={currency}
                    onChange={handleCurrencyChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200/60 text-slate-900 text-sm font-medium"
                  >
                    <option value="USD">USD</option>
                    <option value="CHF">CHF</option>
                  </select>
                  <button className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold text-sm shadow-md">
                    Book Now
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/97 via-white/93 to-slate-50/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center py-24">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-none tracking-tight">
                <span className="block mb-3 animate-slide-up">EXPERIENCE</span>
                <span className="block bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  {hotelInfos.name}
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Discover the perfect blend of elegance, comfort, and world-class hospitality in the heart of paradise
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <button className="group px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-amber-600 to-amber-800 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="flex items-center space-x-2">
                  <span>Explore Rooms</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group px-8 py-4 rounded-lg font-semibold text-slate-900 border-2 border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white hover:border-slate-400 transition-all">
                <span className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Contact Us</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Search Box */}
      <section className="relative z-30 max-w-6xl mx-auto px-6 lg:px-8 -mt-16 mb-16">
        <div className="bg-white rounded-2xl p-8 border border-slate-200/60 shadow-2xl shadow-slate-900/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calendar, label: 'Check In', type: 'date' },
              { icon: Calendar, label: 'Check Out', type: 'date' },
              { icon: Bed, label: 'Rooms', type: 'number', min: '1', default: '1' },
              { icon: Users, label: 'Guests', type: 'number', min: '1', default: '2' },
            ].map((field, i) => (
              <div key={i} className="space-y-3">
                <label className="flex items-center space-x-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  <field.icon className="w-4 h-4 text-blue-700" strokeWidth={1.5} />
                  <span>{field.label}</span>
                </label>
                <input
                  type={field.type}
                  min={field.min}
                  defaultValue={field.default}
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200/60 rounded-lg text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
            ))}
          </div>
          <button className="w-full mt-8 group px-6 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-800 shadow-md hover:shadow-lg transition-all duration-300">
            <span className="flex items-center justify-center space-x-2">
              <span>Search Available Rooms</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-full border border-amber-200/60">
                <Award className="w-4 h-4 text-amber-700" strokeWidth={1.5} />
                <span className="text-amber-800 font-semibold text-sm tracking-wide uppercase">
                  About {hotelInfos.name}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                {hotelInfos.name} Hotel:
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-900">
                  Unveiling the Enchanting Beauty of Dades Valley
                </span>
              </h2>

              <div className="space-y-5 text-slate-600 text-lg leading-relaxed font-light">
                <p>
                  Discover the enchanting beauty of the Dades Valley at Panorama Dades Hotel, where breathtaking panoramas and a tranquil ambiance combine to create an unforgettable Moroccan getaway. Nestled amidst the awe-inspiring Atlas Mountains, our hotel offers a truly immersive experience amidst nature's splendor.
                </p>
                <p>
                  Step into our welcoming oasis, where rustic charm blends seamlessly with modern comforts. Our well-appointed rooms provide a cozy sanctuary, each designed to capture the essence of the surrounding landscape. Wake up to the soothing sounds of nature and be greeted by sweeping views of the Dades Valley from your private balcony.
                </p>
                <p>
                  Indulge in a delectable culinary journey at our on-site restaurant, where local flavors and international cuisine harmoniously intertwine. Savor traditional Moroccan dishes expertly prepared with fresh, locally sourced ingredients. As the sun sets over the valley, unwind with a refreshing drink at our bar, taking in the panoramic vistas that stretch as far as the eye can see.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { number: '5+', label: 'Rooms', icon: Bed },
                  { number: '50K+', label: 'Happy Guests', icon: Users },
                  { number: '25+', label: 'Years Experience', icon: Award },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-6 bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 mb-3">
                      <stat.icon className="w-6 h-6 text-blue-700" strokeWidth={1.5} />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-amber-100 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={`Hotel ${hotelInfos.name}`}
                  className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 px-6 lg:px-8 relative overflow-hidden bg-slate-50/50 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800)',
        }}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/97 via-white/93 to-slate-50/95"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-slate-200/60 mb-6 shadow-sm">
              <Bed className="w-4 h-4 text-blue-700" strokeWidth={1.5} />
              <span className="text-slate-700 font-semibold text-sm tracking-wide uppercase">
                Accommodations
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
              Luxurious Rooms & Suites
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
              Experience comfort and elegance in our carefully designed rooms
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-100 to-blue-100 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={`${hotelInfos.name} Room`}
                  className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className="text-2xl font-bold text-white mb-2">Premium Suite</h3>
                  <p className="text-white/90">Starting from <span className="text-amber-400 font-bold">$299/night</span></p>
                </div>
              </div>
            </div>

            <div className="space-y-7 order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                Authentic Rooms
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Experience a diverse range of thoughtfully curated rooms at Panorama Dades Hotel, tailored to cater to your individual preferences and budget. Our accommodations encompass a selection of cozy and inviting rooms, meticulously designed to provide a distinctive and genuine experience. Discover a blend of traditional Moroccan aesthetics and modern conveniences, with a multitude of options to suit solo travelers, couples, and groups alike.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=400',
                ].map((img, i) => (
                  <div key={i} className="relative group/img overflow-hidden rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                    <img
                      src={img}
                      alt={`Room ${i + 1}`}
                      className="w-full h-32 object-cover transform group-hover/img:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>

              <Link
                href="/rooms"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>Explore All Rooms</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="py-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-full border border-amber-200/60">
                <UtensilsCrossed className="w-4 h-4 text-amber-700" strokeWidth={1.5} />
                <span className="text-amber-800 font-semibold text-sm tracking-wide uppercase">
                  Fine Dining
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                The Restaurant
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Savor the tastes of Morocco at The Restaurant, a culinary haven nestled within Panorama Dades Hotel. With a menu inspired by local flavors and international influences, our talented chefs create delectable dishes that will tantalize your taste buds. Whether you're seeking traditional Moroccan specialties or exploring global cuisines, our restaurant offers a dining experience that will leave you craving more. Join us for an unforgettable culinary adventure at Panorama Dades Hotel's Restaurant.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=400',
                ].map((img, i) => (
                  <div key={i} className="relative group overflow-hidden rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                    <img
                      src={img}
                      alt={`Restaurant ${i + 1}`}
                      className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>

              <Link
                href="/restaurant"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>View Menu</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-100 to-blue-100 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Restaurant"
                  className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Swimming Pool Section */}
      <section className="py-16 px-6 lg:px-8 relative overflow-hidden bg-slate-50/50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Swimming Pool"
                  className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent"></div>
              </div>
            </div>

            <div className="space-y-7">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200/60">
                <Waves className="w-4 h-4 text-blue-700" strokeWidth={1.5} />
                <span className="text-blue-800 font-semibold text-sm tracking-wide uppercase">
                  Relaxation
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Panoramic
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">
                  pool view
                </span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Immerse yourself in the epitome of relaxation with our breathtaking panoramic swimming pool view in the heart of Dades Valley. As the sun-kissed waters blend seamlessly with the majestic Atlas Mountains and lush greenery, you'll find yourself in a haven of serenity. Whether you're basking in the sun's gentle embrace or stargazing under the vast desert sky, our swimming pool offers a vista that transcends the ordinary. Let the enchanting landscape embrace you as you unwind and create lasting memories at Panorama Dades.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=400',
                ].map((img, i) => (
                  <div key={i} className="relative group overflow-hidden rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                    <img
                      src={img}
                      alt={`Pool ${i + 1}`}
                      className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>

              <Link
                href="/swimming"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>Discover More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-slate-200/60 mb-6 shadow-sm">
              <Star className="w-4 h-4 text-amber-600 fill-amber-600" strokeWidth={1.5} />
              <span className="text-slate-700 font-semibold text-sm tracking-wide uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
              What Our Guests Say
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
              Read about the unforgettable experiences of our valued guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200"
              >
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-500 text-amber-500"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-8 font-light italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500 font-medium flex items-center space-x-1">
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

      {/* Travel Guide Section */}
      <section className="py-16 px-6 lg:px-8 relative overflow-hidden bg-slate-50/50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-slate-200/60 mb-6 shadow-sm">
              <MapPin className="w-4 h-4 text-blue-700" strokeWidth={1.5} />
              <span className="text-slate-700 font-semibold text-sm tracking-wide uppercase">
                Travel Guide
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
              Guide & travel plans
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
              Discover the best experiences around our hotel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((guide, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-200"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 font-light">
                    {guide.text}
                  </p>
                  <button className="inline-flex items-center space-x-2 text-blue-700 font-semibold group-hover:text-blue-800 transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-amber-500 rounded-2xl mb-8 shadow-lg">
            <Instagram className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            Follow Us on
            <br />
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
              Instagram
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-light">
            Join our community and get inspired by stunning photos, exclusive offers, and behind-the-scenes moments
          </p>

          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-pink-600 via-purple-600 to-amber-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <Instagram className="w-6 h-6" />
            <span>@{hotelInfos.name}hotel</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Crown className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <span className="text-2xl font-bold text-white">
                  {hotelInfos.name}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed font-light">
                Experience unparalleled {hotelInfos.name} and comfort at {hotelInfos.name} Hotel. Where every stay becomes an unforgettable memory.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-5 uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-3">
                {['Privacy Policy', 'FAQ', 'Contact Us'].map((link, i) => (
                  <li key={i}>
                    <Link
                      href={`/${link.toLowerCase().replace(' ', '')}`}
                      className="text-slate-300 hover:text-blue-400 transition-colors flex items-center space-x-2 group font-light"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      <span>{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-5 uppercase tracking-wider">Social Media</h3>
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
                    className="w-11 h-11 bg-slate-800/80 rounded-lg flex items-center justify-center border border-slate-700 hover:border-blue-500/50 hover:bg-slate-700 transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors" strokeWidth={1.5} />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-5 uppercase tracking-wider">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-slate-300 leading-relaxed text-sm font-light">
                    {hotelInfos.location}
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaWhatsapp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300 text-sm font-light">
                    <div>{hotelInfos.whatsapp}</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="text-slate-300 text-sm font-light">
                    {hotelInfos.phones.map(phone => (
                      <div key={phone}>{phone}</div>
                    ))}
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-slate-300 text-sm font-light">{hotelInfos.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center border-t border-b border-slate-700/50 py-8">
            <img src="/footer-imgs.png" className='h-20 opacity-80' alt="Footer" />
          </div>

          <div className="text-center pt-8">
            <p className="text-slate-400 text-sm font-light">
              © 2026 {hotelInfos.name} Hotel. All rights reserved. Crafted with excellence.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
      `}</style>
    </div>
  );

}
