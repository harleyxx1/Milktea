import React, { Component } from 'react'
import { getUserDevice } from '../../detect';
import { Styles } from './styles';

import { getWindowSize } from '../../detect';
import './styles.css';

class WelcomePicture extends Component {
    render() {
        return (
            <div style={{...Styles.welcomePictureContainer(getUserDevice(), getWindowSize().height)}} />
        )
    }
}

export default WelcomePicture
