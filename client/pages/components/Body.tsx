import React from 'react';
import SearchBar from './SearchBar';
import { useRouter } from 'next/router';

function Body() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/doctors');  
  };

  return (
    <>
      <main
        className="relative text-white h-[600px] flex flex-col items-center justify-center px-4 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://blog.practo.com/wp-content/uploads/2017/04/Blog-Hero-Visual-1170x460.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p className="text-xl mb-5 text-center">
          Find and Book
        </p>

        <SearchBar />

        <button
          onClick={handleButtonClick}
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Search Doctors
        </button>

        <div className="mt-6 text-sm text-center">
          <span className="text-gray-300">Popular searches:</span>

          <span className="ml-2 px-2 py-1 bg-white/10 rounded">
            Dermatologist
          </span>

          <span className="ml-2 px-2 py-1 bg-white/10 rounded">
            Pediatrician
          </span>

          <span className="ml-2 px-2 py-1 bg-white/10 rounded">
            Gynecologist
          </span>

          <span className="ml-2 px-2 py-1 bg-white/10 rounded">
            Obstetrician
          </span>

          <span className="ml-2 px-2 py-1 bg-white/10 rounded">
            Others
          </span>
        </div>
      </main>
    </>
  );
}

export default Body;
