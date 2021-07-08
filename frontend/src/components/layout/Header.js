import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userActions";

import Search from "./Search";

import "../../App.css";

const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
  };

  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/">
              <img
                src="data:image/png;base64,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"
                className="logo"
              />
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Route render={({ history }) => <Search history={history} />} />
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <span id="cart" className="ml-3">
              Cart
            </span>
            <span className="ml-1" id="cart_count">
              {cartItems.length}
            </span>
          </Link>

          {user ? (
            <div className="ml-4 dropdown d-inline">
              <Link
                to="#!"
                className="btn dropdown-toggle text-white mr-4"
                type="button"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle"
                  />
                </figure>
                <span>{user && user.name}</span>
              </Link>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {user && user.role === "admin" && (
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>
                )}
                <Link className="dropdown-item" to="/orders/me">
                  Orders
                </Link>
                <Link className="dropdown-item" to="/me">
                  Profile
                </Link>
                <Link
                  className="dropdown-item text-danger"
                  to="/"
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link to="/login" className="btn ml-4" id="login_btn">
                Login
              </Link>
            )
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
