function HeaderComponent() {
    return (
        <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-purple-900 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between border-b-2 border-purple-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1 text-lg">
                        <a href="#">
                            <span className="sr-only">MH</span>
                            MH Portfolio
                        </a>
                    </div>
                    <nav className="hidden space-x-10 md:flex">
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">About</a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Contact</a>
                    </nav>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <a href="#" className="whitespace-nowrap bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Login</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;
