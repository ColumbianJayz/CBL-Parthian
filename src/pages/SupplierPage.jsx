import React from 'react'
import { Footer, Navbar } from "../components";
const SupplierPage = () => {
  return (
    <>
    <Navbar/>
    <div className="container my-3 py-3">
    <h1 className="text-center">Supplier Directory</h1>
    <hr/>
    <p className="lead text-center">
      The new and enhanced Parthian Supplier Directory brings together suppliers and companies showcasing their batteries all year round. The supplier directory is refreshed monthly.
      </p>
      <h2 className="text-center py-4">Our Suppliers</h2>
      <div className="row">
      <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://media.licdn.com/dms/image/v2/C4E0BAQFRgFsYdpO54A/company-logo_200_200/company-logo_200_200/0/1635776473174/sparkion_logo?e=2147483647&v=beta&t=h1hX0MiQlVo4yxv2KIh0KDk6Skb88Ox5R9T9omcev8Q" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Sparkion</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://static.wixstatic.com/media/f1e5e1_57dd8d190c5b462cabd325833cce98f3~mv2.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Repurpose Battery, Inc</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/tzvswizwbwjcgozdhbnu" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Connected Energy</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKgCKMxn9IEA0TJUSDiFcaLa0QnkxpSySlQ&s" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Intertek</h5>
              </div>
            </div>
          </div>
      </div>

    </div>
    <Footer />
    </>
  )
}

export default SupplierPage