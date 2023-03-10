import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/kalina_soft_logo.svg"

export const Header = () => {
    const [burgerActive, setBurgerActive] = useState(false);
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-container logo-container">
                    <Link to="/" className="nav-element" onClick={() => {setBurgerActive(false)}}>
                        <img className="logo" src={logo} alt="Kalina Soft logo" />
                    </Link>
                </div>
                <div className={`header-container nav-container ${burgerActive ? "active" : ""}`}>
                    <Link to="/about_company" className="nav-element" onClick={() => {setBurgerActive(false)}}>О компании</Link>
                    <Link to="/services" className="nav-element" onClick={() => {setBurgerActive(false)}}>Услуги</Link>
                    <Link to="/cases" className="nav-element" onClick={() => {setBurgerActive(false)}}>Проекты</Link>
                    <Link to="/phone" className="nav-element" onClick={() => {setBurgerActive(false)}}>+7 904 428 69 22</Link>
                </div>
                <div className="burger-button" onClick={() => setBurgerActive(!burgerActive)}>
                    <span className={burgerActive ? "active" : ""}></span>
                    <span className={burgerActive ? "active" : ""}></span>
                    <span className={burgerActive ? "active" : ""}></span>
                </div>
            </div>
        </header>
    )
}