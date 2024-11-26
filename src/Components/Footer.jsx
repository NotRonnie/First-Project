import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark bg-footer" style={{ marginTop: 80 }}>
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <h5 className="text-light">About Us</h5>
        <p className="text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est
          sequi reiciendis impedit facere eius dolor accusamus suscipit nihil
          nam?
        </p>
        <p className="text-light">
          <i className="fa fa-location" />
          123 456 897
        </p>
        <p className="text-light">
          <i className="fa fa-phone" />
          (91) 8965 875476
        </p>
        <p className="text-light">
          <i className="fa fa-envelope" />
          info@gmail.com
        </p>
      </div>
      <div className="col-lg-3">
        <h5 className="text-light">Quick Links</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#popular">Popular</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#review">Reviews</a>
          </li>
          <li>
            <a href="#blog">News</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3">
        <h5 className="text-light">Stay Connected</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#">
              <i className="fab fa-facebook" /> Facebook
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram" /> Instagram
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter" /> Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-lg-12">
        <p className="text-center text-light">
          Copyright © 2025 <a href="#">Salord</a>. All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
