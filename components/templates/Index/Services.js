import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";

function Services({ data }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4"> Fresh &amp; Organic Beans</h1>
        </div>
        <div className="row">
          {data?.map(({ title, desc, img, icon }, index) => (
            <ServiceItem
              key={index}
              title={title}
              desc={desc}
              img={img}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;