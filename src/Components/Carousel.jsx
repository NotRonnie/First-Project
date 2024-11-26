import React from 'react'
import C1 from '../assets/Pictures/home6.jpg'
import C2 from '../assets/Pictures/home7.jpg'
import C3 from '../assets/Pictures/home8.jpg'
import C4 from '../assets/Pictures/project-3.jpg'

const Carousel = () => {
  return (
    <div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        src={C1}
        className="d-block w-100-height"
        alt="img1"
      />
      <div className="carousel-caption carousel1">
        <p>1 / 3</p>
        <h5>
          Discover Property <br /> More Easily
        </h5>
        <div className="mt-5 d-flex">
          <input
            type="text"
            className="form-control search w-50 rounded-0"
            id="floatingInput"
            placeholder="Search..."
          />
          <button className="btn btn-light btn-sm justify-content-md-end mx-2 px-3 rounded-0">
            <i className="fas fa-search" />
            Search
          </button>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img
        src={C2}
        className="d-block w-100-height"
        alt="img1"
      />
      <div className="carousel-caption carousel1">
        <p>2 / 3</p>
        <h5>
          Global Homes <br /> For Our Future <br /> Generation
        </h5>
        <p>
          <a href="#" className="btn btn-light btn-lg mt-3 rounded-0">
            Discover More
          </a>
        </p>
      </div>
    </div>
    <div className="carousel-item">
      <img
        src={C3}
        className="d-block w-100-height"
        alt="img1"
      />
      <div className="carousel-caption carousel1">
        <p>3 / 3</p>
        <h5>
          Property Buying <br /> and Selling <br /> Guides
        </h5>
        <p>
          <a href="#" className="btn btn-light btn-lg mt-3 rounded-0">
            Discover More
          </a>
        </p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="icon">←</span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="icon">→</span>
    <span className="visually-hidden">Next</span>
  </button>
  <div
    className="col-md-4 z-1 position-absolute card-bottom card mb-3 card-color rounded-0"
    style={{ background: "#000" }}
  >
    <div className="row align-items-center">
      <div className="col-md-9">
        <div className="card-body">
          <h5 className="card-title text-light">Card title</h5>
          <p className="card-text text-light">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-white">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="col-md-3">
        <img
          src={C4}
          className="img-fluid rounded-start"
          alt="card-img"
        />
      </div>
    </div>
  </div>
</div>

  )
}

export default Carousel
