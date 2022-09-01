import { VStack, Text } from 'native-base';

import ConfirmSvg from '../assets/confirm.svg';

import { Logo } from '../components/Logo';
import { Button } from '../components/Button';

export function Confirmation() {
  return (
    <VStack height="100%" alignItems="center" bg="secondary.700" px="28px" pt={16} space={70} >
      <Logo />
      
      <VStack space={14} alignItems="center">
        <ConfirmSvg />
        
        <Text fontFamily="body" fontSize={30} fontWeight="bold" color="textSecondary.700">
          Conta criada!
        </Text>
      </VStack>

      <Button 
        title="Ok"
        type="primary"
      />
    </VStack>
  );
}