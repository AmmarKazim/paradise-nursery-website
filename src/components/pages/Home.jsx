import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <main className="min-vh-100 text-light d-flex flex-column justify-content-center bg">
      <section className="container d-flex align-items-center">
        <div className="text-center me-5">
          <h1 className="text-white">Welcome to Paradise Nursery</h1>
          <hr className="w-25 mx-auto" />
          <p>Where Green Meets Serenity</p>
          <NavLink className="btn btn-success mt-4" to="/products">
            Get Started
          </NavLink>
        </div>
        <div className="w-75">
          <p className="text-center fw-bold">
            Welcome to Paradise Nursery, where green meets serenity!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
