import * as React from 'react';
import Avatar from '../../assets/account.svg';
import NotificationPopover from "../notification-popover";
import { NavLink } from "react-router-dom";
import './style.css'

const pages = [
    {
        name: 'Home Feed',
        url: '/'
    },
    {
        name: 'Projects',
        url: '/projects'
    },
    {
        name: 'Insights',
        url: '/insights'
    },
    {
        name: 'FAQ',
        url: '/faq'
    },
];

function HeaderBar() {
    return (
        <div className='header-bar'>
            <div className='header-bar__links'>
                {pages.map((page) => (
                    <NavLink
                        to={page.url}
                        key={page.name}
                        className={({ isActive }) =>
                            isActive ? 'header-bar__link header-bar__link-active' : 'header-bar__link'
                        }
                    >
                        {page.name}
                    </NavLink>
                ))}
            </div>
            <div className='header-bar__buttons'>
                <NotificationPopover/>
                <button
                    className='header-bar__icon'>
                    <img src={Avatar}/>
                    <p className='header-bar__account'>Bryce L.</p>
                </button>
            </div>
        </div>
    );
}

export default HeaderBar;