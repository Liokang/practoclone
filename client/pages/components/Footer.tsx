import React from "react"; 

function footer(){
    return(
        <>
        <footer className="bg-[#0b153e] text-white py-8 px-4 text-sm text-center">
  <div className="flex flex-wrap justify-center divide-x divide-white/30 max-w-4xl mx-auto">
    {[{ icon: <i class="bi bi-chat-right-dots"></i>,label: "Consult with a doctor" },
      { icon:  <i class="bi bi-cart4"></i>, label: "Order Medicines" },
      { icon:<i class="bi bi-journal-check"></i>, label: "View medical records" },
      { icon: <i class="bi bi-flask"></i>, label: "Book test"},
      { icon: <i class="bi bi-book"></i>, label: "Read articles"},
      { icon: <i class="bi bi-briefcase"></i>, label: "For healthcare providers"},
    ].map((item, index) => (
      <div key={index} className="flex flex-col items-center px-4">
        <span className="text-xl mb-1">{item.icon}</span>
        <span className="whitespace-nowrap">{item.label}</span>
      </div>
    ))}
  </div>
</footer>



</>
    )

}

export default footer;