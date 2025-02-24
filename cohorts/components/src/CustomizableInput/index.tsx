"use client";
import { Input, InputField, Text, VStack } from "@/components/ui";
import React from "react";

interface CustomizableInputProps {
  placeholder?: string;
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  type?: "text" | "password" | "email";
  label?: string;
}

const CustomizableInput: React.FC<CustomizableInputProps> = ({
  placeholder = "",
  variant = "outline",
  size = "md",
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  type = "text",
  label,
}) => {
  return (
    <VStack space="xs">
      {label && <Text className="text-typography-500 text-sm">{label}</Text>}
      <Input
        className="border-none "
        type={type}
        variant={variant}
        size={size}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
      >
        <InputField placeholder={placeholder} className="bg-gray-50 " />
      </Input>
    </VStack>
  );
};

export { CustomizableInput };
