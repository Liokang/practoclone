const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/api/home", (req,res)=>{
    res.send("hello world") ;
});

app.get("/api/home/doctors", (req, res) => {
    const doctors = [
        {
            name: "Dr. Sheelavathi Natraj",
            specialization: "Dermatologist",
            experience: "21 years experience overall",
            location: "JP Nagar, Bangalore",
            clinic: "Sapphire Skin And Aesthetics Clinic",
            additionalClinics: ["+1 more"],
            consultationFee: "₹800 Consultation fee at clinic",
            recommendation: "94%",
            patientStories: "1506 Patient Stories",
            availability: "Available Today",
            image : "https://t4.ftcdn.net/jpg/02/69/98/99/360_F_269989951_9Gf7PWaRtrpm2EochO3D5WVn22sFZbNZ.jpg"
        }
        ,
        {
            name: "Dr. Rajesh Khanna",
            specialization: "Pediatrician",
            experience: "15 years experience overall",
            location: "Indiranagar, Bangalore",
            clinic: "Child Care Clinic",
            additionalClinics: [],
            consultationFee: "₹600 Consultation fee at clinic",
            recommendation: "96%",
            patientStories: "1200 Patient Stories",
            availability: "Available Tomorrow",
             image : "https://media.istockphoto.com/id/179011088/photo/indian-doctor.jpg?s=612x612&w=0&k=20&c=EwRn1EWy79prCtdo8yHM6hvCVVcaKTznVBpVURPJxt4="
        }
        ,
        {
            name: "Dr. Priya Sharma",
            specialization: "Gynecologist",
            experience: "18 years experience overall",
            location: "Koramangala, Bangalore",
            clinic: "Women's Health Center",
            additionalClinics: ["+2 more"],
            consultationFee: "₹700 Consultation fee at clinic",
            recommendation: "92%",
            patientStories: "980 Patient Stories",
            availability: "Available Today",
            image : "https://plus.unsplash.com/premium_photo-1682089872205-dbbae3e4ba32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZG9jdG9yfGVufDB8fDB8fHww"
        }
    ];

    res.json(doctors);
});


app.listen(5000,()=>{
    console.log("Listening to port 3000");
})