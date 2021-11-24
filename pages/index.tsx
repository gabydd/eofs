import { Heading, Flex, Divider, Text, Link, Icon, Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import TimeLine from "../components/TimeLine";
import Event from "../components/Event";
import { paragraphs, why } from "../lib/text";

const Home: NextPage = () => {
  return (
    <Flex w="full" direction="column" bg="gray.200" h="full">
      <Heading
        mt="10px"
        mb="10px"
        fontSize="56px"
        textColor="navy"
        textAlign="center"
      >
        The Evolution of Human Skin Colour
      </Heading>
      <Divider w="full" borderColor="black" />
      <Flex h="full" mt="10px" w="full" direction="column" justify="center">
        <Flex Flex ml="200px" mr="300px" justify="space-between">
          {[paragraphs[0], paragraphs[2]].map(({ title, body }) => (
            <Flex align="center" justify="end" direction="column" key={title}>
              <Event title={title} body={body} />
              <Divider
                orientation="vertical"
                border="2px"
                h="10"
                borderColor="black"
              />
            </Flex>
          ))}
        </Flex>
        <Flex w="full">
          <TimeLine></TimeLine>
        </Flex>
        <Flex justifyItems="end" justify="space-between" mr="200px">
          <Divider orientation="vertical" h="10" />
          {[paragraphs[1], paragraphs[3]].map(({ title, body }) => (
            <Flex align="center" direction="column" key={title}>
              <Divider
                orientation="vertical"
                border="2px"
                h="10"
                borderColor="black"
              />
              <Event key={title} title={title} body={body} />
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex direction="column" mt="20px" mb="20px" align="center" >
        <Heading textAlign="center">Why Does This Matter?</Heading>
        <Text px="3px" w="600px" mt="5px" bg="pink.50" rounded="md" borderColor="green.700" border="1px">{why}</Text>
      </Flex>
      <Flex ml="auto" mb="3px" mr="3px">
        <Flex align="center" mr="4px">
          <Text color="green.400"> Made by Gaby</Text>
        </Flex>
        <Link isExternal href="https://github.com/gabydd/eofs">
          <Icon
            height="32px"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="32px"
            data-view-component="true"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </Icon>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Home;
