import React from 'react'
import logo from '../assets/Pictures/logo.png'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="logo" className="w-50" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mg-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#popular">
            Popular
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#blog">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#review">
            Review
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#questions">
            Questions
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link btn text-white bg-dark px-3 rounded-0"
            href="contact.html"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
