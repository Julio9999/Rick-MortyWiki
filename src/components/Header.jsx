import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styleSheets/Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";


export function Header() {

    const target = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation().pathname;

    useEffect(()=>{

        if(window.innerWidth >= 990){
            target.current.style.setProperty("max-height", target.current.scrollHeight + "px");
        }
    }, [])

    function handleClick(){
        if(!isVisible){
            target.current.style.setProperty("max-height", target.current.scrollHeight + "px");
            setIsVisible(true);
        }else{
            target.current.style.setProperty("max-height", 0);
            setIsVisible(false);
        }
    }

    return (

        <header className={styles.header}>
            <div className={styles.heading}>
                <Link className={styles["heading__text"]} to="/">Rick &amp; Morty <span className={styles["heading__text--blue"]}>Wiki</span></Link>
            </div>

            <div className={styles["icon-container"]}>
                <button className={styles.buttom}>
                   { isVisible ? <MdClose onClick={handleClick} size={25} />  : <GiHamburgerMenu onClick={handleClick} size={25} />}
                </button>
            </div>
            <nav className={styles.accordion} ref={target} >
                <ul className={styles["nav-bar__ul"]}>
                    <li className={location === "/" ? `${styles["nav-bar__li"]} ${styles["nav-bar__li--active"]}` : styles["nav-bar__li"]}>
                        <Link to="/">Characters</Link>
                    </li>
                    <li className={location === "/episodes" ? `${styles["nav-bar__li--active"]} ${styles["nav-bar__li"]}`: styles["nav-bar__li"]}>
                        <Link  to="/episodes">Episode</Link>
                    </li>
                    <li className={location === "/location" ? `${styles["nav-bar__li--active"]} ${styles["nav-bar__li"]}`: styles["nav-bar__li"]}>
                        <Link  to="/location">Location</Link>
                    </li>
                </ul>
            </nav>
        </header>

    );
}
