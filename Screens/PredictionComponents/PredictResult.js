import React from "react";
import { Popover, Button, View, Input, FormControl, Modal, Icon, Text, Heading, Center, NativeBaseProvider, Container, Spacer, VStack, HStack, useToast } from "native-base";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useSelector } from 'react-redux';
import Footer from '../../Components/Footer';

const Example = () => {
    const selector = useSelector(state => state);
    const toast = useToast();
    return <Center><View>
    <Container>
      <Heading>
        The system have predicted you may have 
        <Heading color="emerald.300"> Jaundice </Heading>
        </Heading>
        <Text fontSize={18} >With <Text color="blue.500"> 89% </Text> of Accurary according your provided symptoms</Text>
      <Text pt="3">
        NativeBase is a simple, modular and accessible component library that
        gives you building blocks to build you React applications.
      </Text>
      <Spacer/>

      <Text>
        
      </Text>
      <Center>
      <Popover trigger={triggerProps => {
      return <Button {...triggerProps} colorScheme="info">
              Get Doctor list you may consult..
            </Button>;
    }}>
        <Popover.Content accessibilityLabel="Doctor list" w="56">
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Suggested Doctor List you may consult</Popover.Header>
          <Popover.Body>
            <VStack>
                <HStack space={2}>
                    <Text>
                        Dr. Sujitha Mathur
                    </Text>
                    <Text>
                        Genaral Physician
                    </Text>
                    <Icon as={FontAwesome5} color="blue.500" name="calendar-alt" />
                </HStack>
                <HStack space={2}>
                    <Text>
                    Dr. Anci Barroco
                    </Text>
                    <Text>
                        Genaral Physician
                    </Text>                    
                    <Icon as={FontAwesome5} color="blue.500" name="calendar-alt" />
                </HStack>                
            </VStack>
            <Text pt="3">
            **This will remove all data relating to Alex. This action cannot be
            reversed. Deleted data can not be recovered.
            </Text>
          </Popover.Body>
          <Popover.Footer justifyContent="flex-end">
            <Text>Is this Prediction helpful? </Text>
            <Button.Group space={2}>
                <Button 
                    colorScheme="info" 
                    onPress={() => toast.show({description: "Thank you for you feedback."})} 
                >Yes</Button>
                <Button 
                    colorScheme="coolGray" 
                    variant="ghost"
                    onPress={() => toast.show({description: "Thank you for you feedback."})} 
                >
                No
              </Button>              
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
      </Center>
      </Container>
    </View></Center>;
};



export default () => {
    return (
        <NativeBaseProvider>
        <Center flex={1} px="3">
            <Example />
        </Center>
        <Footer/>        
        </NativeBaseProvider>
    );
};
