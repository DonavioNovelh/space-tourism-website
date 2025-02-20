import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen ">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
