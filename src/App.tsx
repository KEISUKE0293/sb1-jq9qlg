import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-blue-50 hero-pattern">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-20">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-blue-900 text-white py-6 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 北村 佳資. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;