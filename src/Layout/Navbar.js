import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="container-fluid nav d-flex flex-row justify-content-between pt-3 ps-3 pe-4 pb-5 ">
        <div className="">
          <a className="nav-brand link-dark text-decoration-none h4 text-uppercase" href="#">
            Currency website
          </a>
        </div>
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown link
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a className="dropdown-item" href="#">
                Currency calculator
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Currency country
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
