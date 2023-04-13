import React from "react";
import { Header } from "../components/header/Header";
import { Interactive } from "../components/interactive/Interactive";
import { Our } from "../components/our/Our";
import { Footer } from "../components/footer/Footer";
import { Signature } from "../components/signature/Signature";

export const Main = () => {
    return (
        <React.Fragment>
            <main>
                <Header />
                <Interactive />
                <Our />
                <Footer />
                <Signature />
            </main>
        </React.Fragment>
    );
};


