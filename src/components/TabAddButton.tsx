import { Flex } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function TabAddButton() {
  const navigation = useNavigation();

  function handleGoRegisterTask() {
    navigation.navigate('registerTask');
  }
  
  return (
    <Flex
      width={54}
      height={54}
      alignItems="center"
      justifyContent="center"
      borderRadius={51}
      bg="primary.700"
      shadow={9}
    >
      <TouchableOpacity 
        onPress={handleGoRegisterTask}
        activeOpacity={0.7}
      >
        <Feather 
          name="plus"
          size={27}
          color="white"
        />
      </TouchableOpacity>
    </Flex>
  );
}