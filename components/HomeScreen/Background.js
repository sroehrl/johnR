import React from 'react'
import {View, Text, ImageBackground, StyleSheet, Image, Dimensions} from 'react-native';
import background from '../../assets/background.png';
import girl2 from '../../assets/girl2.png';
import girl1 from '../../assets/girl1.png';
import boy from '../../assets/girl1.png';

export default function Background() {
    return (
        <View>
                <ImageBackground source={background}
                    style = {styles.backgroundImage}>
                </ImageBackground>
                <View>
                    <Image source={require("../../assets/girl2.png")}
                        style = {styles.girl2}>
                    </Image>
                    <Image source={require("../../assets/girl1.png")}
                        style = {styles.girl1}>
                    </Image>
                    <Image source={require("../../assets/boy.png")}
                        style = {styles.boy}>
                    </Image>
                    <Text style={styles.dindin}>DinDin</Text>
                    <Text style={styles.slogan}>Connecting food lovers</Text>
                </View>

        </View>
    )
}
    
const styles = StyleSheet.create(    
    {
        backgroundImage: {
            height: 258.11, 
            width: 258.11,
            marginTop: 75,  
            justifyContent: "center", 
            alignContent: "center", 
        },

        girl2: {
            height: 80,
            width: 73, 
            top: Dimensions.get("window").height * -0.23, 
            left: Dimensions.get("window").width * -0.04
        }, 
        girl1: {
            height: 57.18, 
            width: 54, 
            top: Dimensions.get("window").height * -0.22, 
            right: Dimensions.get("window").width * -0.44,  
        }, 
        boy: {
            height: 72, 
            width: 67, 
            top: Dimensions.get("window").height * -0.57, 
            right: Dimensions.get("window").width * -0.45,  
        },
        dindin: {
            height: 35, 
            width: 90, 
            fontFamily: "Helvetica", 
            fontSize: 29, 
            color: "#353535", 
            letterSpacing: 0, 
            textAlign: "center",      
            top: Dimensions.get("window").height * -0.2, 
            right: Dimensions.get("window").width * -0.22, 
        }, 
        
        slogan: {
            height: 16, 
            //width: 300, 
            opacity: 0.5,
            fontFamily: "Helvetica",
            fontSize: 14,
            color: "#000000",
            letterSpacing: 0,
            top: Dimensions.get("window").height * -0.18, 
            right: Dimensions.get("window").width * -0.14, 
        }
        

    }
)