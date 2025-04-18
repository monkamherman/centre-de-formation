import Card from './Card';
import SectionTitle from './component/SectionTitle';
import React from 'react';

const WhyChoose: React.FC = () => {
  const features = [
    {
      icon: "fa-brain",
      title: "Innovative Curriculum",
      description: "Our curriculum blends core subjects with critical 21st-century skills like coding, financial literacy, and design thinking."
    },
    {
      icon: "fa-chalkboard-teacher",
      title: "Expert Faculty",
      description: "Our teachers are not just educators but mentors with real-world experience in their fields of expertise."
    },
    {
      icon: "fa-laptop-code",
      title: "Tech-Integrated Learning",
      description: "Smart classrooms, VR labs, and 1:1 device programs ensure students are comfortable with technology."
    },
    {
      icon: "fa-globe-americas",
      title: "Global Perspective",
      description: "International exchange programs and globally focused curriculum prepare students for a connected world."
    },
    {
      icon: "fa-heartbeat",
      title: "Health & Wellness",
      description: "Comprehensive programs supporting physical and mental health of all students."
    },
    {
      icon: "fa-hand-holding-heart",
      title: "Personalized Support",
      description: "Individual learning plans and dedicated advisors ensure each student's success."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Why Choose"
          highlight="Future Academy"
          subtitle="We provide the best educational experience with our unique approach and facilities."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
            >
              {feature.description}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;