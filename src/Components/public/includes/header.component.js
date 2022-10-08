import {useEffect, useState} from 'react';
import HeaderNav from '../../../routes/web.route'

function HeaderComponent() {

    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShowNav(false);
            } else { // if scroll up show the navbar
                setShowNav(true);

            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return() => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <header className={
                [
                    "sticky z-50 w-full flex-none text-sm font-semibold leading-6 bg-navy",
                    showNav ? 'top-0' : ''
                ].join(" ")
            }
            id="header">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1 text-2xl text-primary">
                        <a href="#">
                            <span className="sr-only">MH</span>
                            MH
                        </a>
                    </div>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <HeaderNav></HeaderNav>
                        <a href="#" className="ml-5 whitespace-nowrap text-white font-bold py-2 px-4 rounded btn-primary">Login</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;
