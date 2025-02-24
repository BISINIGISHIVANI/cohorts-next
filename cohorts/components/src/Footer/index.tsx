import { HStack, Box, Text, Heading, Image, VStack } from "@/components/ui";

const Footer = () => {
  return (
    <VStack>
      <VStack
        className="realtive h-[100px] shadow-xl"
        style={{ backgroundColor: "#4568DC33" }}
      >
        <HStack className="w-full  h-[100px] bg-white-800 justify-between  items-center  shadow-outline sticky top-0 left-0 right-0 px-8 z-5">
          <HStack className="space-x-2  justify-between items-center ">
            <Box>
              <Image
                size="none"
                source={{
                  uri: "/cohorts.svg",
                }}
                alt="logo"
                className="w-[48px] h-[48px]"
              />
            </Box>
            <Box>
              <Heading>COHORTS</Heading>
            </Box>
          </HStack>
          <HStack className="space-x-8 items-center">
            <Text>Home</Text>
            <Text>AI-Driven Suggestion</Text>
            <Text>Manual Analysis</Text>
          </HStack>
        </HStack>
      </VStack>
      <Box style={{ backgroundColor: "#6C7695" }} className="p-3">
        <Text className="text-center text-white text-sm">
          @2025 Destiny Drivers. All rights Reserved
        </Text>
      </Box>
    </VStack>
  );
};
export { Footer };
