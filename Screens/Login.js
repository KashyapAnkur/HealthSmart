import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Spinner, useToast } from "native-base";
import { Formik } from 'formik';
import Registration from "./Registration";
import { resetPredictionComponent, addLoggedInUserDetail } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Loader = (props) => {
    return <HStack space={2} justifyContent="center" alignItem="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
    </HStack>;
};

const Login = (props) => {
    const toast = useToast();
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const [showRegister, setShowRegister] = React.useState(false);
    const [loader, setLoader] = React.useState(false);

    React.useEffect(() => {
        dispatch(resetPredictionComponent());
    }, []);

    const onSubmit = (values) => {
        setLoader(true);
        try {
            axios
            .get("http://myjson.dit.upm.es/api/bins/3obn")
            .then((res) => {
                if(res.status === 200){
                    setLoader(false);
                    let isExist = "n";
                    let loggedInUser = {};
                    res.data.forEach((i) => {
                        if(values.password == i.password && values.email === i.email) {
                            isExist = "y";
                            loggedInUser = i;
                        }
                    });
                    if(isExist === "y") {
                        dispatch(addLoggedInUserDetail(loggedInUser));
                        props.navigation.navigate("Home");
                    } else {
                        toast.show({description: "Wrong credentials.."})
                    }
                } else {
                    setLoader(false);
                }
            })
            .catch((err) => {
                setLoader(false);
                console.log(err);
            });
        } catch(err) {
            setLoader(false);
            console.log(err);
        }
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

        if (!values.password) {
            errors.password = 'Required';
        } else {
            if(values.password.length < 8) {
                errors.password = 'Password must be 8 characters long';
            }
        }
        return errors;
    };
    
    if(loader) {
        return <Loader />
    }

    if(showRegister) {
        return <Registration />
    } else {
        return (
            <Formik initialValues={{
                email: '',
                password: ''
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
                        Sign in to continue!
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
                                <Link _text={{
                                    fontSize: "xs",
                                    fontWeight: "500",
                                    color: "indigo.500"
                                }} alignSelf="flex-end" mt="1">
                                    Forgot Password?
                                </Link>
                            </FormControl>
                            <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
                                Sign in
                            </Button>
                            <HStack mt="6" justifyContent="center">
                                <Text fontSize="sm" color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }}>
                                    I'm a new user.{" "}
                                </Text>
                                <Link _text={{
                                    color: "indigo.500",
                                    fontWeight: "medium",
                                    fontSize: "sm"
                                }}
                                    onPress={
                                        // () => setShowRegister(true)
                                        () => props.navigation.navigate('Register')
                                    }
                                >
                                    Sign Up
                                </Link>
                            </HStack>
                        </VStack>
                    </Box>
                </Center>}
            </Formik>
        )
    }
};


export default Login;
// export default () => {
//     return (
//         <NativeBaseProvider>
//             <Center flex={1} px="3">
//                 <Login />
//             </Center>
//         </NativeBaseProvider>
//     );
// };