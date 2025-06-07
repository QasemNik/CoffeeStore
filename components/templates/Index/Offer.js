import emailSchema from "@/schemas/emailSchema";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function Offer() {
  const [email, setEmail] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const addEmail = async (event) => {
    event.preventDefault();

    const result = emailSchema.safeParse({ email });

    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/newsletters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Joined successfully!");
        setEmail("");
      } else {
        toast.error(data?.message || "Something went wrong!");
      }
    } catch (err) {
      toast.error("Network error!");
    }
  };

  return (
    <>
      <div className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom bg-dark">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="container py-5">
          <h1 className="display-3 text-warning mt-3">50% OFF</h1>
          <h1 className="text-white mb-3">Sunday Special Offer</h1>
          <h4 className="text-white font-weight-normal mb-4 pb-3">
            Only for Sunday from 1st Jan to 30th Jan 2045
          </h4>

          <form className="form-inline justify-content-center mb-4">
            <div
              className="input-group"
              style={{ maxWidth: "500px", width: "100%" }}
            >
              <input
                type="email"
                className="form-control p-3"
                placeholder="Enter your email"
                style={{ height: "55px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={addEmail}
                className="btn btn-warning px-4 text-dark fw-bold"
                type="button"
              >
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Offer;