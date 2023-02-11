import { createTheme } from '@shopify/restyle';

export const palette = {
    black: '#000',
    white: '#FFF',
    red: '#FF0000',
    gray: '#CDCDCD',
    purpleLight: '#8C6FF7',
    purplePrimary: '#5A31F4',
    purpleDark: '#3F22AB',

    greenLight: '#56DCBA',
    greenPrimary: '#0ECD9D',
    greenDark: '#0A906E',
    blackOpacity: 'rgba(0,0,0, 0.4)',
}

const theme = createTheme({
    colors: {
        primaryBackGround: palette.white,
        mainBackGround: palette.black,
        errorAlert: palette.red,
        loading: palette.black,
        cardBox: palette.greenPrimary,
        backgroundButton: palette.greenDark,
        borderInput: palette.blackOpacity,
        ...palette,
    },
    spacing: {
        none: 0,
        s: 8,
        l: 16,
        x: 24,
        xl: 40
    },
    breakpoints: {
        small: 0,
        medium: 390,
        large: 768
    },
    textVariants: {
        defaults: {
            fontFamily: 'montserrat',
        },
        headerBold: {
            fontFamily: 'montserrat-bold',
            fontWeight: 'bold',
            fontSize: 34,
            lineHeight: 42.5,
        },
        header: {
            fontFamily: 'montserrat',
            fontWeight: 'bold',
            fontSize: 34,
            lineHeight: 42.5,
        },
        text: {
            width: '100%',
            fontFamily: 'montserrat',
            fontSize: 15,
            lineHeight: 42.5,
            textAlign: 'left',
            color: 'black'
        },
        buttonLabel: {
            width: '100%',
            fontFamily: 'montserrat-bold',
            fontSize: 14,
            textAlign: 'left',
            color: 'white',
            fontWeight: 'bold'
        }
    },
    inputVariants: {
        default: { width: 0 },
        inputConfig: {
            width: 200,
            margin: 2,
            borderWidth: 1,
            height: 30,
            padding: 5,
            borderRadius: 5,
            marginTop: 15,
            borderColor: "rgba(0,0,0, 0.4)",
        }
    }

})

export type Theme = typeof theme;
export default theme;