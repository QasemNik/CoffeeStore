import emailSchema from "@/schemas/emailSchema";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import toast from "react-hot-toast";

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = emailSchema.safeParse({ email });

    if(!result.success){
      setError()
      toast.error(result.error.errors[0].message);
      return
    }
    toast.success("successfully sign")
    setEmail("")
    

  };
  const icons = [
    { icon: faTwitter, link: "https://twitter.com/yourUsername" },
    { icon: faFacebookF, link: "https://facebook.com/yourUsername" },
    { icon: faLinkedinIn, link: "https://linkedin.com/in/yourUsername" },
    { icon: faInstagram, link: "https://instagram.com/yourUsername" },
  ];

  return (
    <footer className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
      <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
        {/* Contact Info */}
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Get In Touch
          </h4>
          <p>
            <i className="fa fa-map-marker-alt mr-2" />
            123 Street, New York, USA
          </p>
          <p>
            <i className="fa fa-phone-alt mr-2" />
            +012 345 67890
          </p>
          <p className="m-0">
            <i className="fa fa-envelope mr-2" />
            info@example.com
          </p>
        </div>

        {/* Social Links */}
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Follow Us
          </h4>
          <p>Follow us on social media for updates and offers.</p>
          <div className="d-flex justify-content-start">
            {icons.map(({ icon, link }, idx) => (
              <a
                key={idx}
                className="btn btn-lg btn-outline-light btn-lg-square rounded mr-2"
                href={link}
                target="_blank"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Open Hours */}
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Open Hours
          </h4>
          <div>
            <h6 className="text-white text-uppercase">Monday - Friday</h6>
            <p>8.00 AM - 8.00 PM</p>
            <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
            <p>2.00 PM - 8.00 PM</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Newsletter
          </h4>
          <p>Subscribe to get the latest news and offers.</p>
          <div className="w-100">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: "25px" }}
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="btn btn-primary font-weight-bold px-3"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              {error && (
                <small className="text-danger mt-1 d-block">{error}</small>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
      >
        <p className="mb-2 text-white">
          © {new Date().getFullYear()}{" "}
          <a className="font-weight-bold" href="#">
            Domain
          </a>
          . All Rights Reserved.
        </p>
        <p className="m-0 text-white">
          Designed by{" "}
          <a className="font-weight-bold" href="https://htmlcodex.com">
            HTML Codex
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
