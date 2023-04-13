import React from "react";
import { Header } from "../components/header/Header";
import { Interactive } from "../components/interactive/Interactive";
import { Our } from "../components/our/Our";

export const Main = () => {
    return (
        <React.Fragment>
            <Header />
            <Interactive />
            <Our />
        </React.Fragment>
    );
};


