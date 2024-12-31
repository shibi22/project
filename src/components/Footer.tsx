import React from 'react';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/cbee..rawj_/',
      label: 'Instagram',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/shibiraj-r/',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/shibi22',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:shibi73201@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Shibiraj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;