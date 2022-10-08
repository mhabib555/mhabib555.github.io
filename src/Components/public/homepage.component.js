import {useEffect, useState} from "react";
import AboutComponent from "./includes/about.component";
import FooterComponent from "./includes/footer.component";
import HeaderComponent from "./includes/header.component";
import HeroComponent from "./includes/hero.component";
import {NavProvider} from "../../context/NavContext"

function HomepageComponent() {

    return (
        <div className="flex flex-col min-h-screen">
            <NavProvider>
                <HeaderComponent></HeaderComponent>
                <div className="main-section">
                    <HeroComponent></HeroComponent>
                    <AboutComponent></AboutComponent>
                </div>
                <FooterComponent></FooterComponent>
            </NavProvider>
        </div>
    );
}

export default HomepageComponent;
