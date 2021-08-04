function Content() {
  var a = 2;
  a = a + 5;
  return (
    <div>
      <h1 style={{ color: "red" }}>gggg</h1>
      <h2 className="heading">heading 2 </h2>
      <div>
        <ol>
          <li style={{ backgroundColor: "green", color: "white" }}>a</li>
          <li>{a}</li>
          <li>c</li>
          <li>g</li>
          <li>k</li>
        </ol>
      </div>
    </div>
  );
}
export default Content;
