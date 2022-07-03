import { 
    Box, 
    FormControl, 
    Stack,
    Input,
    WarningOutlineIcon
} from "native-base";
  
export const InputText = () => (
    <Box>
        <FormControl isRequired>
            <Stack>
                <FormControl.Label>Email</FormControl.Label>
                <Input type="text" defaultValue="" placeholder="email" />
                <FormControl.HelperText>
                Must be atleast 6 characters.
                </FormControl.HelperText>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Invalid Email ID
                </FormControl.ErrorMessage>
            </Stack>
        </FormControl>
    </Box>
)