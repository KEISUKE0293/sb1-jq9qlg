import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Projects</h2>
        <div className="bg-white/80 backdrop-blur rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform">
          <img
            src="https://nisk.doshisha.ac.jp/wp-content/uploads/2023/01/%E3%83%AD%E3%82%B4%E3%80%80NISLab-%E6%A8%AA.png"
            alt="NISK HP Project"
            className="w-full h-48 object-cover"
          />
          <div className="p-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">HP改修プロジェクト</h3>
            <p className="text-blue-800 mb-4">
              NISK HPの改修を行うプロジェクト。最新の技術スタックを活用し、
              ユーザビリティとパフォーマンスの向上を実現。
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/nisk-doshisha/nisk-website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://nisk.doshisha.ac.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;