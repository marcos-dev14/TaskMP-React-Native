import { Flex, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import WelcomeSvg from '../assets/welcome.svg';

import { Logo } from '../components/Logo';
import { Button } from '../components/Button';

export function Welcome() {
  const navigation = useNavigation();

  function handleGoSignIn() {
    navigation.navigate('signIn');
  }

  return (
    <Flex flex={1} alignItems="center" bg="secondary.700" px={24} pt={16}>
      <Logo />

      <WelcomeSvg 
        width={300}
        height={282}
        style={{ marginTop: 40 }}
      />

      <VStack space={4} mt={16}>
        <Button 
          type="primary"
          title="Welcome"
          onPress={handleGoSignIn}
        />
      </VStack>
    </Flex>
  );
}