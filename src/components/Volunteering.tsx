import { Heart, Users, Globe, Award } from 'lucide-react';

const Volunteering = () => {
  const volunteerWork = [
    {
      organization: "Code for Good",
      role: "Web Development Mentor",
      period: "2021 - Present",
      description: "Teaching web development skills to underrepresented communities and helping them build their first websites and web applications.",
      impact: "Mentored 50+ students",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: Users
    },
    {
      organization: "Local Food Bank",
      role: "Technology Volunteer",
      period: "2020 - Present",
      description: "Developed and maintained the food bank's inventory management system, helping track donations and distribute food more efficiently.",
      impact: "Improved efficiency by 40%",
      image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: Heart
    },
    {
      organization: "Girls Who Code",
      role: "Workshop Facilitator",
      period: "2019 - 2022",
      description: "Conducted coding workshops for young girls, introducing them to programming concepts and encouraging STEM participation.",
      impact: "Reached 200+ participants",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: Globe
    },
    {
      organization: "Open Source Projects",
      role: "Contributor",
      period: "2018 - Present",
      description: "Active contributor to various open-source projects, focusing on accessibility improvements and documentation.",
      impact: "100+ contributions",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: Award
    }
  ];

  return (
    <section id="volunteering" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Giving <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">Back</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Using my skills and passion to make a positive impact in the community and support causes I believe in
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {volunteerWork.map((work, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.organization}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                    <work.icon size={24} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {work.organization}
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">{work.role}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {work.period}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {work.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{work.impact}</span>
                  </div>
                  <Heart 
                    size={20} 
                    className="text-red-400 group-hover:text-red-500 transition-colors duration-300" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to Collaborate?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              I'm always looking for opportunities to contribute to meaningful projects and causes. 
              If you have a project that could benefit from my skills, let's connect!
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-emerald-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;