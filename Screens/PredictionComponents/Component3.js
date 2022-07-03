import React from "react";
import { FormControl, Input, Radio, Button, Box, WarningOutlineIcon, Spacer, Icon, Center, Heading, ScrollView, VStack, Divider, Text, Container, NativeBaseProvider, HStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from 'formik';
import { RadioButton } from 'react-native-paper';
import { 
    useSelector, 
    useDispatch
} from 'react-redux';
import { 
    changePredictionComponent,
} from '../../Redux/actions';
import { addPredictionValues3 } from '../../Redux/actions';

function PredictionScreen() {
    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(changePredictionComponent("PredictResult"));
        dispatch(addPredictionValues3(values));
    }

    const validate = values => {
        const errors = {};

        if (!values.nausea) {
            errors.nausea = 'Required';
        }
        return errors;
    };

    return (
        <Formik initialValues={{
            nausea: ''
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
                        <Spacer />
                        <VStack w="100%" bg="blue.100" space="3" mt="16" px="8">
                            <Heading>Welcome to our Health Prediction !</Heading>
                            <Text>Please enter below deatils to start with the prediction</Text>
                            <HStack mb="2.5" mt="1.5" space={3}>
                                <Center>
                                    <Box>
                                    <FormControl isRequired isInvalid={'nausea' in errors}>
                                            <FormControl.Label>Do you have Nausea?</FormControl.Label>
                                                <RadioButton.Group 
                                                    defaultValue="No" 
                                                    size="lg" 
                                                    name="nausea" 
                                                    accessibilityLabel="nausea"
                                                    onValueChange={handleChange('nausea')}
                                                    value={values.nausea}
                                                >
                                                    <Text>Yes</Text>
                                                    <RadioButton value='Yes'></RadioButton>
                                                    <Text>No</Text>
                                                    <RadioButton value='No'></RadioButton>
                                                </RadioButton.Group>
                                                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                                    {errors.nausea}
                                                </FormControl.ErrorMessage>
                                            </FormControl>
                                        <Spacer/>
                                        <Button onPress={handleSubmit}>Next</Button>
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
