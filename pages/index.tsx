import { Flex } from '@chakra-ui/react'
import React from 'react'
import {
    Header,
    AboutUs,
    Concept,
    Roadmap,
    Footer,
    Particles,
} from '../components'

const IndexPage = () => {
    return (
        <Flex
            overflowX="hidden"
            overflowY="hidden"
            background="linear-gradient(182.27deg, #061D1E 40%, #074223 100%)"
            width="100vw"
            flexDirection="column"
        >
            {' '}
            <Header />
            <AboutUs />
            <Concept />
            <Roadmap />
            <Footer />
            <Particles />
            <Flex
                {...{
                    position: 'relative',
                    bottom: '0',
                    background:
                        'linear-gradient(180deg, rgba(11,30,30,0.05) 0%, #001718 100%)',
                }}
            />
        </Flex>
    )
}
export default IndexPage
