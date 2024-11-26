import React from 'react'
import B1 from '../assets/Pictures/home1.jpg'
import B2 from '../assets/Pictures/home4.jpg'
import B3 from '../assets/Pictures/home2.jpg'

const Blog = () => {
  return (
    <div>
      <section className="container" style={{ marginTop: 100 }} id="blog">
  <p className="pt-5">Blog</p>
  <div className="d-flex">
    <h2>Latest Housing Information</h2>
    <button className="btn text-white bg-dark px-4 btn-md ms-auto rounded-0">
      See All Articles
    </button>
  </div>
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
    <div className="col">
      <div className="card border-0 rounded-0">
        <img
          src={B1}
          className="card-img-top rounded-0"
          alt="image1"
        />
        <div className="card-body">
          <p className="card-text text-muted">04 April 2025</p>
          <p className="card-text text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            quos.
          </p>
          <button
            className="btn text-primary px-4 btn-lg rounded-0"
            style={{ background: "#d4e9ff" }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card border-0 rounded-0">
        <img
          src={B2}
          className="card-img-top rounded-0"
          alt="image1"
        />
        <div className="card-body">
          <p className="card-text text-muted">04 April 2025</p>
          <p className="card-text text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            quos.
          </p>
          <button
            className="btn text-primary px-4 btn-lg rounded-0"
            style={{ background: "#d4e9ff" }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card border-0 rounded-0">
        <img
          src={B3}
          className="card-img-top rounded-0"
          alt="image1"
        />
        <div className="card-body">
          <p className="card-text text-muted">04 April 2025</p>
          <p className="card-text text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            quos.
          </p>
          <button
            className="btn text-primary px-4 btn-lg rounded-0"
            style={{ background: "#d4e9ff" }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Blog
