import React from 'react'
import { Flex, Box, Container, Image, Heading, Text } from '@chakra-ui/react'
import styles from './styles'

const AboutUsComponent = () => {
    return (
        <Container zIndex="2" id="about-us" {...styles.aboutUsContainer}>
            <Flex {...styles.rightLeafImageContainer} className="leaf-image">
                <Image
                    {...styles.rightLeafImage}
                    src="/images/leaf.png"
                    alt="Right leaf"
                />
            </Flex>
            <Flex flexDirection="column" {...styles.aboutUsContent}>
                <Heading {...styles.aboutUsHeading}>About Us</Heading>

                <Box width="70%">
                    <Text color="#ECE8E8" fontSize="1xl">
                        Dip your toads into our pond and learn about the
                        exciting world of Crypto and the DeFi space, discover
                        flourishing communities, and leap towards previously
                        unimaginable financial freedom!
                    </Text>
                    <Text color="#ECE8E8" fontSize="1xl" paddingTop="20px">
                        Anura, where the tadpoles of today transform into the
                        frogs of tomorrow.
                    </Text>
                    <Text color="#ECE8E8" fontSize="1xl" paddingTop="20px">
                        So you may be asking what's going on. AnuraDAO has released multiple exciting projects in anticipation
                        of the token launch. The three core utility projects open to the public now are....
                    </Text>
                    <Text color="#ECE8E8" fontSize="1xl" paddingTop="10px" paddingLeft="10px">
                    <b style={{color: "green"}}>1) AnuraDAO DigiFrogs Free Mint:</b> A Polygon Network NFT to show off your unique Frog.
                    </Text>
                    <Text color="#ECE8E8" fontSize="1xl" paddingTop="10px" paddingLeft="10px">
                        <b style={{color: "green"}}>2) Anura Messaging:</b> A BSC chain application that allows encrypted wallet to wallet communication.
                    </Text>
                    <Text color="#ECE8E8" fontSize="1xl" paddingTop="10px" paddingLeft="10px">
                    <b style={{color: "green"}}>3) Metafrog MiniDAO:</b> A Polygon chain token that allows for the purchasing of fractionalized NFTs.
                    </Text>
                </Box>
            </Flex>
            <Flex {...styles.leftLeafImageContainer} className="leaf-image">
                <Image
                    {...styles.leftLeafImage}
                    src="/images/leaf.png"
                    alt="Left leaf"
                />
            </Flex>
        </Container>
    )
}

export default AboutUsComponent
