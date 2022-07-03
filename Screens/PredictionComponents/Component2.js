import React from "react";
import { FormControl, Input, Radio, Button, Box, WarningOutlineIcon, Spacer, Icon, Center, Heading, ScrollView, VStack, Divider, Text, Container, NativeBaseProvider, HStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from 'formik';
import { 
    useSelector, 
    useDispatch
} from 'react-redux';
import { 
    changePredictionComponent,
    addPredictionValues2
} from '../../Redux/actions';


function PredictionScreen() {
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        dispatch(changePredictionComponent("Component3"));
        dispatch(addPredictionValues2(values));
    }

    const validate = values => {
        const errors = {};

        if (!values.symptoms) {
            errors.symptoms = 'Required';
        }
        return errors;
    };

    return (
        <Formik initialValues={{
            symptoms: ''
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
                            Consult top doctors from the comfort of your home on
                            <Text color="emerald.500"> HealthSmart</Text>
                        </Heading>
                        <Text mt="0" pt="0" fontWeight="medium">
                            1 Crore Indians connect with doctor every year on HealthSmart
                        </Text>
                        <Spacer />
                        <VStack w="100%" bg="blue.100" space="3" mt="16" px="8">
                            <Heading>Welcome to our Health Prediction !</Heading>
                            <Text>Please enter below deatils to start with the prediction</Text>
                            <HStack mb="2.5" mt="1.5" space={3}>
                                <Center>
                                    <Box>
                                        <FormControl isRequired isInvalid={'symptoms' in errors} mb="2">
                                            <FormControl.Label>Symptoms</FormControl.Label>
                                            <Input
                                                placeholder="Tell us your symptoms"
                                                onBlur={handleBlur('symptoms')}
                                                onChangeText={handleChange('symptoms')}
                                                value={values.symptoms}    
                                            />
                                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                {/* Please Enter your symptoms. */}
                                                {errors.symptoms}
                                            </FormControl.ErrorMessage>
                                        </FormControl>
                                            <Spacer/>
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
