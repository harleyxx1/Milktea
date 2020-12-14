import React, { Component } from 'react';
import { Footer } from '../../footer';
import { Header } from '../../header';
import { HomePage } from '../../landing-page';
import { Styles } from './styles';

class App extends Component {
    render() {
        return (
            <div className="App" style={Styles.appComponent}>
                <Header />
                <HomePage />
                <Footer />
            </div>
        )
    }
}

export default App;