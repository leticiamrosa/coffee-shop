import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';
import Login from '~/pages/Login';

// const Routes = createAppContainer(createSwitchNavigator({ Main }));

const Routes = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        // backgroundColor: '#161609',
      },
    },
    Main: {
      screen: Main,
      navigationOptions: {
        // header: null
        // backgroundColor: '#161609',
      },
    },
  }),
);

export default Routes;
