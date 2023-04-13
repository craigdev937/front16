import React from "react";
import "./Footer.css";
import Logo from "@public/logo.svg";
import Instagram from "@public/icon-instagram.svg";
import Pinterest from "@public/icon-pinterest.svg";
import Twitter from "@public/icon-twitter.svg";
import Facebook from "@public/icon-facebook.svg";

export const Footer = () => {
    return (
        <React.Fragment>
            <footer className="bg__footer v-gap">
                <div className="wrapper">
                    <aside className="footer">
                        <div className="footer__nav">
                            <div className="footer__logo">
                                <img src={Logo} alt="Logo" />
                            </div>
                            <nav>
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
                        <section className="footer__social">
                            <div className="social">
                                <a href="#" aria-label="facebook">
                                    <img src={Facebook} alt="facebook" />
                                </a>
                                <a href="#" aria-label="twitter">
                                    <img src={Twitter} alt="twitter" />
                                </a>
                                <a href="#" aria-label="pinterest">
                                    <img src={Pinterest} alt="pinterest" />
                                </a>
                                <a href="#" aria-label="instagram">
                                    <img src={Instagram} alt="instagram" />
                                </a>
                            </div>
                            <p className="copyright">
                                © 2023 Loopstudios. All rights reserved.
                            </p>
                        </section>
                    </aside>
                </div>
            </footer>
        </React.Fragment>
    );
};


