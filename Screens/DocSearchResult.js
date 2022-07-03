import React from 'react';
import { Platform } from 'react-native';
import { Box, FlatList, View, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider, Icon } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';
import StarRatings from 'react-star-ratings';

const DoCScreen = () => {
  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Dr. Aayan Kumar",
    specialization: "Pain Medicine",
    Exp: "45 Years Exp",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Address: "Bangaluru, Banashankari",
    Distance: "19.66 miles",
    Ratings: 4
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Dr. Sujitha Ma",
    specialization: "Family Medicine",
    Exp: "35 Years Exp",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    Address: "Bangaluru, J P Nagar",
    Distance: "14.25 miles",
    Ratings: 2.5
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Dr. Anci Barroco",
    specialization: "General Physician",
    Exp: "10 Years Exp",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    Address: "Bangaluru, Silk Board",
    Distance: "10.80 miles",
    Ratings: 5
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Dr. Aniket Kumar",
    specialization: "General Physician",
    Exp: "15 Years Exp",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    Address: "Bangaluru, BTM 2nd Stage",
    Distance: "7 miles",
    Ratings: 3
  }];
  return <Box w="100%" h="100%">
      <Heading fontSize="xl" p="4" pb="3">
        Your Search Result
      </Heading>
      <FlatList data={data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "gray.600"
    }} borderColor="coolGray.200" pl="4" pr="5" py="2">
            <HStack alignItems="center" space={3}>
            <Avatar size="48px" source={{
            uri: item.avatarUrl
          }} />
              <VStack>
                <Text bold>
                  {item.fullName}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                  {item.specialization}
                </Text>
                <StarRatings
        rating={item.Ratings}
        starDimension="10px"
        starSpacing="5px"
        starRatedColor="#ffc107"
      />
                <Icon as={FontAwesome5}
                    name="suitcase"
                    color="blue"
                    size={3}
              /> <Text fontSize="xs">{item.Exp}</Text>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.Address}
              </Text>
              <Text>{item.Distance}</Text>
              </VStack>
            </HStack>
          </Box>} keyExtractor={item => item.id} />
    </Box>;
};

export default function DoC() {
  return (
    <NativeBaseProvider>
    <Center flex={1} px="2">
        <DoCScreen />
    </Center>
    <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}><Text>My fixed footer</Text></View>
  </NativeBaseProvider>
  )
}
