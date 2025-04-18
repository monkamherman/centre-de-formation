import SectionTitle from './component/SectionTitle';
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      rating: 5,
      text: "The personalized approach to learning has made all the difference for my son. He's more engaged and excited about school than ever before.",
      author: "Sarah Johnson",
      role: "Parent of 3rd Grader",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      rating: 5,
      text: "The STEM program is exceptional. My daughter is already learning coding concepts in 5th grade that I didn't encounter until college!",
      author: "Michael Chen",
      role: "Parent of 5th Grader",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      rating: 4.5,
      text: "The communication from teachers and administration is outstanding. We feel like true partners in our child's education.",
      author: "Elena Rodriguez",
      role: "Parent of 8th Grader",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="py-20 wavy-bg">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="What"
          highlight="Parents Say"
          subtitle="Hear from our community about their experiences at Future Academy."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-dark-800 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-primary text-2xl mr-2">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`fas ${i < Math.floor(testimonial.rating) ? 'fa-star' : (i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0 ? 'fa-star-half-alt' : 'fa-star')`}
                    ></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;