





export default function App() {
  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <p className="message">slava ukraini</p>
      <div className="buttons">
        <button style={{backgroundColor: '#7950f2', color: "white"}}>previous</button>
        <button style={{backgroundColor: '#7950f2', color: "white"}}>next</button>
      </div>
    </div>
  );
}
