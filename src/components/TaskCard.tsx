import { HStack, VStack, Text, } from 'native-base';
import { Feather } from '@expo/vector-icons';

interface TaskProps {
  name: string;
  type: string;
  description?: string;
  date?: string;
}

export function TaskCard({
  name,
  type,
  description,
  date
}: TaskProps) {
  return (
    <HStack 
      width="100%" 
      height={20} 
      background="primary.700" 
      borderRadius={10}
      alignItems="center"
      justifyContent="space-between"
      px="24px"
    >
      <HStack alignItems="center" space={2}>
        <Feather 
          name="monitor"
          size={24}
          color="white"
        />

        <VStack>
          <Text fontFamily="body" fontSize={16} fontWeight="bold" color="white">
            {name}
          </Text>
          <Text fontFamily="body" fontSize={10} fontWeight="normal" color="white">
            {type}
          </Text>
        </VStack>
      </HStack>

      <Text fontFamily="body" fontSize={10} fontWeight="normal" color="white">
        {date}
      </Text>
    </HStack>
  );
}