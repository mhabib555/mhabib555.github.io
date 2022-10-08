import React, {useContext, userState, useState} from 'react';
import { NavContext } from '../context/NavContext';

const routes = [
    {
        'scrollToId': 'about-section',
        'navlinkId': 'About'
    }, {
        'scrollToId': 'experience-section',
        'navlinkId': 'Experience'
    }, {
        'scrollToId': 'work-section',
        'navlinkId': 'Work'
    }
];

const Navlink = ({navlinkId, scrollToId}) => {

    const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

    const handleClick = () => {
        setActiveNavLinkId(navlinkId);
        document.getElementById(scrollToId).scrollIntoView({behavior: 'smooth'});
    };

    return (
        <span className={
                [
                    "text-base font-medium text-secondary text-secondary-hover numbered-navitem cursor-pointer",
                    activeNavLinkId === navlinkId ? 'link-active' : ''
                ].join(" ")
            }
            id={navlinkId}
            onClick={handleClick}>
            {navlinkId} </span>
    )
};
const HeaderNav = () => {
    const [activeNavLinkId, setActiveNavLinkId] = useState('');


    return (
        <nav className="hidden space-x-10 md:flex">
            {
            routes.map(({navlinkId, scrollToId}, idx) => {
                return (
                    <Navlink key={idx}
                        navlinkId={navlinkId}
                        scrollToId={scrollToId}
                    />
                )
            })
        } </nav>
    )
}
export default HeaderNav;
