import { Box, Text, Center, Divider } from "@chakra-ui/react";

type Props = {
  title: string;
  body: string;
};
const Event = ({ title, body }: Props) => {
  return (
    <Box w="410px" h="auto" boxShadow="2xl" bg="teal.100" rounded="2xl">
      <Center>
        <Text fontWeight="bold" fontSize="25px">
          {title}
        </Text>
      </Center>
      <Divider borderColor="" />
      <Text m="10px" textColor="purple.600">{body}</Text>
    </Box>
  );
};

export default Event;
