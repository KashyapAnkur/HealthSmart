import React from 'react';
import { Platform } from 'react-native';
import { Box, FlatList, View, ScrollView, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider, Icon } from "native-base";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import Footer from '../Components/Footer';

const DoCScreen = () => {
  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Dr. Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Orthopedics",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    isOnline: false
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Dr. Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Internal Medicine",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    isOnline: true
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Dr. Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Pediatrics",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    isOnline: false
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Dr. Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "Internal Medicine",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    isOnline: true
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Dr. Kiara",
    timeStamp: "12:47 PM",
    recentText: "Ophthalmology",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    isOnline: true
  }];
  return <ScrollView> <Box w="100%" h="100%">
      <Heading fontSize="xl" p="4" pb="3">
        Doctor on Call (Emergency)
      </Heading>
      <FlatList data={data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "gray.600"
    }} borderColor="coolGray.200" pl="4" pr="5" py="2">
            <HStack space={3} h={90} justifyContent="space-between">
            <Avatar bg="amber.500" source={{
          uri: item.avatarUrl
        }} size="md">
        NB
        <Avatar.Badge bg= {item.isOnline ? "green.500" : "gray.400"} />
        </Avatar>
              <VStack>
                <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
                  {item.fullName}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                Last Seen at: {item.timeStamp}
              </Text>
              <Icon as={Ionicons}
                    name={Platform.OS ? 'ios-call' : 'md-call'}
                    size="8"
                    color="blue"
              />
            </HStack>
          </Box>} keyExtractor={item => item.id} />
    </Box> </ScrollView>;
};

export default function DoC() {
  return (
    <NativeBaseProvider>
    <Center flex={1} px="2">
        <DoCScreen />
    </Center>
    <Footer/>
  </NativeBaseProvider>
  )
}
