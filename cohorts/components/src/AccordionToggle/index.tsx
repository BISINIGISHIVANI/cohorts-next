"use client";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContentText,
  AccordionIcon,
  AccordionContent,
  Divider,
} from "@/components/ui";
import { ChevronUpIcon, ChevronDownIcon } from "@/components/ui/icon";
import React, { useState } from "react";
interface AccordionItemProps {
  value: string;
  title: string;
  content: string;
}

interface AccordionToggleProps {
  items: AccordionItemProps[];
  props: any;
  type: "single";
  IconOne: any;
  IconTwo: any;
}

function AccordionToggle({
  items,
  type,
  IconOne = ChevronUpIcon,
  IconTwo = ChevronDownIcon,
  props,
}: AccordionToggleProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleToggle = (value: string) => {
    setExpandedItem((prev) => (prev === value ? null : value));
  };

  return (
    <Accordion
      size="md"
      variant="filled"
      type={type}
      isCollapsible={true}
      isDisabled={false}
      className="m-5 w-[95%] max-w-[640px] bg-transparent shadow-none"
      {...props}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="rounded-lg m-2"
        >
          <AccordionHeader className="">
            <AccordionTrigger
              onPress={() => handleToggle(item.value)}
              className="focus:web:rounded-lg"
            >
              <AccordionTitleText>{item.title}</AccordionTitleText>
              {expandedItem === item.value ? (
                <AccordionIcon
                  as={IconOne}
                  className="ml-3 p-1 rounded-full bg-gradient-to-b from-[#4568DC] to-[#B06AB3] text-white"
                />
              ) : (
                <AccordionIcon
                  as={IconTwo}
                  className="ml-3 rounded-full p-0.5 bg-gradient-to-b from-[#4568DC] to-[#B06AB3] text-white"
                />
              )}
            </AccordionTrigger>
          </AccordionHeader>
          {/* <Divider /> */}

          {expandedItem === item.value && (
            <AccordionContent>
              <AccordionContentText>{item.content}</AccordionContentText>
            </AccordionContent>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export { AccordionToggle };
