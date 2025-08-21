import React, { useState, useEffect } from 'react'
import { Navbar } from "../components";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const allSuppliers = [
  {
    id: 1, 
    name: "Sparkion", 
    image: "https://media.licdn.com/dms/image/v2/C4E0BAQFRgFsYdpO54A/company-logo_200_200/company-logo_200_200/0/1635776473174/sparkion_logo?e=2147483647&v=beta&t=h1hX0MiQlVo4yxv2KIh0KDk6Skb88Ox5R9T9omcev8Q", 
    region: "Europe",
  }, 
  {
    id: 2,
    name: "Repurpose Battery, Inc",
    image: "https://static.wixstatic.com/media/f1e5e1_57dd8d190c5b462cabd325833cce98f3~mv2.png",
    region: "North America",
  },
  {
    id: 3,
    name: "Connected Energy",
    image: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/tzvswizwbwjcgozdhbnu",
    region: "Europe",
  },
  {
    id: 4,
    name: "Intertek",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKgCKMxn9IEA0TJUSDiFcaLa0QnkxpSySlQ&s",
    region: "Asia",
  },
]

const SupplierPage = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setData(allSuppliers);
    setFiltered(allSuppliers);
  }, []);
  
  const handleFilter = (region) =>{
    if (region === "All") {
      setFiltered(data);
    } else {
      setFiltered(data.filter(supplier => supplier.region === region));
    }
  };

  const regions = ["All", ...new Set(data.map(s => s.region))];
  
  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-5xl text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Supplier Directory
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The new and enhanced Parthian Supplier Directory brings together suppliers and companies showcasing their batteries all year round. The supplier directory is refreshed monthly.
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 mx-auto w-full max-w-7xl"
        >
          <div className="bg-white py-6 px-6 shadow-lg sm:rounded-lg">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
              Our Suppliers
            </h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {regions.map(region => (
                <button
                  key={region}
                  className="px-6 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  onClick={() => handleFilter(region)}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* Supplier Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((supplier, index) => (
                <motion.div
                  key={supplier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      className="w-full h-48 object-contain p-2" 
                      src={supplier.image} 
                      alt={supplier.name} 
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                      {supplier.name}
                    </h3>
                    <div className="flex items-center justify-center text-gray-600">
                      <FaMapMarkerAlt className="text-green-600 mr-2" />
                      <span className="text-sm">{supplier.region}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SupplierPage