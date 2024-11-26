import React from 'react'

const ConContact = () => {
  return (
    <div>
      <section>
  <div className="container mb-5">
    <div className="col-md-12 col-lg-8" style={{ marginTop: 150 }}>
      <h1 className="text-single">Contact Us</h1>
    </div>
  </div>
  <div className="contact mt-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="your-name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-label"
                  id="your-name"
                  name="your-name"
                  required=""
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="your-surname" className="form-label">
                  Your Surname
                </label>
                <input
                  type="text"
                  className="form-label"
                  id="your-surname"
                  name="your-surname"
                  required=""
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="your-email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-label"
                  id="your-email"
                  name="your-email"
                  required=""
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="your-subject" className="form-label">
                  Your Subject
                </label>
                <input
                  type="text"
                  className="form-label"
                  id="your-subject"
                  name="your-subject"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="your-message" className="form-label">
                  Your Message
                </label>
                <textarea
                  name="your-message"
                  id="your-message"
                  className="form-control"
                  rows={5}
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="mt-3 mb-5">
                <button
                  className="btn text-white bg-dark px-3 btn-lg rounded-0"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div id="map" className="contact-map col-lg-5 mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21697256921!2d88.26477965034887!3d22.535564848439833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1731444720112!5m2!1sen!2sin"
            width={530}
            height={400}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default ConContact
