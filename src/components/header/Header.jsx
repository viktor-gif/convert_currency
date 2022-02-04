import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"

export const Header = () => {
    return <header className="header">
        <nav>
            <ul className="header__nav-list">
                <NavLink to="/converter"><li>Конвертер</li></NavLink>
                <NavLink to="/current"><li>Курс валют</li></NavLink>
            </ul>
        </nav>
    </header>
}