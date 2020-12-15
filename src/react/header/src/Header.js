import React, { useEffect, useState} from 'react'
import { Styles } from './styles';

import './style.css';

export default function Header() {

    /**
     * Usestates.
     */
    const [ collapseNav, setCollapseNav] = useState(false);
    const [ headerChanges, setHeaderChanges ] = useState({
        headerContainer: 'headerContainer',
        headerLogoContainer: 'headerLogoContainer',
        loginButtonContainer: 'loginButtonContainer',
    });

    const [ windowSize, setWindowSize ] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    /**
     * UseEffects.
     */
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if(collapseNav){
            setHeaderChanges({
                headerContainer: headerChanges.headerContainer + ' headerContainerScrolled',
                headerLogoContainer: headerChanges.headerLogoContainer + ' headerLogoContainerScrolled',
                loginButtonContainer: headerChanges.loginButtonContainer + ' loginButtonContainerScrolled'
            })
        }else{
            setHeaderChanges({
                headerContainer: 'headerContainer',
                headerLogoContainer: 'headerLogoContainer',
                loginButtonContainer: 'loginButtonContainer'
            })
        }        
    }, [collapseNav])

    /**
     * The callback for the scroll event.
     * 
     * @param {Object} e - The result of resize event.
     */
    const handleResize = (e) => {
        setWindowSize({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }
    
    /**
     * The callback for the scroll event.
     * 
     * @param {Object} e - The result of scroll event.
     */
    const handleScroll = (e) => {
        if(window.scrollY > 50){
            setCollapseNav(true) 
            return;
        }
        
        setCollapseNav(false);
        return;
    }
    
    return (
        <div className={headerChanges.headerContainer} style={Styles.headerContainer}>
            <div className={headerChanges.headerLogoContainer} style={{...Styles.headerLogoNameContainer(windowSize.width), ... windowSize.width < 1000 && {justifyContent: 'start'}}}>
                <p className="logoName" style={Styles.headerLogoName(windowSize.width)}>Milkteahan</p>
            </div>
            <div className="menuButtonsContainer" style={{...Styles.menuButtonsContainer, ... windowSize.width < 1000 && {display: 'none'}}}>
                <a className="menuButtons" href="" style={Styles.menuButtons}>About</a>
                <a className="menuButtons" href="" style={Styles.menuButtons}>Locations</a>
                <a className="menuButtons" href="" style={Styles.menuButtons}>Menu</a>
                <a className="menuButtons" href="" style={Styles.menuButtons}>Contact</a>
                <a className="menuButtons" href="" style={Styles.menuButtons}>Faq</a>
            </div>
            <div className={headerChanges.loginButtonContainer} style={{...Styles.loginButtonContainer}}>
                <a className="loginButton" href="" style={Styles.loginButtonStyle(windowSize.width)}>Log in</a>
            </div>
        </div>
    )
}

