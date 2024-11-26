import React from 'react'
import P1 from '../assets/Pictures/home1.jpg'
import P2 from '../assets/Pictures/home4.jpg'
import P3 from '../assets/Pictures/home2.jpg'

const Popular = () => {
  return (
    <section className="container" style={{ marginTop: 100 }} id="popular">
    <p className="pt-5">Popular</p>
    <div className="d-flex">
      <h2>Our Popular Residence</h2>
      <h6 className="ms-auto">
        Explore All <span className="arrow-icon">→</span>
      </h6>
    </div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
      <div className="col">
        <div className="card border-0 rounded-0">
          <img
            src={P1}
            className="card-img-top rounded-0"
            alt="image1"
          />
          <div className="card-body">
            <p className="card-text text-muted">Kolkata, India</p>
            <div className="d-flex justify-content-center mt-3">
              <p className="mx-4 text-muted card-text">
                <i className="fa fa-car" /> bed
              </p>
              <p className="mx-4 text-muted card-text">
                <i className="fa fa-play" /> 8 * 8
              </p>
              <p className="mx-4 text-muted card-text">
                <i className="fa fa-compass" /> 2000 m2
              </p>
            </div>
            <div className="d-flex my-2">
              <button className="btn btn-lg text-white bg-dark px-4 rounded-0">
                Book Now
              </button>
              <h5 className="my auto ms-auto"> ₹20,13,048</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0 rounded-0">
          <img
            src={P2}
            className="card-img-top rounded-0"
            alt="image1"
          />
          <div className="card-body">
            <p className="card-text text-muted">Mumbai, India</p>
            <div className="d-flex justify-content-center mt-3">
              <p className="mx-4 text-muted card-text">
                <i className="fa fa-car" /> bed
              </p>
              <p className="mx-4 text-muted card-text">
                <i className="fa fa-play" /> 8 * 8
              </p>
              <p className="mx-4 text-muted card-text">
                <i className="fa fa-compass" /> 2000 m2
              </p>
            </div>
            <div className="d-flex my-2">
              <button className="btn btn-lg text-white bg-dark px-4 rounded-0">
                Book Now
              </button>
              <h5 className="my auto ms-auto"> ₹20,13,048</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0 rounded-0">
          <img
            src={P3}
            className="card-img-top rounded-0"
            alt="image1"
          />
          <div className="card-body">
            <p className="card-text text-muted">New Delhi, India</p>
            <div className="d-flex justify-content-center mt-3">
              <p className="mx-4 text-muted card-text">
                <i className="fa fa-car" /> bed
              </p>
              <p className="mx-4 text-muted card-text">
                <i className="fa fa-play" /> 8 * 8
              </p>
              <p className="mx-4 text-muted card-text">
                <i className="fa fa-compass" /> 2000 m2
              </p>
            </div>
            <div className="d-flex my-2">
              <button className="btn btn-lg text-white bg-dark px-4 rounded-0">
                Book Now
              </button>
              <h5 className="my auto ms-auto"> ₹20,13,048</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Popular
