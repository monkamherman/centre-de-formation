import React from 'react'

const Facts: React.FC = () => {
    const stats = [
      { value: "98%", label: "Graduation Rate" },
      { value: "100+", label: "Extracurricular Activities" },
      { value: "1:12", label: "Student-Teacher Ratio" },
      { value: "85%", label: "University Acceptance" }
    ];
  
    return (
      <section className="py-16 bg-primary dark:bg-primary/90 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Parents Choose Us</h2>
            <p className="max-w-2xl mx-auto text-lg opacity-90">
              Our achievements speak for themselves. Here are some quick facts about our school.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Facts;