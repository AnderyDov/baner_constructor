export default function AnimationSetting({
  settings,
  setSettings,
  handlerSave,
}) {
  let out = (
    <fieldset className="small_field">
      <legend>
        {settings.language ? "Настройки анимации" : "Animation setting"}
      </legend>
      <table style={{ height: "35%" }}>
        <tbody>
          <tr>
            <td>
              <input
                form="form"
                name="onAnimation"
                type="checkbox"
                className="check"
                id="ch_3"
                onChange={() =>
                  setSettings({
                    ...settings,
                    onAnimation: !settings.onAnimation,
                  })
                }
              />
              <label htmlFor="ch_3"></label>
            </td>
            <td>
              {settings.language ? "анимация" : "animation"}{" "}
              {settings.onAnimation ? "off" : "on"}
            </td>
          </tr>
          <tr>
            <td>
              <select
                form="form"
                name="animationName"
                value={settings.animationName}
                onChange={(e) => {
                  setSettings({ ...settings, animationName: e.target.value });
                }}
              >
                <option>show_1</option>
                <option>show_2</option>
              </select>
            </td>
            <td>
              {settings.language ? "выбрать анимацию" : "shoose ainmation"}
            </td>
          </tr>
          <tr>
            <td>
              <input
                form="form"
                name="timeAnimation"
                type="number"
                value={settings.timeAnimation}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    timeAnimation: e.target.value,
                  })
                }
              />
            </td>
            <td>{settings.language ? "время анимации" : "time animation"}</td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  );

  return out;
}
