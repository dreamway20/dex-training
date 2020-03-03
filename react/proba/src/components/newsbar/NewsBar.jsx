import React from "react";
import { News } from "./News";
import "./styleNews.css";

export function NewsBar() {
  return (
    <section className="newsbar">
      <div className="menu-section">
        <nav className="menu">
          <News />
        </nav>
      </div>
    </section>
  )
}