import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { Col, Row, Table } from "react-bootstrap";
import DashboardBox from "../../components/DashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { Button, Card } from "@mui/material";
import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoIosTimer } from "react-icons/io";
import { Chart } from "react-google-charts";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import profileImg from "../../assets/images/productimg.webp";

const ITEM_HEIGHT = 48;
export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  backgroundColor: "transparent", // Light white/gray background
  hAxis: {
    title: "",
    textPosition: "none", // Remove X-axis text
    gridlines: { color: "transparent" }, // Remove X-axis lines
  },
  vAxis: {
    minValue: 0,
    textPosition: "none", // Remove Y-axis text
    gridlines: { color: "transparent" }, // Remove Y-axis lines
  },
  chartArea: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(54 114 228 / 20%)", // Slightly transparent white for chart area
  },
  legend: { position: "none" }, // Remove the graph legend
  colors: ["#ffffff", "#ffffff"], // Set chart lines to white
};
const DashboardPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [sortBy, setSortBy] = React.useState("");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout>
        <div className="dashboard-content">
          <Row>
            <Col md={9}>
              <div className="inner-box d-flex align-items-center flex-wrap gap-4">
                {/* <div className="box-first user"></div>
                <div className="box-first yearly"></div>
                <div className="box-first monthly"></div>
                <div className="box-first weekly"></div> */}
                <DashboardBox
                  color={["#1da256", "#48d483"]}
                  icon={<FaUserCircle />}
                  grow={true}
                />
                <DashboardBox
                  color={["#c012e2", "#eb64fe"]}
                  icon={<IoMdCart />}
                />
                <DashboardBox
                  color={["#2c78e5", "#60aff5"]}
                  icon={<MdShoppingBag />}
                />
                <DashboardBox
                  color={["#e1950e", "#f3cd29"]}
                  icon={<GiStarsStack />}
                />
              </div>
            </Col>
            <Col md={3}>
              <div className="inner-box sale-box w-100 h-100 box-wrap">
                <div className="graphBox w-100 h-100">
                  <div className=" p-4">
                    <div className="d-flex align-items-center w-100 bottomElement top-0 position-relative">
                      <h4 className="text-white mb-0">Total Sales</h4>
                      <div className="ms-auto position-relative">
                        <Button
                          aria-label="more"
                          id="long-button"
                          aria-controls={open ? "long-menu" : undefined}
                          aria-expanded={open ? "true" : undefined}
                          aria-haspopup="true"
                          onClick={handleClick}
                          className="ms-auto toggleIcon"
                        >
                          <HiDotsVertical />
                        </Button>
                        <Menu
                          id="long-menu"
                          MenuListProps={{ "aria-labelledby": "long-button" }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          PaperProps={{
                            style: {
                              maxHeight: ITEM_HEIGHT * 4.5,
                              width: "20ch",
                            },
                          }}
                        >
                          <MenuItem key="last-week" onClick={handleClose}>
                            <IoIosTimer className="me-2" /> Last Week
                          </MenuItem>
                          <MenuItem key="last-month" onClick={handleClose}>
                            <IoIosTimer className="me-2" /> Last Month
                          </MenuItem>
                          <MenuItem key="last-year" onClick={handleClose}>
                            <IoIosTimer className="me-2" /> Last Year
                          </MenuItem>
                        </Menu>
                      </div>
                    </div>
                    <h3 className="text-white fw-bold">$3,787,681.00</h3>
                    <p>$3,578.90 in last month</p>
                  </div>
                  <div className="chartgraph overflow-hidden">
                    <Chart
                      chartType="AreaChart"
                      width="100%"
                      height="100%"
                      data={data}
                      options={options}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="wrapper-card mt-4">
            <Card className="p-3 card border-0">
              <h3>Best Selling Products</h3>
              <div className="filter-section mt-3">
                <Row>
                  <Col md={3}>
                    <h6 className="showBy">SHOW BY</h6>
                    <FormControl className="w-100 mt-2">
                      <Select
                        value={sortBy}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="selected-by"
                      >
                        <MenuItem value="" className="dropdown-select">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Col>
                  <Col md={3}>
                    <h6 className="showBy">CATEGORY BY</h6>
                    <FormControl className="w-100 mt-2">
                      <Select
                        value={sortBy}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="selected-by"
                      >
                        <MenuItem value="" className="dropdown-select">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Col>
                  <Col md={3}>
                    <h6 className="showBy">BRAND BY</h6>
                    <FormControl className="w-100 mt-2">
                      <Select
                        value={sortBy}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="selected-by"
                      >
                        <MenuItem value="" className="dropdown-select">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Col>
                </Row>
              </div>
              <div className="table-design mt-3">
                <Table responsive striped bordered hover>
                  <thead className="thead-dark">
                    <tr>
                      <th>UID</th>
                      <th>PRODUCT</th>
                      <th>CATEGORY</th>
                      <th>BRAND</th>
                      <th>PRICE</th>
                      <th>STOCK</th>
                      <th>RATING</th>
                      <th>ORDER</th>
                      <th>SALE</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#1</td>
                      <td>
                        <div className="d-flex product-img align-items-center">
                          <Card className="imgwrap me-3 bg-white">
                            <img src={profileImg} alt="product-img" />
                          </Card>
                          <div className="info">
                            <h6>Tops and skirt set for Female</h6>
                            <p>Women's exclusive summer...</p>
                          </div>
                        </div>
                      </td>
                      <td>womans</td>
                      <td>richman</td>
                      <td>
                        <span className="w-100 d-block old-price">$21.00</span>
                        <span className="w-100 d-block new-price text-danger">
                          $21.00
                        </span>
                      </td>
                      <td></td>
                      <td>4.9(16)</td>
                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <div className="actions gap-2 d-flex align-items-center">
                          <Button color="secondary" className="secondary">
                            <FaEye />
                          </Button>
                          <Button color="success" className="success">
                            <MdEdit />
                          </Button>
                          <Button color="error" className="error">
                            <MdDelete />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#1</td>
                      <td>
                        <div className="d-flex product-img align-items-center">
                          <Card className="imgwrap me-3 bg-white">
                            <img src={profileImg} alt="product-img" />
                          </Card>
                          <div className="info">
                            <h6>Tops and skirt set for Female</h6>
                            <p>Women's exclusive summer...</p>
                          </div>
                        </div>
                      </td>
                      <td>womans</td>
                      <td>richman</td>
                      <td>
                        <span className="w-100 d-block old-price">$21.00</span>
                        <span className="w-100 d-block new-price text-danger">
                          $21.00
                        </span>
                      </td>
                      <td></td>
                      <td>4.9(16)</td>
                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <div className="actions gap-2 d-flex align-items-center">
                          <Button color="secondary" className="secondary">
                            <FaEye />
                          </Button>
                          <Button color="success" className="success">
                            <MdEdit />
                          </Button>
                          <Button color="error" className="error">
                            <MdDelete />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#1</td>
                      <td>
                        <div className="d-flex product-img align-items-center">
                          <Card className="imgwrap me-3 bg-white">
                            <img src={profileImg} alt="product-img" />
                          </Card>
                          <div className="info">
                            <h6>Tops and skirt set for Female</h6>
                            <p>Women's exclusive summer...</p>
                          </div>
                        </div>
                      </td>
                      <td>womans</td>
                      <td>richman</td>
                      <td>
                        <span className="w-100 d-block old-price">$21.00</span>
                        <span className="w-100 d-block new-price text-danger">
                          $21.00
                        </span>
                      </td>
                      <td></td>
                      <td>4.9(16)</td>
                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <div className="actions gap-2 d-flex align-items-center">
                          <Button color="secondary" className="secondary">
                            <FaEye />
                          </Button>
                          <Button color="success" className="success">
                            <MdEdit />
                          </Button>
                          <Button color="error" className="error">
                            <MdDelete />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#1</td>
                      <td>
                        <div className="d-flex product-img align-items-center">
                          <Card className="imgwrap me-3 bg-white">
                            <img src={profileImg} alt="product-img" />
                          </Card>
                          <div className="info">
                            <h6>Tops and skirt set for Female</h6>
                            <p>Women's exclusive summer...</p>
                          </div>
                        </div>
                      </td>
                      <td>womans</td>
                      <td>richman</td>
                      <td>
                        <span className="w-100 d-block old-price">$21.00</span>
                        <span className="w-100 d-block new-price text-danger">
                          $21.00
                        </span>
                      </td>
                      <td></td>
                      <td>4.9(16)</td>
                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <div className="actions gap-2 d-flex align-items-center">
                          <Button color="secondary" className="secondary">
                            <FaEye />
                          </Button>
                          <Button color="success" className="success">
                            <MdEdit />
                          </Button>
                          <Button color="error" className="error">
                            <MdDelete />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#1</td>
                      <td>
                        <div className="d-flex product-img align-items-center">
                          <Card className="imgwrap me-3 bg-white">
                            <img src={profileImg} alt="product-img" />
                          </Card>
                          <div className="info">
                            <h6>Tops and skirt set for Female</h6>
                            <p>Women's exclusive summer...</p>
                          </div>
                        </div>
                      </td>
                      <td>womans</td>
                      <td>richman</td>
                      <td>
                        <span className="w-100 d-block old-price">$21.00</span>
                        <span className="w-100 d-block new-price text-danger">
                          $21.00
                        </span>
                      </td>
                      <td></td>
                      <td>4.9(16)</td>
                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <div className="actions gap-2 d-flex align-items-center">
                          <Button color="secondary" className="secondary">
                            <FaEye />
                          </Button>
                          <Button color="success" className="success">
                            <MdEdit />
                          </Button>
                          <Button color="error" className="error">
                            <MdDelete />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#1</td>
                      <td>
                        <div className="d-flex product-img align-items-center">
                          <Card className="imgwrap me-3 bg-white">
                            <img src={profileImg} alt="product-img" />
                          </Card>
                          <div className="info">
                            <h6>Tops and skirt set for Female</h6>
                            <p>Women's exclusive summer...</p>
                          </div>
                        </div>
                      </td>
                      <td>womans</td>
                      <td>richman</td>
                      <td>
                        <span className="w-100 d-block old-price">$21.00</span>
                        <span className="w-100 d-block new-price text-danger">
                          $21.00
                        </span>
                      </td>
                      <td></td>
                      <td>4.9(16)</td>
                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <div className="actions gap-2 d-flex align-items-center">
                          <Button color="secondary" className="secondary">
                            <FaEye />
                          </Button>
                          <Button color="success" className="success">
                            <MdEdit />
                          </Button>
                          <Button color="error" className="error">
                            <MdDelete />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#1</td>
                      <td>
                        <div className="d-flex product-img align-items-center">
                          <Card className="imgwrap me-3 bg-white">
                            <img src={profileImg} alt="product-img" />
                          </Card>
                          <div className="info">
                            <h6>Tops and skirt set for Female</h6>
                            <p>Women's exclusive summer...</p>
                          </div>
                        </div>
                      </td>
                      <td>womans</td>
                      <td>richman</td>
                      <td>
                        <span className="w-100 d-block old-price">$21.00</span>
                        <span className="w-100 d-block new-price text-danger">
                          $21.00
                        </span>
                      </td>
                      <td></td>
                      <td>4.9(16)</td>
                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <div className="actions gap-2 d-flex align-items-center">
                          <Button color="secondary" className="secondary">
                            <FaEye />
                          </Button>
                          <Button color="success" className="success">
                            <MdEdit />
                          </Button>
                          <Button color="error" className="error">
                            <MdDelete />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default DashboardPage;
