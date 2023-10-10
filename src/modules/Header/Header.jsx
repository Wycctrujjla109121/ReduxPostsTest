import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import s from './Header.module.scss'
import { LINKS } from '../../constants';

export function Header() {
    const links = LINKS

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className={s.header}>
            <svg className={s.header__burger} onClick={() => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <g clipPath="url(#clip0_359_16788)">
                    <path d="M4.66675 6.75H21.3334" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.66675 13H21.3334" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.66675 19.25H21.3334" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>

            <div className={classNames(s.info, {
                [s.info__open]: isOpen
            })}>
                {
                    links.map(currentLink => (
                        <NavLink to={currentLink.href} key={currentLink.value}
                            className={({ isActive }) => classNames(s.info__link, {
                                [s.info__link_active]: isActive
                            })}
                        >
                            {currentLink.value}
                        </NavLink>
                    ))
                }
            </div>
        </header >
    );
};

// export default Header;