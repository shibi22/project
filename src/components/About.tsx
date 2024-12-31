import React from 'react';
import { Code, Shield, Database, GitBranch } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Java', icon: Code, level: 95 },
    { name: 'Python', icon: Code, level: 70 },
    { name: 'HTML/CSS', icon: Code, level: 90 },
    { name: 'MySQL', icon: Database, level: 75 },
    { name: 'Git', icon: GitBranch, level: 85 },
    { name: 'Cybersecurity', icon: Shield, level: 30 },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-black to-gray-700 pt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-600 mb-6">
            I'm a passionate developer and cybersecurity enthusiast with a strong foundation in various programming languages
            and technologies. My goal is to create secure and efficient solutions while continuously learning and growing in
            the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                <skill.icon className="w-6 h-6 text-indigo-600 mr-2" />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;