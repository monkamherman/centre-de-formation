import React from "react";

const Newsletter:React.FC = () => {
    return (
      <>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Newsletter</h3>
        <p className="mb-4">Subscribe to our newsletter to receive updates about our programs and events.</p>
        <form className="mb-4">
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-800 dark:text-white"
            />
            <button 
              type="submit" 
              className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-yellow-600 transition-colors"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </form>
        <p className="text-sm">We respect your privacy. Unsubscribe at any time.</p>
      </>
    );
  };
  
  export default Newsletter;