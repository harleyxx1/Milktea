import { Palette } from '../../basic-components/color-scheme';

export const Styles = {
    bigImageBlackOverlay: {
        position: 'relative', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        backgroundColor: 'black', 
        opacity: .6
    },

    topContainer: {
        width: '100%',
        height: '100vh',
    },

    welcomePictureContainer: (isMobile, height) => {
        return{ 
            backgroundImage: `url('images/milktea.png')`,
            height: height,
            backgroundPosition: isMobile ? 'center': '',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
        }
    },  
}