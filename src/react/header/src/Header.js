import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div style={{height: '10vh', display: 'flex', position: 'absolute', top: 0, right: 0, left: 0, flexDirection: 'row'}}>
                <div style={{flex: .5}}>
                    <p style={{fontFamily: 'ChristmasBell'}}> adh</p>
                </div>
                <div style={{flex: 1}}>

                </div>
            </div>
        )
    }
}

export default Header
