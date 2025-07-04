import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "@/schemas/contactSchema"

function ContactDetails() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const addMessage = async (data) => {
    const res = await fetch("http://localhost:4000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 201) {
      toast.success("Message sent successfully");
      reset(); // فرم را ریست می‌کند
    } else {
      toast.error("Failed to send message");
    }
  };

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <Toaster position="top-right" reverseOrder={false} />
          <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>
            Contact Us
          </h4>
          <h1 className="display-4">Feel Free To Contact</h1>
        </div>

        <div className="row px-3 pb-2">
          <div className="col-sm-4 text-center mb-3">
            <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
            <h4 className="font-weight-bold">Address</h4>
            <p>123 Street, New York, USA</p>
          </div>
          <div className="col-sm-4 text-center mb-3">
            <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
            <h4 className="font-weight-bold">Phone</h4>
            <p>+1 345 6789</p>
          </div>
          <div className="col-sm-4 text-center mb-3">
            <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
            <h4 className="font-weight-bold">Email</h4>
            <p>info@example.com</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 pb-5">
            <iframe
              style={{ width: "100%", height: "443px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            ></iframe>
          </div>

          <div className="col-md-6 pb-5">
            <form onSubmit={handleSubmit(addMessage)}>
              <div className="control-group">
                <input
                  {...register("username")}
                  type="text"
                  className="form-control bg-transparent p-4 mb-5"
                  placeholder="Your Name"
                />
                {errors.username && (
                  <p className="text-danger">{errors.username.message}</p>
                )}
              </div>
              <div className="control-group">
                <input
                  {...register("email")}
                  type="text"
                  className="form-control bg-transparent p-4 mb-5"
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>
              <div className="control-group">
                <input
                  {...register("subject")}
                  type="text"
                  className="form-control bg-transparent p-4 mb-5"
                  placeholder="Subject"
                />
                {errors.subject && (
                  <p className="text-danger">{errors.subject.message}</p>
                )}
              </div>
              <div className="control-group">
                <textarea
                  {...register("body")}
                  className="form-control bg-transparent py-3 px-4 mb-5"
                  rows="5"
                  placeholder="Message"
                ></textarea>
                {errors.body && (
                  <p className="text-danger">{errors.body.message}</p>
                )}
              </div>
              <div>
                <button
                  className="btn btn-primary font-weight-bold py-3 px-5"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;