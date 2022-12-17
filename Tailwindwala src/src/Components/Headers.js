import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Action/userAction";
import SearchBox from "./SearchBox";
import { Route } from "react-router-dom";

function Headers() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    console.log("logout");
    dispatch(logout());
  };
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" collapsedonselect="true">
        <Container>
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand className="font-bold">
              MDORA-SHOPPING-STORE
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className="ms-auto ">
              <Link
                className="d-flex align-items-center text-decoration-none text-white"
                to="/cart"
              >
                <i className="fas fa-shopping-cart"></i>Cart
              </Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <NavDropdown.Item>
                    <Link to="/profile" className="text-decoration-none">
                      Profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Container>
                  <Link to="/login" className="text-decoration-none text-white">
                    <i className="fas fa-user"></i>Sign In
                  </Link>
                </Container>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="admin" id="adminmenu">
                  <NavDropdown.Item>
                    <Link to="/admin/userlist">Users</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/admin/productlist">Products</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/admin/orderlist">Orders</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Headers;
