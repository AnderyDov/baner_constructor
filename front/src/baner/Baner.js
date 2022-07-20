import "./baner.css";
import { useState, useEffect } from "react";
import casino from "../image/casino_1.jpg";
import nature1 from "../image/nature_1.jpg";
import nature2 from "../image/nature_2.jpg";
import sea from "../image/sea_1.jpg";
import earth_1 from "../image/earth_1.jpg";
import earth_2 from "../image/earth_2.jpg";
import fon_1 from "../image/fon_1.jpg";
import fon_2 from "../image/fon_2.jpg";
import fon_3 from "../image/fon_3.jpg";
import fon_4 from "../image/fon_4.jpg";
import fon_5 from "../image/fon_5.jpg";
import fon_6 from "../image/fon_6.jpg";
import fon_7 from "../image/fon_7.jpg";
import fon_8 from "../image/fon_8.jpg";
import fon_9 from "../image/fon_9.jpg";
import fon_10 from "../image/fon_10.jpg";
import fon_11 from "../image/fon_11.jpg";
import fon_12 from "../image/fon_12.jpg";
import fon_13 from "../image/fon_13.jpg";
import fon_14 from "../image/fon_14.jpg";
import fon_15 from "../image/fon_15.jpg";
import stream_panck from "../image/stream_panck_1.jpg";

export default function Baner({ settings }) {
  let [note, setNote] = useState(settings.text);
  let obj = {
    casino: casino,
    nature1: nature1,
    nature2: nature2,
    sea: sea,
    earth_1: earth_1,
    earth_2: earth_2,
    stream_panck: stream_panck,
    fon_1: fon_1,
    fon_2: fon_2,
    fon_3: fon_3,
    fon_4: fon_4,
    fon_5: fon_5,
    fon_6: fon_6,
    fon_7: fon_7,
    fon_8: fon_8,
    fon_9: fon_9,
    fon_10: fon_10,
    fon_11: fon_11,
    fon_12: fon_12,
    fon_13: fon_13,
    fon_14: fon_14,
    fon_15: fon_15,
  };

  let image;
  if (settings.fon === "2") image = obj[settings.image];

  let symbolStyle = {
    text: settings.text,
    fontVariant: settings.fontVariant,
    textTransform: settings.textTransform,
    margin: settings.letterSpasing + "px",
    textShadow: `${settings.textShadow ? "" : "none"} ${settings.hShadow}px ${
      settings.vShadow
    }px ${settings.blurRadius}px ${settings.colorShadow}`,

    fontSize: settings.fontSize + "px",
    fontFamily: settings.fontFamily,
    fontWeight: settings.fontWeight,
    fontStyle: settings.fontStyle,
    color: settings.color,
    WebkitTextStroke: `${settings.widthStrokeText}px ${settings.colorStrokeText}`,
    WebkitTextFillColor: settings.transparent ? "transparent" : null,
    backgroundClip: settings.transparent ? "text" : null,
    WebkitBackgroundClip: settings.transparent ? "text" : null,

    opacity: settings.onAnimation ? 0 : 1,
    animationName: settings.onAnimation ? settings.animationName : "none",
    animationDuration: settings.timeAnimation + "s",
    animationIterationCount: "infinite",
  };

  let textStyle = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    top: settings.top + "%",
    left: settings.left + "%",
    transform: `translate(-50%, -50%) skew(${settings.skewX}deg, ${settings.skewY}deg) rotate3d(${settings.rotateX}, ${settings.rotateY}, ${settings.rotateZ}, ${settings.angle}deg)`,
  };

  let blockStyle = {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    minHeight: settings.height + "px",
    height: settings.height + "px",
    background: settings.background,
  };

  let imageStyle = {
    position: "absolute",
    width: "100%",
    minHeight: "100vh",
    display: settings.fon === "2" || settings.fon === "3" ? "block" : "none",
    top: settings.offsetUp + "px",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
  };

  let videoStyle = {
    position: "absolute",
    width: "100%",
    display: settings.fon === "4" ? "block" : "none",
    top: settings.offsetUp + "px",
  };

  let label = note.split("").map((item, index) => {
    if (item === " ") {
      return (
        <div
          key={index}
          style={{
            ...symbolStyle,
            animationDelay: (index + 1) / 10 + "s",
            padding: settings.wordSpasing + "px",
          }}
          className="b"
        >
          {item}
        </div>
      );
    } else
      return (
        <div
          key={index}
          style={{ ...symbolStyle, animationDelay: (index + 1) / 10 + "s" }}
          className="b"
        >
          {item}
        </div>
      );
  });

  let out = (
    <div className="video" style={blockStyle}>
      <div className="image" style={imageStyle}></div>
      <div className="notes" style={textStyle}>
        {label}
      </div>
      <video style={videoStyle} autoPlay muted loop>
        <source src={obj[settings.video]} type="video/mp4" />
      </video>
    </div>
  );

  useEffect(() => {
    setNote(settings.text);
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
  }, [settings]);
  return out;
}
