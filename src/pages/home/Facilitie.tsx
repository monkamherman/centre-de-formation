import SectionTitle from './component/SectionTitle';
import React from 'react';

const Facilities: React.FC = () => {
  const facilities = [
    {
      icon: "fa-flask",
      title: "Science & Innovation Labs",
      description: "Modern laboratories equipped with cutting-edge technology for physics, chemistry, biology, and robotics."
    },
    {
      icon: "fa-music",
      title: "Performing Arts Center",
      description: "Professional-grade theater, music rooms, and dance studios for artistic expression."
    },
    {
      icon: "fa-book-open",
      title: "Digital Library",
      description: "Extensive collection of physical and digital resources with quiet study spaces."
    },
    {
      icon: "fa-running",
      title: "Sports Complex",
      description: "Olympic-sized swimming pool, gymnasium, track & field, and multiple outdoor courts."
    }
  ];

  return (
    <section className="py-20 wavy-bg">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Our"
          highlight="World-Class Facilities"
          subtitle="State-of-the-art learning environments designed to inspire innovation and creativity."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {facilities.slice(0, 2).map((facility, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 p-8 rounded-xl shadow-lg">
                <div className="text-primary mb-4">
                  <i className={`fas ${facility.icon} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{facility.description}</p>
              </div>
            ))}
          </div>
          
          {/* Center Column (Image) */}
          <div className="hidden md:flex items-center">
            <div className="relative w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="School Campus" 
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                <i className="fas fa-medal text-3xl"></i>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {facilities.slice(2, 4).map((facility, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 p-8 rounded-xl shadow-lg">
                <div className="text-primary mb-4">
                  <i className={`fas ${facility.icon} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;