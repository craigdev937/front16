import React from "react";
import "./Our.css";
import { dBase } from "../../data/database";

export const Our = () => {
    return (
    <React.Fragment>
        <section className="v-gap">
            <div className="wrapper">
                <aside className="creation">
                    <div className="creation__title">
                        <h1>Our Creations</h1>
                    </div>
                </aside>
                <aside className="creation__seeall">
                    <a href="#">SEE ALL</a>
                </aside>
                <aside className="creation__holder">
                    {dBase.map((item) => (
                        <section 
                            className="card" 
                            key={item.id}>
                                <aside>
                                    <picture>
                                        <source 
                                            media="(min-width: 1024px)" 
                                            srcSet={item.desktopIMG} 
                                        />
                                        <img 
                                            alt={item.name} 
                                            src={item.mobileIMG} 
                                        />
                                    </picture>
                                </aside>
                                <aside className="card__title">
                                    <p>{item.name}</p>
                                </aside>
                        </section>
                    ))}
                </aside>
            </div>
        </section>
    </React.Fragment>
    );
};


