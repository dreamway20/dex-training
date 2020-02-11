import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./components/sidebar/sidebar";

function App() {
   return (
    <div>
      <main className="layout">
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
