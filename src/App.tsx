import React from "react";
import DragDropComponent from "./modules/DragDrop";
import Header from "./components/Header";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <DragDropComponent />
    </div>
  );
};

export default App;
