import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    // Global styles
    styles: {
        global: {
            'html, body': {
                background: '#0F181A',
                color: '#FFFFFF',
                overflowX: 'hidden',
            },
        },
    },

    fonts: {
        standard: 'Poppins, sans-serif',
        heading: 'Poppins',
        body: 'Poppins, sans-serif',
    },

    palette: {
        background: {
            default: '#0F181A',
        },

        primary: {
            // dark green
            main: '#02E279',
        },

        secondary: {
            // light green
            main: '#6FF604',
        },

        warning: {
            // blue
            main: '#04ECF6',
        },

        error: {
            // purple
            main: '#D604F6',
        },

        info: {
            // yellow
            main: '#E6F604',
        },

        turquoise: {
            main: '#04F6B7',
        },

        text: {
            primary: '#FFFFFF',
        },
    },
})

export default theme
