import React from "react";
import { Popover, Button, View, Input, FormControl, Modal, Icon, Text, Heading, Center, NativeBaseProvider, Container, Spacer, VStack, HStack, useToast } from "native-base";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";


function Footer() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalVisible2, setModalVisible2] = React.useState(false);
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    return (
    <>
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Contact Us</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Name</FormControl.Label>
                <Input ref={initialRef} />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Email</FormControl.Label>
                <Input />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setModalVisible(false);
              }}>
                  Cancel
                </Button>
                <Button onPress={() => {
                setModalVisible(false);
              }}>
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>

        <Modal isOpen={modalVisible2} onClose={() => setModalVisible2(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Book Your Appointment</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Name</FormControl.Label>
                <Input ref={initialRef} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Doctor's Name</FormControl.Label>
                <Input ref={initialRef} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Contact Number</FormControl.Label>
                <Input ref={initialRef} />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Email</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Please Select Slot</FormControl.Label>
                <input type="date"/>
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setModalVisible2(false);
              }}>
                  Cancel
                </Button>
                <Button onPress={() => {
                setModalVisible2(false);
              }}>
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}><Text>My fixed footer</Text></View>            <View style={{position: 'absolute', width: '-webkit-fill-available', alignSelf:'center', bottom: 0}}>
            <VStack h="100%" w="100%">
            <HStack h="100%" w="100%" space={1}>
            <Center size="sm" bg="blue.500" rounded="md" _text={{
            color: "warmGray.50",
            fontWeight: "medium"
          }} shadow={"2"}
            style={{flexGrow: 8}}
          >
            <Icon onPress={() => {
        setModalVisible2(!modalVisible2);
      }} as={FontAwesome5} color="white" name="calendar-alt" />
            Get your free Appointment
          </Center>
          <Center size="sm" bg="blue.500" rounded="md" _text={{
            color: "warmGray.50",
            fontWeight: "medium"
          }} shadow={"2"}
            style={{flexGrow: 8}}
          >
            <Icon onPress={() => {
        setModalVisible(!modalVisible);
      }} as={Ionicons} color="white" name="call" />
            Contact US
          </Center>
          </HStack>
          </VStack>
            </View>
      </>
    )
}

  export default Footer;