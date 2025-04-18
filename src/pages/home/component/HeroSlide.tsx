import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Future Academy",
      highlight: "Future",
      description: "Preparing students for success in an ever-changing world with innovative education approaches.",
      bg: "bg-gradient-to-r from-dark-900 to-dark-800",
      buttons: [
        { text: "Explore More", link: "#about", bg: "bg-primary hover:bg-yellow-600 text-white" },
        { text: "Contact Us", link: "#contact", bg: "bg-white hover:bg-gray-100 text-gray-800" }
      ]
    },
    {
      title: "STEM Education",
      highlight: "Education",
      description: "State-of-the-art laboratories and programs to foster innovation and critical thinking.",
      bg: "bg-gradient-to-r from-blue-900 to-blue-700",
      buttons: [
        { text: "Our Programs", link: "#programs", bg: "bg-primary hover:bg-yellow-600 text-white" }
      ]
    },
    {
      title: "2024 Admissions Open",
      highlight: "2024",
      description: "Limited seats available for our upcoming academic year. Apply now to secure your spot.",
      bg: "bg-gradient-to-r from-purple-900 to-indigo-700",
      buttons: [
        { text: "Apply Now", link: "#apply", bg: "bg-primary hover:bg-yellow-600 text-white" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const changeSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide flex items-center justify-center ${slide.bg} ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white animate-fade-in">
                <span className="text-primary">{slide.highlight}</span> {slide.title.replace(slide.highlight, '')}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90">{slide.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                {slide.buttons.map((button, btnIndex) => (
                  <Link
                    key={btnIndex}
                    to={button.link}
                    className={`px-8 py-3 ${button.bg} font-medium rounded-lg transition-colors shadow-lg`}
                  >
                    {button.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-primary' : 'bg-white'}`}
              onClick={() => changeSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;