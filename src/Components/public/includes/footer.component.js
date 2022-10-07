function FooterComponent() {
    return (
        <footer className="mt-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="py-10">
                <p className="mt-5 text-center text-sm leading-6 text-primary">© 2022 MH Portfolio. All rights reserved.</p>
                <div className="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-secondary">
                    <a className="text-secondary-hover" href="/about">About</a>
                    <div className="h-4 w-px bg-slate-500/20"></div>
                    <a className="text-secondary-hover" href="/contact">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;
