import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">About Me</h2>
        <div className="bg-white/80 backdrop-blur rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform">
          <div className="prose max-w-none">
            <p className="text-lg text-blue-800 mb-6">
              フロントエンド開発を専門とし、特にReactとTypeScriptを用いた開発に携わっています。
              音楽制作が趣味で、その経験をUXデザインにおける直感的な操作性の追求に活かしています。
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">興味分野</h3>
              <ul className="list-none space-y-3">
                {['フロントエンド開発', 'UXデザイン', '音楽制作'].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="text-blue-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;