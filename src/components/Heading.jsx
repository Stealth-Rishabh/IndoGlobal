import React from 'react';

const Heading = ({ 
  title, 
  subtitle, 
  className = "",
  titleClassName = "",
  subtitleClassName = ""
}) => {
  return (
    <div className={`mb-10 md:mb-16 ${className}`}>
      <h2 className={`mb-4 text-center text-3xl font-semibold sm:font-bold  sm:text-5xl ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto max-w-screen-md text-center sm:text-lg lg:text-xl ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;