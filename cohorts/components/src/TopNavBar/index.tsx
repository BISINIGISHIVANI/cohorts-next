"use client";
import {
  HStack,
  Box,
  Text,
  Heading,
  Image,
  Center,
  VStack,
  Pressable,
} from "@/components/ui";
import { GradientButton } from "../GradientButton";
import { useRouter } from "next/navigation";
const TopNavBar = ({ isMenuAvailible = true }) => {
  const router = useRouter();
  return (
    <VStack className="realtive h-[100px] shadow-xl">
      <HStack className="w-full  h-[100px] bg-white-800 justify-between  items-center  shadow-outline sticky top-0 left-0 right-0 px-8 z-5">
        <Pressable onPress={() => router.push("/")}>
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
        </Pressable>
        {isMenuAvailible && (
          <>
            <HStack className="space-x-8 items-center">
              <Text>Home</Text>
              <Text>AI-Driven Suggestion</Text>
              <Text>Manual Analysis</Text>
            </HStack>
            <HStack className="space-x-4 items-center">
              <GradientButton
                label="Login"
                styles={{ className: "w-[82px]" }}
                onPress={() => router.push("/login")}
              />
              <GradientButton
                label="Register"
                props={{ className: "w-[102px]" }}
                onPress={() => router.push("/signup")}
              />
            </HStack>
          </>
        )}
      </HStack>
    </VStack>
  );
};
export { TopNavBar };
