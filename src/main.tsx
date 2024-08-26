import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Muix from "./Muix";
import Ag from "./Ag";
import Rdg from "./Rdg";
import Tabulator from "./Tabulator";
import Kendo from "./Kendo";

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "Muix":
        return <Muix />;
      case "Ag":
        return <Ag />;
      case "Rdg":
        return <Rdg />;
      case "Tabulator":
        return <Tabulator />;
      case "Kendo":
        return <Kendo />;
      default:
        return null;
    }
  };

  return (
    <React.StrictMode>
      <div>
        <button onClick={() => setSelectedComponent("Muix")}>Muix</button>
        <button onClick={() => setSelectedComponent("Ag")}>Ag</button>
        <button onClick={() => setSelectedComponent("Rdg")}>Rdg</button>
        <button onClick={() => setSelectedComponent("Tabulator")}>Tabulator</button>
      </div>
      <hr />
      {renderSelectedComponent()}
      <hr />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
