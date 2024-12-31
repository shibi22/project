import React from 'react';
import { Palette, FileCode, Linkedin, Server, Globe } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Recent Designing',
    description: 'Creating modern and responsive web designs with attention to detail and user experience.',
  },
  {
    icon: FileCode,
    title: 'Portfolio Creation',
    description: 'Building professional portfolios that showcase your skills and achievements effectively.',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Optimization',
    description: 'Optimizing your LinkedIn profile to attract opportunities and network effectively.',
  },
  {
    icon: Server,
    title: 'Project Development',
    description: 'Developing full-stack applications with modern technologies and best practices.',
  },
  {
    icon: Globe,
    title: 'Domain Hosting',
    description: 'Setting up and managing domain hosting for your web applications.',
  },
];

const Services = () => {
  return (
    <section id="services" className="min-h-screen flex items-center bg-gradient-to-br from-black to-gray-700 pt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow group"
            >
              <service.icon className="w-12 h-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;