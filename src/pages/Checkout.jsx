import React from "react";
import { Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCreditCard, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
      <div className="mx-auto w-full max-w-2xl text-center">
        <div className="bg-white py-12 px-6 shadow-lg sm:rounded-lg">
          <FaMapMarkerAlt className="text-6xl text-gray-300 mx-auto mb-6" />
          <h4 className="text-2xl font-bold text-gray-900 mb-4">No items in Cart</h4>
          <p className="text-gray-600 mb-6">Please add some items to your cart before checkout.</p>
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

  const ShowCheckout = () => {
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
            {/* Billing Address & Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900">Billing Address</h4>
                </div>
                <div className="p-6">
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-xs font-medium text-gray-700 mb-1">
                          First name
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          id="firstName"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-xs font-medium text-gray-700 mb-1">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          id="lastName"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        id="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-xs font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        id="address"
                        placeholder="1234 Main St"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="address2" className="block text-xs font-medium text-gray-700 mb-1">
                        Address 2 <span className="text-gray-500">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="country" className="block text-xs font-medium text-gray-700 mb-1">
                          Country
                        </label>
                        <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" id="country" required>
                          <option value="">Choose...</option>
                          <option>United States</option>
                          <option>Canada</option>
                          <option>United Kingdom</option>
                          <option>Germany</option>
                          <option>France</option>
                          <option>Japan</option>
                          <option>China</option>
                          <option>India</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="state" className="block text-xs font-medium text-gray-700 mb-1">
                          State
                        </label>
                        <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" id="state" required>
                          <option value="">Choose...</option>
                          <option>California</option>
                          <option>New York</option>
                          <option>Texas</option>
                          <option>Florida</option>
                          <option>Virginia</option>
                          <option>Massachusetts</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="zip" className="block text-xs font-medium text-gray-700 mb-1">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          id="zip"
                          placeholder="12345"
                          required
                        />
                      </div>
                    </div>

                    <hr className="border-gray-200" />

                    <div className="flex items-center space-x-2 mb-3">
                      <FaCreditCard className="text-green-600 text-sm" />
                      <h4 className="text-base font-semibold text-gray-900">Payment</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cc-name" className="block text-xs font-medium text-gray-700 mb-1">
                          Name on card
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          id="cc-name"
                          placeholder="Full name as displayed on card"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="cc-number" className="block text-xs font-medium text-gray-700 mb-1">
                          Credit card number
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          id="cc-number"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cc-expiration" className="block text-xs font-medium text-gray-700 mb-1">
                          Expiration
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          id="cc-expiration"
                          placeholder="MM/YY"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="cc-cvv" className="block text-xs font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          id="cc-cvv"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>

                    <hr className="border-gray-200" />

                    <button
                      className="w-full px-5 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-md hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      type="submit"
                      disabled
                    >
                      Continue to checkout
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <h5 className="text-lg font-semibold text-gray-900">Order Summary</h5>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Products ({totalItems})</span>
                      <span className="text-sm font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Shipping</span>
                      <span className="text-sm font-semibold text-gray-900">${shipping.toFixed(2)}</span>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-900">Total amount</span>
                      <span className="text-sm font-bold text-green-600">${(subtotal + shipping).toFixed(2)}</span>
                    </div>
                  </div>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Checkout</h1>
            <div className="w-20 h-1 bg-green-600 rounded mx-auto"></div>
          </div>
          
          {state.length > 0 ? <ShowCheckout /> : <EmptyCart />}
        </div>
      </div>
    </>
  );
};

export default Checkout;
