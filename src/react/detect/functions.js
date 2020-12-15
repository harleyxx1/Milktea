import { isMobile } from 'react-device-detect';

/**
 * This function will check if the user is using mobile
 * or Browser.
 */
export const getUserDevice = () => {
    return isMobile;
}

export const getWindowSize = () => {
    const { innerHeight, innerWidth } = window;

    return {
        height: innerHeight,
        width: innerWidth
    }
}