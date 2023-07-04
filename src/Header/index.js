import React from "react";
import "./header.css";
import logo2 from "../assets/logo.svg";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container justify-content-start m-0 max-width-100">
            <a className="navbar-brand" href="#a">
              <img src={logo2} alt="Logo" width="113" height="33" />
            </a>
            <div className="w-100">
              <div
                className="navbar-collapse justify-content-between"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#a">
                      Buy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#a">
                      Rent
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#a">
                      Sell
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#a">
                      Off-Plan
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#a">
                      Ax Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#a">
                      Who We Are
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <select className="form-select bg-dark border-0 text-nav">
                      <option selected>USD</option>
                      <option selected>AED</option>
                      <option selected>EN</option>
                    </select>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#a">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-211f127d=""
                      >
                        <g clip-path="url(#clip0_45_5852)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.1202 14.8495C15.8831 14.731 14.721 14.1598 14.5046 14.0803C14.2882 14.0015 14.1307 13.9625 13.9724 14.1996C13.8149 14.435 13.3623 14.968 13.2247 15.1255C13.0863 15.2838 12.9486 15.3029 12.7124 15.1852C12.4761 15.0659 11.7141 14.8169 10.8112 14.0119C10.1088 13.385 9.63388 12.611 9.49627 12.374C9.35865 12.1377 9.48115 12.0096 9.59968 11.8919C9.70627 11.7861 9.83593 11.6159 9.95446 11.4783C10.073 11.3399 10.112 11.2412 10.1907 11.0829C10.2703 10.9254 10.2305 10.7878 10.1708 10.6693C10.112 10.5507 9.63945 9.38696 9.44217 8.91365C9.25046 8.45307 9.05557 8.51591 8.9108 8.50795C8.77238 8.50159 8.61488 8.5 8.45737 8.5C8.29987 8.5 8.04373 8.55887 7.82736 8.79592C7.61019 9.03217 7.00006 9.60412 7.00006 10.7679C7.00006 11.9309 7.84645 13.0549 7.96497 13.2132C8.0835 13.3707 9.6315 15.7587 12.0028 16.7825C12.5676 17.0259 13.0075 17.1715 13.3503 17.2797C13.9167 17.4602 14.4322 17.4348 14.8395 17.3735C15.2929 17.3059 16.2379 16.8016 16.4352 16.2495C16.6317 15.6975 16.6317 15.2242 16.5728 15.1255C16.514 15.0269 16.3573 14.968 16.1202 14.8495Z"
                            fill="black"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.1202 14.8495C15.8831 14.731 14.721 14.1598 14.5046 14.0803C14.2882 14.0015 14.1307 13.9625 13.9724 14.1996C13.8149 14.435 13.3623 14.968 13.2247 15.1255C13.0863 15.2838 12.9486 15.3029 12.7124 15.1852C12.4761 15.0659 11.7141 14.8169 10.8112 14.0119C10.1088 13.385 9.63388 12.611 9.49627 12.374C9.35865 12.1377 9.48115 12.0096 9.59968 11.8919C9.70627 11.7861 9.83593 11.6159 9.95446 11.4783C10.073 11.3399 10.112 11.2412 10.1907 11.0829C10.2703 10.9254 10.2305 10.7878 10.1708 10.6693C10.112 10.5507 9.63945 9.38696 9.44217 8.91365C9.25046 8.45307 9.05557 8.51591 8.9108 8.50795C8.77238 8.50159 8.61488 8.5 8.45737 8.5C8.29987 8.5 8.04373 8.55887 7.82736 8.79592C7.61019 9.03217 7.00006 9.60412 7.00006 10.7679C7.00006 11.9309 7.84645 13.0549 7.96497 13.2132C8.0835 13.3707 9.6315 15.7587 12.0028 16.7825C12.5676 17.0259 13.0075 17.1715 13.3503 17.2797C13.9167 17.4602 14.4322 17.4348 14.8395 17.3735C15.2929 17.3059 16.2379 16.8016 16.4352 16.2495C16.6317 15.6975 16.6317 15.2242 16.5728 15.1255C16.514 15.0269 16.3573 14.968 16.1202 14.8495Z"
                            fill="url(#paint0_linear_45_5852)"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.1202 14.8495C15.8831 14.731 14.721 14.1598 14.5046 14.0803C14.2882 14.0015 14.1307 13.9625 13.9724 14.1996C13.8149 14.435 13.3623 14.968 13.2247 15.1255C13.0863 15.2838 12.9486 15.3029 12.7124 15.1852C12.4761 15.0659 11.7141 14.8169 10.8112 14.0119C10.1088 13.385 9.63388 12.611 9.49627 12.374C9.35865 12.1377 9.48115 12.0096 9.59968 11.8919C9.70627 11.7861 9.83593 11.6159 9.95446 11.4783C10.073 11.3399 10.112 11.2412 10.1907 11.0829C10.2703 10.9254 10.2305 10.7878 10.1708 10.6693C10.112 10.5507 9.63945 9.38696 9.44217 8.91365C9.25046 8.45307 9.05557 8.51591 8.9108 8.50795C8.77238 8.50159 8.61488 8.5 8.45737 8.5C8.29987 8.5 8.04373 8.55887 7.82736 8.79592C7.61019 9.03217 7.00006 9.60412 7.00006 10.7679C7.00006 11.9309 7.84645 13.0549 7.96497 13.2132C8.0835 13.3707 9.6315 15.7587 12.0028 16.7825C12.5676 17.0259 13.0075 17.1715 13.3503 17.2797C13.9167 17.4602 14.4322 17.4348 14.8395 17.3735C15.2929 17.3059 16.2379 16.8016 16.4352 16.2495C16.6317 15.6975 16.6317 15.2242 16.5728 15.1255C16.514 15.0269 16.3573 14.968 16.1202 14.8495Z"
                            fill="url(#paint1_linear_45_5852)"
                          ></path>
                          <path
                            d="M20.5043 7.35613C17.5126 2.49984 11.4044 1.05608 6.66747 4.07485C2.05518 7.09362 0.559298 13.6562 3.55105 18.5125L3.80037 18.9062L2.80311 22.8437L6.54281 21.7937L6.91678 22.0562C8.53731 22.975 10.2825 23.5 12.0277 23.5C13.8975 23.5 15.7674 22.975 17.3879 21.925C22.0002 18.775 23.3714 12.3437 20.5043 7.35613Z"
                            stroke="url(#paint2_linear_45_5852)"
                            stroke-width="1.2"
                          ></path>
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_45_5852"
                            x1="2.86042"
                            y1="3.40892"
                            x2="24.087"
                            y2="17.0673"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#A15C40"></stop>
                            <stop offset="0.488334" stop-color="#E28F68"></stop>
                            <stop offset="0.872347" stop-color="#A15C40"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_45_5852"
                            x1="1.53534"
                            y1="3.82302"
                            x2="25.0803"
                            y2="19.1816"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#CC9177"></stop>
                            <stop offset="0.242874" stop-color="#E5B59E"></stop>
                            <stop offset="0.515487" stop-color="#C18369"></stop>
                            <stop offset="0.729115" stop-color="#EAB498"></stop>
                            <stop offset="1" stop-color="#E6A483"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_45_5852"
                            x1="1.23028"
                            y1="2.95543"
                            x2="26.6535"
                            y2="18.8256"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#CC9177"></stop>
                            <stop offset="0.242874" stop-color="#E5B59E"></stop>
                            <stop offset="0.515487" stop-color="#C18369"></stop>
                            <stop offset="0.729115" stop-color="#EAB498"></stop>
                            <stop offset="1" stop-color="#E6A483"></stop>
                          </linearGradient>
                          <clipPath id="clip0_45_5852">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(6.10352e-05 0.5)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link primary-color text-uppercase"
                      href="#a"
                    >
                      Follow Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link primary-color text-uppercase"
                      href="#a"
                    >
                      Call Us
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="navbar-collapse justify-content-between"
                id="navbarNav"
              >
                <ul className="navbar-nav w-100">
                  <li className="nav-item d-flex px-2 flex-grow-1">
                    <i className="bi bi-search text-white my-auto"></i>
                    <input
                      className="bg-transparent border-0 form-control"
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search"
                    />
                  </li>
                  <li className="nav-item">
                    <select className="form-select bg-dark border-0 text-nav">
                      <option selected>Buy</option>
                      <option selected>Buy</option>
                      <option selected>Buy</option>
                    </select>
                  </li>
                  <li className="nav-item">
                    <select className="form-select bg-dark border-0 text-nav">
                      <option selected>Property Type</option>
                      <option selected>Property Type</option>
                      <option selected>Property Type</option>
                    </select>
                  </li>
                  <li className="nav-item">
                    <select className="form-select bg-dark border-0 text-nav select-options">
                      <option selected>Bedrooms</option>
                      <option selected>Bedrooms</option>
                      <option selected>Bedrooms</option>
                    </select>
                  </li>
                  <li className="nav-item">
                    <select className="form-select bg-dark border-0 text-nav text-uppercase select-options">
                      <option selected>1M - 100M/AED</option>
                      <option selected>1M - 100M/AED</option>
                      <option selected>1M - 100M/AED</option>
                    </select>
                  </li>
                  <li className="nav-item">
                    <button className="btn bg-transparent primary-color fw-lighter">
                      Search
                    </button>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#a">
                      <i className="bi bi-sliders"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#a">
                      <i className="bi bi-bookmark"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
