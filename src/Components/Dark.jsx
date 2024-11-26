import React from 'react'
import D1 from '../assets/Pictures/logo1.png'
import D2 from '../assets/Pictures/logo2.png'
import D3 from '../assets/Pictures/logo3.png'
import D4 from '../assets/Pictures/logo4.png'
const Dark = () => {
  return (
    <div>
      <section className="bg-dark" style={{ marginTop: "-15%" }}>
  <div className="container pt-5">
    <div className="row" style={{ marginTop: "25%" }}>
      <div className="col-lg-4">
        <h2 style={{ color: "#b5b5b5" }}>Souvik Chakraborty</h2>
        <p style={{ color: "#b5b5b5" }}>Founder Salord</p>
      </div>
      <div className="col-lg-8 mb-5">
        <h6 className="lh-lg" style={{ color: "#b5b5b5" }}>
          {" "}
          “ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor illo
          animi minima nesciunt incidunt ducimus non omnis sunt voluptate
          officiis et voluptates architecto maxime quibusdam, reiciendis soluta
          totam adipisci voluptas aliquam maiores! Iure saepe aut explicabo ex
          reiciendis, totam maxime aperiam et soluta voluptate magnam libero
          nisi enim dolorum est? ”
        </h6>
      </div>
    </div>
    <hr className="text-light" />
    <div className="container mt-5 pb-5">
      <div className="row text-center">
        <div className="col-md-3 col-sm-6">
          <img src={D1} alt="logo1" style={{ width: "55%" }} />
        </div>
        <div className="col-md-3 col-sm-6">
          <img src={D2} alt="logo1" style={{ width: "55%" }} />
        </div>
        <div className="col-md-3 col-sm-6">
          <img src={D3} alt="logo1" style={{ width: "55%" }} />
        </div>
        <div className="col-md-3 col-sm-6">
          <img src={D4} alt="logo1" style={{ width: "55%" }} />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Dark
