function FooterComponent() {
    return (
        <footer class="mt-auto w-full max-w-container px-4 sm:px-6 lg:px-8 bg-white">
            <div class="border-t border-purple-900/5 py-10">
                <p class="mt-5 text-center text-sm leading-6 text-slate-500">© 2022 MH Portfolio. All rights reserved.</p>
                <div class="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
                    <a href="/about">About</a>
                    <div class="h-4 w-px bg-slate-500/20"></div>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;
