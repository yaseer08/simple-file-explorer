
import { Formik, Form, Field } from "formik";
import { FormControl, FormLabel, Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const AddForm = ({ type = 'file',handleSubmit }) => {
    const handleChange = (values) => {
        handleSubmit(values)
    };
    return (
        <div>
            <Formik
                initialValues={{
                    name: "",
                    creator: "",
                    size: "",
                    date: "",
                }}
                onSubmit={(values, actions) => {
                    handleChange(values);
                }}
            >
                {(props) => (
                    <Form>
                        <Box p="2">
                            <Field name="name">
                                {({ field }) => (
                                    <FormControl isRequired>
                                        <FormLabel htmlFor="name">Name</FormLabel>
                                        <Input {...field} id="name" />
                                    </FormControl>
                                )}
                            </Field>
                        </Box>

                        <Box p="2">
                            <Field name="creator">
                                {({ field }) => (
                                    <FormControl isRequired>
                                        <FormLabel htmlFor="creator">Creator</FormLabel>
                                        <Input {...field} id="creator" />
                                    </FormControl>
                                )}
                            </Field>
                        </Box>

                        <Box p="2">
                            <Field name="size">
                                {({ field }) => (
                                    <FormControl isRequired>
                                        <FormLabel htmlFor="size">size</FormLabel>
                                        <Input {...field} id="size" />
                                    </FormControl>
                                )}
                            </Field>
                        </Box>

                        <Box p="2">
                            <Field name="date">
                                {({ field }) => (
                                    <FormControl isRequired>
                                        <FormLabel htmlFor="date">Date</FormLabel>
                                        <Input {...field} id="date" />
                                    </FormControl>
                                )}
                            </Field>
                        </Box>

                        <Box p="2" w="100%" alignItems="center">
                            <Button m={"auto"} colorScheme="telegram" type="submit">
                                Submit
                            </Button>
                        </Box>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddForm;
