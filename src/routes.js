import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Login
import WelcomeLogin from '~/pages/Login/WelcomeLogin';
import SignUp from '~/pages/Login/SignUp';
import Login from '~/pages/Login/Login';

// const Routes = createAppContainer(createSwitchNavigator({ Main }));

const Routes = createAppContainer(
  createStackNavigator({
    WelcomeLogin: {
      screen: WelcomeLogin,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
  }),
);

export default Routes;
