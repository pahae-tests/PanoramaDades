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
    <div className="min-h-screen bg-[#faf8f5] overflow-x-hidden relative font-serif">
      {/* Sophisticated Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
            ? 'bg-[#3d2918]/98 backdrop-blur-2xl shadow-[0_8px_32px_rgba(61,41,24,0.3)]'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between border-b border-[#8b6f47]/20">
            {/* Logo with Premium Typography */}
            <Link href="/" className="cursor-pointer">
              <img
                src="/logo.png"
                className="h-12 w-auto relative z-10"
                alt="Logo"
              />
            </Link>

            {/* Minimal Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {headerItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group relative px-7 py-4 transition-all duration-500"
                >
                  <span className="text-sm font-light text-[#faf8f5] group-hover:text-[#d4af37] transition-colors tracking-[0.2em] uppercase">
                    {item.label}
                  </span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#d4af37] group-hover:w-3/4 transition-all duration-500"></div>
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <select
                value={currency}
                onChange={handleCurrencyChange}
                className="px-6 py-3 bg-transparent border border-[#8b6f47]/30 text-[#faf8f5] text-xs font-light tracking-[0.15em] cursor-pointer hover:border-[#d4af37]/60 transition-all focus:outline-none uppercase"
              >
                <option value="USD" className="bg-[#3d2918]">USD</option>
                <option value="CHF" className="bg-[#3d2918]">CHF</option>
              </select>
              <button className="group relative px-9 py-3.5 font-light text-xs text-[#3d2918] bg-[#d4af37] overflow-hidden transition-all duration-700 hover:bg-[#c9a02e] tracking-[0.2em] uppercase">
                <span className="flex items-center space-x-3">
                  <span>Book Now</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 border border-[#8b6f47]/30 transition-all hover:border-[#d4af37]/60"
            >
              {mobileMenuOpen ? (
                <X className="text-[#faf8f5] w-5 h-5" />
              ) : (
                <Menu className="text-[#faf8f5] w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-8 pt-6 animate-fadeIn">
              <nav className="flex flex-col space-y-1 bg-[#3d2918]/95 backdrop-blur-2xl border border-[#8b6f47]/20 p-4">
                {headerItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center space-x-4 px-6 py-4 hover:bg-[#4d3522]/50 transition-all"
                  >
                    <item.icon className="w-4 h-4 text-[#d4af37]" strokeWidth={1.5} />
                    <span className="text-[#faf8f5] text-sm font-light tracking-[0.15em] uppercase">{item.label}</span>
                  </Link>
                ))}
                <div className="pt-4 mt-3 border-t border-[#8b6f47]/20 space-y-3">
                  <select
                    value={currency}
                    onChange={handleCurrencyChange}
                    className="w-full px-6 py-3 bg-[#4d3522]/50 border border-[#8b6f47]/30 text-[#faf8f5] text-xs font-light tracking-[0.15em] uppercase"
                  >
                    <option value="USD">USD</option>
                    <option value="CHF">CHF</option>
                  </select>
                  <button className="w-full px-6 py-3.5 bg-[#d4af37] text-[#3d2918] text-xs font-light tracking-[0.2em] uppercase">
                    Book Now
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Fullscreen Immersive */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1810]/90 via-[#3d2918]/85 to-[#2a1810]/95"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139,111,71,0.03) 2px, rgba(139,111,71,0.03) 4px)`
          }}></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-8 lg:px-16 text-center">
          <div className="space-y-16">
            <div className="space-y-12">
              <div className="overflow-hidden">
                <h2
                  className="text-[clamp(3.5rem,9vw,10rem)] font-bold leading-[0.9] tracking-tighter animate-slideUp"
                  style={{ animationDelay: '0.2s' }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37]">
                    {hotelInfos.name}
                  </span>
                </h2>
              </div>
            </div>

            <div className="overflow-hidden">
              <p
                className="text-xl md:text-2xl text-[#e8dcc8] max-w-4xl mx-auto leading-relaxed font-light tracking-wide animate-slideUp"
                style={{ animationDelay: '0.4s' }}
              >
                Discover the perfect blend of elegance, comfort, and world-class hospitality in the heart of paradise
              </p>
            </div>

            <div
              className="flex flex-wrap items-center justify-center gap-6 animate-slideUp"
              style={{ animationDelay: '0.6s' }}
            >
              <button className="group px-12 py-5 font-light text-sm text-[#3d2918] bg-[#d4af37] transition-all duration-700 hover:bg-[#c9a02e] tracking-[0.2em] uppercase">
                <span className="flex items-center space-x-4">
                  <span>Explore Rooms</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                </span>
              </button>
              <button className="group px-12 py-5 font-light text-sm text-[#faf8f5] border border-[#8b6f47]/40 bg-[#3d2918]/20 backdrop-blur-sm hover:border-[#d4af37]/60 hover:bg-[#3d2918]/40 transition-all duration-700 tracking-[0.2em] uppercase">
                <span className="flex items-center space-x-4">
                  <Phone className="w-4 h-4" />
                  <span>Contact Us</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Elegant Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 animate-float">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"></div>
          <ChevronDown className="w-6 h-6 text-[#d4af37]" strokeWidth={1} />
        </div>
      </section>

      {/* Booking Widget - Floating Design */}
      <section className="relative z-30 max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="bg-[#3d2918] border border-[#8b6f47]/20 shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#8b6f47]/10">
            {[
              { icon: Calendar, label: 'Check In', type: 'date' },
              { icon: Calendar, label: 'Check Out', type: 'date' },
              { icon: Bed, label: 'Rooms', type: 'number', min: '1', default: '1' },
              { icon: Users, label: 'Guests', type: 'number', min: '1', default: '2' },
            ].map((field, i) => (
              <div key={i} className="bg-[#3d2918] p-8">
                <label className="flex items-center space-x-3 text-[10px] font-light text-[#d4af37] uppercase tracking-[0.25em] mb-5">
                  <field.icon className="w-4 h-4" strokeWidth={1} />
                  <span>{field.label}</span>
                </label>
                <input
                  type={field.type}
                  min={field.min}
                  defaultValue={field.default}
                  className="w-full px-0 py-3 bg-transparent border-b border-[#8b6f47]/30 text-[#faf8f5] placeholder-[#8b6f47] focus:border-[#d4af37] focus:outline-none transition-all font-light text-lg"
                />
              </div>
            ))}
          </div>
          <div className="p-8 border-t border-[#8b6f47]/20">
            <button className="w-full group px-8 py-6 font-light text-sm text-[#3d2918] bg-[#d4af37] transition-all duration-700 hover:bg-[#c9a02e] tracking-[0.25em] uppercase">
              <span className="flex items-center justify-center space-x-4">
                <span>Search Available Rooms</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section className="py-32 px-8 lg:px-16 relative overflow-hidden bg-[#faf8f5]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#8b6f47]/5 to-transparent"></div>

        <div className="max-w-[1800px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            {/* Content */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-[1px] bg-[#d4af37]"></div>
                  <span className="text-[10px] font-light text-[#8b6f47] tracking-[0.3em] uppercase">
                    About {hotelInfos.name}
                  </span>
                </div>

                <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#3d2918] leading-[1.1] tracking-tight">
                  {hotelInfos.name} Hotel:
                  <br />
                  <span className="font-normal text-[#6b5233]">
                    Unveiling the Enchanting Beauty of Dades Valley
                  </span>
                </h2>
              </div>

              <div className="space-y-8 text-[#5d4e37] text-lg leading-[1.9] font-light">
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

              {/* Stats - Horizontal Line */}
              <div className="grid grid-cols-3 gap-12 pt-16 border-t border-[#8b6f47]/20">
                {[
                  { number: '5+', label: 'Rooms' },
                  { number: '50K+', label: 'Happy Guests' },
                  { number: '25+', label: 'Years Experience' },
                ].map((stat, i) => (
                  <div key={i} className="text-center group">
                    <div className="text-[clamp(3rem,6vw,5rem)] font-light text-[#d4af37] mb-3 group-hover:scale-110 transition-transform duration-700">
                      {stat.number}
                    </div>
                    <div className="text-[10px] text-[#8b6f47] font-light uppercase tracking-[0.25em]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <div className="relative group">
                  <div className="absolute -inset-8 bg-[#d4af37]/10 blur-3xl group-hover:bg-[#d4af37]/15 transition-all duration-1000"></div>
                  <div className="relative overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt={`Hotel ${hotelInfos.name}`}
                      className="w-full h-[800px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 border border-[#8b6f47]/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section - Dark Immersive */}
      <section className="py-32 px-8 lg:px-16 relative overflow-hidden bg-[#2a1810]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#d4af37] rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-[1800px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Image First */}
            <div className="lg:col-span-7 relative group">
              <div className="overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={`${hotelInfos.name} Room`}
                  className="w-full h-[900px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 border border-[#8b6f47]/20"></div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Bed className="w-5 h-5 text-[#d4af37]" strokeWidth={1} />
                  <span className="text-[10px] font-light text-[#d4af37] tracking-[0.3em] uppercase">Accommodations</span>
                </div>

                <h3 className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#faf8f5] leading-[1.1]">
                  Authentic Rooms
                </h3>

                <p className="text-lg text-[#c9b89a] leading-[1.9] font-light">
                  Experience a diverse range of thoughtfully curated rooms at Panorama Dades Hotel, tailored to cater to
                  your individual preferences and budget. Our accommodations encompass a selection of cozy and inviting
                  rooms, meticulously designed to provide a distinctive and genuine experience. Discover a blend of
                  traditional Moroccan aesthetics and modern conveniences, with a multitude of options to suit solo
                  travelers, couples, and groups alike.
                </p>
              </div>

              {/* Small Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=400',
                ].map((img, i) => (
                  <div key={i} className="relative group overflow-hidden border border-[#8b6f47]/20">
                    <img
                      src={img}
                      alt={`Room ${i + 1}`}
                      className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>

              <Link
                href="/rooms"
                className="inline-flex items-center space-x-4 px-12 py-5 bg-[#d4af37] text-[#3d2918] font-light text-sm tracking-[0.2em] uppercase transition-all duration-700 hover:bg-[#c9a02e] group self-start"
              >
                <span>Explore All Rooms</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Section - Light & Airy */}
      <section className="py-32 px-8 lg:px-16 relative overflow-hidden bg-[#f5f0e8]">
        <div className="max-w-[1800px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Content First */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <UtensilsCrossed className="w-5 h-5 text-[#d4af37]" strokeWidth={1} />
                  <span className="text-[10px] font-light text-[#8b6f47] tracking-[0.3em] uppercase">Fine Dining</span>
                </div>

                <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#3d2918] leading-[1.1]">
                  The Restaurant
                </h2>

                <p className="text-lg text-[#5d4e37] leading-[1.9] font-light">
                  Savor the tastes of Morocco at The Restaurant, a culinary haven nestled within Panorama Dades Hotel.
                  With a menu inspired by local flavors and international influences, our talented chefs create delectable
                  dishes that will tantalize your taste buds. Whether you're seeking traditional Moroccan specialties or
                  exploring global cuisines, our restaurant offers a dining experience that will leave you craving more.
                  Join us for an unforgettable culinary adventure at Panorama Dades Hotel's Restaurant.
                </p>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=400',
                ].map((img, i) => (
                  <div key={i} className="relative group overflow-hidden border border-[#8b6f47]/20">
                    <img
                      src={img}
                      alt={`Restaurant ${i + 1}`}
                      className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>

              <Link
                href="/restaurant"
                className="inline-flex items-center space-x-4 px-12 py-5 bg-[#3d2918] text-[#faf8f5] font-light text-sm tracking-[0.2em] uppercase transition-all duration-700 hover:bg-[#2a1810] group"
              >
                <span>View Menu</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-8 bg-[#d4af37]/10 blur-3xl group-hover:bg-[#d4af37]/15 transition-all duration-1000"></div>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Restaurant"
                  className="w-full h-[800px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 border border-[#8b6f47]/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Swimming Pool - Full Width Dark */}
      <section className="py-32 px-8 lg:px-16 relative overflow-hidden bg-[#1a0f0a]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-[#d4af37] to-[#4a90e2] rounded-full blur-[200px]"></div>
        </div>

        <div className="max-w-[1800px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
            {/* Image */}
            <div className="lg:col-span-3 relative group">
              <div className="overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Swimming Pool"
                  className="w-full h-[900px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 border border-[#8b6f47]/20"></div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Waves className="w-5 h-5 text-[#4a90e2]" strokeWidth={1} />
                  <span className="text-[10px] font-light text-[#4a90e2] tracking-[0.3em] uppercase">Relaxation</span>
                </div>

                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1]">
                  <span className="text-[#faf8f5]">Panoramic</span>
                  <br />
                  <span className="text-[#4a90e2]">pool view</span>
                </h2>

                <p className="text-lg text-[#c9b89a] leading-[1.9] font-light">
                  Immerse yourself in the epitome of relaxation with our breathtaking panoramic swimming pool view in the
                  heart of Dades Valley. As the sun-kissed waters blend seamlessly with the majestic Atlas Mountains and
                  lush greenery, you'll find yourself in a haven of serenity. Whether you're basking in the sun's gentle
                  embrace or stargazing under the vast desert sky, our swimming pool offers a vista that transcends the
                  ordinary. Let the enchanting landscape embrace you as you unwind and create lasting memories at Panorama
                  Dades.
                </p>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=400',
                  'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=400',
                ].map((img, i) => (
                  <div key={i} className="relative group overflow-hidden border border-[#8b6f47]/20">
                    <img
                      src={img}
                      alt={`Pool ${i + 1}`}
                      className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>

              <Link
                href="/swimming"
                className="inline-flex items-center space-x-4 px-12 py-5 bg-[#4a90e2] text-white font-light text-sm tracking-[0.2em] uppercase transition-all duration-700 hover:bg-[#3a7bc8] group"
              >
                <span>Discover More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Masonry Grid */}
      <section className="py-32 px-8 lg:px-16 relative overflow-hidden bg-[#faf8f5]">
        <div className="max-w-[1800px] mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-[1px] bg-[#d4af37]"></div>
              <span className="text-[10px] font-light text-[#8b6f47] tracking-[0.3em] uppercase">Testimonials</span>
              <div className="w-16 h-[1px] bg-[#d4af37]"></div>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#3d2918] leading-[1.1] mb-6">
              What Our Guests Say
            </h2>
            <p className="text-lg text-[#5d4e37] max-w-3xl mx-auto font-light">
              Read about the unforgettable experiences of our valued guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white p-10 border border-[#8b6f47]/10 transition-all duration-700 hover:border-[#d4af37]/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
              >
                <div className="flex space-x-1 mb-8">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" strokeWidth={1} />
                  ))}
                </div>
                <p className="text-[#5d4e37] leading-[1.8] mb-10 text-base font-light italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-4 pt-8 border-t border-[#8b6f47]/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#c9a02e] flex items-center justify-center text-[#3d2918] font-light text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-normal text-[#3d2918] text-base">{testimonial.name}</div>
                    <div className="text-[10px] text-[#8b6f47] font-light flex items-center space-x-2 mt-1 tracking-[0.15em] uppercase">
                      <Check className="w-3 h-3 text-[#d4af37]" />
                      <span>Verified Guest</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Guide - Editorial Layout */}
      <section className="py-32 px-8 lg:px-16 relative overflow-hidden bg-white">
        <div className="max-w-[1800px] mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <MapPin className="w-5 h-5 text-[#d4af37]" strokeWidth={1} />
              <span className="text-[10px] font-light text-[#8b6f47] tracking-[0.3em] uppercase">Travel Guide</span>
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#3d2918] leading-[1.1] mb-6">
              Guide & travel plans
            </h2>
            <p className="text-lg text-[#5d4e37] max-w-3xl mx-auto font-light">
              Discover the best experiences around our hotel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((guide, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-[#faf8f5] border border-[#8b6f47]/10 transition-all duration-700 hover:border-[#d4af37]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1810]/80 to-transparent"></div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-light text-[#3d2918] leading-tight mb-6">{guide.title}</h3>
                  <p className="text-[#5d4e37] leading-[1.8] mb-8 text-base font-light">{guide.text}</p>
                  <button className="inline-flex items-center space-x-3 text-[#d4af37] font-light text-sm tracking-[0.15em] uppercase group-hover:text-[#c9a02e] transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA - Gradient Overlay */}
      <section className="py-32 px-8 lg:px-16 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#833ab4]/95 via-[#fd1d1d]/90 to-[#fcb045]/95"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-white/30 mb-12">
            <Instagram className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light text-white leading-[1.1] mb-6">
            Follow Us on
            <br />
            Instagram
          </h2>
          <p className="text-xl text-white/90 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            Join our community and get inspired by stunning photos, exclusive offers, and behind-the-scenes moments
          </p>

          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 px-12 py-6 bg-white text-[#3d2918] font-light text-sm tracking-[0.2em] uppercase transition-all duration-700 hover:bg-white/90 group"
          >
            <Instagram className="w-5 h-5" />
            <span>@{hotelInfos.name}hotel</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>
      </section>

      {/* Footer - Sophisticated */}
      <footer className="relative bg-[#1a0f0a] border-t border-[#8b6f47]/10 pt-24 pb-12">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Brand */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 border border-[#d4af37] flex items-center justify-center">
                  <Crown className="w-5 h-5 text-[#d4af37]" strokeWidth={1} />
                </div>
                <span className="text-2xl font-light text-[#faf8f5]">{hotelInfos.name}</span>
              </div>
              <p className="text-[#8b6f47] leading-[1.8] font-light text-sm">
                Experience unparalleled {hotelInfos.name} and comfort at {hotelInfos.name} Hotel. Where every stay
                becomes an unforgettable memory.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#faf8f5] font-light text-sm mb-8 uppercase tracking-[0.25em]">Quick Links</h3>
              <ul className="space-y-4">
                {['Privacy Policy', 'FAQ', 'Contact Us'].map((link, i) => (
                  <li key={i}>
                    <Link
                      href={`/${link.toLowerCase().replace(' ', '')}`}
                      className="text-[#8b6f47] hover:text-[#d4af37] transition-colors text-sm font-light"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-[#faf8f5] font-light text-sm mb-8 uppercase tracking-[0.25em]">Social Media</h3>
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
                    className="w-10 h-10 border border-[#8b6f47]/30 flex items-center justify-center hover:border-[#d4af37]/60 transition-all group"
                  >
                    <social.icon className="w-4 h-4 text-[#8b6f47] group-hover:text-[#d4af37] transition-colors" strokeWidth={1} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[#faf8f5] font-light text-sm mb-8 uppercase tracking-[0.25em]">Contact</h3>
              <ul className="space-y-5">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-1" strokeWidth={1} />
                  <span className="text-[#8b6f47] leading-[1.6] text-sm font-light">{hotelInfos.location}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaWhatsapp className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-1" />
                  <span className="text-[#8b6f47] text-sm font-light">{hotelInfos.whatsapp}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-1" strokeWidth={1} />
                  <div className="text-[#8b6f47] text-sm font-light">
                    {hotelInfos.phones.map((phone) => (
                      <div key={phone}>{phone}</div>
                    ))}
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-1" strokeWidth={1} />
                  <span className="text-[#8b6f47] text-sm font-light">{hotelInfos.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center border-t border-b border-[#8b6f47]/10 py-12">
            <img src="/footer-imgs.png" className="h-16 opacity-40" alt="Footer" />
          </div>

          <div className="text-center pt-12">
            <p className="text-[#8b6f47] text-xs font-light tracking-[0.15em]">
              © 2026 {hotelInfos.name} Hotel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
        .animate-slideUp {
          animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
