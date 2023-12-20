import React from "react";

const Container = ({ className, children, ...props }) => {
  return (
    <div {...props} className={`container mx-auto my-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
