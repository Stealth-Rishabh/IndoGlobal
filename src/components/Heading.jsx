import React from 'react';

const Heading = ({ 
  title, 
  subtitle, 
  className = "",
  titleClassName = "",
  subtitleClassName = ""
}) => {
  return (
    <div className={`pb-8 sm:pb-16  space-y-4 sm:space-y-8 ${className}`}>
      <h2 className={` text-center text-3xl font-semibold sm:font-bold  sm:text-5xl lg:text-6xl ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto max-w-screen-md text-base text-center sm:text-lg lg:text-xl ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;