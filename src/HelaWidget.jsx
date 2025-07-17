import { useEffect, useState } from "react";
import "./HelaWidget.css";
import { Link } from "react-router-dom";
import bgImage from "./assets/doctor-ai.png";
import BotIcon from "./icon/bot-icon";

function HelaWidget() {
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
        <h1 className="mt-0 bot-text">Mental Therapist</h1>
        <div className="card">
          <p>Your space to talk, reflect, and feel understood—without judgment</p>
        </div>
        <div class="or-divider">
          <span>OR</span>
        </div>
        <div>
          {" "}
          <Link to="/emily" className="custom-button">
            Call AI Receptionist
          </Link>
        </div>
      </div>
      <elevenlabs-convai agent-id="OBkVjpPg5AYQt8ZBOWw3"></elevenlabs-convai>
    </div>

    // <div className="glass-bg">
    // <div>
    //   <BotIcon />{" "}
    // </div>
    // <h1 className="mt-0 bot-text">AI Receptionist</h1>
    // <div className="card">
    //   <p>HoW May i HeLp You tOdAy</p>
    // </div>
    // <div class="or-divider">
    //   <span>OR</span>
    // </div>
    // <div>
    //   {" "}
    //   <Link to="/" className="custom-button">
    //     Call Receptionist
    //   </Link>
    // </div>
    // </div>
  );
}

export default HelaWidget;
