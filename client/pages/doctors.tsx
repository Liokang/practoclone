import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import DoctorCard from './components/DoctorCard';

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/home/doctors")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDoctors(data); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="bg-gray-100 min-h-screen px-6 py-4">
        <div className="flex gap-2 max-w-4xl mx-auto mb-6">
          <SearchBar />
        </div>

        <FilterBar />

        <div className="text-center mb-4">
          <p className="text-lg font-medium">
            {doctors.length} Doctors available in <b>JP Nagar, Bangalore</b>
          </p>
          <p className="text-sm text-gray-600 mt-1">
            ✅ Book appointments with minimum wait-time & verified doctor details
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {loading ? (
            <p>Loading...</p>
          ) : (
            doctors.map((doctor, index) => (
              <DoctorCard
                key={index}
                image={doctor.image} 
                name= {doctor.name}
                specialty= {doctor.specialization}
                experience={doctor.experience}
                location= {`${doctor.location} • ${doctor.clinic} ${doctor.additionalClinics.join(" ")}`}
                fee= {doctor.consultationFee}
                rating={doctor.recommendation}
                stories={doctor.patientStories}
                available={doctor.availability.includes("Today")}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
