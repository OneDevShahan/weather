const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-500 dark:text-white py-9">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/3 mb-4">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p>
              We provide accurate and reliable weather information to help you
              plan your day. Stay updated with the latest weather forecasts and
              alerts.
            </p>
          </div>
          <div className="w-full sm:w-1/3 mb-4">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 mb-4">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email: onedevshahan@gmail.com</p>
            <p>Phone: +91 1234567890</p>
            <div className="flex mt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition duration-300 mr-4"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition duration-300 mr-4"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition duration-300 mr-4"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200 transition duration-300"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>
            &copy; {new Date().getFullYear()} WeatherApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
