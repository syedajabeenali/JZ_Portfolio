import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Adaptive gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/30">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)`
          }}
        ></div>
      </div>

      {/* Geometric elements - adapted for both themes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-emerald-400 dark:bg-emerald-500 mix-blend-overlay filter blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-lg bg-teal-400 dark:bg-teal-600 mix-blend-overlay filter blur-xl"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-lime-300 dark:bg-lime-500 mix-blend-overlay filter blur-xl"></div>
      </div>

      {/* Particle effect */}
      <Particles />

      <div className="relative z-10 text-center text-gray-900 dark:text-white max-w-4xl mx-auto px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-emerald-600 to-teal-600 dark:from-white dark:via-emerald-200 dark:to-lime-200 bg-clip-text text-transparent">
            Jabeen Zahra
          </h1>
          <div className="text-xl md:text-2xl mb-8 text-emerald-600 dark:text-emerald-200">
            <span className="inline-block animate-pulse">Full Stack Developer</span>
            <span className="mx-4 text-gray-400 dark:text-emerald-300">•</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.5s' }}>React Specialist</span>
            <span className="mx-4 text-gray-400 dark:text-emerald-300">•</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '1s' }}>UI Engineer</span>
          </div>
          <p className="text-lg md:text-xl mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Building performant web applications with clean, maintainable code.
            Focused on creating intuitive user experiences with modern technologies.
          </p>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: 'https://github.com/syedajabeenali', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/jabeen-zahra-559a0129a', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:syedajabeen313@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-200/70 dark:bg-white/10 backdrop-blur-md rounded-full hover:bg-gray-300/70 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                aria-label={label}
              >
                <Icon size={24} className="text-gray-700 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300 transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 text-white rounded-full hover:from-emerald-600 hover:to-teal-600 dark:hover:from-emerald-700 dark:hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/20"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-300 dark:border-white/30 text-gray-900 dark:text-white rounded-full hover:bg-gray-100/50 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 text-gray-700/70 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

// Particle component with theme adaptation
const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400 dark:bg-emerald-300 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.3 + Math.random() * 0.3
          }}
        ></div>
      ))}
    </div>
  );
};

export default Hero;