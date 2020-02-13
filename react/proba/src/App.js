import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./components/sidebar/sidebar";
import { NewsBar } from "./components/newsbar/NewsBar";

function App() {
   return (
    <div>
      <main className="layout">
        <Sidebar />

        <NewsBar />
      </main>
    </div>
  );
}

export default App;
