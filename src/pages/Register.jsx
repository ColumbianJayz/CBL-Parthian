import React, { useState } from 'react'
import { Navbar } from "../components";
import { Link } from 'react-router-dom';
import { registerUser } from '../services/userService';
const Register = () => {
    // setting up states
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);


      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
        const data = await registerUser({
            email,
            full_name: fullName,
            password,
        });
        setMessage(data.message);
        } catch (error) {
        setMessage(error.message);
        } finally {
        setLoading(false);
        }
    };
    return (
        <>
          <Navbar />
          <div className="container my-3 py-3">
            <h1 className="text-center">Register</h1>
            <hr />
            <div className="row my-4 h-100">
              <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                <form onSubmit={handleSubmit}>
                  <div className="form my-3">
                    <label htmlFor="Name">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Enter Your Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="form my-3">
                    <label htmlFor="Email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form my-3">
                    <label htmlFor="Password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="Password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <p>
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-decoration-underline text-info"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                  <div className="text-center">
                    <button
                      className="my-2 mx-auto btn btn-dark"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Registering..." : "Register"}
                    </button>
                  </div>
                  {message && <p className="text-center">{message}</p>}
                </form>
              </div>
            </div>
          </div>
        </>
      );
    };
    
    export default Register;