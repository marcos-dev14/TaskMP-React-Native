import { NavigationContainer } from '@react-navigation/native';
import { AppStackRoutes } from './app.stack.routes';
import { AppTabRoutes } from './app.tab.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AppStackRoutes />
    </NavigationContainer>
  );
}