export default function BlockSetting({ settings, setSettings, handlerSave }) {
  let out = (
    <fieldset className="small_field">
      <legend>{settings.language ? "Настройки блока" : "Block setting"}</legend>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                form="form"
                name="height"
                type="number"
                value={settings.height}
                onInput={(e) => {
                  setSettings({ ...settings, height: e.target.value });
                }}
              />
            </td>
            <td>{settings.language ? "высота" : "height"}</td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="background"
                type="color"
                disabled={settings.fon === "1" ? false : true}
                value={settings.background}
                onInput={(e) => {
                  setSettings({ ...settings, background: e.target.value });
                }}
              />
              <input
                type="radio"
                id="1"
                className="check"
                name="radio"
                checked={settings.fon === "1" && true}
                onChange={handlerChange}
              />
              <label htmlFor="1"></label>
            </td>
            <td>{settings.language ? "цвет банера" : "background color"}</td>
          </tr>

          <tr>
            <td>
              <select
                form="form"
                name="image"
                disabled={settings.fon === "2" ? false : true}
                value={settings.image}
                onChange={(e) => {
                  setSettings({ ...settings, image: e.target.value });
                }}
              >
                <option>none</option>
                <option>casino</option>
                <option>nature1</option>
                <option>nature2</option>
                <option>stream_panck</option>
                <option>earth_1</option>
                <option>earth_2</option>
                <option>sea</option>
                <option>fon_1</option>
                <option>fon_2</option>
                <option>fon_3</option>
                <option>fon_4</option>
                <option>fon_5</option>
                <option>fon_6</option>
                <option>fon_7</option>
                <option>fon_9</option>
                <option>fon_10</option>
                <option>fon_11</option>
                <option>fon_12</option>
                <option>fon_13</option>
                <option>fon_14</option>
                <option>fon_15</option>
              </select>
              <input
                type="radio"
                id="2"
                className="check"
                name="radio"
                checked={settings.fon === "2" && true}
                onChange={handlerChange}
              />
              <label htmlFor="2"></label>
            </td>
            <td>{settings.language ? "изображение" : "choose image"}</td>
          </tr>

          <tr>
            <td>
              <input
                form="form"
                name="offsetUp"
                type="number"
                disabled={settings.fon !== "1" ? false : true}
                value={settings.offsetUp}
                onChange={(e) => {
                  setSettings({ ...settings, offsetUp: e.target.value });
                }}
              />
            </td>
            <td>{settings.language ? "смещение по высоте" : "offset up"}</td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  );

  function handlerChange(e) {
    setSettings({ ...settings, fon: e.target.id });
    handlerSave();
  }

  return out;
}
