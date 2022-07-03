import { 
  Box, 
  FormControl, 
  Stack,
  Input,
  WarningOutlineIcon
} from "native-base";

export const InputPassword = () => {
    return (
      <Box>
        <FormControl isRequired>
          <Stack>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" defaultValue="12345" placeholder="password" />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
      </Box>
    )
};