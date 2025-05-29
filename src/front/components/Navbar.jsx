import React from "react";
import logo from "../assets/img/master-help-logo-hz.webp";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar custom-toggler">
      <div className="container">
        <NavHashLink className="navbar-brand" to="/#hero">
          <img src={logo} alt="Master Help Logo" height="100" />
        </NavHashLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavHashLink to="/#solution-benefits" className="nav-link">
                Beneficios
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink to="/#how-it-works" className="nav-link">
                Cómo Funciona
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink to="/#use-cases" className="nav-link">
                Casos de uso
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink to="/#testimonials" className="nav-link">
                Testimonios
              </NavHashLink>
            </li>
          </ul>

          <div className="d-flex ms-lg-3">
            <Link to="/login" className="btn btn-outline-light me-2">
              Iniciar Sesión
            </Link>
            <Link to="/dashboard" className="btn btn-outline-light me-2">
              Mis procesos
            </Link>
            <Link to="/signin" className="btn btn-primary">
              Regístrate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
