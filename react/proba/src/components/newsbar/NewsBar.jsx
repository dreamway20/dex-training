import React from "react";
import { NewsCard } from "../svgs/NewsCard";
import {MenuNews} from "./MenuNews";
import {News} from "./MenuNews";
import "./styleNews.css";

export function NewsBar () {
    return (
        <section className="newsbar">
            <div className="menu-section">
              <div></div>
                            
              <nav className="menu">
                  <ul className="menu-news">
                      <li>
                          <div className="menu-news">
                            <a href="/news">
                            <img src="./News card.png" alt="" width="234px" height="120px" />
                            </a>
                            <MenuNews href="/news" active>Новости могут быть совершенно разнообразными и удивительными</MenuNews>
                          </div>
                      </li>
                      <li>
                          <div className="menu-news">
                            <a href="/news">
                            <img src="./News card.png" alt="" width="234px" height="120px" />
                            </a>
                            <News href="/news">Новости могут быть совершенно разнообразными и удивительными</News>
                          </div>
                      </li>
                      <li>
                          <div className="menu-news">
                            <a href="/news">
                            <img src="./News card.png" alt="" width="234px" height="120px" />
                            </a>
                            <MenuNews href="/news">Новости могут быть совершенно разнообразными и удивительными</MenuNews>
                          </div>
                      </li>
                      <li>
                          <div className="menu-news">
                          <NewsCard width="234px" height="120px" />
                          <MenuNews href="/news">Новости могут быть совершенно разнообразными и удивительными</MenuNews>
                          </div>
                      </li>
                  </ul>
              </nav>
            </div>
                    
        </section>
    )
}
