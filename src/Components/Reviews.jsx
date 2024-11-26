import React from 'react'
import R1 from '../assets/Pictures/team-1.png'
import R2 from '../assets/Pictures/team-2.png'
import R3 from '../assets/Pictures/team-3.png'

const Reviews = () => {
  return (
    <div>
      <section className="bg-dark" style={{ marginTop: 100 }} id="review">
  <div className="container pt-5">
    <div className="d-flex" style={{ marginTop: 40 }}>
      <h2 className="text-light">
        What Our Clients <br /> Say About Us
      </h2>
      <div className="ms-auto">
        <button className="btn btn-md text-light">
          <span className="arrow-icon mx-2">←</span>
        </button>
        <button className="btn btn-md text-light">
          <span className="arrow-icon mx-2">→</span>
        </button>
      </div>
    </div>
  </div>
  <div className="container mx-auto row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-5 mt-3">
    <div className="card border-0 rounded-0 bg-transparent col-md-8">
      <div className="row g-0">
        <div className="col-md-5">
          <img src={R1} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title text-light">Nehal Singh</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <p className="card-text">
              <small className="text-light">Lead Designer</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="card border-0 rounded-0 bg-transparent">
      <div className="row g-0">
        <div className="col-md-5">
          <img src={R2} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title text-light">Rakshit Chowdhury</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <p className="card-text">
              <small className="text-light">Lead Engineer</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="card border-0 rounded-0 bg-transparent">
      <div className="row g-0">
        <div className="col-md-5">
          <img src={R3} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title text-light">Laqshya Singhania</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <p className="card-text">
              <small className="text-light">Engineer</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Reviews
