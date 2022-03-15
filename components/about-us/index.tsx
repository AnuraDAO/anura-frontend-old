import React from 'react'
import { Flex, Box, Container, Image, Heading, Text } from '@chakra-ui/react'
import styles from './styles'

const AboutUsComponent = () => {
    return (
        <Container
            zIndex="2"
            id="about-us"
           {...styles.aboutUsContainer}
        >
            <Flex {...styles.rightLeafImageContainer} className="leaf-image">
                <Image
                    {...styles.rightLeafImage}
                    src="/images/leaf.png"
                    alt="Right leaf"
                />
            </Flex>
            <Flex flexDirection="column" {...styles.aboutUsContent}>
                <Heading
                    {...styles.aboutUsHeading}
                >
                    About Us
                </Heading>

                <Box>
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
