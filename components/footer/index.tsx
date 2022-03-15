import React from 'react'
import { Box, Text, Flex, Link, Button, Center, Image } from '@chakra-ui/react'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'
import styles from '../footer/styles'
import { IconContext } from 'react-icons'

const FooterComponent = () => {
    return (
        <Flex
            {...styles.footerContainer}
            flexDirection={['column', 'column', 'column', 'row']}
        >
            <Text {...styles.copyright}>©Copyright 2021</Text>

            <Flex {...styles.socialLinksContainer}>
                <Flex {...styles.socialLinkContainer}>
                    <Link isExternal href="https://discord.gg/fDHkgfMkGX">
                        <Button {...styles.socialLink}>
                            <FaDiscord />
                        </Button>
                    </Link>
                </Flex>
                <Flex {...styles.socialLinkContainer}>
                    <Link isExternal href="https://twitter.com/anuradao?s=21">
                        <Button {...styles.socialLink}>
                            <FaTwitter />
                        </Button>
                    </Link>
                </Flex>
                <Flex {...styles.socialLinkContainer}>
                    <Link isExternal href="https://anuradao.medium.com/">
                        <Button {...styles.socialLink}>
                            <BsMedium />
                        </Button>
                    </Link>
                </Flex>
            </Flex>
            <Text {...styles.copyrightMobile}>©Copyright 2021</Text>

            <Image
                {...styles.flowerImage}
                className="leaf-image"
                src="/images/bottom-leaf.png"
                alt="bottom leaf"
            />
        </Flex>
    )
}

export default FooterComponent
