const styles = {
    footerContainer: {
        alignItems: 'center',
        marginTop: ['100px', '100px', '100px', '40px', '200px'],
        marginBottom: ['0px', '0px', '0px', '0px', '0px', '40px'],
        zIndex: 2,
    },
    copyright: {
        marginLeft: '100px',
        fontSize: '16px',
        display: ['none', 'none', 'none', 'inherit'],
    },
    socialLinksContainer: {
        marginLeft: ['none', 'none', 'none', '100px'],
        gap: ['3em', '3em', '3em', '0.5em'],
        alignItems: 'center',
    },
    socialLinkContainer: {
        borderWidth: '2px',
        borderRadius: '100%',
        width: ['50px', '50px', '50px', '30px'],
        height: ['50px', '50px', '50px', '30px'],
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '7px',
        marginRight: '7px',
    },
    socialLink: {
        width: '80px',
        height: '80px',
        background: 'rgb(0,0,0,0.10)',
        backgroundColor: 'unset',
        _hover: { background: 'unset', color: 'white' },
    },
    copyrightMobile: {
        fontSize: '16px',
        display: ['flex', 'flex', 'flex', 'none'],
        marginBottom: '20px',
        marginTop: '30px',
    },
    flowerImage: {
        width: ['100%', '100%', '100%', '50%'],
        right: '0',
        bottom: '0',
    },
}
export default styles
