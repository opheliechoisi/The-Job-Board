import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Title from "./Title";
import Jobs from "./Jobs";
import Job from "./Job";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header name={"The Job Board"} />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
