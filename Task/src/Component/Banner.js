import React from "react";
// import images......
import banner from "../Images/Banner.png";

const Banner = () => {
  return (
    <div>
      {/* ..........  navbar section    */}

      {/* .......Banner  Page ........ */}
      <div className="container-fluid  banner-image">
        <div className="row ">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 about-colum">
            <div>
              <h1 className="banner-title">
                {" "}
                Leverage on our IT <br />
                expertise to solve your <br /> business problems
              </h1>
              <h2 className="small-header">
                {" "}
                Leverage on our IT expertise to solve your business problems
              </h2>
              <p className="mt-3 banner-phara">
                We create value and build confidence!
              </p>
              <button className="banner-button">Our services</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <img
                src={banner}
                alt="banner"
                width="100%"
                className="small-device"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
