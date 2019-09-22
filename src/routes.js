import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Login
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';
import SignUpForm from '~/pages/SignUp/SignUpForm';

// const Routes = createAppContainer(createSwitchNavigator({ Main }));

const Routes = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
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
    SignUpForm: {
      screen: SignUpForm,
      navigationOptions: {
        header: null,
      },
    },
  }),
);

export default Routes;
