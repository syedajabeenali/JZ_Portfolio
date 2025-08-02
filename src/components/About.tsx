import { User, Heart, Target, Zap } from 'lucide-react';
import jabeenPhoto from '../assets/jabeen-photo.jpg'; 

const About = () => {
  const highlights = [
    {
      icon: User,
      title: "Who I Am",
      description: "A passionate developer with a keen eye for design and user experience"
    },
    {
      icon: Heart,
      title: "What I Love",
      description: "Creating beautiful, functional solutions that solve real-world problems"
    },
    {
      icon: Target,
      title: "My Mission",
      description: "To bridge the gap between technology and human needs through thoughtful design"
    },
    {
      icon: Zap,
      title: "My Approach",
      description: "Combining technical expertise with creative thinking to deliver exceptional results"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Driven by curiosity and powered by passion, I'm on a mission to create digital experiences that inspire and delight.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              {/* Replace with your actual photo */}
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <img 
                  src={jabeenPhoto} 
                  alt="Jabeen Zahra" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full blur-xl opacity-30"></div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I'm Jabeen Zahra, a dedicated full-stack developer and UI/UX designer with a passion for creating 
              digital solutions that make a meaningful impact. My journey in technology began with curiosity and has 
              evolved into a deep commitment to crafting exceptional user experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With expertise spanning modern web technologies, I specialize in building scalable applications that 
              prioritize both functionality and aesthetics. I believe that great software should not only work 
              flawlessly but also feel intuitive and delightful to use.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, 
              or volunteering in my community. I'm always eager to take on new challenges and collaborate with 
              like-minded individuals who share my passion for innovation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;