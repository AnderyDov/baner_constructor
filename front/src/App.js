import "./App.css";
import Modal from "./fieldComponents/Modal";
import Baner from "./baner/Baner";
import Load from "./fieldComponents/Load";
import TextSetting from "./fieldComponents/TextSetting";
import FontSetting from "./fieldComponents/FontSetting";
import BlockSetting from "./fieldComponents/BlockSetting";
import AnimationSetting from "./fieldComponents/AnimationSetting";
import Downnload from "./fieldComponents/Download";
import { useState } from "react";
import PositionSetting from "./fieldComponents/PositionStting";

export default function App() {
  let [readme, setReadme] = useState(false);
  let [render, setRender] = useState(true);
  let [settings, setSettings] = useState({
    language: false,
    text: "Wellcom to website",
    textTransform: "none",
    letterSpasing: "1",
    wordSpasing: "5",
    textShadow: false,
    hShadow: 0,
    vShadow: 0,
    blurRadius: 0,
    colorShadow: "#000000",
    fontSize: "32",
    fontFamily: "Chakra Petch",
    fontWeight: 500,
    fontStyle: "normal",
    fontVariant: "normal",
    color: "#000000",
    widthStrokeText: 0,
    colorStrokeText: "#000000",
    transparent: false,
    height: "200",
    fon: "1",
    background: "#C6C1C1",
    image: "none",
    imageUrl: "none",
    video: "none",
    offsetUp: 0,
    top: 50,
    left: 50,
    skewX: 0,
    skewY: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    angle: 0,
    onAnimation: false,
    animationName: "show_1",
    timeAnimation: 5,
  });

  return (
    <div className="app">
      <Modal readme={readme} setReadme={setReadme} />
      {render ? <Baner settings={settings} /> : <Load settings={settings} />}
      <fieldset className="big_field">
        <div className="language">
          <input
            type="checkbox"
            className="check"
            id="ch_0"
            onChange={handlerLang}
          />
          <label htmlFor="ch_0"></label>
          {settings.language ? "english" : "russian"}
          <button
            className="read"
            onMouseDown={handlerMouseDown}
            onClick={() => setReadme(!readme)}
          >
            {settings.language ? "Читать" : "Readme"}
          </button>
        </div>
        <legend>
          {settings.language ? "Настройки банера" : "Banner setting"}{" "}
        </legend>
        <TextSetting
          settings={settings}
          setSettings={setSettings}
          handlerSave={handlerSave}
        />
        <FontSetting
          settings={settings}
          setSettings={setSettings}
          handlerSave={handlerSave}
        />
        <BlockSetting
          settings={settings}
          setSettings={setSettings}
          handlerSave={handlerSave}
        />
        <PositionSetting
          settings={settings}
          setSettings={setSettings}
          handlerSave={handlerSave}
        />
        <AnimationSetting
          settings={settings}
          setSettings={setSettings}
          handlerSave={handlerSave}
        />
        <Downnload
          settings={settings}
          setSettings={setSettings}
          handlerSave={handlerSave}
          handlerMouseDown={handlerMouseDown}
        />
      </fieldset>
    </div>
  );
  function handlerSave() {
    setRender(false);
    setTimeout(() => {
      setRender(true);
    }, 100);
  }

  function handlerLang(e) {
    e.target.parentNode.classList.toggle("ttt");
    setSettings({ ...settings, language: !settings.language });
  }

  function handlerMouseDown(e) {
    e.target.classList.add("pressed");
    e.target.style.color = "green";
    setTimeout(() => {
      e.target.classList.remove("pressed");
      e.target.style.color = "white";
    }, 100);
  }
}
