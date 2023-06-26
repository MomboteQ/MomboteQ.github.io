'use client';

import { useState } from 'react';

import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <nav
            className={`w-full flex px-[2rem] py-[1.5rem] justify-between bg-ctp-base z-[1] ${
                menu ? 'fixed' : 'absolute'
            } sm:px-[3rem] md:py-[2rem] md:px-[5rem] lg:py-[3rem] lg:px-[9rem] xl:px-[3rem] xl:max-w-[78rem] xl:static xl:mx-auto`}
        >
            <p className="text-[1.25rem] font-medium text-ctp-text flex items-center leading-none">MomboteQ</p>
            <span
                className="text-ctp-text text-[1.8rem] transition-colors duration-[.3s] hover:text-ctp-green xl:hidden"
                onClick={() => setMenu(!menu)}
            >
                <FiMenu />
            </span>
            <div
                className={`flex items-center nav__menu flex-col fixed bg-ctp-mantle top-[var(--nav-height)] w-full h-[calc(100%-var(--nav-height))] justify-center z-[1] overflow-y-auto transition-[right] duration-[.6s] ${
                    menu ? 'right-0' : 'right-[-100%]'
                } xl:static xl:flex-row xl:bg-inherit xl:gap-[3rem] xl:justify-end xl:h-auto`}
            >
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#donate">Donate</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
