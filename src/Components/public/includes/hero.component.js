function HeroComponent() {
    return (
        <div className="relative w-full flex-none text-sm leading-6 my-32" id="hero-section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between p-20 md:justify-start md:space-x-10">
                    <div className="justify-start lg:w-0 lg:flex-1 text-primary text-sans">
                        <h5 className="text-lg">Hi, I am</h5>
                        <h1 className="text-7xl text-title text-sans font-semibold py-4">M Habib.</h1>
                        <h2 className="text-6xl text-secondary text-sans font-semibold py-4">A Laravel Developer.</h2> 
                        <p className="text-lg text-secondary text-sans py-4 md:w-2/4">I am a PHP and Javascript developer, working as a freelancer. Web Developement is my passion and hobby.</p> 
                        <button className="btn-primary p-4 px-20 rounded mt-8">Check out my Work</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroComponent;
