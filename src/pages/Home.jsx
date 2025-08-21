import { Navbar, Product } from "../components";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Navbar />

      {/* WRAP SIDEBAR + CONTENT IN SAME FLEX CONTAINER */}
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Page content on the right */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 py-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto w-full max-w-7xl">
            <Product />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Home;