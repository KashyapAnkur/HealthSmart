import React from "react";
import { FormControl, Stack, Center, Icon, Input, Button, View, Heading, ScrollView, VStack, Divider, Text, Container, NativeBaseProvider, HStack, Spacer } from "native-base";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Footer from "../Components/Footer";
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";
import DocSearchResult from '../Screens/DocSearchResult';
import { useSelector, useDispatch } from 'react-redux';
import { setGoToDoctorsSearchResult } from '../Redux/actions';

function TopBanner(props) {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);

  const GoToPrediction = () => {
    props.props?.navigation?.navigate("Prediction");
  }

  const handleGoToDoctorsSearchResult = () => {
    dispatch(setGoToDoctorsSearchResult(true));
  };

  if(selector.goToDoctorsSearchResultPage) {
    return <DocSearchResult />
  }

  /* bug to be removed in the future */
    // React.useEffect(() => {
    //   if(selector.goToDoctorsSearchResultPage) {
    //     dispatch(setGoToDoctorsSearchResult(false));
    //   }
    // }, [])  
  /* bug to be removed in the future */

  return <Center>
     <ScrollView h="620">
      <Container>
        <Heading>
          A component library for the
          <Text color="emerald.500"> React Ecosystem</Text>
        </Heading>
        <Text mt="0" pt="0" fontWeight="medium">
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
        <Divider />
        <VStack w="100%" bg="blue.100" space="3" mt="16" px="8">
          <Heading>Find Your Doctor</Heading>
          <Text> Find a reputable Ptovider in your area with us</Text>
          <FormControl>
            <Input placeholder="Search doctors or conditions"/>
          </FormControl>
          <FormControl>            
            <Input placeholder="Zipcode, City or State" />
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={handleGoToDoctorsSearchResult}  
          >
            Find Doctors
          </Button>
        </VStack>
        <Divider />
        <VStack w="100%" bg="blue.100" space="3" mt="16" px="8">
          <Heading>Our Service</Heading>
          <HStack mb="2.5" mt="1.5" space={3}>
          <Center size="16" bg="primary.400" rounded="sm" _text={{
            color: "warmGray.50",
            fontWeight: "medium"
          }} shadow={"3"}
            style={{flexGrow: 4}}
          >
            <Heading>symptoms Checker</Heading>
            <Text>
                You have symptoms ? 
                        We have Answers..
            </Text>
            <Button
              mt="2" 
              colorScheme="indigo"
              onPress={() => GoToPrediction()}
            >
            Get Started
          </Button>
          </Center>
          </HStack>
          <Spacer/>
          <HStack>
          <Center bg="primary.500" size="16" rounded="sm" _text={{
              color: "warmGray.50",
              fontWeight: "medium"
          }} shadow={"3"}
          style={{flexGrow: 4}}
          >
            <Heading>Doctor on Call</Heading>
            <Text>
                Get you Doctor anytime, anywhere..
            </Text>
            <Button 
              mt="2" 
              colorScheme="indigo"
            >
            Get Started
          </Button>
          </Center>          
          </HStack>
        </VStack>
        <Divider />
        <VStack w="100%" bg="blue.100" space="3" mt="16" px="8">
        <Heading size="md">Get Your Doctor</Heading>
        <HStack mb="2.5" mt="1.5" space={2}>
          <Center size="16" bg="primary.400" rounded="sm" _text={{
            color: "warmGray.50",
            fontWeight: "medium"
          }} shadow={"3"}
            style={{flexGrow: 3}}
          >
            Orthopedics
          </Center>
          <Center bg="primary.500" size="16" rounded="sm" _text={{
              color: "warmGray.50",
              fontWeight: "medium"
          }} shadow={"3"}
          style={{flexGrow: 3}}
          >
            Internal Medicine
          </Center>
          <Center size="16" bg="primary.700" rounded="sm" _text={{
              color: "warmGray.50",
              fontWeight: "medium"
          }} shadow={"3"}
          style={{flexGrow: 3}}
          >
            Gynecology
          </Center>
          <Center size="16" bg="primary.700" rounded="sm" _text={{
              color: "warmGray.50",
              fontWeight: "medium"
          }} shadow={"3"}
          style={{flexGrow: 3}}
          >
            General Surgery
          </Center>
        </HStack>
        </VStack>
      </Container>
      </ScrollView>
    </Center>;
}

export default (props) => {
    return (
        <NativeBaseProvider>
        <Center flex={1} px="3">
            <TopBanner props={props} />
        </Center>
        <Footer/>
        </NativeBaseProvider>
    );
};