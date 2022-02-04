import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"

export const Header = () => {
    return <header className="header">
        <nav className="header__nav">
            <ul className="header__nav-list">
                <NavLink className="header__nav-link" to="/converter">
                    <li className="header__nav-item">Converter</li>
                </NavLink>
                <NavLink className="header__nav-link" to="/current">
                    <li className="header__nav-item">Exchange Rates</li>
                </NavLink>
            </ul>
        </nav>
    </header>
}