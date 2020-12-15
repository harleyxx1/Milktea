export const Styles = {
    headerContainer: {
        display: 'flex', 
        position: 'fixed', 
        top: 0, 
        right: 0, 
        left: 0, 
        flexDirection: 'row',
    },

    headerLogoName: (width) => {
        return {
            color: 'white', 
            fontSize: width < 800 ? `30px` : `${width * .03}px`,
            marginRight: '50px'
        }
    },

    headerLogoNameContainer: (width) => {
        return {
            flex: .7, 
            marginLeft: `${width <= 400 ? '40px' : '0px'}`,
            display: 'flex', 
            alignItems: 'center', 
        }
    },

    loginButtonContainer: {
        alignItems: 'center',
        display: 'flex', 
        flex: .7, 
    },

    loginButtonStyle: (width) => {
        return{ 
            alignItems: 'center',
            backgroundColor: 'white',
            color: 'black',
            display: 'flex',
            height: '40px',
            justifyContent: 'center',
            marginLeft: `${width > 500? '80': '0'}px`,
            width: '100px',
        }
    },
    
    menuButtons: {
        color: 'white',
        padding: '30px',
    },

    menuButtonsContainer: {
        flex: 1,
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
    }
}