import React from 'react';

const Offer = () => {
  return (
    <section className="offer_section layout_padding-bottom">
      <div className="offer_container">
        <div className="container ">
          <div className="row">
            <div className="col-md-6  ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/o1.jpg" alt="/" />
                </div>
                <div className="detail-box">
                  <h5>Tasty Thursdays</h5>
                  <h6>
                    <span>20%</span> Off
                  </h6>
                  <a href="/">
                    Order Now
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 456.029 456.029"
                      style={{ enableBackground: 'new 0 0 456.029 456.029', display: 'block' }}
                    >
                      {/* ... Your SVG path data here */}
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6  ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/o2.jpg" alt="/" />
                </div>
                <div className="detail-box">
                  <h5>Pizza Days</h5>
                  <h6>
                    <span>15%</span> Off
                  </h6>
                  <a href="/">
                    Order Now
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 456.029 456.029"
                      style={{ enableBackground: 'new 0 0 456.029 456.029', display: 'block' }}
                    >
                      {/* ... Your SVG path data here */}
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
