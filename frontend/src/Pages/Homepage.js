import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        w="100%"
        m="40px 0 15px 0"
        className="glass"
      >
        <Text fontSize="4xl" fontFamily="Inter" fontWeight="bold" bgGradient="linear(to-r, #0d9488, #8b5cf6)" bgClip="text">
          Aura
        </Text>
      </Box>
      <Box w="100%" p={4} className="glass">
        <Tabs isFitted variant="soft-rounded" colorScheme="teal">
          <TabList mb="1em">
            <Tab color="white" _selected={{ color: 'white', bg: 'rgba(13, 148, 136, 0.5)' }}>Login</Tab>
            <Tab color="white" _selected={{ color: 'white', bg: 'rgba(13, 148, 136, 0.5)' }}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
