import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Experience</h2>
        <div className="bg-white/80 backdrop-blur rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900">フロントエンド開発</h3>
              <p className="text-blue-600 mt-1">NISK Inc.</p>
              <p className="text-blue-800 mt-4">
                アプリのシステムの開発に従事し、主にフロントエンド開発を担当。
                モダンな技術スタックを活用し、ユーザー体験の向上に貢献。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;