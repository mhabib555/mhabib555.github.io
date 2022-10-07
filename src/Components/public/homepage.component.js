import FooterComponent from "./includes/footer.component";
import HeaderComponent from "./includes/header.component";
import HeroComponent from "./includes/hero.component";

function HomepageComponent() {

    return (
        <div className="flex flex-col min-h-screen">
            <HeaderComponent></HeaderComponent>
            <div className="main-section">
              <HeroComponent></HeroComponent>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    );
}

export default HomepageComponent;
