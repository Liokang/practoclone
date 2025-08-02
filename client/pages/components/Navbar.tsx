import React from 'react';

function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white text-black shadow">

      <div className="flex items-center gap-8">
        <div className="w-32">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/de/Practo_New_Logo.png"
            alt="Practo Logo"
            className="w-full"
          />
        </div>

        <nav className="flex gap-6 font-medium">
          <a href="#" className="hover:text-blue-600 transition-colors duration-200 hover:underline">
            Find Doctors
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200 hover:underline">
            Video Consult
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-200 hover:underline">
            Surgeries
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-6 font-medium">
        
        <div className="relative group">
          <button className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-1">
            For Corporates <span>▼</span>
          </button>
          <div className="absolute hidden group-hover:block bg-white border shadow-md mt-2 rounded-md w-48 z-50">
            <a href="#" className="block px-4 py-2 hover:bg-blue-50">Wellness Programs</a>
            <a href="#" className="block px-4 py-2 hover:bg-blue-50">Health Checkups</a>
          </div>
        </div>

        <div className="relative group">
          <button className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-1">
            For Providers <span>▼</span>
          </button>
          <div className="absolute hidden group-hover:block bg-white border shadow-md mt-2 rounded-md w-48 z-50">
            <a href="#" className="block px-4 py-2 hover:bg-blue-50">Join Practo</a>
            <a href="#" className="block px-4 py-2 hover:bg-blue-50">Partner With Us</a>
          </div>
        </div>

        <div className="relative group">
          <button className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-1">
            Security & Help <span>▼</span>
          </button>
          <div className="absolute hidden group-hover:block bg-white border shadow-md mt-2 rounded-md w-48 z-50">
            <a href="#" className="block px-4 py-2 hover:bg-blue-50">Help Center</a>
            <a href="#" className="block px-4 py-2 hover:bg-blue-50">Privacy Policy</a>
            <a href="#" className="block px-4 py-2 hover:bg-blue-50">Terms</a>
          </div>
        </div>

        <button className="border px-4 py-1 rounded-md hover:text-blue-600 transition-colors duration-200">
          Login / Signup
        </button>

      </div>
    </header>
  );
}

export default Navbar;
