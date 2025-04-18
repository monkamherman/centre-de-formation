const ContactInfos = () => {
    return (
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact Info</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
            <span>123 Education Avenue, Future City, FC 12345</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-phone-alt mr-3 text-primary"></i>
            <span>Phone: (555) 123-4567</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-envelope mr-3 text-primary"></i>
            <span>Email: info@futureacademy.edu</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-clock mr-3 text-primary"></i>
            <span>Hours: Mon-Fri, 8:00 AM – 5:00 PM</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-globe mr-3 text-primary"></i>
            <span>Website: www.futureacademy.edu</span>
          </li>
        </ul>
      </div>
    );
  };
  
  export default ContactInfos;