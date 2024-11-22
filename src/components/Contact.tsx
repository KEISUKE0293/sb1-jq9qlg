import React from 'react';
import { Mail, Github, BookOpen, Instagram } from 'lucide-react';

interface ContactLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors p-3 rounded-lg hover:bg-blue-50"
  >
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </a>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact</h2>
        <div className="bg-white/80 backdrop-blur rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactLink
              href="mailto:cgug1031@gmail.com"
              icon={Mail}
              label="cgug1031@gmail.com"
            />
            <ContactLink
              href="https://github.com/KEISUKE0293"
              icon={Github}
              label="GitHub"
            />
            <ContactLink
              href="https://zenn.dev/keisuke0293"
              icon={BookOpen}
              label="Zenn"
            />
            <ContactLink
              href="https://www.instagram.com/keisuke0293/profilecard/?igsh=MXh4aHIwMmxzZTdhMg=="
              icon={Instagram}
              label="Instagram"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;