import React from "react";
import "./Dashboard.css";
import heroBgLeft from "./Assets/heroBgLeft.png";
import heroBgRight from "./Assets/heroBgRight.png";
import logo from "./Assets/logo.png";
import profileLogo from "./Assets/profileLogo.png";
import shopIcon from "./Assets/shopIcon.png";
import graph from "./Assets/graph.png";
import chart from "./Assets/chart.png";
import one from "./Assets/one.png";
import two from "./Assets/two.png";
import three from "./Assets/three.png";
import four from "./Assets/four.png";
import five from "./Assets/five.png";
import six from "./Assets/six.png";
import seven from "./Assets/seven.png";
import eight from "./Assets/eight.png";
import first from "./Assets/first.png";
import second from "./Assets/second.png";
import third from "./Assets/third.png";
import fourth from "./Assets/fourth.png";
import footer from "../Assets/footer.png";
import ralphLaurenLogo from "../../../Assets/Ralph-Lauren.png";
import chanelLogo from "../../../Assets/chanelLogo.png";
import mightyFurnitureLogo from "../../../Assets/mightyFurnitureLogo.png";
import breitlingLogo from "../../../Assets/breitlingLogo.png";
import hermesLogo from "../../../Assets/hermesLogo.png";
import AddProduct from "../AddProduct";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [showAddProduct, setShowAddProduct] = React.useState(false);
  const toggleAddProduct = () => {
    setShowAddProduct((prev) => !prev);
  };
  return (
    <>
      {" "}
      {showAddProduct && <AddProduct toggleAddProduct={toggleAddProduct} />}
      <div
        style={showAddProduct ? { filter: "blur(3px)" } : {}}
        className="seller-frame"
      >
        <div className="seller-div">
          <div className="seller-footer">
            <img src={footer} alt="" />
          </div>
          <div className="seller-colaborators">
            <img
              className="seller-download-removebg"
              alt="Download removebg"
              src={hermesLogo}
            />
            <img
              className="seller-chanel-removebg"
              alt="Chanel removebg"
              src={chanelLogo}
            />
            <img
              className="seller-ralph-lauren-symbol"
              alt="Ralph lauren symbol"
              src={ralphLaurenLogo}
            />
            <img
              className="seller-breitling-logo"
              alt="Breitling logo"
              src={breitlingLogo}
            />
            <img
              className="seller-png-transparent"
              alt="Png transparent"
              src={mightyFurnitureLogo}
            />
          </div>
          <div className="seller-recent-orders">
            <div className="seller-text-wrapper-4">Recent Orders</div>
            {/* table  */}
            <div className="seller-overlap">
              <div className="seller-table-heading">
                <div className="seller-overlap-group-2">
                  <div
                    style={{ left: "62px", top: "11px" }}
                    className="seller-text-wrapper-5"
                  >
                    Order No.
                  </div>
                  <div
                    style={{ left: "356px", top: "11px" }}
                    className="seller-text-wrapper-6"
                  >
                    Date
                  </div>
                  <div
                    style={{ left: "656px", top: "11px" }}
                    className="seller-text-wrapper-7"
                  >
                    Customer
                  </div>
                  <div
                    style={{ left: "950px", top: "11px" }}
                    className="seller-text-wrapper-8"
                  >
                    Payment status
                  </div>
                  <div
                    style={{ left: "1290px", top: "11px" }}
                    className="seller-text-wrapper-9"
                  >
                    Total
                  </div>
                </div>
              </div>
              <div
                style={{
                  boxShadow: "0px 1px 1px 0px gray",
                  position: "relative",
                  top: "120px",
                  left: "20px",
                  width: "1450px",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="my-rowBox"
              >
                <div className="myRow">
                  <div className="seller-text-wrapper-10">2041</div>
                  <div className="seller-text-wrapper-11">Dec 06, 2023</div>
                  <div className="seller-text-wrapper-12">Mobin Chaudary</div>
                  <button className="seller-button">
                    <div className="seller-div-wrapper">
                      <div className="seller-text-wrapper-13">Paid</div>
                    </div>
                  </button>
                  <div className="seller-text-wrapper-14">$112.00</div>
                  <div className="seller-rectangle" />
                </div>
                <div className="myRow">
                  <div className="seller-text-wrapper-10">2041</div>
                  <div className="seller-text-wrapper-11">Dec 06, 2023</div>
                  <div className="seller-text-wrapper-12">Mobin Chaudary</div>
                  <button className="seller-button">
                    <div className="seller-div-wrapper">
                      <div className="seller-text-wrapper-13">Paid</div>
                    </div>
                  </button>
                  <div className="seller-text-wrapper-14">$112.00</div>
                  <div className="seller-rectangle" />
                </div>
                <div className="myRow">
                  <div className="seller-text-wrapper-10">2041</div>
                  <div className="seller-text-wrapper-11">Dec 06, 2023</div>
                  <div className="seller-text-wrapper-12">Mobin Chaudary</div>
                  <button className="seller-button">
                    <div className="seller-div-wrapper">
                      <div className="seller-text-wrapper-13">Paid</div>
                    </div>
                  </button>
                  <div className="seller-text-wrapper-14">$112.00</div>
                  <div className="seller-rectangle" />
                </div>
                <div className="myRow">
                  <div className="seller-text-wrapper-10">2041</div>
                  <div className="seller-text-wrapper-11">Dec 06, 2023</div>
                  <div className="seller-text-wrapper-12">Mobin Chaudary</div>
                  <button className="seller-button">
                    <div className="seller-div-wrapper">
                      <div className="seller-text-wrapper-13">Paid</div>
                    </div>
                  </button>
                  <div className="seller-text-wrapper-14">$112.00</div>
                  <div className="seller-rectangle" />
                </div>
                <div className="myRow">
                  <div className="seller-text-wrapper-10">2041</div>
                  <div className="seller-text-wrapper-11">Dec 06, 2023</div>
                  <div className="seller-text-wrapper-12">Mobin Chaudary</div>
                  <button className="seller-button">
                    <div className="seller-div-wrapper">
                      <div className="seller-text-wrapper-13">Paid</div>
                    </div>
                  </button>
                  <div className="seller-text-wrapper-14">$112.00</div>
                  <div className="seller-rectangle" />
                </div>
                <div className="myRow">
                  <div className="seller-text-wrapper-10">2041</div>
                  <div className="seller-text-wrapper-11">Dec 06, 2023</div>
                  <div className="seller-text-wrapper-12">Mobin Chaudary</div>
                  <button className="seller-button">
                    <div className="seller-div-wrapper">
                      <div className="seller-text-wrapper-13">Paid</div>
                    </div>
                  </button>
                  <div className="seller-text-wrapper-14">$112.00</div>
                  <div className="seller-rectangle" />
                </div>
                <div className="myRow">
                  <div className="seller-text-wrapper-10">2041</div>
                  <div className="seller-text-wrapper-11">Dec 06, 2023</div>
                  <div className="seller-text-wrapper-12">Mobin Chaudary</div>
                  <button className="seller-button">
                    <div className="seller-div-wrapper">
                      <div className="seller-text-wrapper-13">Paid</div>
                    </div>
                  </button>
                  <div className="seller-text-wrapper-14">$112.00</div>
                  <div className="seller-rectangle" />
                </div>
                <div className="myRow">
                  <div className="seller-text-wrapper-10">2041</div>
                  <div className="seller-text-wrapper-11">Dec 06, 2023</div>
                  <div className="seller-text-wrapper-12">Mobin Chaudary</div>
                  <button className="seller-button">
                    <div className="seller-div-wrapper">
                      <div className="seller-text-wrapper-13">Paid</div>
                    </div>
                  </button>
                  <div className="seller-text-wrapper-14">$112.00</div>
                  <div className="seller-rectangle" />
                </div>
              </div>
            </div>
          </div>

          <div className="seller-all-products-list">
            <div className="seller-overlap">
              <div className="seller-text-wrapper-4">All Products List</div>
              <div className="seller-overlap-group-wrapper">
                <div className="seller-overlap-group-2">
                  <div className="seller-text-wrapper-20">Product name</div>
                  <div className="seller-text-wrapper-21">Category</div>
                  <div className="seller-text-wrapper-22">Price</div>
                  <div className="seller-text-wrapper-23">Availability</div>
                </div>
              </div>
            </div>
            <div
              style={{
                boxShadow: "0px 1px 1px 0px gray",
                //   border: "2px solid red",
                position: "relative",
                bottom: "340px",
                left: "20px",
                width: "1450px",
                height: "350px",
                display: "flex",
                flexDirection: "column",
                overflowY: "scroll",
                overflowX: "hidden",
              }}
              className="rowBox"
            >
              <div className="myRow">
                <div
                  style={{ position: "relative", left: "-43px" }}
                  className="seller-text-wrapper-10"
                >
                  Beats By Dre
                </div>
                <div
                  style={{ position: "relative", left: "-76px" }}
                  className="seller-text-wrapper-11"
                >
                  Fashion and Apparel
                </div>
                <div
                  style={{ position: "relative", left: "-86px" }}
                  className="seller-text-wrapper-12"
                >
                  $90.00
                </div>
                <button
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-button"
                >
                  <div
                    style={{ width: "140px" }}
                    className="seller-div-wrapper"
                  >
                    <div
                      style={{ whiteSpace: "nowrap" }}
                      className="seller-text-wrapper-13"
                    >
                      In Stock
                    </div>
                  </div>
                </button>
                <div
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-text-wrapper-14"
                >
                  <a style={{ textDecoration: "underline", color: "blue" }}>
                    View
                  </a>
                </div>
                <div className="seller-rectangle" />
              </div>
              <div className="myRow">
                <div
                  style={{ position: "relative", left: "-43px" }}
                  className="seller-text-wrapper-10"
                >
                  Beats By Dre
                </div>
                <div
                  style={{ position: "relative", left: "-76px" }}
                  className="seller-text-wrapper-11"
                >
                  Fashion and Apparel
                </div>
                <div
                  style={{ position: "relative", left: "-86px" }}
                  className="seller-text-wrapper-12"
                >
                  $90.00
                </div>
                <button
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-button"
                >
                  <div
                    style={{ width: "140px" }}
                    className="seller-div-wrapper"
                  >
                    <div
                      style={{ whiteSpace: "nowrap" }}
                      className="seller-text-wrapper-13"
                    >
                      In Stock
                    </div>
                  </div>
                </button>
                <div
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-text-wrapper-14"
                >
                  <a style={{ textDecoration: "underline", color: "blue" }}>
                    View
                  </a>
                </div>
                <div className="seller-rectangle" />
              </div>
              <div className="myRow">
                <div
                  style={{ position: "relative", left: "-43px" }}
                  className="seller-text-wrapper-10"
                >
                  Beats By Dre
                </div>
                <div
                  style={{ position: "relative", left: "-76px" }}
                  className="seller-text-wrapper-11"
                >
                  Fashion and Apparel
                </div>
                <div
                  style={{ position: "relative", left: "-86px" }}
                  className="seller-text-wrapper-12"
                >
                  $90.00
                </div>
                <button
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-button"
                >
                  <div
                    style={{ width: "140px" }}
                    className="seller-div-wrapper"
                  >
                    <div
                      style={{ whiteSpace: "nowrap" }}
                      className="seller-text-wrapper-13"
                    >
                      In Stock
                    </div>
                  </div>
                </button>
                <div
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-text-wrapper-14"
                >
                  <a style={{ textDecoration: "underline", color: "blue" }}>
                    View
                  </a>
                </div>
                <div className="seller-rectangle" />
              </div>
              <div className="myRow">
                <div
                  style={{ position: "relative", left: "-43px" }}
                  className="seller-text-wrapper-10"
                >
                  Beats By Dre
                </div>
                <div
                  style={{ position: "relative", left: "-76px" }}
                  className="seller-text-wrapper-11"
                >
                  Fashion and Apparel
                </div>
                <div
                  style={{ position: "relative", left: "-86px" }}
                  className="seller-text-wrapper-12"
                >
                  $90.00
                </div>
                <button
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-button"
                >
                  <div
                    style={{ width: "140px" }}
                    className="seller-div-wrapper"
                  >
                    <div
                      style={{ whiteSpace: "nowrap" }}
                      className="seller-text-wrapper-13"
                    >
                      In Stock
                    </div>
                  </div>
                </button>
                <div
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-text-wrapper-14"
                >
                  <a style={{ textDecoration: "underline", color: "blue" }}>
                    View
                  </a>
                </div>
                <div className="seller-rectangle" />
              </div>
              <div className="myRow">
                <div
                  style={{ position: "relative", left: "-43px" }}
                  className="seller-text-wrapper-10"
                >
                  Beats By Dre
                </div>
                <div
                  style={{ position: "relative", left: "-76px" }}
                  className="seller-text-wrapper-11"
                >
                  Fashion and Apparel
                </div>
                <div
                  style={{ position: "relative", left: "-86px" }}
                  className="seller-text-wrapper-12"
                >
                  $90.00
                </div>
                <button
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-button"
                >
                  <div
                    style={{ width: "140px" }}
                    className="seller-div-wrapper"
                  >
                    <div
                      style={{ whiteSpace: "nowrap" }}
                      className="seller-text-wrapper-13"
                    >
                      In Stock
                    </div>
                  </div>
                </button>
                <div
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-text-wrapper-14"
                >
                  <a style={{ textDecoration: "underline", color: "blue" }}>
                    View
                  </a>
                </div>
                <div className="seller-rectangle" />
              </div>
              <div className="myRow">
                <div
                  style={{ position: "relative", left: "-43px" }}
                  className="seller-text-wrapper-10"
                >
                  Beats By Dre
                </div>
                <div
                  style={{ position: "relative", left: "-76px" }}
                  className="seller-text-wrapper-11"
                >
                  Fashion and Apparel
                </div>
                <div
                  style={{ position: "relative", left: "-86px" }}
                  className="seller-text-wrapper-12"
                >
                  $90.00
                </div>
                <button
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-button"
                >
                  <div
                    style={{ width: "140px" }}
                    className="seller-div-wrapper"
                  >
                    <div
                      style={{ whiteSpace: "nowrap" }}
                      className="seller-text-wrapper-13"
                    >
                      In Stock
                    </div>
                  </div>
                </button>
                <div
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-text-wrapper-14"
                >
                  <a style={{ textDecoration: "underline", color: "blue" }}>
                    View
                  </a>
                </div>
                <div className="seller-rectangle" />
              </div>
              <div className="myRow">
                <div
                  style={{ position: "relative", left: "-43px" }}
                  className="seller-text-wrapper-10"
                >
                  Beats By Dre
                </div>
                <div
                  style={{ position: "relative", left: "-76px" }}
                  className="seller-text-wrapper-11"
                >
                  Fashion and Apparel
                </div>
                <div
                  style={{ position: "relative", left: "-86px" }}
                  className="seller-text-wrapper-12"
                >
                  $90.00
                </div>
                <button
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-button"
                >
                  <div
                    style={{ width: "140px" }}
                    className="seller-div-wrapper"
                  >
                    <div
                      style={{ whiteSpace: "nowrap" }}
                      className="seller-text-wrapper-13"
                    >
                      In Stock
                    </div>
                  </div>
                </button>
                <div
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-text-wrapper-14"
                >
                  <a style={{ textDecoration: "underline", color: "blue" }}>
                    View
                  </a>
                </div>
                <div className="seller-rectangle" />
              </div>
              <div className="myRow">
                <div
                  style={{ position: "relative", left: "-43px" }}
                  className="seller-text-wrapper-10"
                >
                  Beats By Dre
                </div>
                <div
                  style={{ position: "relative", left: "-76px" }}
                  className="seller-text-wrapper-11"
                >
                  Fashion and Apparel
                </div>
                <div
                  style={{ position: "relative", left: "-86px" }}
                  className="seller-text-wrapper-12"
                >
                  $90.00
                </div>
                <button
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-button"
                >
                  <div
                    style={{ width: "140px" }}
                    className="seller-div-wrapper"
                  >
                    <div
                      style={{ whiteSpace: "nowrap" }}
                      className="seller-text-wrapper-13"
                    >
                      In Stock
                    </div>
                  </div>
                </button>
                <div
                  style={{ position: "relative", left: "-24px" }}
                  className="seller-text-wrapper-14"
                >
                  <a style={{ textDecoration: "underline", color: "blue" }}>
                    View
                  </a>
                </div>
                <div className="seller-rectangle" />
              </div>
            </div>
          </div>
          <div className="seller-payout-overview">
            <div className="seller-cards">
              <div className="seller-products-worth">
                <div className="seller-overlap-group-6">
                  <div className="seller-text-wrapper-31">$12652.96</div>
                  <div className="seller-text-wrapper-32">
                    All Products Worth
                  </div>
                  <img
                    className="seller-ri-coins-fill"
                    alt="Ri coins fill"
                    src={fourth}
                  />
                </div>
              </div>
              <div className="seller-paid-amount">
                <div className="seller-overlap-2">
                  <div className="seller-overlap-group-7">
                    <div className="seller-text-wrapper-33">$5084.34</div>
                    <div className="seller-text-wrapper-34">Paid Amount</div>
                  </div>
                  <p className="seller-p">May 01 - May 31</p>
                  <img
                    className="seller-streamline-payment"
                    alt="Streamline payment"
                    src={third}
                  />
                </div>
              </div>
              <div className="seller-payment-pending">
                <div className="seller-overlap-3">
                  <div className="seller-overlap-group-8">
                    <div className="seller-text-wrapper-33">$540.60</div>
                    <div className="seller-text-wrapper-35">
                      Payment Pending
                    </div>
                    <img
                      style={{
                        width: "130px",
                        height: "120px",
                        top: "50px",
                        left: "180px",
                      }}
                      className="seller-mdi-payment-clock"
                      alt="Mdi payment clock"
                      src={second}
                    />
                  </div>
                  <p className="seller-text-wrapper-36">May 01 - May 31</p>
                </div>
              </div>
              <div className="seller-total-revenue">
                <div className="seller-overlap-4">
                  <div className="seller-overlap-group-9">
                    <div className="seller-text-wrapper-33">$5624.94</div>
                    <div className="seller-text-wrapper-35">Total revenue</div>
                  </div>
                  <p className="seller-text-wrapper-37">May 01 - May 31</p>
                  <img
                    className="seller-solid-sack"
                    alt="Solid sack"
                    src={first}
                  />
                </div>
              </div>
            </div>
            <div className="seller-text-wrapper-38">Payout Overview</div>
          </div>
          <div className="seller-dashboard-overview">
            <div className="seller-overlap-5">
              <div className="seller-dashboard-overview-2">
                Dashboard Overview
              </div>
              <div className="seller-dashboard-overview-3">
                <div className="seller-total-stock">
                  <div className="seller-overlap-group-10">
                    <div className="seller-text-wrapper-39">Total Stock</div>
                    <div className="seller-text-wrapper-40">1540</div>
                    <img
                      className="seller-solar-chart-bold"
                      alt="Solar chart bold"
                      src={two}
                    />
                  </div>
                </div>
                <div className="seller-overlap-6">
                  <div className="seller-total-products">
                    <div className="seller-overlap-7">
                      <div className="seller-text-wrapper-39">
                        Total Products
                      </div>
                      <div className="seller-text-wrapper-41">59</div>
                      <img
                        className="seller-fluent-product"
                        alt="Fluent product"
                        src={three}
                      />
                    </div>
                  </div>
                  <div className="seller-pending-orders">
                    <div className="seller-overlap-8">
                      <div className="seller-overlap-group-11">
                        <div className="seller-text-wrapper-42">
                          Pending Orders
                        </div>
                        <img
                          className="seller-material-symbols"
                          alt="Material symbols"
                          src={eight}
                        />
                      </div>
                      <div className="seller-text-wrapper-43">23</div>
                    </div>
                  </div>
                  <div className="seller-total-orders">
                    <div className="seller-overlap-9">
                      <div className="seller-rectangle-2" />
                      <div className="seller-text-wrapper-44">Total Orders</div>
                      <div className="seller-text-wrapper-45">142</div>
                      <img
                        className="seller-fluent-mdl-product"
                        alt="Fluent product"
                        src={four}
                      />
                      <p className="seller-text-wrapper-46">May 01 - May 31</p>
                    </div>
                  </div>
                  <div className="seller-new-customers">
                    <div className="seller-overlap-10">
                      <div className="seller-overlap-group-12">
                        <div className="seller-text-wrapper-42">
                          New Customers
                        </div>
                        <img
                          className="seller-ic-round-people-alt"
                          alt="Ic round people alt"
                          src={seven}
                        />
                      </div>
                      <div className="seller-overlap-11">
                        <div className="seller-text-wrapper-47">38</div>
                        <p className="seller-text-wrapper-48">
                          May 01 - May 31
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="seller-total-sales">
                  <div className="seller-overlap-12">
                    <div className="seller-rectangle-3" />
                    <p className="seller-div-2">
                      <span className="seller-span">Total Sales</span>
                    </p>
                    <div className="seller-text-wrapper-49">92</div>
                    <img
                      className="seller-flat-color-icons"
                      alt="Flat color icons"
                      src={one}
                    />
                    <p className="seller-text-wrapper-50">May 01 - May 31</p>
                  </div>
                </div>
                <div className="seller-most-sold-product">
                  <div className="seller-overlap-13">
                    <div className="seller-div-2">Top Sold Product</div>
                    <div className="seller-overlap-group-13">
                      <div className="seller-text-wrapper-51">Beats by Dre</div>
                      <p className="seller-text-wrapper-52">May 01 - May 31</p>
                    </div>
                    <img
                      className="seller-pajamas-first"
                      alt="Pajamas first"
                      src={five}
                    />
                  </div>
                </div>
                <div className="seller-products-views">
                  <div className="seller-overlap-14">
                    <div className="seller-rectangle-4" />
                    <div className="seller-div-2">Products views</div>
                    <div className="seller-text-wrapper-53">126,546</div>
                    <img
                      className="seller-ant-design-fund-view"
                      alt="Ant design fund view"
                      src={six}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="seller-overlap-15">
            <div className="seller-traffic">
              <div className="seller-overlap-16">
                <div className="seller-overlap-17">
                  <img className="seller-image" alt="Image" src={chart} />
                  <div className="seller-text-wrapper-54">Traffic</div>
                </div>
                <div className="seller-element">
                  <div className="seller-overlap-18">
                    <div className="seller-overlap-group-14">
                      <div className="seller-text-wrapper-55">55</div>
                      <div className="seller-text-wrapper-56">Product ads</div>
                    </div>
                    <div className="seller-text-wrapper-57">%</div>
                    <div className="seller-ellipse" />
                  </div>
                </div>
                <div className="seller-overlap-wrapper">
                  <div className="seller-overlap-19">
                    <div className="seller-overlap-20">
                      <div className="seller-text-wrapper-55">33</div>
                      <div className="seller-text-wrapper-56">
                        Direct search
                      </div>
                    </div>
                    <div className="seller-text-wrapper-58">%</div>
                    <div className="seller-ellipse-2" />
                  </div>
                </div>
                <div className="seller-element-2">
                  <div className="seller-overlap-21">
                    <div className="seller-overlap-22">
                      <div className="seller-text-wrapper-55">12</div>
                      <div className="seller-text-wrapper-56">Promotions</div>
                    </div>
                    <div className="seller-text-wrapper-59">%</div>
                    <div className="seller-ellipse-3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="seller-dashboard-start">
              <div className="seller-heading">
                <div className="seller-overlap-group-15">
                  <div className="seller-text-wrapper-54">Dashboard</div>
                  <div className="seller-text-wrapper-60">
                    Overview of latest month
                  </div>
                </div>
              </div>
              <div className="seller-earning">
                <div className="seller-overlap-23">
                  <div className="seller-text-wrapper-61">$5624.94</div>
                  <div className="seller-text-wrapper-62">
                    Current month earning
                  </div>
                </div>
              </div>
              <div className="seller-sales">
                <div className="seller-overlap-24">
                  <div className="seller-text-wrapper-61">92</div>
                  <div className="seller-text-wrapper-62">
                    Current month sales
                  </div>
                </div>
              </div>
              <button className="seller-btn">
                <div className="seller-inner">
                  <div className="seller-text-wrapper-63">
                    Last Month Summary
                  </div>
                </div>
              </button>
              <img className="seller-image-2" alt="Image" src={graph} />
            </div>
            <div className="seller-landing">
              <div className="seller-overlap-25">
                <img
                  className="seller-rectangle-5"
                  alt="Rectangle"
                  src={heroBgLeft}
                />
                <img
                  className="seller-rectangle-6"
                  alt="Rectangle"
                  src={heroBgRight}
                />
                <img
                  className="seller-shop-icon"
                  alt="Shop icon"
                  src={shopIcon}
                />
                <div className="seller-rectangle-7" />
                <img
                  className="seller-profile"
                  alt="Profile"
                  src={profileLogo}
                />
                <img className="seller-logo-2" alt="Logo" src={logo} />
                <p className="seller-text-wrapper-64">
                  Expand your product offerings and boost your visibility by
                  effortlessly adding more items to your store – the key to
                  becoming a top seller in just a few clicks!
                </p>
                <p className="seller-text-wrapper-65">
                  Trusted by over 600,000 sellers Worldwide
                </p>
                <div className="seller-login-button">
                  <button
                    style={{ backgroundColor: "transparent" }}
                    className="seller-overlap-group-16"
                  >
                    <div
                      style={{ textDecoration: "none" }}
                      className="seller-text-wrapper-66"
                      onClick={toggleAddProduct}
                    >
                      ADD NEW PRODUCT
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
