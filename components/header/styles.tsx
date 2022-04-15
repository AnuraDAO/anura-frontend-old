import theme from '../../utils/theme'
const styles = {
    backgroundImage: {
        flexDirection: 'column',
        backgroundSize: 'cover',
        height: ['80vh', '90vh', '90vh', '117vh', '117vh'],
        width: '100vw',
        backgroundPosition: 'center center',
        backgroundImage: `url(/bg-header.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#061D1E',
    },
    navBarContainer: {
        display: ['none', 'none', 'none', 'flex'],
        padding: ['0rem', '0rem', '0rem', '1.5rem', '2rem'],
        gap: ['0.5rem', '0.5rem', '0.5rem', '1rem', '1rem', '1.5rem'],
    },
    navButtonsContainer: {
        justifyContent: 'flex-end',
        width: '100%',
        gap: 6,
        paddingRight: [0, 0, 0, '100px', '100px'],
        alignItems: 'center',
    },
    navButtons: {
        fontSize: '16px',
        fontWeight: '600',
        bg: 'transparent',
        color: '#DCE1DD',
        fontFamily: theme.fonts.heading,
        _hover: { color: 'white' },
        _focus: {},
        _active: {},
    },
    mobileMenuContainer: {
        display: ['flex', 'flex', 'flex', 'none'],
        justifyContent: 'flex-end',
    },
    mobileMenuButton: {
        justifyContent: 'flex-end',
        padding: '20px',
    },
    headerContentContainer: {
        height: '100%',
        marginTop: ['-100px', '-100px', '-80px', '-80px', '-150px'],
    },
    logoImage: {
        width: ['100%', '80%', '70%', '60%', '55%'],
    },
    launchingSoonContainer: {
        display: 'flex',
        flexDirection: ['column', 'column', 'column', 'row', 'row'],
        marginTop: ['0px', '1rem', '0rem'],
        mb: '1.5rem',
    },
    launchingSoonHeaders: {
        fontSize: ['18px', '24px'],
        textAlign: 'center',
        color: 'F3F9F4',
        fontWeight: '600',
        letterSpacing: ['3.5px', '6.18px'],
    },
    socialLinks: {
        fontSize: ['1.6rem', '1.5rem', '1.5rem'],
        borderRadius: '100%',
        width: ['50px', '60px'],
        height: ['50px', '60px'],
        background: 'rgb(0,0,0,0.10)',
        backgroundColor: 'unset',
        borderWidth: '2px',
        _hover: { background: 'unset', color: 'white' },
    },
    socialLinksContainer: {
        gap: ['2.5rem', '1rem', '2.25rem', '3.5rem', '5rem'],
    },
    downButton: {
        borderRadius: '100%',
        width: '60px',
        height: '60px',
        background: '#004716',
        boxShadow: '0 2px 50px 0 rgba(0,0,0,0.75)',
        _hover: { background: '#004716' },
    },
    downButtonContainer: {
        position: 'relative',
        bottom: '0',
    },
}
export default styles
