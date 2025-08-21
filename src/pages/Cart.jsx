import React from "react";
import { Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaPlus, FaMinus, FaArrowLeft } from "react-icons/fa";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="mx-auto w-full max-w-2xl text-center">
        <div className="bg-white py-12 px-6 shadow-lg sm:rounded-lg">
          <FaShoppingCart className="text-6xl text-gray-300 mx-auto mb-6" />
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h4>
          <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <FaArrowLeft className="mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    
    // 修复价格计算 - 处理包含美元符号和逗号的价格
    state.forEach((item) => {
      const cleanPrice = parseFloat(item.price.replace(/[$,]/g, ''));
      subtotal += cleanPrice * item.qty;
      totalItems += item.qty;
    });
    
    return (
      <>
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Item List */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h5 className="text-xl font-semibold text-gray-900">Item List</h5>
                </div>
                <div className="p-6">
                  {state.map((item, index) => {
                    const cleanPrice = parseFloat(item.price.replace(/[$,]/g, ''));
                    return (
                      <div key={item.id}>
                        <div className="flex items-center space-x-4 py-4">
                          <div className="flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-20 h-20 object-contain rounded-lg border border-gray-200"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="text-lg font-semibold text-gray-900 truncate">
                              {item.title}
                            </p>
                          </div>

                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2">
                              <button
                                className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200"
                                onClick={() => removeItem(item)}
                              >
                                <FaMinus className="w-4 h-4" />
                              </button>

                              <span className="w-12 text-center font-semibold text-gray-900">{item.qty}</span>

                              <button
                                className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200"
                                onClick={() => addItem(item)}
                              >
                                <FaPlus className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="text-right min-w-[80px]">
                              <p className="font-semibold text-gray-900">
                                ${(cleanPrice * item.qty).toFixed(2)}
                              </p>
                              <p className="text-sm text-gray-500">
                                ${cleanPrice.toFixed(2)} each
                              </p>
                            </div>
                          </div>
                        </div>
                        {index < state.length - 1 && (
                          <hr className="border-gray-200" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <h5 className="text-xl font-semibold text-gray-900">Order Summary</h5>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Products ({totalItems})</span>
                      <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold text-gray-900">${shipping.toFixed(2)}</span>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">Total amount</span>
                      <span className="text-lg font-bold text-green-600">${(subtotal + shipping).toFixed(2)}</span>
                    </div>
                  </div>

                  <Link
                    to="/checkout"
                    className="w-full mt-6 inline-flex justify-center items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Go to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Shopping Cart</h1>
            <div className="w-24 h-1 bg-green-600 rounded mx-auto"></div>
          </div>
          
          {state.length > 0 ? <ShowCart /> : <EmptyCart />}
        </div>
      </div>
    </>
  );
};

export default Cart;
