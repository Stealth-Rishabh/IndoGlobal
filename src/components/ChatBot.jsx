import { useEffect, useRef, useState } from "react";

const ChatBot = () => {
  const chatbotRef = useRef(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Wait for the page to be fully loaded before initializing the chatbot
    if (document.readyState === "complete") {
      setIsPageLoaded(true);
    } else {
      window.addEventListener("load", () => setIsPageLoaded(true));
      return () =>
        window.removeEventListener("load", () => setIsPageLoaded(true));
    }
  }, []);

  useEffect(() => {
    // Only initialize chatbot after page is loaded
    if (!isPageLoaded) return;

    // Delay chatbot initialization to ensure page rendering is complete
    const timer = setTimeout(() => {
      const loadScript = () => {
        if (!window.npf_chatbots_loaded) {
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.async = true;
          script.defer = true;
          script.src =
            "https://chatbot.in1.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/4545f35478c4f5a9/331adb7f4dd8487684d6b161470ed823";
          document.body.appendChild(script);

          script.onload = () => {
            window.npf_chatbots_loaded = true;
            if (chatbotRef.current) {
              chatbotRef.current.style.display = "block";
            }
          };

          return script;
        }
        return null;
      };

      const script = loadScript();

      // Use MutationObserver to ensure the chatbot renders properly
      const observer = new MutationObserver(() => {
        if (chatbotRef.current) {
          // Force re-initialization if needed
          if (
            window.npfWidgetInit &&
            typeof window.npfWidgetInit === "function"
          ) {
            window.npfWidgetInit();
          }
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        clearTimeout(timer);
        observer.disconnect();
        if (script && document.body.contains(script)) {
          document.body.removeChild(script);
          window.npf_chatbots_loaded = false;
        }
      };
    }, 1000); // 1 second delay to ensure page renders first

    return () => clearTimeout(timer);
  }, [isPageLoaded]);

  return (
    <div
      ref={chatbotRef}
      className="npf_chatbots"
      data-w="331adb7f4dd8487684d6b161470ed823"
      style={{ display: "none" }} // Hidden until script loads
    />
  );
};

export default ChatBot;
