import { useState } from 'react';
import { HStack, Input as InputBase, IInputProps } from 'native-base';

interface InputProps extends IInputProps {
  placeholder: string;
}

export function Input({placeholder, ...rest}: InputProps) {
  return (
    <HStack width="100%" height="56px" bgColor="white" rounded="sm">
      <InputBase 
        flex={1}
        size="md"
        fontSize="md"
        fontFamily="body"
        color="textSecondary"
        placeholderTextColor="textPlaceholder"
        rounded="none"
        borderWidth={0}
        placeholder={placeholder}
        _focus={{
          borderWidth: 0,
          bg: "white"
        }}
        {...rest}
      />
    </HStack>
  );
}