import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import productsData from "../api/products";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setData(productsData);
      setFilter(productsData);
      setLoading(false);
    }, 1000); // simulate fetch delay

    return () => clearTimeout(timeout);
  }, []);

  const filterProduct = (region) => {
    const updatedList = data.filter((item) => item.region === region);
    setFilter(updatedList);
  };

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
          >
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="text-center py-2">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <button
              className="px-6 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={() => setFilter(data)}
            >
              All
            </button>
            <button
              className="px-6 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={() => filterProduct("Europe")}
            >
              Europe
            </button>
            <button
              className="px-6 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={() => filterProduct("North America")}
            >
              North America
            </button>
            <button
              className="px-6 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={() => filterProduct("Asia")}
            >
              Asia
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filter.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              <div className="p-4">
                <img
                  className="w-full h-48 object-contain p-4"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="px-6 pb-4">
                <h5 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  {product.name.substring(0, 40)}
                </h5>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-700"><span className="font-semibold">Price:</span> {product.price}</p>
                  <p className="text-gray-700"><span className="font-semibold">Region:</span> {product.region}</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <Link
                    to={"/product/" + product.id}
                    className="w-full px-4 py-2 bg-green-600 text-white text-center rounded-md hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    View Details
                  </Link>
                  <button
                    className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    onClick={() => {
                      toast.success("Added to cart");
                      addProduct(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-2"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Marketplace
        </h2>
        <div className="w-24 h-1 bg-green-600 rounded"></div>
      </motion.div>
      
      <div className="w-full">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
