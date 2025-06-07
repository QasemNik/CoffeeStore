
function ReservationDetail() {
  return (
    <div className="container-fluid py-5 bg-dark">
      <div className="container">
        <div className="reservation position-relative overlay-top overlay-bottom rounded shadow-lg">
          <div className="row align-items-center">
            {/* Left Side: Offer */}
            <div className="col-lg-6 my-5 my-lg-0">
              <div className="p-5">
                <div className="mb-4">
                  <h1 className="display-3 text-warning">30% OFF</h1>
                  <h2 className="text-white">For Online Reservations</h2>
                </div>
                <p className="text-light">
                  Enjoy an exclusive 30% discount when you reserve your table
                  online. Whether it's a romantic dinner or a group gathering,
                  we've got the perfect spot for you.
                </p>
                <ul className="list-unstyled text-white mt-4">
                  <li className="py-2">
                    <i className="fa fa-check text-warning me-2"></i>
                    Freshly prepared gourmet meals
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-warning me-2"></i>
                    Cozy and elegant atmosphere
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-warning me-2"></i>
                    Fast and friendly service
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="col-lg-6">
              <div
                className="text-center p-5 rounded"
                style={{ background: "rgba(51, 33, 29, 0.85)" }}
              >
                <h2 className="text-white mb-4 mt-3">Book Your Table</h2>
                <form className="mb-4">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent border-warning p-3 text-white"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className="form-control bg-transparent border-warning p-3 text-white"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="date"
                      className="form-control bg-transparent border-warning p-3 text-white"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="time"
                      className="form-control bg-transparent border-warning p-3 text-white"
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <select
                      className="form-select bg-transparent border-warning p-3 text-white"
                      required
                    >
                      <option value="">Select number of persons</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                    </select>
                  </div>
                  <button
                    className="btn btn-warning w-100 py-3 fw-bold"
                    type="submit"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationDetail;