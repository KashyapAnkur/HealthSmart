import React from "react";
import { 
    FormControl, 
    Input, 
    View, 
    Button, 
    Box, 
    WarningOutlineIcon, 
    Spacer, 
    Icon, 
    Center, 
    Heading, 
    ScrollView, 
    VStack, 
    Divider, 
    Text, 
    Container, 
    NativeBaseProvider, 
    HStack 
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from 'formik';
import { 
    useSelector, 
    useDispatch
} from 'react-redux';
import { RadioButton } from 'react-native-paper';
import { 
    addPredictionValues,
    changePredictionComponent
} from '../../Redux/actions';

function PredictionScreen() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const onSubmit = (values) => {
        dispatch(addPredictionValues(values));
        dispatch(changePredictionComponent("Component2"));
    }

    const validate = values => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Required';
        }

        if (!values.age) {
            errors.age = 'Required';
        } else {
            if(!/^[0-9]+$/.test(values.age)) {
                errors.age = "Age should be number and";
            }
        }

        if (!values.phone) {
            errors.phone = 'Required';
        } else {
            if(!/^[0-9]{10}$/.test(values.phone)) {
                errors.phone = "Mobile number should be number and 10 digits";
            }
        }
        if (!values.gender) {
            errors.gender = 'Required';
        }
        return errors;
    };

    return (
        <Formik initialValues={{
            name: '',
            phone: '',
            age: '',
            gender: ''
        }} onSubmit={onSubmit} validate={validate}>
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors
            }) =>
            <Center>
                <ScrollView w="100%">
                    <Container>
                        <Heading>
                            1 Crore Indians connect with doctor every year on
                            <Text color="emerald.500"> HealthSmart</Text>
                        </Heading>
                        <Text mt="0" pt="0" fontWeight="medium">
                           Read patient's stories and book doctor appointments.
                        </Text>
                        <Spacer />
                        <VStack w="100%" bg="blue.100" space="3" mt="16" px="8">
                            {/* <Heading>Welcome to our Health Prediction !</Heading> */}
                            <Text>Please enter below deatils to start with the prediction</Text>
                            <HStack mb="2.5" mt="1.5" space={3}>
                                <Center>
                                    <Box>
                                        <FormControl isRequired isInvalid={'name' in errors}>
                                            <FormControl.Label>Name</FormControl.Label>
                                            <Input
                                                placeholder="Name"
                                                onBlur={handleBlur('name')}
                                                onChangeText={handleChange('name')}
                                                value={values.name}    
                                            />
                                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                {errors.name}
                                            </FormControl.ErrorMessage>
                                        </FormControl>
                                            <Spacer/>
                                        <FormControl isRequired isInvalid={'age' in errors}>
                                            <FormControl.Label>Age</FormControl.Label>
                                                <Input
                                                    placeholder="Age"
                                                    onBlur={handleBlur('age')}
                                                    onChangeText={handleChange('age')}
                                                    value={values.age}
                                                />
                                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                {errors.age}
                                            </FormControl.ErrorMessage>
                                        </FormControl>
                                            <Spacer/>
                                        <FormControl isRequired isInvalid={'phone' in errors}>
                                            <FormControl.Label>Contact Number</FormControl.Label>
                                            <Input
                                                placeholder="Contact Number"
                                                onBlur={handleBlur('phone')}
                                                onChangeText={handleChange('phone')}
                                                value={values.phone}
                                            />
                                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                {errors.phone}
                                            </FormControl.ErrorMessage>
                                        </FormControl>
                                            <Spacer/>
                                        <FormControl isRequired isInvalid={'gender' in errors}>
                                            <FormControl.Label>Gender</FormControl.Label>
                                            <RadioButton.Group 
                                                defaultValue="Male" 
                                                size="lg" 
                                                name="gender" 
                                                accessibilityLabel="Gender"
                                                onValueChange={handleChange('gender')}
                                                value={values.gender}
                                            >
                                                <Text>Male</Text>
                                                <RadioButton value='Male'></RadioButton>
                                                <Text>Female</Text>
                                                <RadioButton value='Female'></RadioButton>
                                            </RadioButton.Group>
                                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                {errors.gender}
                                            </FormControl.ErrorMessage>
                                        </FormControl>
                                        <Spacer/>
                                        <Button onPress={handleSubmit}>Continue</Button>
                                    </Box>
                                </Center>
                            </HStack>
                        </VStack>
                    </Container>
                </ScrollView>
            </Center>}
        </Formik>
    )
}

export default () => {
    return (
        <NativeBaseProvider>
        <Center flex={1} px="3">
            <PredictionScreen />
        </Center>
        </NativeBaseProvider>
    );
};
