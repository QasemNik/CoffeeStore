import reservationSchema from "@/schemas/reserveShcema";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Reservation() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    persons: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
 
  try {
    const numericFormData = {
      ...formData,
      persons: Number(formData.persons),
    };

    await reservationSchema.validate(numericFormData, { abortEarly: false });

    toast.success("Reservation submitted successfully!");

    const res = await fetch("http://localhost:4000/reserve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(numericFormData),
    });

    const data = await res.json();
   setFormData({
     name: "",
     email: "",
     date: "",
     time: "",
     persons: "",
   });
  
  } catch (err) {
    if (err.inner) {
      const newErrors = {};
      err.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
      toast.error("Please fix the errors before submitting.");
    }
  }
};


  return (
    <div className="container my-5">
      <h2 className="text-center text-white mb-4">Book Your Table</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="name"
            className="form-control p-3"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        <div className="form-group mb-3">
          <input
            type="email"
            name="email"
            className="form-control p-3"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
        </div>

        <div className="form-group mb-3">
          <input
            type="date"
            name="date"
            className="form-control p-3"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <small className="text-danger">{errors.date}</small>}
        </div>

        <div className="form-group mb-3">
          <input
            type="time"
            name="time"
            className="form-control p-3"
            value={formData.time}
            onChange={handleChange}
          />
          {errors.time && <small className="text-danger">{errors.time}</small>}
        </div>

        <div className="form-group mb-4">
          <select
            name="persons"
            className="form-select p-3"
            value={formData.persons}
            onChange={handleChange}
          >
            <option value="">Number of Persons</option>
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          {errors.persons && (
            <small className="text-danger">{errors.persons}</small>
          )}
        </div>

        <button type="submit" className="btn btn-warning w-100 py-3 fw-bold">
          Book Now
        </button>
      </form>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Reservation;
