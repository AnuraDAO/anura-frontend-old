const styles = {
    aboutUsContainer: {
        pt: ['10', '100', '100'],
        maxWidth: [
            'container.sm',
            'container.sm',
            'container.sm',
            'container.lg',
        ]
    },
    rightLeafImageContainer: {
        justifyContent: ['flex-end', 'flex-end', 'flex-end', 'flex-end'],
        right: '205px',
        marginTop: ['0px', '0px','0px','0px','0px','-80px']
    },
    rightLeafImage: {
        height: ['109.72px', '109.72px', '109.72px', '120.02px'],
        width: ['130.66px', '130.66px', '130.66px', '175.07px'],
        transform: 'rotate(349deg)',
    },
    aboutUsContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    aboutUsHeading: {
        className:"gradient-text",
        size:"3xl",
        marginBottom:"20px",
    },
    leftLeafImageContainer: {
        left: '120px',
        justifyContent: ['center', 'center', 'center', 'inherit'],
        paddingTop: ['70px', '70px', '70px', 'inherit'],
    },
    leftLeafImage: {
        height: ['109.72px', '109.72px', '109.72px', '120.02px'],
        width: ['130.66px', '130.66px', '130.66px', '175.07px'],
        transform: 'rotate(9deg)',
    },
}

export default styles
