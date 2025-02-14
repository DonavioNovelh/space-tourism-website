import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() { 
  const [count, setCount] = useState(0);

  return (
    <div className="p-6">
      Hello Mundo
      <img
        src="./vite.svg"
        alt=""
      />
    </div>
  );
}

export default App;
