import React, { Component } from 'react'
import { Header } from '../../header'
import { HomePage } from '../../landing-page'
import { Styles } from './styles';

class App extends Component {
    render() {
        return (
            <div className="App" style={Styles.appComponent}>
                <Header />
                <HomePage />
            </div>
        )
    }
}

export default App;