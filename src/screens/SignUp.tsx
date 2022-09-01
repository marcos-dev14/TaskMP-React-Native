import { useState } from 'react';
import {  
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard, 
  TouchableOpacity 
} from 'react-native';
import { Flex, FormControl, Text, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Logo } from '../components/Logo';
import { InputIcon } from '../components/Inputs/InputIcon';
import { PasswordInput } from '../components/Inputs/PasswordInput';
import { Button } from '../components/Button';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <Flex
          background="secondary.700" 
          alignItems="center"
          px="28px"
          pt="80px"
        >
          <Flex width="100%">
            <TouchableOpacity
              onPress={handleGoBack}
              activeOpacity={0.7}
            >
              <MaterialIcons 
                name="keyboard-arrow-left"
                size={26}
                color="#7A7A80"
              />
            </TouchableOpacity>
          </Flex>
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
            Make your{'\n'} registration quickly and easily.
          </Text>

            <VStack width="100%" mt={30} space={4} px={14}>
              <FormControl>
                <InputIcon 
                  iconName="user"
                  placeholder="Name"
                  value={name}
                  onChangeText={setName}
                />
              </FormControl>
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
              <FormControl>
                <PasswordInput 
                  iconName="lock"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </FormControl>  
            </VStack>

          <VStack space={4} mt={12} pb="60px" px={14}>
            <Button 
              type="primary"
              title="Register"
            />
          </VStack>
        </Flex>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}