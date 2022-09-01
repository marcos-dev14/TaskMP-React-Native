import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { HStack, Flex, Input as InputBase, IInputProps } from 'native-base';
import { Feather } from '@expo/vector-icons';

interface PasswordInputProps extends IInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function PasswordInput({ iconName, value, ...rest}: PasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handlePasswordVIsibilityChange() {
    setIsPasswordVisible(prevState => !prevState);
  }
  
  return(
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
        borderWidth={0}
        _focus={{
          borderWidth: 0,
          bg: "white"
        }}
        secureTextEntry={isPasswordVisible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        {...rest}
      />

      <Flex 
        width="56px" 
        height="56px" 
        justifyContent="center" 
        alignItems="center"
        borderRightColor="secondary.700"
        borderTopRightRadius={5}
        borderBottomRightRadius={5}
      >
        <TouchableOpacity 
          onPress={handlePasswordVIsibilityChange}
          activeOpacity={0.7}
        >
          <Feather
            name={ isPasswordVisible ? 'eye' : 'eye-off' }
            size={24}
            color="#7A7A80"
          />
        </TouchableOpacity>
      </Flex>
    </HStack>
  );
}