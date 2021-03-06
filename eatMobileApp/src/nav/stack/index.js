import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Login, Main} from '../../screen';
import {connect} from 'react-redux';

const Stack = createNativeStackNavigator();
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Main"
        // initialRouteName="Login"
      >
        <Stack.Screen name="Login" children={props => <Login {...props} />} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = state => {
  console.log(`state login:`, state.Auth);
  return {
    users: state.Auth.listUser,
  };
};
const mapDispatchToProps = dispatch => ({
  doLogin: dataLogin => dispatch({type: 'LOGIN', payload: {dataLogin}}),
});
export default connect(mapStateToProps, mapDispatchToProps)(index);
