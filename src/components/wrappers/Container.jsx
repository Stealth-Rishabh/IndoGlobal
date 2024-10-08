import React, { Children } from "react";

const Container = ({ className, children }) => {
  return (
    <section
      className={`container mx-auto lg:py20 md:py-12 py-6 sm:px-0 px-6 ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
