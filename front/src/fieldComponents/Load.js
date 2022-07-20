export default function Load({ settings }) {
  let style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
    color: "red",
    width: "100%",
  };

  let out = (
    <div className="load" style={{ ...style, height: settings.height + "px" }}>
      <h1>Loading</h1>
    </div>
  );

  return out;
}
