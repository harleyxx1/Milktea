import React, { Component } from 'react'
import { Header } from '../../header'
import { Styles } from './styles';

import WelcomePicture from './WelcomePicture';


class HomePage extends Component {
    render() {
        return (
            <div style={Styles.topContainer}>
                <WelcomePicture />
            </div>
        )
    }
}

export default HomePage
