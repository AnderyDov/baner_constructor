const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs/promises");
const path = require("path");
const zip = require("express-zip");

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.use(express.static(path.resolve(__dirname, "../front/build")));

server.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../front/build", "index.html"));
});

server.post("/file", (req, res) => {
  console.log("work");
  console.log(req.body);

  let obj = {
    casino: "./casino_1.jpg",
    nature1: "./nature_1.jpg",
    nature2: "./nature_2.jpg",
    sea: "./sea_1.jpg",
    stream_panck: "./stream_panck_1.jpg",
    earth_1: "./earth_1.jpg",
    earth_2: "./earth_2.jpg",
    fon_1: "./fon_1.jpg",
    fon_2: "./fon_2.jpg",
    fon_3: "./fon_3.jpg",
    fon_4: "./fon_4.jpg",
    fon_5: "./fon_5.jpg",
    fon_6: "./fon_6.jpg",
    fon_7: "./fon_7.jpg",
    fon_8: "./fon_8.jpg",
    fon_9: "./fon_9.jpg",
    fon_10: "./fon_10.jpg",
    fon_11: "./fon_11.jpg",
    fon_12: "./fon_12.jpg",
    fon_13: "./fon_13.jpg",
    fon_14: "./fon_14.jpg",
    fon_15: "./fon_15.jpg",
  };

  let objKeyframes = {
    show_1: `@keyframes show_1 {
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
    }`,
    show_2: `@keyframes show_2 {
      100%,
      0% {
        opacity: 0;
        transform: scale(0) translate(100px, -300px) rotateX(-4turn);
      }
      50%,
      70% {
        opacity: 1;
        transform: scale(1);
      }
      90% {
        opacity: 0;
        transform: scale(0.4) rotate(-1turn);
      }
    }`,
  };

  let textInclude = "";
  let shadwoInclude = "";
  let clipInclyde = "";
  let animationInclude = "";
  let imageDivInclude = "";
  let image;
  if (req.body.fon === "2") image = obj[req.body.image];

  if (req.body.fon === "2") {
    imageDivInclude = `<div style={{
      position: "absolute",
      width: "100%",
      minHeight: "100vh",
      display: "block",
      top: "${req.body.offsetUp}px",
      backgroundImage: "url("+require('${image}')+")",
      backgroundSize: "cover",
    }}></div>`;
  }

  if (req.body.onAnimation) {
    animationInclude = ` opacity: 1,
    animationName: "${req.body.animationName}",
    animationDuration:  "${req.body.timeAnimation}s",
    animationIterationCount: "infinite",`;
  }

  if (req.body.transparent) {
    clipInclyde = `WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",`;
  }

  if (req.body.textShadow) {
    shadwoInclude = `textShadow: "${req.body.hShadow}px ${req.body.vShadow}px ${req.body.blurRadius}px ${req.body.colorShadow}",`;
  }

  if (req.body.text !== "") {
    textInclude = `let textStyle = {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        top: "${req.body.top}%",
        left: "${req.body.left}%",
        transform: "translate(-50%, -50%) skew(${req.body.skewX}deg, ${req.body.skewY}deg) rotate3d(${req.body.rotateX}, ${req.body.rotateY}, ${req.body.rotateZ}, ${req.body.angle}deg)",
      };
  
      let symbolStyle = {
        text: "${req.body.text}",
        fontVariant: "${req.body.fontVariant}",
        textTransform: "${req.body.textTransform}",
        margin:  "${req.body.letterSpasing}px",
        ${shadwoInclude}   
        fontSize:  "${req.body.fontSize}px",
        fontFamily:  "${req.body.fontFamily}",
        fontWeight:  ${req.body.fontWeight},
        fontStyle:  "${req.body.fontStyle}",
        color:  "${req.body.color}",
        WebkitTextStroke: "${req.body.widthStrokeText}px ${req.body.colorStrokeText}",
        ${clipInclyde}
        ${animationInclude}
      };
  
      let label = "${req.body.text}".split("").map((item, index) => {
        if (item === " ") {
          return (
            <div
            className="b"
              key={index}
              style={{
                ...symbolStyle,
                animationDelay: (index + 1) / 10 + "s",
                padding: "${req.body.wordSpasing}px",
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
      });`;
  }

  fs.writeFile(
    "Result.js",
    `import { useEffect } from "react";

    const injectStyle = (style) => {
      const styleElement = document.createElement("style");
      let styleSheet = null;
    
      document.head.appendChild(styleElement);
    
      styleSheet = styleElement.sheet;
    
      styleSheet.insertRule(style, styleSheet.cssRules.length);
    };

    let keyFrame=\`${objKeyframes[req.body.animationName]}\`

    injectStyle(keyFrame)

    export default function Baner() {
      
    let blockStyle = {
      width: "100%",
      overflow: "hidden",
      position: "relative",
      minHeight: "${req.body.height}px",
      height: "${req.body.height}px",
      background: "${req.body.background}",
    };
    ${textInclude}
    let out=<div  style={blockStyle}>
              ${imageDivInclude}
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
  }`
  )
    .then(() => {
      if (req.body.fon === "2") {
        console.log(obj[req.body.image]);
        res.zip([
          { path: "Result.js", name: "Result.js" },
          { path: obj[req.body.image], name: "image.jpg" },
        ]);
      } else {
        res.zip([{ path: "Result.js", name: "Result.js" }]);
      }
    })
    .catch((err) => console.log(err));
});

server.use((req, res) => {
  res.send("error");
});
server.listen(3000, () => console.log("http://localhost:3000"));
