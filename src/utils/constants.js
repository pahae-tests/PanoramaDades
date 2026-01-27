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
} from 'lucide-react';

export const headerItems = [
    { icon: HomeIcon, label: 'Home', href: '#home' },
    { icon: Bed, label: 'Rooms', href: '/rooms' },
    { icon: UtensilsCrossed, label: 'Restaurant', href: '/restaurant' },
    { icon: Mail, label: 'Contact', href: '/contact' },
    { icon: HelpCircle, label: 'FAQ', href: '/faq' },
    { icon: BookOpen, label: 'Blog', href: '/blog' },
];

export const hotelInfos = {
    name: 'Panorama Dades',
    email: 'test@test.com',
    instagram: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    whatsapp: '+212-668762022',
    phones: [
        '+212-667159941',
        '+212-668762022',
    ],
    location: 'Panorama dades Ait Ibrirne, (Ait Youl), Boumalen Dades',
    description: 'Experience the beauty of Panorama Dades Hotel, nestled in the heart of the Dades Valley. Immerse yourself in breathtaking views, elegant rooms, and exceptional hospitality. Book now and create unforgettable memories.',
}

export const blogs = [
    {
        image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'From Serene Landscapes to Thrilling Excursions: Experiencing the Magic of Dades Valley at Panorama Dades Hotel',
        text: 'Nestled amidst the awe-inspiring beauty of the Dades Valley, Panorama Dades Hotel invites you to...',
    },
    {
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Unveiling the Hidden Gems of Dades Valley: Discovering Cultural Delights and Adventure',
        text: 'The Dades Valley in Morocco is a treasure trove of hidden gems, waiting to be...',
    },
    {
        image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Exploring the Enchanting Dades Valley: A Guide to Nature’s Spectacular Beauty',
        text: 'Nestled in the heart of Morocco, the Dades Valley is a true hidden gem waiting...',
    },
];

export const testimonials = [
    {
        name: 'Sarah Johnson',
        text: 'Absolutely stunning! From the moment we arrived, we were treated like royalty. The rooms are impeccably designed, and the service is beyond exceptional. The infinity pool with sunset views was a dream come true.',
        stars: 5,
    },
    {
        name: 'Michael Chen',
        text: 'Our honeymoon at {hotelInfos.name} was perfect. The attention to detail, the romantic ambiance, and the world-class dining made it an experience we will cherish forever. Highly recommend the presidential suite!',
        stars: 5,
    },
    {
        name: 'Emma Rodriguez',
        text: 'I have stayed at {hotelInfos.name} hotels around the world, but {hotelInfos.name} stands out. The blend of modern elegance and warm hospitality is unmatched. The spa treatments and beach access were incredible. Coming back for sure!',
        stars: 5,
    },
];