export default function Modal({ readme, setReadme }) {
  let darkStyle = {
    position: "absolute",
    zIndex: 9,
    width: "100%",
    height: "100vmax",
    top: 0,
    opacity: 0.6,
    background: "#000000",
  };
  let modalStyle = {
    display: readme ? "block" : "none",
    position: "absolute",
    top: "40px",
    zIndex: 10,
    width: "80vw",
    height: "80vh",
    overflow: "auto",
    boxShadow: "0px 0px 18px 18px rgba(0, 0, 0, 0.478)",
    padding: "60px 60px",
    background: "#b6b6b6",
  };

  let exitStyle = {
    margin: 0,
    padding: 0,
    position: "absolute",
    top: "15px",
    right: "30px",
    cursor: "pointer",
    color: "black",
    fontWeight: "bold",
  };
  let hr = {
    margin: "20px",
  };

  let showDark = readme && <div className="dark" style={darkStyle}></div>;

  let out = (
    <>
      {showDark}
      <div className="modal" style={modalStyle}>
        <div id="exit" style={exitStyle} onClick={handlerExit}>
          &#10005;
        </div>
        Приветствую, дорогой пользователь, это приложение для конструрования
        банера для вашего сайта в виде реакт-компонента.
        <hr style={hr} />
        <ol>
          <li>
            для создания банера ваберите необходимые параметры и нажмите кнопку
            скачать.
          </li>
          <li>
            важно учитывать для корректного отбражения банера-компонента в вашем
            приложении должны быть подключены выбранные шрифты.
          </li>
          <li>
            при установки изображения на фон, вместе с компонентом будет скачано
            выбранное изображение.
          </li>
          <li>
            поумолчанию изображение лежит в одной директории с компонентом, но
            вы всегда можете изменить путь самостоятельно.
          </li>
          <li>
            так же при желании можете поменять избражение фона на собственное
          </li>
        </ol>
        <hr style={hr} />
      </div>
    </>
  );
  window.onkeydown = (e) => {
    if (e.key === "Escape") {
      setReadme(false);
    }
  };

  function handlerExit() {
    setReadme(false);
  }

  return out;
}
