import React from "react";

function AboutDetail() {
  return (
    <div
      className="container-fluid py-5 bg-light"
      style={{
        background: "linear-gradient(135deg, #f9f9f9 0%, #e0e0e0 100%)",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h4
            className="text-primary text-uppercase mb-2"
            style={{ letterSpacing: "4px", fontWeight: "600" }}
          >
            About Us
          </h4>
          <h1 className="display-5 fw-bold">Serving Since 1950</h1>
        </div>
        <div className="row align-items-center">
          {/* Our Story */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2 className="mb-4 text-dark">Our Story</h2>
            <h5 className="mb-3 text-muted">
              A legacy of flavors and tradition since 1950 — where every dish
              tells a story.
            </h5>
            <p className="text-secondary" style={{ lineHeight: "1.7" }}>
              Founded over seven decades ago, our restaurant began as a humble
              family-run eatery with a passion for authentic cuisine and warm
              hospitality. Over the years, we’ve grown into a beloved
              destination for those seeking comfort food, timeless recipes, and
              unforgettable dining experiences.
            </p>
            <a
              href="#"
              className="btn btn-outline-secondary rounded-pill fw-semibold px-4 py-2 mt-3"
            >
              Learn More
            </a>
          </div>

          {/* Image */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div
              className="rounded shadow overflow-hidden h-100"
              style={{ minHeight: "450px" }}
            >
              <img
                src="/images/about.png"
                className="img-fluid h-100 w-100 object-fit-cover"
                alt="About Us"
              />
            </div>
          </div>

          {/* Our Vision */}
          <div className="col-lg-4">
            <h2 className="mb-4 text-primary">Our Vision</h2>
            <p className="text-secondary" style={{ lineHeight: "1.7" }}>
              We believe great food brings people together. Our vision is to
              continue creating a space where guests feel at home, savor
              high-quality meals made with care, and build lasting memories.
            </p>
            <ul className="list-unstyled text-secondary">
              <li className="mb-3">
                <i className="fa fa-check text-success me-2"></i>
                Fresh, locally-sourced ingredients
              </li>
              <li className="mb-3">
                <i className="fa fa-check text-success me-2"></i>
                Timeless recipes with a modern twist
              </li>
              <li className="mb-3">
                <i className="fa fa-check text-success me-2"></i>
                Exceptional service and warm ambiance
              </li>
            </ul>
            <a
              href="#"
              className="btn btn-primary rounded-pill fw-semibold px-4 py-2 mt-3"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDetail;
