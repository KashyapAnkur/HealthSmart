import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { Formik } from 'formik';
import Login from './Login';

const Register = (props) => {
    const [showLogin, setShowLogin] = React.useState(false);

    const onSubmit = () => {
        setShowLogin(true);
    }

    const validate = values => {
        const errors = {};
        let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 

        if (!values.email) {
            errors.email = 'Required';
        } else {
            if(!emailRegex.test(values.email)) {
                errors.email = 'Invalid email';
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


        
        if (!values.password) {
            errors.password = 'Required';
        } else {
            if(values.password.length < 8) {
                errors.password = 'Password must be 8 characters long';
            }
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Required';
        } else {
            if(values.confirmPassword.length < 8) {
                errors.confirmPassword = 'Confirm Password must be 8 characters long';
            }
            if(values.password != values.confirmPassword) {
                errors.confirmPassword = 'Password and Confirm Password must be same';
            }
        }
        return errors;
    };

    if(showLogin) {
        return <Login />;
    } else {
        return (
            <Formik initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
                phone: '',
                gender: ''
            }} onSubmit={onSubmit} validate={validate}>
                {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors
                }) => <Center w="100%">
                    <Box safeArea p="2" py="8" w="90%" maxW="290">
                        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }}>
                        Welcome
                        </Heading>
                        <Heading mt="1" _dark={{
                        color: "warmGray.200"
                    }} color="coolGray.600" fontWeight="medium" size="xs">
                        Sign up!
                        </Heading>

                        <VStack space={3} mt="5">
                        <FormControl isRequired isInvalid={'email' in errors}>
                                <FormControl.Label>Email ID</FormControl.Label>
                                <Input
                                    onBlur={handleBlur('email')}
                                    onChangeText={handleChange('email')}
                                    value={values.email}
                                />
                                <FormControl.ErrorMessage>
                                    {errors.email}
                                </FormControl.ErrorMessage>
                            </FormControl>
                            <FormControl isRequired isInvalid={'phone' in errors}>
                                <FormControl.Label>Phone No.</FormControl.Label>
                                <Input
                                    onBlur={handleBlur('phone')}
                                    onChangeText={handleChange('phone')}
                                    value={values.phone}
                                    type="number"
                                />
                                <FormControl.ErrorMessage>
                                    {errors.phone}
                                </FormControl.ErrorMessage>
                            </FormControl>
                            <FormControl isRequired isInvalid={'gender' in errors}>
                                <FormControl.Label>Gender</FormControl.Label>
                                <Input
                                    onBlur={handleBlur('gender')}
                                    onChangeText={handleChange('gender')}
                                    value={values.gender}
                                />
                                <FormControl.ErrorMessage>
                                    {errors.gender}
                                </FormControl.ErrorMessage>
                            </FormControl>
                            <FormControl isRequired isInvalid={'password' in errors}>
                                <FormControl.Label>Password</FormControl.Label>
                                <Input 
                                    type="password"
                                    onBlur={handleBlur('password')}
                                    onChangeText={handleChange('password')}
                                    value={values.password}    
                                />
                                <FormControl.ErrorMessage>
                                    {errors.password}
                                </FormControl.ErrorMessage>
                            </FormControl>
                            <FormControl isRequired isInvalid={'confirmPassword' in errors}>
                                <FormControl.Label>Confirm Password</FormControl.Label>
                                <Input 
                                    type="password"
                                    onBlur={handleBlur('confirmPassword')}
                                    onChangeText={handleChange('confirmPassword')}
                                    value={values.confirmPassword}    
                                />
                                <FormControl.ErrorMessage>
                                    {errors.confirmPassword}
                                </FormControl.ErrorMessage>
                            </FormControl>
                            <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
                                Register
                            </Button>
                            <HStack mt="6" justifyContent="center">
                                <Text fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                Already Registered?{" "}
                                </Text>
                                <Link _text={{
                                color: "indigo.500",
                                fontWeight: "medium",
                                fontSize: "sm"
                            }}
                                onPress={() => setShowLogin(true)}
                            >
                                Sign In
                                </Link>
                            </HStack>
                        </VStack>
                    </Box>
                </Center>}
            </Formik>
        )
    }
};

export default Register;