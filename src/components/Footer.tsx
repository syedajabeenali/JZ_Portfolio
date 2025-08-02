import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">JZ</span>
              </div>
              <span className="text-xl font-semibold">Jabeen Zahra</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Crafting digital experiences that blend innovation with elegance. 
              Always learning, always creating.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Volunteering', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
            <div className="space-y-2 text-gray-400">
              <a href="mailto:syedajabeen313@gmail.com" className="hover:text-emerald-400 transition-colors duration-300">syedajabeen313@gmail.com</a>
              <a href="tel:+923241477228" className="hover:text-emerald-400 transition-colors duration-300">+92 3241477228</a>
              <p>Pakistan</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-400" />
            <span>by Jabeen Zahra</span>
          </div>

          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Jabeen Zahra. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="group p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;