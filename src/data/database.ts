import { IData } from "../models/Interfaces";
import deskDeepEarth from "@public/desktop/image-deep-earth.jpg";
import deskNightArcade from "@public/desktop/image-night-arcade.jpg";
import deskSoccer from "@public/desktop/image-soccer-team.jpg";
import deskGrid from "@public/desktop/image-grid.jpg";
import deskAboveVR from "@public/desktop/image-from-above.jpg";
import deskBorealis from "@public/desktop/image-pocket-borealis.jpg";
import deskCuriosity from "@public/desktop/image-curiosity.jpg";
import deskFisheye from "@public/desktop/image-fisheye.jpg";
import mobileDeepEarth from "@public/mobile/image-deep-earth.jpg";
import mobileNightArcade from "@public/mobile/image-night-arcade.jpg";
import mobileSoccer from "@public/mobile/image-soccer-team.jpg";
import mobileGrid from "@public/mobile/image-grid.jpg";
import mobileAboveVR from "@public/mobile/image-from-above.jpg";
import mobileBorealis from "@public/mobile/image-pocket-borealis.jpg";
import mobileCuriosity from "@public/mobile/image-curiosity.jpg";
import mobileFisheye from "@public/mobile/image-fisheye.jpg";

export const dBase: IData[] = [
    {
        id: 1,
        name: "Deep Earth",
        desktopIMG: deskDeepEarth,
        mobileIMG: mobileDeepEarth
    },
    {
        id: 2,
        name: "Night Arcade",
        desktopIMG: deskNightArcade,
        mobileIMG: mobileNightArcade
    },
    {
        id: 3,
        name: "Soccer Team VR",
        desktopIMG: deskSoccer,
        mobileIMG: mobileSoccer
    },
    {
        id: 4,
        name: "The Grid",
        desktopIMG: deskGrid,
        mobileIMG: mobileGrid
    },
    {
        id: 5,
        name: "From Up Above VR",
        desktopIMG: deskAboveVR,
        mobileIMG: mobileAboveVR
    },
    {
        id: 6,
        name: "Pocket Borealis",
        desktopIMG: deskBorealis,
        mobileIMG: mobileBorealis
    },
    {
        id: 7,
        name: "The Curosity",
        desktopIMG: deskCuriosity,
        mobileIMG: mobileCuriosity
    },
    {
        id: 8,
        name: "Make it Fisheye",
        desktopIMG: deskFisheye,
        mobileIMG: mobileFisheye
    }
];


