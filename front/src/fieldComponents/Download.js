export default function Downnload({ settings, handlerMouseDown }) {
  let out = (
    <fieldset className="small_field">
      <legend>Downnload</legend>
      <table style={{ height: "35%" }}>
        <tbody>
          <tr>
            <td></td>
            <td>
              <form action="/file" method="post" id="form"></form>
              <input
                type="submit"
                className="download"
                onMouseDown={handlerMouseDown}
                value={settings.language ? "Скачать" : "Download"}
                form="form"
              />
              <input
                type="text"
                hidden
                value={settings.fon}
                name="fon"
                form="form"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  );

  return out;
}
