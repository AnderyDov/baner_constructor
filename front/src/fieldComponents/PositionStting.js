export default function PositionSetting({
  settings,
  setSettings,
  handlerSave,
}) {
  let out = (
    <fieldset className="small_field">
      <legend>
        {settings.language ? "Настройка позиции текста" : "Position setting"}
      </legend>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                form="form"
                name="top"
                type="number"
                value={settings.top}
                onChange={(e) =>
                  setSettings({ ...settings, top: e.target.value })
                }
              />
            </td>
            <td>{settings.language ? "смещение по оси Y" : "top position"}</td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="left"
                type="number"
                value={settings.left}
                onChange={(e) =>
                  setSettings({ ...settings, left: e.target.value })
                }
              />
            </td>
            <td>{settings.language ? "смещение по оси X" : "left position"}</td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="skewX"
                type="number"
                value={settings.skewX}
                onChange={(e) =>
                  setSettings({ ...settings, skewX: e.target.value })
                }
              />
            </td>
            <td>{settings.language ? "наклон по оси X" : "skewX text"}</td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="skewY"
                type="number"
                value={settings.skewY}
                onChange={(e) =>
                  setSettings({ ...settings, skewY: e.target.value })
                }
              />
            </td>
            <td>{settings.language ? "наклон по оси Y" : "skew text"}</td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="rotateX"
                type="number"
                value={settings.rotateX}
                onChange={(e) =>
                  setSettings({ ...settings, rotateX: e.target.value })
                }
              />
            </td>
            <td>{settings.language ? "ось X" : "axe X"}</td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="rotateY"
                type="number"
                value={settings.rotateY}
                onChange={(e) =>
                  setSettings({ ...settings, rotateY: e.target.value })
                }
              />
            </td>
            <td>{settings.language ? "ось Y" : "axe Y"}</td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="rotateZ"
                type="number"
                value={settings.rotateZ}
                onChange={(e) =>
                  setSettings({ ...settings, rotateZ: e.target.value })
                }
              />
            </td>
            <td>{settings.language ? "ось Z" : "axe Z"}</td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="angle"
                type="number"
                value={settings.angle}
                onChange={(e) =>
                  setSettings({ ...settings, angle: e.target.value })
                }
              />
            </td>
            <td>{settings.language ? "градусы" : "degree"}</td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  );

  return out;
}
