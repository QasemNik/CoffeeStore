import React from "react";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

function ServiceItem({ title, desc, img, icon }) {
  return (
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center service-item">
        <div className="col-sm-5">
          <img
            className="img-fluid mb-3 mb-sm-0 rounded service-img"
            src={img}
            alt={title}
          />
        </div>
        <div className="col-sm-7">
          <h4 className="d-flex align-items-center service-title">
            <div className="icon-wrapper">
              <FontAwesomeIcon
                icon={Icons[icon]}
                className="service-icon"
              />
            </div>
            <span className="ms-3">{title}</span>
          </h4>
          <p className="service-desc">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;