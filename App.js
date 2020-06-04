import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import CaroselView from './components/ScrollPage/CaroselView';
import Home from './components/HomeScreen/Home';
import Login from './components/HomeScreen/Login';
import { LinearGradient } from 'expo-linear-gradient';
import moment from "moment";
// import { createStackNavigator } from 'react-navigation'
import { StackActions, NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

// import Router from './Router';
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

  componentDidMount() {
    const fetchData = async () => {
      let response = await fetch(
        'https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/cards.json'
      );
      let parseObject = await response.json();
      this.setState({ data: parseObject });
      this.setState({ loading: false });
      //Setup call set State, 
    };
    fetchData();
  }


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
    //Rember to pass your pending events to the Carosel View.
    //Using the correct Prop. 
   /* return (
      <NavigationContainer>
        <rootStack.Navigator initialRouteName="LoadingScreen">
          <rootStack.Screen name="LoadingScreen" assets={SplashNavigation.png}/>
        </rootStack.Navigator>
      </NavigationContainer>
    );*/
    return (
        <NavigationContainer>
          <Stack.Navigator initalRouteName="Carosel">
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Carosel">
              {props => <CaroselView {...props} eventsData={this.state.data} />}
            </Stack.Screen>
            <Stack.Screen name="Home"  component={Home}/>
          </Stack.Navigator>
        </NavigationContainer>
      /*<View style={styles.container}>
        <View style={{ height: 40, width: "100%" }} />
        <LinearGradient
          colors={['#FFFFFF', '#D3DAEB', '#FFFFFF']}>
          <CaroselView eventsData={this.state.data} />
        </LinearGradient>
      </View>*/
    );
  }
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