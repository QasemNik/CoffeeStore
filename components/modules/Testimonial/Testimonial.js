import React from "react";

function Testimonial({ profile, username, body, role }) {
  return (
    <div
      className="testimonial-item bg-chocolate rounded "
      style={{ backgroundColor: "#fdf8f2" }}
    >
      <div className="d-flex align-items-center mb-3">
        <img
          className="img-fluid  rounded-circle mr-3"
          style={{ width: "90px", height:"90px" }}
          src={profile}
          alt={role}
        />
        <div className="ml-2">
          <h4>{username}</h4>
          <i>{role}</i>
        </div>
      </div>
      <p className="m-0 mb-4">{body}</p>
    </div>
  );
}

export default Testimonial;
