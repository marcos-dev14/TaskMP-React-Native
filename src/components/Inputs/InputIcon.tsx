import { useState } from 'react';
import { HStack, Flex, Icon, Input as InputBase, IInputProps } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { Envelope } from 'phosphor-react-native';

interface InputProps extends IInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function InputIcon({ iconName, value, ...rest}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <HStack width="100%" height="56px" bgColor="white" borderRadius={5}>
      <Flex 
        width="56px" 
        height="56px" 
        justifyContent="center" 
        alignItems="center"
        borderRightWidth={2}
        borderRightColor="secondary.700"
      >
        <Feather
          name={iconName}
          size={24}
          color={( isFocused || isFilled ) ? "#DC1637" : "#7A7A80"}
        />
      </Flex>

      <InputBase 
        flex={1}
        size="md"
        fontSize="md"
        fontFamily="body"
        color="textSecondary"
        placeholderTextColor="textPlaceholder"
        rounded="none"
        borderTopRightRadius={5}
        borderBottomRightRadius={5}
        borderWidth={0}
        _focus={{
          borderWidth: 0,
          bg: "white"
        }}
        isFocused={isFocused} 
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </HStack>
  );
}