import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const faqs = [
        {
            question: "Quels sont les horaires d'arrivée et de départ ?",
            answer: "L'enregistrement se fait à partir de 14h00 et le départ avant 12h00. Si vous souhaitez arriver plus tôt ou partir plus tard, veuillez nous contacter à l'avance pour vérifier la disponibilité. Nous ferons de notre mieux pour répondre à vos besoins."
        },
        {
            question: "Proposez-vous un service de navette depuis l'aéroport ?",
            answer: "Oui, nous proposons un service de navette privée depuis et vers les aéroports de Marrakech et Ouarzazate. Ce service doit être réservé à l'avance. Les tarifs varient selon la distance et le nombre de passagers. Contactez-nous pour plus de détails et pour organiser votre transfert."
        },
        {
            question: "Le Wi-Fi est-il disponible dans tout l'hôtel ?",
            answer: "Oui, nous offrons une connexion Wi-Fi gratuite et haut débit dans toutes les chambres ainsi que dans les espaces communs de l'hôtel, y compris le restaurant, le salon et la terrasse près de la piscine."
        },
        {
            question: "Acceptez-vous les animaux de compagnie ?",
            answer: "Malheureusement, nous n'acceptons pas les animaux de compagnie dans notre établissement. Cette politique nous permet de garantir le confort et la tranquillité de tous nos clients, notamment ceux qui peuvent avoir des allergies."
        },
        {
            question: "Y a-t-il un parking disponible ?",
            answer: "Oui, nous disposons d'un parking privé gratuit et sécurisé pour tous nos clients. L'espace est suffisant pour accueillir tous les véhicules de nos visiteurs, que vous voyagiez en voiture de location ou avec votre propre véhicule."
        },
        {
            question: "Quelles sont les activités disponibles dans la région ?",
            answer: "La vallée du Dadès offre de nombreuses activités : randonnées dans les gorges du Dadès, visites de villages berbères traditionnels, excursions dans le désert, balades à dos de chameau, découverte des kasbahs historiques, et observation des étoiles. Notre équipe se fera un plaisir de vous aider à organiser ces expériences."
        },
        {
            question: "Le petit-déjeuner est-il inclus dans le prix ?",
            answer: "Cela dépend du tarif que vous avez réservé. Certains de nos forfaits incluent le petit-déjeuner, tandis que d'autres proposent cette option en supplément. Veuillez vérifier les détails de votre réservation ou nous contacter pour plus d'informations."
        },
        {
            question: "Proposez-vous des chambres familiales ?",
            answer: "Oui, nous proposons plusieurs options pour les familles, incluant des chambres communicantes et des suites spacieuses pouvant accueillir jusqu'à 4 personnes. Des lits d'appoint et des lits bébé sont également disponibles sur demande."
        },
        {
            question: "La piscine est-elle chauffée ?",
            answer: "Notre piscine à débordement n'est pas chauffée, mais grâce au climat favorable de la vallée du Dadès, elle est agréable la plupart de l'année, particulièrement du printemps à l'automne. En été, elle offre une fraîcheur bienvenue."
        },
        {
            question: "Quels moyens de paiement acceptez-vous ?",
            answer: "Nous acceptons les paiements en espèces (dirhams marocains et euros), ainsi que les principales cartes de crédit (Visa, MasterCard). Pour les réservations en ligne, le paiement sécurisé par carte bancaire est également disponible."
        },
        {
            question: "Y a-t-il des restrictions alimentaires que vous pouvez accommoder ?",
            answer: "Absolument. Notre chef peut préparer des repas adaptés à divers régimes alimentaires : végétarien, végétalien, sans gluten, ou en cas d'allergies alimentaires spécifiques. Veuillez nous informer de vos besoins lors de votre réservation ou à votre arrivée."
        },
        {
            question: "Quelle est votre politique d'annulation ?",
            answer: "Notre politique d'annulation standard permet une annulation gratuite jusqu'à 7 jours avant la date d'arrivée. Pour les annulations effectuées entre 7 et 3 jours avant l'arrivée, des frais de 50% s'appliquent. Les annulations dans les 72 heures précédant l'arrivée ou les non-présentations entraînent la facturation complète du séjour."
        },
        {
            question: "Organisez-vous des excursions guidées ?",
            answer: "Oui, nous proposons une variété d'excursions guidées dans la région, incluant des randonnées dans les gorges, des visites culturelles de villages berbères, et des sorties au désert. Ces excursions peuvent être réservées directement à la réception et sont conduites par des guides locaux expérimentés."
        },
        {
            question: "Les chambres sont-elles climatisées ?",
            answer: "Oui, toutes nos chambres sont équipées de la climatisation et du chauffage, vous assurant un confort optimal quelle que soit la saison. Les systèmes sont modernes et silencieux pour ne pas perturber votre repos."
        },
        {
            question: "Peut-on réserver le restaurant sans être client de l'hôtel ?",
            answer: "Oui, notre restaurant est ouvert aux clients extérieurs. Nous recommandons toutefois de réserver à l'avance, particulièrement pendant la haute saison et les week-ends, afin de garantir votre table et permettre à notre chef de préparer le meilleur accueil possible."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-stone-50 relative overflow-hidden">
            {/* BG Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-40">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-radial from-amber-200/60 via-amber-100/30 to-transparent rounded-full blur-3xl animate-float" />
                <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-radial from-stone-300/50 via-stone-200/20 to-transparent rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-radial from-amber-300/40 via-transparent to-transparent rounded-full blur-3xl animate-float-slow" />
            </div>

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden py-64">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: 'url(https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920)',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-50" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
                    <div className="space-y-8">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white leading-none">
                            Frequently Asked
                            <br />
                            <span className="italic text-amber-400">Questions</span>
                        </h1>

                        <div className="flex items-center justify-center space-x-4 text-stone-200">
                            <div className="h-px w-20 bg-amber-400/50" />
                            <p className="text-lg md:text-xl tracking-wider uppercase font-light">
                                All what you want to know
                            </p>
                            <div className="h-px w-20 bg-amber-400/50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 px-8 lg:px-16 relative">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-200/50"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="text-lg md:text-xl font-semibold text-stone-900 pr-8 group-hover:text-amber-900 transition-colors">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-6 h-6 text-amber-900 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-8 pb-6 pt-2">
                                        <div className="w-12 h-px bg-amber-900/30 mb-4" />
                                        <p className="text-stone-600 leading-relaxed font-light text-base md:text-lg">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-20 text-center">
                        <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-2xl p-12 border border-amber-200/50">
                            <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">
                                You have ohter questions ?
                            </h3>
                            <p className="text-stone-600 text-lg mb-8 font-light">
                                We are ready to answer all your questions
                            </p>
                            <a
                                href="mailto:contact@hotel.com"
                                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-lg font-medium tracking-wider uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                            >
                                <span>Contact Us</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}