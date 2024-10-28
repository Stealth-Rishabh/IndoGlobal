// NoPaperFormsWidget.js
import React, { useEffect, useRef } from "react";

const NoPaperFormsWidget = ({ className }) => {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Load the script if it hasn't been loaded yet
    if (!window.npf_d) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widgets.nopaperforms.com/emwgts.js";
      document.body.appendChild(script);
    }

    // Function to initialize or reinitialize the widget
    const initializeWidget = () => {
      if (window.npf_d && window.npf_d.render && widgetRef.current) {
        window.npf_d.render();
      }
    };

    // Initialize the widget when the component mounts
    initializeWidget();

    // Set up a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(initializeWidget);
    observer.observe(document.body, { childList: true, subtree: true });

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={className}
      style={{
        height: "410px",
        width: "20%",
        overflow: "hidden",
        borderRadius: "10px",
        margin: "1rem",
      }}
    >
      <div
        ref={widgetRef}
        className="npf_wgts"
        data-height="410px"
        data-w="f019a45755e6320e9d0dd7e01c13cb5a"
      ></div>
    </div>
  );
};

export default NoPaperFormsWidget;
