import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import CaroselView from './components/ScrollPage/CaroselView';
import Home from './components/HomeScreen/Home';
import Login from './components/HomeScreen/Login';
import moment from "moment";
import { StackActions, NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator()

//Keep the data at the highest level and then 
//have it flow to lower sub components. 


//converted to functional component 
export default class App extends React.Component {
  //Screen really only has two states
  //Month and events 
  state = {
    data: [],
    loading: true,
  };



  //AssignIDs and formats dates 
  assignIDs(events) {
    return events.map((event, index) => {
      event.id = index
      event.date = moment(event.date, "DD-MM-YYYY hh:mm:ss")
      return event
    })
  }

  ////Method that filters Events Pending
  eventsPending(events) {
    return events.filter(event => {
      return event.accepted === undefined ? true : false
    })
  }


  render() {

    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home"  component={Home} options={headerOptions}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Carosel" component={CaroselView} options={headerOptions}/>
          </Stack.Navigator>
        </NavigationContainer>

    );
  }
}
const headerOptions = {
  headerTintColor:'red'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  }
});