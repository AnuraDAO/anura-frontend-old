import React from 'react'
import { Box, Center, Image, Flex, Heading, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './styles'
import { useBreakpointValue } from '@chakra-ui/react'
import {} from '@chakra-ui/react'

const RoadmapComponent = () => {
    const slides = useBreakpointValue({ base: 1, md: 2, lg: 3 })

    const roadmap = [
        {
            id: 1,
            time: 'Q1 2022',
            title: 'Anura Initial Product Development',
            body: `Q1 will include the revamped Anura DAO website and roadmap. These include
            the beta of AnuraGames including Play-to-earn. The team also will deliver the production Metafrog MiniDAO
            to support the community's fractionalized investment into the MetaVerse. The Development team is actively participating
            in Moralis and Eth Denver hackathons`,
        },
        {
            id: 2,
            time: 'Q2 2022',
            title: 'Anura Fintech DApps',
            body: `Q2 will target exciting chain functionality in the Fintech space. Applications include a Multichain Bridge, Cross-Chain
            Liquidity Bonds to support exposure and liquidity for the bridging, StableFrog stable coin yield farming and auto-compounding,
            and the Pre-Mint of our community Token.`,
        },
        {
            id: 3,
            time: 'Q3 2022',
            title: 'Deeper Product Growth',
            body: `Q3 brings forward AnuraDAO's continued development of Synthetics and Derivatives Fintech DApps along with improvement
            on the MetaFrog MiniDAO to ingest a NFT Ladder liqudity project. Q3 will also emphasize the DAO's continued focus
            on community building and market outreach.`,
        },
    ]

    return (
        <Box
            id="roadmap"
            pt={['40px', '40px', '40px', '40px', '100px']}
            zIndex="2"
        >
            <Center marginBottom="70px">
                <Heading className="roadmap-header" size="3xl">
                    Roadmap
                </Heading>
            </Center>
            <Swiper
                direction={'horizontal'}
                slidesPerView={slides}
                spaceBetween={0}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="swiper-container"
            >
                {roadmap.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <Box minH="100%">
                                <Flex>
                                    <Heading
                                        size="xl"
                                        className="gradient-text"
                                    >
                                        {item.time}
                                    </Heading>
                                    {item.id !== 3 && (
                                        <Image
                                            style={
                                                item.id % 2 == 0
                                                    ? styles.roadmapLineTop
                                                    : styles.roadmapLineBottom
                                            }
                                            src="/images/roadmap-line.svg"
                                            alt="roadmap line"
                                        />
                                    )}
                                </Flex>
                                <Box marginTop="20px" width="90%">
                                    <Heading
                                        className="gradient-text"
                                        size="md"
                                        color="#EBF4EE"
                                    >
                                        {item.title}
                                    </Heading>
                                    <Text marginTop="10px" fontSize="sm">
                                        {item.body}
                                    </Text>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Box>
    )
}

export default RoadmapComponent
