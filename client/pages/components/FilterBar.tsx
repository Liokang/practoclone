import React from 'react';

function FilterBar() {
    return (
      <div className="w-full bg-[#2f3ca4] text-white py-4">
        <div className="flex flex-wrap justify-center gap-4 px-4 max-w-7xl mx-auto">

          <select className="bg-[#2f3ca4] border border-white/40 px-4 py-2 rounded-md">
            <option>Gender</option>
          </select>
          <select className="bg-[#2f3ca4] border border-white/40 px-4 py-2 rounded-md">
            <option>Patient Stories</option>
          </select>
          <select
            className="bg-[#2f3ca4] border border-white/40 px-4 py-2 rounded-md"
          >
            <option>Experience</option></select>

          <select className="bg-[#2f3ca4] border border-white/40 px-4 py-2 rounded-md">
            <option>All Filters</option>
          </select>
          <select className="bg-[#2f3ca4] border border-white/40 px-4 py-2 rounded-md">
            <option>Sort By: Relevance</option> </select>

        </div>
      </div>
    );
}

export default FilterBar;
