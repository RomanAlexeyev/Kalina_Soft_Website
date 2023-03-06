import { Link } from "react-router-dom";

import logo from "../assets/images/kalina_soft_logo.svg"

export const Header = () => {
    return (
        <header className="header">
            <div className="header-container logo-container">
                <Link to="/" className="nav-element">
                    <img className="logo" src={logo} alt="Kalina Soft logo" />
                </Link>
            </div>
            <div className="header-container nav-container">
                <Link to="/about_company" className="nav-element">О компании</Link>
                <Link to="/services" className="nav-element">Услуги</Link>
                <Link to="/cases" className="nav-element">Проекты</Link>
                <Link to="/phone" className="nav-element">+7 904 428 69 22</Link>
            </div>
        </header>
    )
}