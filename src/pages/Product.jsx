import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";
import Sidebar from "../components/Sidebar";

import productsData from "../api/products"; // ✅ Import local data

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };


useEffect(() => {
  setLoading(true);
  setLoading2(true);

  // Simulate async with a timeout (optional)
  const timeout = setTimeout(() => {
    const foundProduct = productsData.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
    setLoading(false);

    const similar = productsData.filter(
      (p) => p.category === foundProduct.category && p.id !== foundProduct.id
    );
    setSimilarProducts(similar);
    setLoading2(false);
  }, 500); // Optional delay

  return () => clearTimeout(timeout);
}, [id]);

  const Loading = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 py-3">
          <Skeleton height={400} width={400} />
        </div>
        <div className="col-md-6 py-5">
          <Skeleton height={30} width={250} />
          <Skeleton height={90} />
          <Skeleton height={40} width={70} />
          <Skeleton height={50} width={110} />
          <Skeleton height={120} />
          <Skeleton height={40} width={110} inline={true} />
          <Skeleton className="mx-3" height={40} width={110} />
        </div>
      </div>
    </div>
  );

  const ShowProduct = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 col-sm-12 py-3">
          <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            width="400px"
            height="400px"
          />
        </div>
        <div className="col-md-6 py-5">
          <h4 className="text-uppercase text-muted">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            {product.rating && product.rating.rate}{" "}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark mx-3">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );

  const Loading2 = () => (
    <div className="my-4 py-4 d-flex">
      {[1, 2, 3, 4].map((_, i) => (
        <div className="mx-4" key={i}>
          <Skeleton height={400} width={250} />
        </div>
      ))}
    </div>
  );

  const ShowSimilarProduct = () => (
    <div className="py-4 my-4 d-flex">
      {similarProducts.map((item) => (
        <div key={item.id} className="card mx-4 text-center">
          <img
            className="card-img-top p-3"
            src={item.image}
            alt="Card"
            height={300}
            width={300}
          />
          <div className="card-body">
            <h5 className="card-title">
              {item.title.substring(0, 15)}...
            </h5>
          </div>
          <div className="card-body">
            <Link
              to={"/product/" + item.id}
              className="btn btn-dark m-1"
            >
              Buy Now
            </Link>
            <button
              className="btn btn-dark m-1"
              onClick={() => addProduct(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />

      {/* Sidebar + Page Content Layout */}
      <div className="flex">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Product Page content on the right */}
        <div className="flex-1 p-4 overflow-x-hidden">
          <div className="row">
            {loading ? <Loading /> : <ShowProduct />}
          </div>
          <div className="row my-5 py-5">
            <div className="d-none d-md-block">
              <h2 className="mb-3">You may also like</h2>
              <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
                {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;