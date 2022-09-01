import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons, Feather, } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { RegisterTask } from '../screens/RegisterTask';
import { TaskList } from '../screens/TaskList';
import { Annotations } from '../screens/Annotations';

import { TabAddButton } from '../components/TabAddButton';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#DC1637',
        tabBarInactiveTintColor: '#979797',
        tabBarStyle: {
          height: 76,
          paddingTop: 10,
          paddingBottom: 20,
          backgroundColor: '#FFFFFF'
        }
      }}
    >
      <Screen 
        name="home"
        component={Home}
        options={{
          tabBarIcon: (({ color }) => (
            <Ionicons name="ios-home" size={24} color={color} />
          )),
          tabBarLabelStyle: {
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }
        }}
      />
      <Screen 
        name="taskList"
        component={TaskList}
        options={{
          tabBarIcon: (({ color }) => (
            <FontAwesome5 name="tasks" size={24} color={color} />
          )),
          tabBarLabelStyle: {
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }
        }}
      />
      <Screen 
        name="registerTask"
        component={RegisterTask}
        options={{
          tabBarIcon: (({ color }) => (
            <TabAddButton />
          )),
          tabBarLabelStyle: { display: 'none' },
        }}
      />
      <Screen 
        name="annotations"
        component={Annotations}
        options={{
          tabBarIcon: (({ color }) => (
            <Feather name="book" size={24} color={color} />
          )),
          tabBarLabelStyle: {
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }
        }}
      />
      <Screen 
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: (({ color }) => (
            <Feather name="user" size={24} color={color} />
          )),
          tabBarLabelStyle: {
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }
        }}
      />
    </Navigator>
  );
}