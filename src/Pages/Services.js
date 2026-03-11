import HomeLayout from "../Components/HomeLayout";
import { Wrench, CreditCard, ShieldCheck, Headphones } from "lucide-react";

function Services() {

  const services = [
    {
      title: "All Services",
      description: "Explore all the services that you have enrolled in.",
      icon: <Wrench size={28} />,
      status: "Active"
    },
    {
      title: "Payment Integration",
      description: "Secure and reliable payment gateway integration.",
      icon: <CreditCard size={28} />,
      status: "Active"
    },
    {
      title: "Market Trends",
      description: "Day-to-day monitoring of market trends to keep you informed.",
      icon: <ShieldCheck size={28} />,
      status: "Pending"
    },
    {
      title: "Customer Support",
      description: "Dedicated support team to help resolve your issues.",
      icon: <Headphones size={28} />,
      status: "Active"
    }
  ];

  return (
    <HomeLayout>

      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#617BD5]">Services</h1>
        <p className="text-gray-500">Manage and view the services you are subscribed to.</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((service, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
          >

            {/* Icon */}
            <div className="text-[#455FBF] mb-4">
              {service.icon}
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-[#455FBF] mb-2">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm mb-4">
              {service.description}
            </p>

            {/* Status + Button */}
            <div className="flex items-center justify-between">

              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  service.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {service.status}
              </span>

              <button className="text-sm bg-[#455FBF] text-white px-4 py-1 rounded hover:bg-[#455FBF] transition duration-300">
                View
              </button>

            </div>

          </div>

        ))}

      </div>

    </HomeLayout>
  );
}

export default Services;