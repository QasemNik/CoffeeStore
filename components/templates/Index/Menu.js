import Card from "@/components/modules/Card/Card";
import React from "react";

function Menu({ data }) {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #f9f9f9 0%, #e0e0e0 100%)",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h4
            className="text-uppercase text-primary fw-semibold mb-2"
            style={{ letterSpacing: "6px", color: "#c28840" }} // رنگ طلایی ملایم
          >
            Menu & Pricing
          </h4>
          <h1
            className="display-5 fw-bold text-dark"
            style={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            Competitive Pricing
          </h1>
        </div>

        <div className="row gx-5">
          {/* Hot Coffee */}
          <div className="col-lg-6 mb-5">
            <h2
              className="text-secondary fw-bold mb-4"
              style={{
                borderBottom: "3px solid #c28840",
                paddingBottom: "8px",
              }}
            >
              Hot Coffee
            </h2>
            <div className="d-flex flex-column gap-4">
              {data
                .filter((item) => item.type === "hot")
                .slice(0, 3)
                .map((item, index) => (
                  <Card key={index} {...item} />
                ))}
            </div>
          </div>

          {/* Cold Coffee */}
          <div className="col-lg-6 mb-5">
            <h2
              className="text-secondary fw-bold mb-4"
              style={{
                borderBottom: "3px solid #a0bcd4",
                paddingBottom: "8px",
                color: "#4a6fa5",
              }}
            >
              Cold Coffee
            </h2>
            <div className="d-flex flex-column gap-4">
              {data
                .filter((item) => item.type === "cold")
                .slice(0, 3)
                .map((item, index) => (
                  <Card key={index} {...item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;