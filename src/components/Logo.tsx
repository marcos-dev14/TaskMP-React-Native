import { Flex, Text } from 'native-base';

export function Logo() {
  return (
    <Flex alignItems="center">
      <Text fontFamily="heading" fontWeight="bold" color="textGray.500" fontSize={50}>
        Organize
      </Text>
      <Text fontFamily="heading" fontWeight="normal" color="primary.700" fontSize={36}>
        Your Task
      </Text>
    </Flex>
  );
}