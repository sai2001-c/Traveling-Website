
import React from 'react';
import { 
  Building, 
  Coffee, 
  Shield, 
  Car, 
  Map, 
  Headphones 
} from 'lucide-react';

const services = [
  {
    icon: <Building className="text-primary h-12 w-12" />,
    title: 'Affordable Hotels',
    description: 'Handpicked accommodations that blend comfort with value, ensuring a pleasant stay without breaking the bank.'
  },
  {
    icon: <Coffee className="text-primary h-12 w-12" />,
    title: 'Food & Drinks',
    description: 'Curated dining experiences featuring local cuisine and international favorites at partner restaurants.'
  },
  {
    icon: <Shield className="text-primary h-12 w-12" />,
    title: 'Safety Guide',
    description: 'Expert local guides and comprehensive safety measures to ensure a secure and enjoyable journey.'
  },
  {
    icon: <Car className="text-primary h-12 w-12" />,
    title: 'Transportation',
    description: 'Reliable and comfortable transportation options for all your travel needs during the trip.'
  },
  {
    icon: <Map className="text-primary h-12 w-12" />,
    title: 'Adventure Planning',
    description: 'Customized itineraries for thrill-seekers, including hiking, water sports, and local adventures.'
  },
  {
    icon: <Headphones className="text-primary h-12 w-12" />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for any queries or emergencies during your travel experience.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive travel services to make your journey comfortable and memorable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
