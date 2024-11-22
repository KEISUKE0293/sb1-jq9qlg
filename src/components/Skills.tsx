import React from 'react';
import { Code, Server, Wrench, Cloud } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ElementType;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon: Icon }) => (
  <div className="bg-white/80 backdrop-blur rounded-xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-blue-600 mr-2" />
      <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-blue-100 rounded-full text-blue-800 text-sm font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      icon: Code,
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python'],
      icon: Server,
    },
    {
      title: 'Tools',
      skills: ['Git'],
      icon: Wrench,
    },
    {
      title: 'Other',
      skills: ['AWS'],
      icon: Cloud,
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;