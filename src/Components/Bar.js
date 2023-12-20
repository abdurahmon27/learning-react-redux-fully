import React from "react";
import { Link } from "react-router-dom";

const Bar = () => {
  return (
    <div className="container mx-auto">
      <nav className="my-3 py-5 border md:rounded-full shadow-md flex items-center justify-evenly max-md:flex-col gap-y-5 max-md:my-0">
      <Link to="/">Home</Link>
        <Link to="/props">Working with Props, States</Link>
        <Link to="/events">Working with Events</Link>
        <Link to="/rendering">Working with Conditional rendering</Link>
        <Link to="/hooks">Working with Hooks</Link>
        <Link to="/state-managment">Working with State Managment</Link>
      </nav>
    </div>
  );
};

export default Bar;
