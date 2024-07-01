import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { WiNightSleetStorm } from "react-icons/wi";

function Header({ toggleDarkMode, isDarkMode }) {
  const handleClick = () => {
    const navDialog = document.getElementById("nav-dialog");
    navDialog.classList.toggle("hidden");
  };

  return (
    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 dark:bg-gray-900 dark:text-white">
      <nav className="flex justify-between items-center">
        <a href="#" className="text-4xl cursor-pointer hover:scale-110">
          <WiNightSleetStorm size={50} />
        </a>
        <div className="hidden md:flex gap-12">
          <a
            href="#"
            className="font-medium text-xl p-2 hover:scale-110 ease-in-out"
          >
            About
          </a>
          <a
            href="#"
            className="font-medium text-xl p-2 hover:scale-110 ease-in-out"
          >
            Contact
          </a>
          <a
            href="#"
            className="font-medium text-xl p-2 hover:scale-110 ease-in-out"
          >
            Sign In
          </a>
        </div>
        <button
          className="hidden md:flex gap-3 p-2 hover:scale-110"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <IoSunnyOutline size={20} /> : <FaSun size={20} />}
        </button>
        <button className="p-2 md:hidden" onClick={handleClick}>
          <MdMenu className="cursor-pointer" />
        </button>
        <div
          id="nav-dialog"
          className="md:hidden fixed p-3 inset-0 bg-gradient-to-r from-blue-500 to-purple-500 dark:text-white "
        >
          <div className="flex justify-between">
            <a href="#" className="text-4xl cursor-pointer">
              <WiNightSleetStorm size={50} />
            </a>
            <button className="p-2 md:hidden" onClick={handleClick}>
              <IoClose className="cursor-pointer" />
            </button>
          </div>
          <div className="flex flex-col mt-6">
            <a
              href="#"
              className="m-2 p-2 font-medium p-3 hover:scale-110 ease-in-out"
            >
              About
            </a>
            <a
              href="#"
              className="m-2 p-2 font-medium p-3 hover:scale-110 ease-in-out"
            >
              Contact
            </a>
            <a
              href="#"
              className="m-2 p-2 font-medium p-3 hover:scale-110 ease-in-out"
            >
              Sign In
            </a>
          </div>
          <div className="mt-6 h-[1px] bg-purple-600"></div>
          <button className="m-4" onClick={toggleDarkMode}>
            {isDarkMode ? <IoSunnyOutline size={20} /> : <FaSun size={20} />}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
