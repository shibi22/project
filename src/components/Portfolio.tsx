import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Udemy Clone Using Html, Css, Javascript',
    image: 'dist/assets/projectone.jpg',
    tags: ['HTML', 'CSS', 'Java Script'],
    demoUrl: 'https://shibi22.github.io/udemy/',
    githubUrl: 'https://github.com/shibi22/udemy.git',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'My Own service based website',
    image: 'dist/assets/second.png',
    tags: ['react', 'vite', 'Tpescript'],
    demoUrl: 'https://admirable-salmiakki-4e88cb.netlify.app/services',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Mobile-first responsive website',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: '#',
    githubUrl: '#',
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="min-h-screen flex items-center bg-gradient-to-br from-black to-gray-700 pt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demoUrl}
                    className="flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    <ExternalLink size={16} className="mr-1" /> Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 hover:text-gray-700"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;