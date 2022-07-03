import React from 'react';
import { 
    Button, 
    FormControl, 
    Stack,
    Input,
    WarningOutlineIcon
} from "native-base";

export const SubmitButton = () => {
    const [loginLoader, setLoginLoader] = React.useState(true);

    let t;
    React.useEffect(() => {
        t = setTimeout(() => {
            setLoginLoader(false);
        },1200);
    }, []);

    return (
        <FormControl isRequired>
            <Stack 
                direction={{
                    base: "column",
                    md: "row"
                }}
                space={2}
                alignItems={{
                    base: "center",
                    md: "flex-start"
                }}>
                <Button 
                    style={{width: 'auto', height: '40px'}}
                    isLoading={loginLoader}
                    _loading={{
                        bg: "amber.400:alpha.70",
                        _text: {
                            color: "coolGray.700"
                        }
                    }}
                    _spinner={{
                        color: "white"
                    }} 
                    isLoadingText="Loggin in..."
                >
                    Login
                </Button>
            </Stack>
        </FormControl>
    )
};