import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/desktop-logo.png";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Row, Col } from "react-bootstrap";

const Registation = () => {
    const [isShowPassword, setisShowPassword] = useState(false);
    const [isShowConfirmPassword, setisShowConfirmPassword] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="without-login-page">
                <div className="auth-page">
                    <Row className="position-relative z-index-99">
                        <Col md="8" className="d-flex align-items-center justify-content-start">
                            <div className="auth-left-side">
                                <h1 className="fw-bold">BEST UX/UI FASHION ECOMMERCE DASHBOARD & ADMIN PANEL</h1>
                                <p className="pt-3 mb-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                                </p>
                                <Link to={'/dashboard'}>
                                    <Button variant="contained" className="w-auto" type="submit">Go To Home</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="regist-Box auth-box">
                                <div className="logincontent">
                                    <div className="loginheader text-center">
                                        <Link to="/" className="text-decoration-none">
                                            <img src={logo} className="logo" alt="Logo" />
                                            <h5 className="py-3 text-decoration-none text-black">Registration to Mamix</h5>
                                        </Link>
                                    </div>
                                    <Form>
                                        <Form.Group className="mb-3 mt-2">
                                            <Form.Control type="text" placeholder="Enter User Name" autoFocus />
                                        </Form.Group>
                                        <Form.Group className="mb-3 mt-2">
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 passwordform">
                                            <Form.Control
                                                type={isShowPassword ? 'text' : 'password'}
                                                aria-describedby="passwordHelpBlock"
                                                placeholder="Enter your Password"
                                            />
                                            <span className="toggleShowPassword" onClick={() => setisShowPassword(!isShowPassword)}>
                                                {isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                            </span>
                                        </Form.Group>
                                        <Form.Group className="mb-3 passwordform">
                                            <Form.Control
                                                type={isShowConfirmPassword ? 'text' : 'password'}
                                                aria-describedby="confirmPasswordHelpBlock"
                                                placeholder="Confirm Password"
                                            />
                                            <span className="toggleShowPassword" onClick={() => setisShowConfirmPassword(!isShowConfirmPassword)}>
                                                {isShowConfirmPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                            </span>
                                        </Form.Group>
                                        <Button variant="contained" className="w-100" type="submit">Sign In</Button>
                                        <div className="d-flex align-items-center justify-content-center or">
                                            <span className="line"></span>
                                            <span className="txt">Or</span>
                                            <span className="line"></span>
                                        </div>
                                        <div className="mt-3 loginwithgoogle">
                                            <Button variant="outlined" className="btn btn-outline-primary w-100 py-2 text-primary">
                                                Sign In with Google
                                            </Button>
                                        </div>
                                        <div className="dont-have-account text-center mt-3">
                                            Don't have an account?<span className="ps-2"><Link to={'/login'} className="text-decoration-none text-primary">Login</Link></span>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
};

export default Registation;
