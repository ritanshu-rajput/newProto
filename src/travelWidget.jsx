import { useEffect, useState } from "react";
import "./HelaWidget.css";
import { Link } from "react-router-dom";
import bgImage from "./assets/agent-travel.png";
import BotIcon from "./icon/bot-icon";

function TravelWidget() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "https://elevenlabs.io/convai-widget/index.js";
    // script.async = true;
    // script.type = "text/javascript";
    // document.body.appendChild(script);

    // make this div to

    setTimeout(() => {
      modifyDiv();
    }, 1000);

    return () => {
      // Optional: clean up the script or widget on unmount
    };
  }, []);

  // Function to modify the content inside the convoiElement
  const modifyDiv = () => {
    const convoiElement = document.getElementsByTagName("elevenlabs-convai")[0];

    if (convoiElement && convoiElement._root) {
      const children = convoiElement._root.children;

      console.debug("Children Array:", children);

      if (children && children.length > 1) {
        const secondChild = children[1];
        console.debug("Second child:", secondChild);

        const poweredByDiv = secondChild.querySelector(
          "div._poweredBy_1f9vw_251"
        );

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

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundColor:"grey",
        height: "100vh",
        width: "100vw",
      }}
      className="content-wrap"
    >
      {/* Loading overlay (will show while content is being modified) */}
      {isLoading ? (
        <div className="loading-overlay">
          <div className="loader"></div>
        </div>
      ) : null}

      {/* Main content */}

      <div className="glass-bg">
        <div>
          <BotIcon />
        </div>
        <h1 className="mt-0 bot-text">Travel Assistant</h1>
        <div className="card">
          <p>Your Voice, Your Guide – Sales, Support & Solutions at One Call</p>
        </div>

        <div className="voice-roles">
          <ul>
            <li>Voice Sales Agent</li>
            <li>Voice Travel Support Agent</li>
            <li>Voice Product Assistant</li>
          </ul>
        </div>
      </div>
      <elevenlabs-convai agent-id="R0g9mFnM1sDxF2U5GBaa"></elevenlabs-convai>
    </div>
  );
}

export default TravelWidget;
