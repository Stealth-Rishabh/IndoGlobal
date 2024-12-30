// NoPaperFormsWidget.js
import React, { useEffect, useRef } from "react";

const NoPaperFormsWidget = ({ className }) => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const loadScript = () => {
      if (!window.npf_d) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://widgets.nopaperforms.com/emwgts.js";
        document.body.appendChild(script);

        script.onload = () => {
          if (window.npf_d && window.npf_d.render && widgetRef.current) {
            window.npf_d.render();
          }
        };
      } else {
        window.npf_d.render();
      }
    };

    loadScript();

    const observer = new MutationObserver(() => {
      if (window.npf_d && window.npf_d.render && widgetRef.current) {
        window.npf_d.render();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={className}
      style={{
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
