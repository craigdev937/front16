import React from "react";
import "./Header.css";
import Logo from "@public/logo.svg";

export const Header = () => {
    const [mobileNav, setMobileNav] = React.useState(false);

    const btnChecked = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.checked ? 
        setMobileNav(true) : 
        setMobileNav(false);
    };

    React.useEffect(() => {
        if (mobileNav) {
            document.getElementsByTagName("body")[0]
                .classList.add("bg-nav");
        } else {
            document.getElementsByTagName("body")[0]
                .classList.remove("bg-nav");
        }
    }, [mobileNav]);

    return (
        <React.Fragment>
            <div className="bg-header">
                <div className="wrapper">
                    <div className="header">
                        <div className="header__menu">
                            <div className="logo">
                                <img src={Logo} alt="Loop Studios" />
                            </div>
                            <label 
                                className="toggle-handle"
                                htmlFor="mobile-toggle">
                                    <input 
                                        className="mobile-toggle"
                                        id="mobile-toggle"
                                        type="checkbox" 
                                        name="mobile-toggle"
                                        onChange={btnChecked}
                                    />
                            </label>
                            <nav 
                                className={mobileNav ? 
                                "nav-mobile" : 
                                "nav-close"}>
                                <div className="nav-logo">
                                    <img 
                                        src={Logo} 
                                        alt="Loop studios" 
                                    />
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#">Events</a>
                                    </li>
                                    <li>
                                        <a href="#">Products</a>
                                    </li>
                                    <li>
                                        <a href="#">Support</a>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="nav-desktop">
                                <ul>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#">Events</a>
                                    </li>
                                    <li>
                                        <a href="#">Products</a>
                                    </li>
                                    <li>
                                        <a href="#">Support</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-hero">
                            <h1>Immersive experiences that deliver</h1>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

