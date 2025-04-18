import SectionTitle from "./SectionTitle";
import React from "react";


const About: React.FC = () => {
  const features = [
    { icon: "fa-check-circle", title: "Mission", text: "Empowering students through holistic education." },
    { icon: "fa-star", title: "Vision", text: "Creating future leaders and innovators." },
    { icon: "fa-heart", title: "Values", text: "Integrity, excellence, and innovation." },
    { icon: "fa-users", title: "Community", text: "Diverse and inclusive environment." }
  ];

  return (
    <section id="about" className="py-20 wavy-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <SectionTitle 
              title="About"
              highlight="Future Academy"
              subtitle="Founded in 2010, Future Academy has established itself as a leader in innovative education, blending traditional learning with modern technologies and methodologies to prepare students for the challenges of tomorrow."
              center={false}
            />
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <i className={`fas ${feature.icon} text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="px-6 py-3 bg-primary hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors">
              Learn More
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-gray-200 dark:bg-dark-800 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Students in classroom" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg w-1/2 z-10">
              <div className="text-center">
                <h3 className="text-xl font-heading font-bold mb-1">25+</h3>
                <p className="text-sm">Specialized Programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;