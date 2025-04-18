import SectionTitle from './component/SectionTitle';
import React from 'react';

const News: React.FC = () => {
  const newsItems = [
    {
      title: "Robotics Team Wins National Championship",
      date: "June 15, 2023",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Our high school robotics team secured first place in the national competition with their innovative design."
    },
    {
      title: "New Science Wing Grand Opening",
      date: "May 28, 2023",
      image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Our state-of-the-art science facility is now open, featuring advanced labs and interactive learning spaces."
    },
    {
      title: "Summer Enrichment Program Registration",
      date: "May 12, 2023",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Registration is now open for our popular summer programs in STEM, arts, and sports."
    }
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-dark-800 wavy-top">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Latest"
          highlight="News & Events"
          subtitle="Stay updated with the latest happenings at Future Academy."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-dark-800">{item.title}</h3>
                <p className="text-gray-600 dark:text-dark-300 mb-4">{item.description}</p>
                <a href="#" className="text-primary font-medium flex items-center">
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-primary hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors shadow-lg">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;