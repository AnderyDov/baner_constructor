export default function TextSetting({ settings, setSettings, handlerSave }) {
  let out = (
    <fieldset className="small_field">
      <legend>{settings.language ? "Настройки текста" : "Text setting"}</legend>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                form="form"
                name="text"
                type="text"
                value={settings.text}
                onChange={(e) => {
                  setSettings({ ...settings, text: e.target.value });
                }}
              />
            </td>
            <td>{settings.language ? "текст банера" : "text of baner"}</td>
          </tr>
          <tr>
            <td>
              <select
                form="form"
                name="textTransform"
                value={settings.textTransform}
                onChange={(e) => {
                  setSettings({
                    ...settings,
                    textTransform: e.target.value,
                  });
                }}
              >
                <option>none</option>
                <option>capitalize</option>
                <option>uppercase</option>
                <option>lowercase</option>
              </select>
            </td>
            <td>{settings.language ? "регистр текста" : "text transform"}</td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="letterSpasing"
                type="number"
                value={settings.letterSpasing}
                onChange={(e) => {
                  setSettings({
                    ...settings,
                    letterSpasing: e.target.value,
                  });
                }}
              />
            </td>
            <td>
              {settings.language
                ? "межсимволбное расстояние"
                : "letter spacing"}
            </td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="wordSpasing"
                type="number"
                value={settings.wordSpasing}
                onChange={(e) => {
                  setSettings({
                    ...settings,
                    wordSpasing: e.target.value,
                  });
                }}
              />
            </td>
            <td>
              {settings.language ? "расстояние меду словами" : "word spacing"}
            </td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="textShadow"
                type="checkbox"
                className="check"
                id="ch_1"
                onChange={() => {
                  setSettings({
                    ...settings,
                    textShadow: !settings.textShadow,
                  });
                  handlerSave();
                }}
              />
              <label htmlFor="ch_1"></label>
            </td>
            <td>{settings.language ? "тень текста" : "text shadow"}</td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="hShadow"
                type="number"
                value={settings.hShadow}
                onChange={(e) => {
                  setSettings({ ...settings, hShadow: e.target.value });
                }}
              />
            </td>
            <td>
              {settings.language ? "смещение по горизонтали" : "h-shadow"}
            </td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="vShadow"
                type="number"
                value={settings.vShadow}
                onChange={(e) => {
                  setSettings({ ...settings, vShadow: e.target.value });
                }}
              />
            </td>
            <td>{settings.language ? "смещение по вертикали" : "v-shadow"}</td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="blurRadius"
                type="number"
                value={settings.blurRadius}
                onChange={(e) => {
                  setSettings({
                    ...settings,
                    blurRadius: e.target.value,
                  });
                }}
              />
            </td>
            <td>{settings.language ? "радиус размытия" : "lur-radius"}</td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="colorShadow"
                type="color"
                value={settings.colorShadow}
                onChange={(e) => {
                  setSettings({ ...settings, colorShadow: e.target.value });
                }}
              />
            </td>
            <td>{settings.language ? "цвет тени" : "color shadow"}</td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  );

  return out;
}
