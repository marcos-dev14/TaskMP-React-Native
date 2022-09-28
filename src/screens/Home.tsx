import { Flex, HStack, VStack, Heading, Text, Avatar } from 'native-base';

import HomeSvg from '../assets/home.svg';
import { TaskCard } from '../components/TaskCard';

export function Home() {
  return (
    <Flex height="100%" alignItems="center" bg="secondary.700" px="28px" pt={20}>
      <HStack width="100%" alignItems="center" justifyContent="space-between">
        <VStack>
          <Heading fontFamily="heading" fontSize={24} fontWeight="bold" color="title.500">
            Hi Marcos Paulo
          </Heading>
          <Text fontFamily="body" fontSize={14} fontWeight="normal" color="textGray.500">
            Good Morning!!!
          </Text>
        </VStack>

        <Avatar 
          source={{ uri: 'https://github.com/marcos-dev14.png' }}
          style={{
            borderWidth: 2,
            borderColor: '#FFFFFF',
          }}
          shadow={9}
        />
      </HStack>

      <HStack 
        width="100%" 
        height={164}
        alignItems="center" 
        justifyContent="space-between" 
        mt={73}
        borderWidth={2}
        borderColor="primary.700"
        borderRadius={30}
        px={6}
      >
        <VStack>
          <Text>Welcome!</Text>
          <Text>Let's schedule your{'\n'}projects</Text>
        </VStack>

        <HomeSvg />
      </HStack>

      <VStack width="100%" mt={30}>
        <Text fontFamily="body" fontSize={15} fontWeight="medium" color="title.500" mb={4}>
          Your tasks
        </Text>

        <TaskCard 
          name="Mobile App"
          type="Work project"
          date="Aug 25, 2022"
        />
        
      </VStack>
    </Flex>
  );
}