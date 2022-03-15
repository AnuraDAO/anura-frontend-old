import { Container, Heading, Flex, Box, Text, Image } from '@chakra-ui/react'
import styles from './styles'

const Concept = () => {
    return (
        <Container
            {...styles.conceptContainer}
        >
            <Flex
                {...styles.conceptContent}
                flexDirection={['column', 'column', 'column', 'row', 'row']}
            >
                <Box width="100%">
                    <Heading
                        className="gradient-text"
                        size="2xl"
                        textAlign={['center', 'center', 'center', 'left']}
                        {...styles.whatAreDAOSHeading}
                    >
                        What are DAOS?
                    </Heading>

                    <Text color="#ECE8E8" fontSize="1xl">
                        In its purest form, a decentralized autonomous
                        organization has no central leadership. It relies on a
                        voting system where decisions are made collectively by
                        the group; when done correctly, a DAO functions from the
                        bottom-up. Members can pool their resources into a
                        community treasury and proposals are voted on to
                        determine how funds will be allocated.
                    </Text>
                </Box>
                <Image
                    {...styles.frogImage}
                    src="/images/frog-dao.png"
                    alt="Frog"
                    boxSize="30%"
                />
            </Flex>
            <Image
                {...styles.frogMobileImage}
                src="/images/frog-dao-mobile.png"
                alt="Frog"
                boxSize="60%"
            />
        </Container>
    )
}
export default Concept
