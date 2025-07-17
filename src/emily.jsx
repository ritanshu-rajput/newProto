import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "./assets/ai-background.png";
import BotIcon from "./icon/bot-icon";

export default function EmilyWidget() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedClient, setSelectedClient] = useState("Serene");

  // Agent IDs for different clients
  const clientAgentIds = {
    Serene: "agent_01k068zwnrfsgaj4acrdfpkh5f",
    Prestige: "agent_01k0cafdv8fk297qwc9zvvr515",
    // Rise: "agent_01k07kajw4fxbvjv89nmmqnb1c"  
  };

  const modifyDiv = () => {
    // const convoiElement = document.getElementById("AI-widget").getElementsByTagName("div");
    const convoiElement = document.getElementsByTagName("elevenlabs-convai")[0];

    console.debug({ convoiElement });
    if (convoiElement && convoiElement._root) {
      const children = convoiElement._root.children;

      console.debug("Children Array:", children);

      if (children && children.length > 1) {
        const secondChild = children[1];
        console.debug("Second child:", secondChild);

        // Try multiple possible class names for the powered by div
        const poweredBySelectors = [
          "div._poweredBy_1f9vw_251",
          "div[class*='_poweredBy_']",
          "div[class*='poweredBy']",
          "div:contains('Powered by')",
          "div:contains('ElevenLabs')"
        ];

        let poweredByDiv = null;
        for (const selector of poweredBySelectors) {
          poweredByDiv = secondChild.querySelector(selector);
          if (poweredByDiv) break;
        }

        console.debug("poweredByDiv:", poweredByDiv);

        if (poweredByDiv) {
          // poweredByDiv.style.display = "none";
          poweredByDiv.remove();

          console.log("The div with class _poweredBy_me40k_322 is now hidden.");
        } else {
          console.log(
            "Div with class _poweredBy_me40k_322 not found inside the second child"
          );
        }
      } else {
        console.log("Second child not found");
      }
    } else {
      console.log("convoiElement or _root is not found");
    }
    setIsLoading(false);
  };

  const handleClientChange = (event) => {
    const newClient = event.target.value;
    setSelectedClient(newClient);

  };

  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "https://elevenlabs.io/convai-widget/index.js";
    // script.async = true;
    // script.type = "text/javascript";
    // document.body.appendChild(script);

    setTimeout(() => {
      modifyDiv();
    }, 1000);

    // More aggressive interval check to catch watermark quickly
    const intervalId = setInterval(() => {
      const convoiElement = document.getElementsByTagName("elevenlabs-convai")[0];
      if (convoiElement && convoiElement._root) {
        const children = convoiElement._root.children;
        if (children && children.length > 1) {
          const secondChild = children[1];
          const poweredByDiv = secondChild.querySelector("div[class*='poweredBy']") ||
            secondChild.querySelector("div[class*='_poweredBy_']");
          if (poweredByDiv) {
            poweredByDiv.remove();
            console.log("Watermark removed by interval check");
          }
        }
      }
    }, 500); // Check every 500ms instead of 2000ms

    return () => {
      // Optional: clean up the script or widget on unmount
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
      className="content-wrap"
    >
      {isLoading ? (
        <div className="loading-overlay">
          <div className="loader"></div>
        </div>
      ) : null}

      <div className="glass-bg">
        <div>
          <BotIcon />{" "}
        </div>
        <h1 className="mt-0 bot-text">AI Receptionist</h1>

        <div className="card">
          <p>Quick Appointments. Expert Care</p>
        </div>

        {/* Radio buttons section */}
        <div className="radio-section">
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="serene"
                value="Serene"
                checked={selectedClient === "Serene"}
                onChange={handleClientChange}
                className="radio-input"
              />
              <span className="radio-text">Serene</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="Prestige"
                value="Prestige"
                checked={selectedClient === "Prestige"}
                onChange={handleClientChange}
                className="radio-input"
              />
              <span className="radio-text">Prestige</span>
            </label>

          </div>
        </div>
      </div>

      <elevenlabs-convai
        agent-id={clientAgentIds[selectedClient]}
        id="AI-widget"
        key={selectedClient}
      ></elevenlabs-convai>

      <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
    </div>
  );
}