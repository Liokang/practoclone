import React from 'react';

type Props = {
  image      : string;
  name       : string;
  specialty  : string;
  experience : string;
  location   : string;
  fee        : string;
  rating     : string;
  stories    : string;
  ad?        : boolean;
  available? : boolean;};

function DoctorCard({
  image,name,specialty, experience, location, fee, rating,stories,ad, available
}: Props) {
  return (
    <div className="bg-white p-4 rounded shadow-sm flex flex-col sm:flex-row gap-4 items-start">
      
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover"
      />

      <div className="flex-1">
        <h2 className="text-blue-700 font-semibold text-lg">
          {name}
        </h2>

        <p className="text-sm text-gray-700">{specialty}</p>
        <p className="text-sm">{experience}</p>
        <p className="text-sm">{location}</p>

        <p className="text-sm font-medium mt-1">
          {fee}
        </p>

        <div className="flex gap-3 mt-2 items-center flex-wrap">
          <span className="bg-green-600 text-white px-2 py-1 text-xs rounded font-semibold flex items-center gap-1">
            <span className="inline-block">👍</span> {rating}
          </span>

          <span className="text-blue-600 text-sm underline cursor-pointer">
            {stories}
          </span>

          {available && (
            <span className="text-green-600 text-sm flex items-center gap-1">
              📅 Available Today
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 min-w-[150px]">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition"
        >
          Book Clinic Visit
        </button>

        {!ad && (
          <button className="border px-4 py-2 rounded text-sm hover:bg-gray-100">
            📞 Contact Clinic
          </button>
        )}
      </div>

    </div>
  );
}

export default DoctorCard;
