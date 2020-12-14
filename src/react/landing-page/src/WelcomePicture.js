import React, { Component } from 'react'
import { Header } from '../../header'
import { Styles } from './styles';

class WelcomePicture extends Component {
    render() {
        return (
            <div style={Styles.welcomePictureContainer}>
                <div> <img src="images/milktea.png" width="100%" style={Styles.welcomePictureImage}/> </div>
            </div>
        )
    }
}

export default WelcomePicture
