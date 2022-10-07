function HeaderComponent() {
    return (
        <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1 text-2xl text-primary">
                        <a href="#">
                            <span className="sr-only">MH</span>
                            MH
                        </a>
                    </div>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                    <nav className="hidden space-x-10 md:flex">
                            <a href="#" className="text-base font-medium text-secondary text-secondary-hover numbered-navitem">About</a>
                            <a href="#" className="text-base font-medium text-secondary text-secondary-hover numbered-navitem">Work</a>
                            <a href="#" className="text-base font-medium text-secondary text-secondary-hover numbered-navitem">Experience</a>
                        </nav>
                        <a href="#" className="ml-5 whitespace-nowrap text-white font-bold py-2 px-4 rounded btn-primary">Login</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;
