import { useRouter } from 'next/router';
import { useState } from 'react';

function SearchBar() {
  
  return (
    <div className="bg-white  rounded-md flex w-full max-w-3xl overflow-hidden shadow-lg">
      <input type="text" className="w-1/3 p-3 text-black border-r outline-none" placeholder="📍 Bangalore"/>
      <input
        type="text" className="w-2/3 p-3 text-black outline-none" placeholder="Search doctors, clinics, hospitals, etc." />
    </div>
  );
}

export default SearchBar;