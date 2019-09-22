import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Login
import WelcomeLogin from '~/pages/Login/WelcomeLogin';
import SignUp from '~/pages/Login/SignUp';
import Login from '~/pages/Login/Login';

// Dashboard
import Menu from '~/pages/Menu';

// Products
import Products from '~/pages/Products';

// const Routes = createAppContainer(createSwitchNavigator({ Main }));

const Routes = createAppContainer(
  createStackNavigator({
    // WelcomeLogin: {
    //   screen: WelcomeLogin,
    //   navigationOptions: {
    //     header: null,
    //   },
    // },
    // SignUp: {
    //   screen: SignUp,
    //   navigationOptions: {
    //     header: null,
    //   },
    // },
    // Login: {
    //   screen: Login,
    //   navigationOptions: {
    //     header: null,
    //   },
    // },
    Menu: {
      screen: Menu,
      navigationOptions: {
        title: 'Menu',
        headerStyle: {
          backgroundColor: '333',
        },
        headerTintColor: '#fff',
      },
    },
    Products: {
      screen: Products,
      navigationOptions: {
        title: 'Menu',
        headerStyle: {
          backgroundColor: '#333',
        },
        headerTintColor: '#fff',
      },
    },
  }),
);

export default Routes;
