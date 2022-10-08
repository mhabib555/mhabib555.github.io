import habibImage from '../../../assets/images/habibImage.jpg';

function AboutComponent() {
    return (
        <div className="relative w-full flex-none text-sm leading-6 my-32 mx-20" id="experience-section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 p-20">
                <h5 className="py-4 numbered-section">
                    <span className="text-3xl text-title font-semibold">About Me</span>
                </h5>
                <div className="flex justify-center md:justify-start md:space-x-10">
                    <div className="lg:w-6/12 lg-flex-1 text-secondary text-sans text-lg">
                        <p className="text-sans py-5">Hi, My name is M Habib and I am a PHP and Javascript developer. I am working as a freelancer. I am mostly working in PHP and sometime in Javascript. My Favorite is PHP.</p>
                        <p>Here is the list of technologies, that i love to work with:</p>
                        <div className="flex flex-row">
                            <ul>
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>Codeignitor</li>
                            </ul>
                            <ul className="ml-10">
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>Codeignitor</li>
                            </ul>

                        </div>
                    </div>
                    <div className="lg:w-6/12 lg-flex-1">
                        <div className="personal-image-container">
                            <div className='personal-image-cover'></div>
                            <div className='personal-image-border'></div>
                            <img src={habibImage}
                                alt="Photo"
                                className="personal-image"/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AboutComponent;
