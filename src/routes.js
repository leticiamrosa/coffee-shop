import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';
import Login from '~/pages/Login';

// const Routes = createAppContainer(createSwitchNavigator({ Main }));

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerTitle: 'Coffee',
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
      },
    },
  ),
);

export default Routes;
