import style from '../CompCSS/Nav.module.css'
import { useState } from "react";
import { Link } from 'react-router-dom';
import 'boxicons'
function Nav({ onHomeClick, onAboutClick , onEventClick,onContactClick }) {
    const [Active,setActive]=useState(true)
    return(
        <>
            <div className={Active? style.SidBarActive : style.SidBar}>
                <div className={Active? style.LogoContentActive : style.LogoContent}>
                        <div className={Active? style.NavLogoTitleActive : style.NavLogoTitle}>SpeakToLead</div>
                    <button onClick={()=>{setActive(!Active)}}>
                        <box-icon name='menu' className={Active? style.NavMenuActive : style.NavMenu}></box-icon>
                    </button>
                </div>
                <ul className={style.ulSidBar}>
                <li className={Active? style.NavLiActive : style.NavLi}key="home"><a  onClick={onHomeClick}>
                <box-icon type='solid' name='home' className={Active? style.SidBarLiBoxActive : style.SidBarLiBox}></box-icon>
                <span className={Active? style.SidBarLiHomeActive : style.SidBarLiHome}>Home</span>
                    </a>
                    <span className={Active? style.SidBarLiHomeCssActive : style.SidBarLiHomeCss}>Home</span>
                </li>

                <li className={Active? style.NavLiActive : style.NavLi}key="About"><a  onClick={onAboutClick}>
                <box-icon type='solid' name='show' className={Active? style.SidBarLiBoxActive : style.SidBarLiBox}></box-icon>
                <span className={Active? style.SidBarLiHomeActive : style.SidBarLiHome}>About</span>
                    </a>
                    <span className={Active? style.SidBarLiHomeCssActive : style.SidBarLiHomeCss}>About</span>
                </li>

                <li className={Active? style.NavLiActive : style.NavLi}key="Event"><a  onClick={onEventClick}>
                <box-icon name='calendar-event' className={Active? style.SidBarLiBoxActive : style.SidBarLiBox} ></box-icon>
                <span className={Active? style.SidBarLiHomeActive : style.SidBarLiHome} >Event</span>
                    </a>
                    <span className={Active? style.SidBarLiHomeCssActive : style.SidBarLiHomeCss}>Event</span>
                </li>

                <li className={Active? style.NavLiActive : style.NavLi}key="Contact"><a  onClick={onContactClick}>
                <box-icon type='solid' name='contact' className={Active? style.SidBarLiBoxActive : style.SidBarLiBox}></box-icon>
                <span className={Active? style.SidBarLiHomeActive : style.SidBarLiHome}>Contact</span>
                    </a>
                    <span className={Active? style.SidBarLiHomeCssActive : style.SidBarLiHomeCss}>Contact</span>
                </li>

                </ul>
            </div>
        </>
    )
}
export default Nav