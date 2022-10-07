import FooterComponent from "./includes/footer.component";
import HeaderComponent from "./includes/header.component";

function HomepageComponent() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
        <HeaderComponent></HeaderComponent>
        <div className="relative -mt-[5.75rem] overflow-hidden pt-[5.75rem]">
          <h3>Abc</h3>
        </div>        
        <FooterComponent></FooterComponent>
    </div>
  );
}

export default HomepageComponent;
