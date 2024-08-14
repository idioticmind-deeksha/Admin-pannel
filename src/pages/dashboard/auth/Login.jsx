import React, {useState} from "react";
import logo from "../../../assets/images/desktop-logo.png";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
    const [isShowPassword, setisShowPassword] = useState(false);
    return (
        <>
            <section className="without-login-page">
                <div className="login-page">
                    <div className="loginBox">
                        <div className="loginheader text-center">
                            <Link to="/" className="text-decoration-none">
                                <img src={logo} className="logo" alt="Logo" />
                                <h5 className="py-3 text-decoration-none text-black">Login to Mamix</h5>
                            </Link>
                        </div>
                        <div className="logincontent">
                            <Form>
                                <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3 passwordform" controlId="exampleForm.COntrolInput2">
                                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                                    <Form.Control
                                        type={`${isShowPassword===true ? 'text' : 'password'}`}
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                        placeholder="Enter your Password"
                                    />
                                    <span className="toggleShowPassword" onClick={()=>setisShowPassword(!isShowPassword)}>
                                        {
                                            isShowPassword === true ? <IoMdEyeOff /> : <IoMdEye /> 
                                        }
                                       
                                    </span>
                                </Form.Group>
                                <Button variant="contained" className="w-100" type="submit">Sign In</Button>
                                <div className="my-3 forgetpassword text-center">
                                    <Link to={'/forgot-password'}> FORGOT PASSWORD
                                    </Link>
                                </div>
                                <div className="d-flex align-items-center justify-content-center or">
                                    <span className="line"></span>
                                    <span className="txt">Or</span>
                                    <span className="line"></span>
                                </div>
                                <div className="mt-3 loginwithgoogle">
                                    <Button variant="outlined" 
                                    className="btn btn-outline-primary w-100 py-2 text-primary">
                                        Sign In with Google
                                    </Button>
                                </div>
                            </Form>
                        </div>
                        <div className="loginfooter logincontent mt-3 p-3">
                            <div className="dont-have-account text-center">
                            Don't have an account?<span className="ps-2"><Link to={'/registation'} className="text-decoration-none text-primary">Register</Link></span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
export default Login; 