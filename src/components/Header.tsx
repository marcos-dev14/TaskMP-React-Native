import { HStack, Text } from 'native-base';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <HStack width="100%" alignItems="center" justifyContent="center">
      <Text fontFamily="body" fontSize={24} fontWeight="bold">
        {title}
      </Text>
    </HStack>
  );
}