import React from "react";

function Story() {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>
            About Us
          </h4>
          <h1 className="display-4">Serving Since 1950</h1>
        </div>

        <div className="row align-items-center">
          {/* Our Story */}
          <div className="col-lg-4 py-0 py-lg-5">
            <h2 className="mb-3 text-dark">Our Story</h2>
            <h5 className="mb-3 text-muted">
              A journey of flavor, tradition, and family values.
            </h5>
            <p className="text-secondary">
              Founded in a small neighborhood kitchen, our restaurant started with a simple goal:
              to share the warmth of homemade meals with everyone. Over the years, we’ve grown,
              but our heart remains the same — family, flavor, and hospitality.
            </p>
            <a href="#" className="btn btn-outline-secondary font-weight-bold py-2 px-4 mt-2">
              Learn More
            </a>
          </div>

          {/* Image */}
          <div className="col-lg-4 py-5 py-lg-0" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded shadow"
                src="/images/about.png"
                alt="About Us"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Our Vision */}
          <div className="col-lg-4 py-0 py-lg-5">
            <h2 className="mb-3 text-dark">Our Vision</h2>
            <p className="text-secondary">
              We envision a place where every dish tells a story, and every guest feels like part
              of the family. Quality, comfort, and care are the foundation of everything we serve.
            </p>
            <h5 className="mb-3">
              <i className="fa fa-check text-primary mr-2"></i>Fresh, locally-sourced ingredients
            </h5>
            <h5 className="mb-3">
              <i className="fa fa-check text-primary mr-2"></i>Authentic and time-tested recipes
            </h5>
            <h5 className="mb-3">
              <i className="fa fa-check text-primary mr-2"></i>Friendly and dedicated staff
            </h5>
            <a href="#" className="btn btn-primary font-weight-bold py-2 px-4 mt-2">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;