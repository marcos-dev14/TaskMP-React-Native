import { useState } from 'react';
import { 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Flex, FormControl, Text, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Logo } from '../components/Logo';
import { InputIcon } from '../components/Inputs/InputIcon';
import { PasswordInput } from '../components/Inputs/PasswordInput';
import { Button } from '../components/Button';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function handleGoSignUp() {
    navigation.navigate('signUp');
  }

  function handleGoHome() {
    navigation.navigate('home');
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Flex 
          alignItems="center" 
          bg="secondary.700" 
          px="28px" 
          pt="115px"
        > 
          <Logo />

          <Text
            fontFamily="body"
            fontSize={15}
            fontWeight="medium"
            color="textSecondary.700"
            textAlign="center"
            lineHeight={24}
            mt={50}
          >
            Login and have{'\n'} an amazing experience.
          </Text>

            <VStack width="100%" mt={30} space={4} px={14}>
              <FormControl>
                <InputIcon 
                  iconName="mail"
                  placeholder="E-mail"
                  value={email}
                  onChangeText={setEmail}
                />
              </FormControl>

              <FormControl>
                <PasswordInput 
                  iconName="lock"
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                />
              </FormControl>  
            </VStack>

          <VStack space={4} mt={12} mb="115px" px={14}>
            <Button 
              type="primary"
              title="Login"
              onPress={handleGoHome}
            />

            <Button 
              type="secondary"
              title="Create free account"
              onPress={handleGoSignUp}
            />
          </VStack>
        </Flex>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}