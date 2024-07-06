import { Link } from "react-scroll";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      name="footer"
      className="bg-gradient-to-r from-blue-500 to-purple-500 dark:text-white px-6 pt-6"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-3">
          <div className="w-full sm:w-1/3">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-sm pb-4 md:pr-3">
              Welcome to our Weather Dashboard! This app provides real-time
              weather updates forecast for cities worldwide. Easily switch
              cities, search or by current location and find accurate weather
              data, all with a sleek, responsive design. Stay updated with the
              latest weather forecasts and alerts.
            </p>
          </div>
          <div className="w-full sm:w-1/3 md:px-6">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="text-sm pb-4">
              <li>
                <Link
                  to="weather"
                  smooth={true}
                  className="cursor-pointer hover:scale-110 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="footer"
                  smooth={true}
                  className="cursor-pointer hover:text-gray-400 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="footer"
                  smooth={true}
                  className="cursor-pointer hover:text-gray-400 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 ">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-sm">Email: onedevshahan@gmail.com</p>
            <p className="text-sm pb-4">Phone: +91 1234567890</p>
            <div className="flex mt-2">
              <a
                href="https://www.linkedin.com/in/shahan-ahmad-5aa56b10a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300 mr-4"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/OneDevShahan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300 mr-4"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:onedevshahan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300 mr-4"
              >
                <IoMail />
              </a>
              <a
                href="https://www.linkedin.com/in/shahan-ahmad-5aa56b10a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300 mr-4"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/shahan-ahmad-5aa56b10a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300 mr-4"
              >
                <FaTelegram />
              </a>
              <a
                href="https://drive.google.com/file/d/1vZUp_3EGhhyKoZudt57nJxynMSMbd79s/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300 mr-4"
              >
                <BsFillPersonLinesFill />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-2">
        <p>
          &copy; {new Date().getFullYear()} WeatherApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
