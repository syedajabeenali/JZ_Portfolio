import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Led development of scalable web applications serving 100K+ users. Implemented modern React architectures and optimized backend performance by 40%.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
      achievements: [
        "Increased application performance by 40%",
        "Mentored 3 junior developers",
        "Led migration to microservices architecture"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Creative Solutions Ltd.",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with UX designers to create intuitive user interfaces. Specialized in React ecosystem and modern CSS frameworks.",
      technologies: ["React", "JavaScript", "SASS", "Figma", "Jest"],
      achievements: [
        "Delivered 15+ client projects on time",
        "Improved code test coverage to 85%",
        "Established component library standards"
      ]
    },
    {
      title: "UI/UX Designer & Developer",
      company: "Digital Agency Pro",
      location: "Los Angeles, CA",
      period: "2018 - 2020",
      description: "Designed and developed user-centered digital experiences for various clients. Conducted user research and created wireframes, prototypes, and final implementations.",
      technologies: ["HTML", "CSS", "JavaScript", "Adobe XD", "Sketch"],
      achievements: [
        "Increased user engagement by 60%",
        "Reduced bounce rate by 35%",
        "Won 'Best Design' award for e-commerce project"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey of growth, learning, and creating impactful solutions across various industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 pl-12 md:pl-0' : 'md:pl-12 pl-12'
                }`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 group border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <Briefcase size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                          <p className="text-emerald-600 dark:text-emerald-400 font-medium">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-emerald-100 dark:bg-gray-700 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;