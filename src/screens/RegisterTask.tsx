import { Flex, FormControl, Text, VStack } from 'native-base';
import { 
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';

import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Input } from '../components/Inputs/Input';
import { Textarea } from '../components/Inputs/Textarea';

export function RegisterTask() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
      <ScrollView
        style={{
          width: '100%',
          height: '100%',
          paddingBottom: 180,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Flex 
          alignItems="center"
          height="100%"
          bg="secondary.700" 
          px="28px" 
          pt="86px"
        >
          <Header title="Register Task" />

          <VStack space={6} mt={70}>
            <FormControl>
              <Input placeholder="Name task" isFocused />
            </FormControl>
            <FormControl>
              <Textarea placeholder="Description" />
            </FormControl>
            <FormControl>
              <Input placeholder="22/09/2022" />
            </FormControl>
            <FormControl>
              <Input placeholder="Type project" />
            </FormControl>
          </VStack>

          <VStack mt={50} mb="115px">
            <Button 
              title="Register"
              type="primary"
            />
          </VStack>
        </Flex>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}