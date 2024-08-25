import React from "react";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Layout from "../../components/Layout";
import { Card } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import slide1 from '../../assets/images/product-slide-1.webp';
import slide2 from '../../assets/images//product-slide-2.webp';
import slide3 from '../../assets/images/product-slide-3.webp';
import slide4 from '../../assets/images/product-slide-4.webp';
import slide5 from '../../assets/images/product-slide-5.webp';
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { MdFilterVintage } from "react-icons/md";
import { IoColorPalette } from "react-icons/io5";
import { FaCartPlus, FaReply } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import UserAvatarimg from "../../components/UserAvatarimg";
import profileImg from "../../assets/images/profile.jpg";
import Rating from '@mui/material/Rating';
import { Button } from "@mui/material";

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
const images = [slide1, slide2, slide3, slide4, slide5];
const ProductView = () => {
    const settings = {
        customPaging: function (i) {
            return (
                <button type="button" className="slick-custom-button">
                    <img src={images[i]} alt={`Slide ${i + 1}`} className="w-100" />
                </button>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <Layout>
            <div className="dashboard-content">
                <div className="wrapper-card">
                    <Card className="p-3 card border-0 mb-3 breadcrumb-set">
                        <div className="d-flex align-items-center">
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
                                    label="Product View"
                                    deleteIcon={<ExpandMoreIcon />}
                                />
                            </Breadcrumbs>
                        </div>
                    </Card>
                    <Card className="p-3 card border-0 product-view">
                        <Row>
                            <Col md={4}>
                                <div className="pb-4">
                                    <h6>Product Gallery</h6>
                                </div>
                                <div className="slider-container">
                                    <Slider {...settings}>
                                        {images.map((image, index) => (
                                            <div key={index} className="product-gallery">
                                                <img src={image} alt={`Product Slide ${index + 1}`} className="w-100" />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className="product-info-box pe-3 ps-5">
                                    <h6>Product Details</h6>
                                    <div className="prodcut-details py-3">
                                        <h4>Formal suits for men wedding slim fit 3 piece dress business party jacket</h4>
                                        <div className="product-items pt-5">
                                            <div className="d-flex align-items-center gap-4 pb-3">

                                                <div className="d-flex align-items-center product-width">
                                                    <span className="me-2"><MdBrandingWatermark /></span>
                                                    <p className="fw-bold"> Brand</p>
                                                </div>
                                                <div className="items ps-5">
                                                    <p><span className="me-3">:</span>Ecstasy</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-4 pb-3">

                                                <div className="d-flex align-items-center product-width">
                                                    <span className="me-2"><BiSolidCategory /></span>
                                                    <p className="fw-bold"> Category</p>
                                                </div>
                                                <div className="items ps-5">
                                                    <p><span className="me-3">:</span>Men's</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-4 pb-3">

                                                <div className="d-flex align-items-center product-width">
                                                    <span className="me-2"><MdFilterVintage /></span>
                                                    <p className="fw-bold"> Tags</p>
                                                </div>
                                                <div className="items ps-5">

                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="me-3">:</span>
                                                        <span className="badge bg-light text-dark">SUITE</span>
                                                        <span className="badge bg-light text-dark">PARTY</span>
                                                        <span className="badge bg-light text-dark">DRESS</span>
                                                        <span className="badge bg-light text-dark">MEN</span>
                                                        <span className="badge bg-light text-dark">SMART</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-4 pb-3">

                                                <div className="d-flex align-items-center product-width">
                                                    <span className="me-2"><IoColorPalette /></span>
                                                    <p className="fw-bold"> Color</p>
                                                </div>
                                                <div className="items ps-5">

                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="me-3">:</span>
                                                        <span className="badge bg-light text-dark">RED</span>
                                                        <span className="badge bg-light text-dark">BLUE</span>
                                                        <span className="badge bg-light text-dark">WHITE</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-4 pb-3">

                                                <div className="d-flex align-items-center product-width">
                                                    <span className="me-2"><FaCartPlus /></span>
                                                    <p className="fw-bold"> Size</p>
                                                </div>
                                                <div className="items ps-5">
                                                    <p><span className="me-3">:</span>(68) Piece</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-4 pb-3">

                                                <div className="d-flex align-items-center product-width">
                                                    <span className="me-2"><MdOutlineReviews /></span>
                                                    <p className="fw-bold"> Review</p>
                                                </div>
                                                <div className="items ps-5">
                                                    <p><span className="me-3">:</span>(03) Review</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-4 pb-3">

                                                <div className="d-flex align-items-center product-width">
                                                    <span className="me-2"><TbRosetteDiscountCheckFilled /></span>
                                                    <p className="fw-bold"> Published</p>
                                                </div>
                                                <div className="items ps-5">
                                                    <p><span className="me-3">:</span>02 Feb 2020</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="product-decrpt mt-5">
                            <h3 className="mb-3 mt-3">Product Decription</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste quae quia, hic molestias nostrum quasi illum qui nulla neque quaerat odit asperiores ullam praesentium in dolorum nisi obcaecati consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi pariatur molestiae cum aspernatur. Amet inventore quaerat sunt, fuga minus voluptatibus cum esse qui natus? Est vero necessitatibus ad, obcaecati libero nostrum expedita repudiandae suscipit sapiente fugiat quas voluptatem inventore labore, placeat sunt assumenda omnis! Hic dolores quas saepe non sed, a dolorum earum voluptates officiis aliquam similique officia ab deleniti animi neque, eveniet consequuntur harum sapiente id dolor quos aperiam molestias. Quasi quibusdam maiores impedit repellendus fugiat eius corrupti ullam praesentium. Accusamus iure, in ad, doloribus quia, quidem quas saepe perferendis eius ipsa veritatis iste illum magni repellendus dolorum.</p>
                        </div>
                        <div className="reviewsSection mt-5">
                            <Row className="reviewsRow">
                                <Col sm={11}>
                                    <div className="client-review h-100">
                                        <div className="d-flex align-items-center text-start">
                                            <UserAvatarimg img={profileImg} lg={true} />
                                            <div className="userInfo">
                                                <h4>Jack Miller</h4>
                                                <p className="mb-0">25 mins ago!</p>
                                            </div>
                                            <div className="reply-btn ms-auto">
                                                <Button variant="contained" className="text-white">
                                                    <FaReply className="me-2" /> Reply
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <Rating name="read-only" defaultValue={2.5} precision={0.5} readOnly />
                                        </div>
                                        <div className="review-descrpt">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, harum officiis et alias placeat quaerat debitis iste id reiciendis facilis.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="reviewsRow reply">
                                <Col sm={11}>
                                    <Row className="reviewsRow justify-content-end mt-4">
                                        <Col sm={10}>
                                            <div className="client-review h-100 ">
                                                <div className="d-flex align-items-center text-start">
                                                    <UserAvatarimg img={profileImg} lg={true} />
                                                    <div className="userInfo">
                                                        <h4>Jack Miller</h4>
                                                        <p className="mb-0">25 mins ago!</p>
                                                    </div>
                                                    <div className="reply-btn ms-auto">
                                                        <Button variant="contained" className="text-white">
                                                            <FaReply className="me-2" /> Reply
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="rating">
                                                    <Rating name="read-only" defaultValue={2.5} precision={0.5} readOnly />
                                                </div>
                                                <div className="review-descrpt">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, harum officiis et alias placeat quaerat debitis iste id reiciendis facilis.</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <div className="reviewForm mt-4">
                                <h4 className="mb-3">Review Reply Form</h4>
                                <form className="reviewForm">
                                    <textarea placeholder="write here"></textarea>
                                    <Button variant="contained" className="text-white w-100">
                                      Drop you replies 
                                    </Button>
                                </form>
                            </div>


                        </div>
                    </Card>
                </div>
            </div>
        </Layout>

    );
}

export default ProductView;
