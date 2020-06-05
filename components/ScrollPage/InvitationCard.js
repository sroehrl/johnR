import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar, Divider, Button } from 'react-native-paper';
import moment from "moment";

// Build out the invitation card component. 
// It will be passed 3 props: 
// prop.pic : last part of the url associated with the picture
// prop.name : the Name of person
// prop.date: The Date of the event
export default function InvationCard(props) {
  let imageBase = 'https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/';

  //Implement the format Date function
  function formatDate(date) {
    let dateArray = date.split(',')
    let dateObject = moment(dateArray[1], "DD MM YYYY")
    let parsedDate = moment(dateObject).format("dddd D MMMM")
    let time = moment(dateArray[2], "h:mm a")
    time = moment(time).format("h:mm a")
    parsedDate = `${parsedDate} - ${time}`
    return parsedDate
  }

  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <Avatar.Image size={50} source={{ uri: `${imageBase}${props.item.pic}` }} />
        <View style={styles.textContainer}>
          <Text 
          style={{fontWeight: "bold", fontSize: 14}}
          >{props.item.name} 
          </Text>
          <Text 
          style={{opacity: 0.5, color: "#000000", fontSize: 14}}
          >{formatDate(props.item.date)}
          </Text>
        </View>
      </View>
      <View style={{ width: "100%", backgroundColor: "#F0F0F0", height: 1, marginTop: 10, marginBottom: 6 }} />
      <View style={styles.buttonContainer}>
        <Button 
          style={{marginLeft: -25, marginRight: 20}}
          icon="close" mode="text" color="red" onPress={() => console.log('Declined')}>
          Decline
        </Button>
        <View style={styles.buttonVerticalDivider} />
        <Button icon="check" mode="text" color="green" onPress={() => console.log('Accepted')}>
          Accept
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      width: 315,
      height: 133,
      shadowColor: 'grey',
      shadowOffset: {
        width: 0,
        height: 5,
      },

      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
    },

    firstRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      margin: 5, 
    },

    textContainer: {
      marginLeft: 10
    },

    buttonContainer: {
      flexDirection: "row",
      justifyContent: "center", 
      marginLeft: 25,
    }, 

    buttonVerticalDivider: {
      width: 1, 
      height: "100%", 
      marginTop: 2, 
      marginRight: 20, 
      backgroundColor: "#F0F0F0", 
    }
  });
