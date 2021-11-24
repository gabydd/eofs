import { Box, Text, Center } from "@chakra-ui/react";

type Props = {
  title: string;
  body: string;
};
const Event = ({ title, body }: Props) => {
  return (
    <Box w="400px" h="auto" border="2px" boxShadow="2xl" bg="gray.50" rounded="2xl">
      <Center><Text fontWeight="bold" fontSize="25px">{title}</Text></Center>
      <Text ml="3px">{body}</Text>
    </Box>
  );
};

export default Event;
