"use client";

import {
  Button,
  Text,
  ButtonText,
  VStack,
  Box,
  HStack,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@/components/ui";
import { AddIcon, RemoveIcon } from "@/components/ui/icon";
import {
  AccordionToggle,
  GradientButton,
  TopNavBar,
  Footer,
} from "@/components/src";
import { LandingPageAccordionData } from "@/utils/constant";

import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <Box>
      <TopNavBar />
      <VStack>
        <Grid
          className="gap-y-2 gap-x-4"
          _extra={{
            className: "grid-cols-6",
          }}
        >
          <GridItem
            _extra={{
              className: "col-span-6 md:col-span-3 lg:col-span-2",
            }}
          >
            <HStack className="flex w-full h-[300px] bg-gray-200 items-center justify-between">
              <VStack className="self-center  pl-12">
                <Box className="self-end">
                  <Text className="pb-4 text-secondary-1000">
                    DESTINY DRIVER
                  </Text>
                  <Text className="text-2xl text-center font-bold text-black">
                    Empower your <br />
                    career journey
                  </Text>
                </Box>
                <Box className="bg-gray-600">t-2</Box>
              </VStack>
              <Box className="self-end  bg-red-600">t3-middle</Box>
              <Box className="self-start bg-yellow-600">t4-end</Box>
            </HStack>
          </GridItem>
          <GridItem
            _extra={{
              className: "col-span-6 md:col-span-3 lg:col-span-2",
            }}
          ></GridItem>
          <GridItem
            _extra={{
              className: "col-span-6 md:col-span-3 lg:col-span-2",
            }}
          >
            <HStack className="flex w-full h-[300px] bg-gray-200 items-center justify-between">
              <VStack className="self-start">
                <Box className="bg-green-600 h-[100px]">t1-end</Box>
                <Box className="bg-gray-600 h-[100px]">
                  <Text>Empower your career journey</Text>
                </Box>
                <Box className=" bg-red-600 h-[100px]">t3-middle</Box>
              </VStack>
              <Box className="self-center bg-yellow-600 mt-[-120px]">
                t4-end
              </Box>
            </HStack>
          </GridItem>
        </Grid>
        <VStack className="h-[500px] py-12 bg-primary-gray">
          <VStack className="mx-auto" space="md">
            <Text style={{ color: "#B06AB3" }} className="text-center">
              Number of Candidates in Each Experience Group
            </Text>
            <Heading className="text-center font-medium">
              Get{" "}
              <Text className="text-primary-blue text-xl">
                customize cohorts
              </Text>{" "}
              by adding <br />
              your data on ours
            </Heading>
          </VStack>
          <HStack space="md" className="mx-auto mt-8">
            <Button className="rounded-full bg-white text-black shadow-custom">
              <ButtonText className="text-black">
                Control operational costs
              </ButtonText>
            </Button>
            <Button className="rounded-full bg-white text-black shadow-custom">
              <ButtonText className="text-black">
                Absorb jumps in demand
              </ButtonText>
            </Button>
            <Button className="rounded-full bg-white text-black shadow-custom">
              <ButtonText className="text-black">
                Meet customer expectations
              </ButtonText>
            </Button>
          </HStack>
          <Box className="mx-auto my-8">
            <GradientButton label="Al-Driven Suggestion" />
          </Box>
        </VStack>
        <VStack className="h-[600px] py-12 ">
          <Heading className="text-center font-medium">
            Product and tech leaders in large-scale <br />
            logistics companies use Cohorts
          </Heading>
          <HStack className="shadow-soft-5 w-[800px] rounded-md p-3 my-8 mx-auto">
            <Text className="uppercase">Geotab</Text>
          </HStack>
          <VStack className="mx-auto py-8 bg-gray-200 text-center w-[1100px] rounded-md">
            <Heading className="text-center py-6">PLATFORM</Heading>
            <HStack className="space-x-2 mx-auto pb-6">
              <Box>
                <Image
                  size="none"
                  source={{
                    uri: "/cohorts.svg" ?? null,
                  }}
                  alt="logo"
                  className="w-[48px] h-[48px]"
                />
              </Box>
              <Box className="">
                <Heading className="text-white font-lg">COHORTS</Heading>
              </Box>
            </HStack>
            <Text className="text-center py-6">
              Revolutionize your route planning with our next-generation mapping
              and <br />
              routing platform designed to tackle real-world constraints.
            </Text>
            <Box className="mx-auto">
              <GradientButton label="Al-Driven Suggestion" />
            </Box>
          </VStack>
        </VStack>
        <VStack className="h-[600px]">
          <Heading className="text-center font-lg mb-8">
            Analysis-Top Candidates
          </Heading>
          <VStack className="shadow-custom h-[500px] w-[1100px] mx-auto rounded-md">
            <Heading className="text-center font-medium py-6">
              Number of Candidates in Each Experience Group
            </Heading>
          </VStack>
        </VStack>
        <VStack className="h-[500px] py-12 bg-primary-gray">
          <Heading className="text-center py-6 font-medium font-sm">
            Use critical data  from your research that has
            <br />
            monetary value in your campaigns
          </Heading>
          <HStack className="w-[800px] items-center text-center mx-auto">
            <Box className="flex-1  h-[300px]">
              <AccordionToggle
                items={LandingPageAccordionData}
                IconTwo={AddIcon}
                IconOne={RemoveIcon}
              />
            </Box>
            <Box className="flex-1  h-[300px]"></Box>
          </HStack>
        </VStack>
        <VStack className="h-[500px] py-12 ">
          <Heading className="text-center py-6 font-medium font-sm">
            Marketing managers love Cohort APIs and SDKs
          </Heading>
        </VStack>
      </VStack>
      <Footer />
    </Box>
  );
}
