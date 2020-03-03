import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MainLogo } from "../svgs/MainLogo";
import "./styles.css";

export function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="menu-section">
                <div>
                    <Link to="/">
                        <MainLogo width="96px" height="171px" />
                    </Link>
                </div>

                <span className="devider" />

                <nav className="menu">
                    <ul className="menu-links">
                        <li>
                            <NavLink to="/news" className="link" activeClassName="active">Новости</NavLink>
                        </li>
                        <li>
                            <NavLink to="/teams" className="link" activeClassName="active">Команды</NavLink>
                        </li>
                        <li>
                            <NavLink to="/players" className="link" activeClassName="active">Игроки</NavLink>
                        </li>
                    </ul>
                </nav>

            </div>

            <span className="devider" />

            <nav className="menu">
                <ul className="menu-links">
                    <li>
                        <Link to="#">Instagram</Link>
                    </li>
                    <li>
                        <Link to="#">Twitter</Link>
                    </li>
                </ul>
            </nav>

            <span className="devider" />

            <p>Copyright © 2019 NBA</p>
        </aside>
    )
}