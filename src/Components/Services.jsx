import React from 'react'
import S1 from '../assets/Pictures/about1.png'
import S2 from '../assets/Pictures/about2.png'

const Services = () => {
  return (
    <div>
      <section
  className="about section-padding"
  style={{ marginTop: 40 }}
  id="services"
>
  <div className="text-center pb-5">
    <h2>Our Services</h2>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-12 col-12">
        <div className="d-flex">
          <div className="about-img mx-2">
            <img
              src={S1}
              alt="about-img"
              className="img-fluid h-100 mt-4"
            />
          </div>
          <div className="about-img">
            <img
              src={S2}
              alt="about-img"
              className="img-fluid h-75"
            />
          </div>
        </div>
      </div>
      <div
        className="col-lg-7 col-md-12 col-12 ps-lg-5 mt-md-5"
        style={{ marginTop: 40 }}
      >
        <div className="about-text">
          <h2>
            Comfort is Our <br /> Top Priority for Your
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sequi
            harum molestiae aperiam, libero repellat cumque architecto velit
            tempore quasi rerum amet illum numquam! Aliquam ipsam consequuntur
            recusandae vero possimus voluptates, ea necessitatibus ullam
            veritatis nihil debitis cupiditate blanditiis inventore expedita
            deserunt fugit natus? Facilis debitis, recusandae delectus a
            dignissimos consequatur ut amet porro tempore ea ipsam libero maxime
            ex est, expedita earum aspernatur distinctio voluptatem
            exercitationem excepturi velit aperiam. Vel, facere sunt veniam
            delectus et nihil dignissimos. Numquam natus illum sequi? Modi autem
            facere aliquid cupiditate, vero blanditiis voluptate repellendus.
            Quas blanditiis inventore ex, aut omnis beatae accusamus iusto.
          </p>
          <a href="#" className="btn text-white bg-dark px-3 rounded-0">
            See More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Services
