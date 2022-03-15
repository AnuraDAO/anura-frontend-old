import {
    Box,
    Button,
    Image,
    Flex,
    Center,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Heading,
} from '@chakra-ui/react'
import React from 'react'
import { Text, useTheme } from '@chakra-ui/react'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles'
import { Link as SmoothScrollLink } from 'react-scroll'
import { BsMedium } from 'react-icons/bs'

const Header = () => {
    const theme = useTheme()

    return (
        // @ts-expect-error

        <Flex {...styles.backgroundImage}>
            <Flex {...styles.navBarContainer} id="navbar" zIndex="2">
                <Image src="/images/frog-logo.png" alt="Anura" />
                <Flex {...styles.navButtonsContainer}>
                    <SmoothScrollLink
                        activeClass="active"
                        to="about-us"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        <Button {...styles.navButtons}>About us</Button>
                    </SmoothScrollLink>
                    <SmoothScrollLink
                        activeClass="active"
                        to="roadmap"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        <Button {...styles.navButtons}>Roadmap</Button>
                    </SmoothScrollLink>
                </Flex>
            </Flex>

            <Flex {...styles.mobileMenuContainer} zIndex="2">
                <Menu>
                    <Flex {...styles.mobileMenuButton}>
                        <MenuButton>
                            <FontAwesomeIcon icon={faBars} size="2x" />
                        </MenuButton>
                    </Flex>

                    <MenuList bg="#000" border={0}>
                        <SmoothScrollLink
                            activeClass="active"
                            to="about-us"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <MenuItem
                                _hover={{
                                    color: theme.palette.primary.main,
                                }}
                                _focus={{
                                    color: theme.palette.primary.main,
                                }}
                            >
                                About us
                            </MenuItem>
                        </SmoothScrollLink>
                        <SmoothScrollLink
                            activeClass="active"
                            to="roadmap"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <MenuItem
                                _hover={{
                                    color: theme.palette.primary.main,
                                }}
                                _focus={{
                                    color: theme.palette.primary.main,
                                }}
                            >
                                Roadmap
                            </MenuItem>
                        </SmoothScrollLink>
                    </MenuList>
                </Menu>
            </Flex>

            <Center
                {...styles.headerContentContainer}
                flexDirection="column"
                zIndex="2"
            >
                <Heading className="gradient-text" fontSize={['90px', '120px']}>
                    Anura
                </Heading>
                {/* @ts-expect-error */}
                <Box {...styles.launchingSoonContainer}>
                    {/* @ts-expect-error */}
                    <Text {...styles.launchingSoonHeaders}>LAUNCHING SOON</Text>
                </Box>
                <Flex {...styles.socialLinksContainer}>
                    <Link isExternal href="https://discord.gg/fDHkgfMkGX">
                        <Button {...styles.socialLinks}>
                            <FontAwesomeIcon icon={faDiscord} size="1x" />
                        </Button>
                    </Link>
                    <Link isExternal href="https://twitter.com/anuradao?s=21">
                        <Button {...styles.socialLinks}>
                            <FontAwesomeIcon icon={faTwitter} size="1x" />
                        </Button>
                    </Link>
                    <Link isExternal href="https://anuradao.medium.com/">
                        <Button {...styles.socialLinks}>
                            <BsMedium size="1x" />
                        </Button>
                    </Link>
                </Flex>
                <Flex mt={['60px', '60px', '60px', '60px', '220']}>
                    <SmoothScrollLink
                        activeClass="active"
                        to="about-us"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        <Button {...styles.downButton}>
                            <Image
                                height="20px"
                                src="/images/arrow-down.svg"
                                alt="arrow-down"
                            />
                        </Button>
                    </SmoothScrollLink>
                </Flex>
            </Center>
        </Flex>
    )
}

export default Header
