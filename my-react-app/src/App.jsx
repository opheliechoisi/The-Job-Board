import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Title from "./Title";
import Jobs from "./Jobs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <div class="container">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </main>
    </>
  );
}

export default App;
