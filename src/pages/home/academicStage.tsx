import SectionTitle from './component/SectionTitle';

const AcademicStages = () => {
  const stages = [
    {
      title: "Kindergarten",
      ageRange: "Ages 3-5",
      image: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Play-based learning focusing on social skills, early literacy, and numeracy foundations."
    },
    {
      title: "Elementary School",
      ageRange: "Grades 1-5",
      image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Building strong academic foundations while nurturing curiosity and creativity."
    },
    {
      title: "Middle School",
      ageRange: "Grades 6-8",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Developing critical thinking skills and exploring diverse academic interests."
    },
    {
      title: "High School",
      ageRange: "Grades 9-12",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "College preparatory program with advanced placement and career pathways."
    }
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-dark-800 wavy-top">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Our"
          highlight="Academic Stages"
          subtitle="Tailored education for each developmental stage of your child's growth."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, index) => (
            <div key={index} className="group relative overflow-hidden bg-white dark:bg-dark-700 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={stage.image} 
                  alt={stage.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  {stage.ageRange}
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-dark-800">{stage.title}</h3>
                <p className="text-gray-600 dark:text-dark-300 mb-4 ">{stage.description}</p>
                <a href="#" className="text-primary font-medium flex items-center">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicStages;