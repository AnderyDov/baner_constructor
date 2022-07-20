export default function FontSetting({ settings, setSettings, handlerSave }) {
  let out = (
    <fieldset className="small_field">
      <legend>{settings.language ? "Настройки шрифта" : "Font setting"}</legend>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                form="form"
                name="fontSize"
                type="number"
                value={settings.fontSize}
                onInput={(e) => {
                  setSettings({ ...settings, fontSize: e.target.value });
                }}
              />
            </td>
            <td>{settings.language ? "размер шрифта" : "font size"}</td>
          </tr>
          <tr>
            <td>
              <select
                form="form"
                name="fontFamily"
                value={settings.fontFamily}
                onInput={(e) => {
                  setSettings({ ...settings, fontFamily: e.target.value });
                }}
              >
                <option>Chakra Petch</option>
                <option>Tangerine</option>
                <option>source-code-pro</option>
                <option>Menlo</option>
                <option>Monaco</option>
                <option>Consolas</option>
                <option>Courier New</option>
                <option>Big Shoulders Display</option>
                <option>Orbitron</option>
                <option>Dosis</option>
              </select>
            </td>
            <td>{settings.language ? "название шрифта" : "font family"}</td>
          </tr>
          <tr>
            <td>
              <select
                form="form"
                name="fontWeight"
                value={settings.fontWeight}
                onInput={(e) => {
                  setSettings({ ...settings, fontWeight: e.target.value });
                }}
              >
                <option>100</option>
                <option>200</option>
                <option>300</option>
                <option>400</option>
                <option>500</option>
                <option>600</option>
                <option>700</option>
                <option>800</option>
                <option>900</option>
              </select>
            </td>
            <td>{settings.language ? "толщина шрифта" : "font weight"}</td>
          </tr>
          <tr>
            <td>
              <select
                form="form"
                name="fontStyle"
                value={settings.fontStyle}
                onInput={(e) => {
                  setSettings({ ...settings, fontStyle: e.target.value });
                }}
              >
                <option>normal</option>
                <option>italic</option>
                <option>oblique</option>
              </select>
            </td>
            <td>{settings.language ? "стиль шрифта" : "font style"}</td>
          </tr>
          <tr>
            <td>
              <select
                form="form"
                name="fontVariant"
                value={settings.fontVariant}
                onInput={(e) => {
                  setSettings({
                    ...settings,
                    fontVariant: e.target.value,
                  });
                }}
              >
                <option>normal</option>
                <option>small-caps</option>
              </select>
            </td>
            <td>{settings.language ? "капители вариант" : "font variant"}</td>
          </tr>

          <tr>
            <td>
              <input
                form="form"
                name="color"
                type="color"
                value={settings.color}
                onInput={(e) => {
                  setSettings({ ...settings, color: e.target.value });
                }}
              />
            </td>
            <td>{settings.language ? "цвет текста" : "color of text"}</td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="widthStrokeText"
                type="number"
                value={settings.widthStrokeText}
                onInput={(e) => {
                  setSettings({
                    ...settings,
                    widthStrokeText: e.target.value,
                  });
                }}
              />
            </td>
            <td>
              {settings.language ? "толщина контура" : "width stroke of text"}
            </td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="colorStrokeText"
                type="color"
                value={settings.colorStrokeText}
                onInput={(e) => {
                  setSettings({
                    ...settings,
                    colorStrokeText: e.target.value,
                  });
                }}
              />
            </td>
            <td>
              {settings.language
                ? "цвет контура текста"
                : "stroke color of text"}
            </td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="transparent"
                type="checkbox"
                className="check"
                id="ch_2"
                onChange={() => {
                  setSettings({
                    ...settings,
                    transparent: !settings.transparent,
                  });
                  handlerSave();
                }}
              />
              <label htmlFor="ch_2"></label>
            </td>
            <td>
              {settings.language ? "прозрачность текста" : "transparent text"}
            </td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  );

  return out;
}
