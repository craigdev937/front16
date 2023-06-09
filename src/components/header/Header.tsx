import React from "react";
import "./Header.css";
import Logo from "@public/logo.svg";

export const Header = () => {
    const [mobileNav, setMobileNav] = React.useState(false);

    const buttonChecked = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.checked ? 
        setMobileNav(true) : 
        setMobileNav(false);
    };

    React.useEffect(() => {
        if (mobileNav) {
            document.getElementsByTagName("body")[0]
                .classList.add("background__nav");
        } else {
            document.getElementsByTagName("body")[0]
                .classList.remove("background__nav");
        }
    }, [mobileNav]);

    return (
        <React.Fragment>
            <header className="header">
                <section className="wrapper">
                    <div>
                        <aside className="header__menu">
                            <div className="logo">
                                <img 
                                    alt="Loop Studios" 
                                    src={Logo} 
                                />
                            </div>
                            <label 
                                className="toggle__handle"
                                htmlFor="mobile-toggle">
                                    <input 
                                        className="mobile-toggle"
                                        id="mobile-toggle"
                                        type="checkbox" 
                                        name="mobile-toggle"
                                        onChange={buttonChecked}
                                    />
                            </label>
                            <nav className={mobileNav ? 
                                "nav-mobile" : 
                                "nav-close"}>
                                <div className="nav__logo">
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
                        </aside>
                        <aside className="header-hero">
                            <h1>
                                Immersive experiences that deliver
                            </h1>
                        </aside>
                    </div>
                </section>
            </header>
        </React.Fragment>
    );
};




