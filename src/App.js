import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./Header";
import Input from "./Input";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
