import React, { useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';

import { Dropdown, initMDB } from "mdb-ui-kit";

import "./Navbar.css";

initMDB({ Dropdown });

export default function App() {
    const { cart, totalQuantity } = useSelector((state) => state.allCart);
    const dispatch = useDispatch();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <MDBNavbar light bgColor='light' className='h-14'>
            <MDBContainer fluid className="d-flex justify-content-between align-items-center">
                <MDBNavbarBrand className='text-2xl font-bold'>
                    {/* <img src="path/to/your/logo.png" alt="R-Mart Logo" /> */}
                    <span className="logo-text">MobileWALLA</span>
                </MDBNavbarBrand>
                <span className="all-products-link">
                    <Link to="/">All Products</Link>
                </span>
                <div className='d-flex align-items-center gap-4'>
                    <Link to="/cart">
                        <MDBBtn color='dark'>
                            <strong>Cart ({totalQuantity})</strong>
                        </MDBBtn>
                    </Link>
                    
                    {/* Dropdown menu */}
                    <MDBDropdown>
                        <MDBDropdownToggle onClick={toggleDropdown} tag="a" className="nav-link dropdown-toggle d-flex align-items-center " href="#" id="navbarDropdownMenuLink" role="button" aria-expanded="false">
                            <img
                                src="data:image/png;base64,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"
                                className="rounded-circle pic"
                                height="22"
                                alt="Portrait of a Woman"
                                loading="lazy"
                            />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu aria-labelledby="navbarDropdownMenuLink" className='px-4 py-1 ' show={dropdownOpen}>
                            <MDBDropdownItem className='dropdown-items'>
                                <Link to="#">My Profile</Link>
                            </MDBDropdownItem>
                            <MDBDropdownItem className='dropdown-items'>
                                <Link to="#">Settings</Link>
                            </MDBDropdownItem>
                            <MDBDropdownItem className='dropdown-items'>
                                <Link to="#">Logout</Link>
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
            </MDBContainer>
        </MDBNavbar>
    );
}