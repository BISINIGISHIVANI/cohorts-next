"use client";
import {
  Input,
  InputField,
  Text,
  VStack,
  InputSlot,
  InputIcon,
} from "@/components/ui";
import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";

interface PasswordInputProps {
  placeholder?: string;
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  type?: "text" | "password"; // Allows overriding the type
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder = "",
  variant = "outline",
  size = "md",
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  type = "password",
  label,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <VStack space="xs">
      {label && <Text className="text-typography-500 text-sm">{label}</Text>}
      <Input className="text-center border-none hover:border-none">
        <InputField
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="bg-gray-50"
        />
        <InputSlot
          className="p-3  border-none bg-gray-50"
          onPress={handlePasswordToggle}
        >
          <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
        </InputSlot>
      </Input>
    </VStack>
  );
};

export { PasswordInput };
