import React from 'react'
import { Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px"
        }}
      >
        <div className="container">
          <h1>Parthian Battery Solutions</h1>
          <p className="lead">Bridging the Gap to Affordable Sustainability</p>
        </div>
      </div>

      {/* About Section */}
      <div className="container my-5 py-5">
        <h2 className="text-center">About Our Company</h2>
        <hr />
        <p className="lead">
          Parthian is actively ensuring the environmental and economic viability of our transition to a greener future.
        </p>
        <p className="lead">
          Have you ever wondered what happens to an electric vehicle’s (EV) battery once it’s replaced and retired from a car? To many’s surprise, these batteries can still maintain upwards of 85% of their original capacity after their stint on the road, making them perfect for second-use applications, once they’ve been properly tested and inspected.
        </p>
        <p className="lead">
          If not put in second-use applications, alternative retirement methods include landfilling or metallurgic recycling—which are inefficient, costly, and risk leaking thousands of lbs of toxic battery materials. Instead, Parthian Battery Solutions repurposes these batteries into stationary energy storage systems.
        </p>
        <p className="lead">
          By effectively doubling their life, Parthian offers lithium-ion technology at prices other manufacturers can’t compete with. 
          <a href="/product" className="ms-2 text-decoration-underline">Discover our product</a>
        </p>
        <p className="lead fw-bold">
          Choosing Parthian is choosing the cleaner, more affordable option.
        </p>
      </div>

      {/* Process Section */}
      <div className="container my-5">
        <h2 className="text-center">Our Process</h2>
        <hr />
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Battery Testing & Inspection</h5>
                <p className="card-text">
                  Every battery undergoes rigorous testing to ensure it maintains at least 85% of its capacity. 
                  <a href="/product" className="text-decoration-underline">Learn More</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Repurposing</h5>
                <p className="card-text">
                  Qualified batteries are repurposed into stationary energy storage systems, extending their lifespan. 
                  <a href="/technology" className="text-decoration-underline">Our Technology</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Sustainable Impact</h5>
                <p className="card-text">
                  Our innovative process not only protects the environment but also offers cost-effective solutions compared to traditional methods. 
                  <a href="/impact" className="text-decoration-underline">See the Impact</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="container my-5">
        <h2 className="text-center">Our Impact</h2>
        <hr />
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Reduced Waste</h5>
                <p className="card-text">
                  By repurposing EV batteries, we significantly reduce landfill waste and mitigate environmental hazards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Economic Viability</h5>
                <p className="card-text">
                  Our solutions provide sustainable energy storage options at prices that outcompete traditional methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore More Section */}
      <div className="container my-5">
        <h2 className="text-center">Explore More</h2>
        <hr />
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <a href="/product" className="btn btn-outline-primary w-100">Our Products</a>
          </div>
          <div className="col-md-4 mb-3">
            <a href="/team" className="btn btn-outline-primary w-100">Meet Our Team</a>
          </div>
          <div className="col-md-4 mb-3">
            <a href="/contact" className="btn btn-outline-primary w-100">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage;
