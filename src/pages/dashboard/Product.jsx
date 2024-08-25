import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { Col, Row, Table } from "react-bootstrap";
import { Button, Card } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import profileImg from "../../assets/images/productimg.webp";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});
const ProductPage = () => {

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
                    <div className="wrapper-card">
                        <Card className="p-3 card border-0 mb-3 breadcrumb-set">
                            <div className="d-flex align-items-cemter">
                            <h4>Product List</h4>
                            <Breadcrumbs className="ms-auto breadcrumbs_" aria-label="breadcrumb">
                                <StyledBreadcrumb
                                    component="a"
                                    href="#"
                                    label="Dashboard"
                                    icon={<HomeIcon fontSize="small" />}
                                />
                                <StyledBreadcrumb component="a" href="#" label="Product" />
                                <StyledBreadcrumb
                                    label="Product-list"
                                    deleteIcon={<ExpandMoreIcon />}
                                />
                            </Breadcrumbs>
                            </div>
                        </Card>
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
}
export default ProductPage;