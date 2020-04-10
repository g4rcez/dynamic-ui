import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactiveContext } from "../App";
import links from "../routes/links";

const Links = [
  { label: "Projects", to: links.projects },
  { label: "About", to: links.about }
];

const Navbar = () => {
  const { pathname } = useLocation();
  const { values } = useContext(ReactiveContext);
  return (
    <header className="w-100 flex items-start">
      <nav className="flex pa3 pa4-ns mh3 flex-wrap justify-between w-100">
        <span className="link text hover-text no-underline justify-start">
          {values.me}
        </span>
        <div className="flex-grow flex items-center justify-evenly">
          {Links.map(x => (
            <Link
              to={x.to}
              className={`f6 link dib text underline-hover hover-secondary nav-link ${
                pathname === x.to ? "secondary" : ""
              }`}
            >
              {x.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
