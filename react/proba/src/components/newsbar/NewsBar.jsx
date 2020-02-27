import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { MenuNews } from "./MenuNews";
import { News } from "./News";
import "./styleNews.css";

export function NewsBar() {
  return (
    <section className="newsbar">
      <div className="menu-section">

        <nav className="menu">
          <News />
          <ul className="menu-news">
            <li>
              <div className="menu-news">
                <MenuNews href="/news" active>Новости могут быть совершенно разнообразными и удивительными</MenuNews>
              </div>
            </li>
          </ul>
        </nav>
      </div>

    </section>
  )
}
