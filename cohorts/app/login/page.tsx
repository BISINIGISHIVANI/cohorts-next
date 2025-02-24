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
  Switch,
} from "@/components/ui";
import React from "react";
import { useRouter } from "next/navigation";
import colors from "tailwindcss/colors";
const Login: React.FC = () => {
  const router = useRouter();
  return (
    <Box>
      <TopNavBar isMenuAvailible={false} />
      <HStack>
        <Box className="flex-1 bg-primary-gray h-full"></Box>
        <VStack className="flex-1 ">
          <VStack className="w-[360px] h-full my-12 ">
            <Heading className="font-medium pb-8">
              Nice to see you again
            </Heading>
            <VStack className="" space="lg">
              <CustomizableInput
                label="Email"
                type="email"
                placeholder="Enter email"
              />
              <PasswordInput label="Password" placeholder="Enter password" />
              <HStack className="justify-between my-4">
                <HStack space="sm">
                  <Switch
                    size="md"
                    isDisabled={false}
                    trackColor={{
                      false: colors.neutral[300],
                      true: colors.neutral[600],
                    }}
                    thumbColor={colors.neutral[50]}
                    activeThumbColor={colors.neutral[50]}
                    ios_backgroundColor={colors.neutral[300]}
                  />
                  <Text className="text-sm">Remember me </Text>
                </HStack>
                <Pressable onPress={() => router.push("/")}>
                  <Text className="text-primary-blue text-sm">
                    {" "}
                    Forgot password?
                  </Text>
                </Pressable>
              </HStack>
              <Button
                className="bg-primary-blue hover:none"
                size="md"
                variant="solid"
                action="primary"
              >
                <ButtonText>Sign in</ButtonText>
              </Button>
              <Divider />
              <HStack className="mx-auto">
                <Text>Dont have an account? </Text>
                <Pressable onPress={() => router.push("/signup")}>
                  <Text className="text-primary-blue"> Sign up now</Text>
                </Pressable>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Login;
