import { useEffect } from "react";

    const injectStyle = (style) => {
      const styleElement = document.createElement("style");
      let styleSheet = null;
    
      document.head.appendChild(styleElement);
    
      styleSheet = styleElement.sheet;
    
      styleSheet.insertRule(style, styleSheet.cssRules.length);
    };

    let keyFrame=`@keyframes show_1 {
      100%,
      0% {
        opacity: 0;
        transform: scale(0);
      }
      50%,
      70% {
        opacity: 1;
        transform: scale(1);
      }
      90% {
        opacity: 0;
        transform: scale(0) translate(-800px, -300px) rotate(-1turn);
      }
    }`

    injectStyle(keyFrame)

    export default function Baner() {
      
    let blockStyle = {
      width: "100%",
      overflow: "hidden",
      position: "relative",
      minHeight: "200px",
      height: "200px",
      background: "#c6c1c1",
    };
    let textStyle = {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) skew(0deg, 0deg) rotate3d(0, 0, 0, 0deg)",
      };
  
      let symbolStyle = {
        text: "Wellcom to website",
        fontVariant: "normal",
        textTransform: "none",
        margin:  "1px",
           
        fontSize:  "32px",
        fontFamily:  "Chakra Petch",
        fontWeight:  500,
        fontStyle:  "normal",
        color:  "#000000",
        WebkitTextStroke: "0px #000000",
        
        
      };
  
      let label = "Wellcom to website".split("").map((item, index) => {
        if (item === " ") {
          return (
            <div
            className="b"
              key={index}
              style={{
                ...symbolStyle,
                animationDelay: (index + 1) / 10 + "s",
                padding: "5px",
              }}
            >
              {item}
            </div>
          );
        } else
          return (
            <div
            className="b"
              key={index}
              style={{ ...symbolStyle, animationDelay: (index + 1) / 10 + "s" }}
            >
              {item}
            </div>
          );
      });
    let out=<div  style={blockStyle}>
              
              <div  style={textStyle}>
               {label}
              </div>
            </div>

  useEffect(() => {
    window.onfocus = () => {
      [...document.querySelectorAll(".b")].forEach((i) => {
        i.style.animationPlayState = "running";
      });
    };
    window.onblur = () => {
      [...document.querySelectorAll(".b")].forEach((i) => {
        i.style.animationPlayState = "paused";
      });
    };
  }, []);
    
    return out;
  }