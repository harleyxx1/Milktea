import React, { Component } from 'react'
import { Styles } from './styles';

class Header extends Component {
    render() {
        return (
            <div style={Styles.headerContainer}>
                <div style={Styles.headerLogoNameContainer}>
                    <p className="logoName" style={Styles.headerLogoName}>Milkteahan</p>
                </div>
                <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <a className="menuButtons" href="" style={Styles.menuButtons}>About us</a>
                    <a className="menuButtons" href="" style={Styles.menuButtons}>Locations</a>
                    <a className="menuButtons" href="" style={Styles.menuButtons}>Menu</a>
                    <a className="menuButtons" href="" style={Styles.menuButtons}>Contact Us</a>
                    <a className="menuButtons" href="" style={Styles.menuButtons}>Faq</a>
                </div>
                <div style={{flex: .7}}>

                </div>
            </div>
        )
    }
}

export default Header
