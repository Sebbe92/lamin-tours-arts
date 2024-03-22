import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed  z-20 w-full ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start">
          <div className="w-full sm:w-fit flex items-center justify-center rounded-full bg-white border-2  sm:px-10 py-1 mt-3 md:ms-20 overflow-auto">
            <a
              href="#top"
              className="font-bold p-1 sm:p-2 hover:text-primary text-black"
            >
              Top
            </a>
            <a
              href="#about"
              className="font-bold p-1 sm:p-2 hover:text-secondary text-black"
            >
              About
            </a>
            <a
              href="#experiences"
              className="font-bold p-1 sm:p-2  hover:text-tertiary text-black"
            >
              Experiences
            </a>

            <a
              href="#contact"
              className="font-bold p-1 sm:p-2  hover:text-secondary text-black"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
