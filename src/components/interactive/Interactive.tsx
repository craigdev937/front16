import React from "react";
import "./Interactive.css";
import desktopInter from "@public/desktop/image-interactive.jpg";
import mobileInter from "@public/mobile/image-interactive.jpg";

export const Interactive = () => {
    return (
        <React.Fragment>
            <section className="v-gap">
                <div className="wrapper">
                    <div className="interactive">
                        <div className="interactive__container">
                            <picture>
                                <source 
                                    media="(min-width: 1024)" 
                                    srcSet={desktopInter} 
                                />
                                <img
                                    className="interactive__img"
                                    alt="Interactive"  
                                    src={mobileInter} 
                                />
                            </picture>
                        </div>
                        <div className="interactive__body">
                            <h1 className="interactive__title">
                                The leader in interactive VR
                            </h1>
                            <p className="interactive__text">
                                Founded in 2011, Loopstudios has 
                                been producing world-class virtual 
                                reality projects for some of the 
                                best companies around the globe. 
                                Our award-winning creations have 
                                transformed businesses through 
                                digital experiences that bind 
                                to their brand.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};


