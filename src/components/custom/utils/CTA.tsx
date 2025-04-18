import React from "react";

const CTA:React.FC = () => {
    return (
      <section className="py-20 bg-gradient-to-r from-dark-900 to-dark-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Join the <span className="text-primary">Future Academy</span> Family?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            The journey to your child's bright future starts here. Schedule a tour or begin the application process today.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-3 bg-primary hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors shadow-lg">
              Schedule a Tour
            </button>
            <button className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-800 font-medium rounded-lg transition-colors shadow-lg">
              Apply Now
            </button>
          </div>
          <div className="mt-8 text-gray-300 text-sm flex flex-wrap justify-center gap-6">
            <span className="flex items-center">
              <i className="fas fa-phone-alt mr-2"></i> (555) 123-4567
            </span>
            <span className="flex items-center">
              <i className="fas fa-envelope mr-2"></i> admissions@futureacademy.edu
            </span>
            <span className="flex items-center">
              <i className="fas fa-map-marker-alt mr-2"></i> 123 Education Ave, Future City, FC 12345
            </span>
          </div>
        </div>
      </section>
    );
  };
  
  export default CTA;