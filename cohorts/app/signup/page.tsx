"use client";
import { CustomizableInput, PasswordInput, TopNavBar } from "@/components/src";
import {
  HStack,
  Box,
  VStack,
  Button,
  ButtonText,
  Divider,
  Text,
  Heading,
  Pressable,
} from "@/components/ui";
import React from "react";
import { useRouter } from "next/navigation";
const Signup: React.FC = () => {
  const router = useRouter();
  return (
    <Box>
      <TopNavBar isMenuAvailible={false} />
      <HStack>
        <Box className="flex-1 bg-primary-gray h-full"></Box>
        <VStack className="flex-1 ">
          <VStack className="w-[360px] h-full my-12 ">
            <Heading className="font-medium pb-8">Register Now</Heading>
            <VStack className="" space="lg">
              <CustomizableInput
                label="Username"
                placeholder="Enter username"
              />
              <CustomizableInput
                label="Email"
                type="email"
                placeholder="Enter email"
              />
              <PasswordInput label="Password" placeholder="Enter Password" />
              <Button
                className="bg-primary-blue"
                size="md"
                variant="solid"
                action="primary"
              >
                <ButtonText>Register Now</ButtonText>
              </Button>
              <Divider />
              <HStack className="mx-auto">
                <Text>Already have an account? </Text>
                <Pressable onPress={() => router.push("/login")}>
                  <Text className="text-primary-blue"> Sign In now</Text>
                </Pressable>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Signup;
