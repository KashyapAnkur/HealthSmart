import React from "react";
import { Box, Container, ScrollView, Heading, AspectRatio, Avatar, Text, Center, HStack, Stack, NativeBaseProvider, VStack, View, Spinner } from "native-base";
import axios from 'axios';


const Loader = () => {
  return <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>;
};

const Example = () => {
  const [data, setData] = React.useState([]);
  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    setLoader(true);
    try {
      axios.get("http://myjson.dit.upm.es/api/bins/3obn")
      .then((res) => {
        if(res.status === 200){
          setLoader(false);
          setData(res.data);
        } else {
          setLoader(false);
          setData([]);
        }
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
        setData([]);
      });
    } catch(err) {
      setLoader(false);
      setData([]);
      console.log(err);
    }
  }, []);

  if(loader) {
    return <Loader />
  }
  return <Center>
  <ScrollView h="620">
   <Container>
     <Heading>
       <Text color="emerald.500"> Profile </Text>
     </Heading>
     <Box w="100%" h="100%" alignItems="Center">
      <Box rounded="md" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Center>
          <Avatar bg="pink.600" alignSelf="center" size="2xl" source={{
        uri: "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80"
      }}>
          GG
        </Avatar>
        </Center>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            John Deo
          </Center>
        </Box>
        <VStack p="4" space={3}>
          <HStack space={2}>
            <Heading size="md" ml="-1">
              The Garden
            </Heading>            
            <Text fontSize="md" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="2" mt="1">
              The Silicon Valley
            </Text>            
          </HStack>
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>         
        </VStack>
        <VStack space={4} px={2}>
      <HStack space={4}>
      <Center size="6" bg="primary.200" rounded="sm" _text={{
            color: "warmGray.50",
            fontWeight: "medium"
          }} shadow={"2"}
            style={{flexGrow: 6}}
          >
            Box 1
          </Center>
          <Center bg="primary.200" size="6" rounded="sm" _text={{
              color: "warmGray.50",
              fontWeight: "medium"
          }} shadow={"2"}
          style={{flexGrow: 6}}
          >
            Box 2
          </Center>
          <Center size="6" bg="primary.200" rounded="sm" _text={{
            color: "warmGray.50",
            fontWeight: "medium"
          }} shadow={"2"}
            style={{flexGrow: 6}}
          >
            Box 1
          </Center>
          <Center bg="primary.200" size="6" rounded="sm" _text={{
              color: "warmGray.50",
              fontWeight: "medium"
          }} shadow={"2"}
          style={{flexGrow: 6}}
          >
            Box 2
          </Center>
      </HStack>
      <HStack>
      <Center size="6" bg="gray.200" rounded="sm" _text={{
            color: "warmGray.50",
            fontWeight: "medium"
          }} shadow={"2"}
            style={{flexGrow: 8}}
          >
            Box 1
          </Center>
      </HStack>
      <HStack space={4}>
      <Center size="6" bg="gray.200" rounded="sm" _text={{
            color: "warmGray.50",
            fontWeight: "medium"
          }} shadow={"2"}
            style={{flexGrow: 8}}
          >
            Box 1
          </Center>
          <Center size="6" bg="gray.200" rounded="sm" _text={{
            color: "warmGray.50",
            fontWeight: "medium"
          }} shadow={"2"}
            style={{flexGrow: 8}}
          >
            Box 1
          </Center>
      </HStack>
      <HStack alignItems="center" space={4} justifyContent="space-between">
            <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text> 
          </HStack>
    </VStack>
      </Box>  
    </Container>
    </ScrollView>
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    