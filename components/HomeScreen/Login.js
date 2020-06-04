import React from 'react';
import { AsyncStorage, Image, StyleSheet, Text, Button } from 'react-native';
import {View} from "react-native-web";
import Background from "./Background";
import * as Facebook from "expo-facebook";
export default function Login(props){
    const [token,setToken] = React.useState(null);
    React.useEffect(()=>{
        AsyncStorage.getItem('token', (token)=>{
            if(token){
                props.navigator.navigate('/CaroselView')
            }
        })
    },[]);
    const login = async () => {
        console.log('clickEvent')
        await Facebook.initializeAsync('184462529575747');
        const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
        });
        if(type === 'success'){
            AsyncStorage.setItem('token', token);
            props.navigator.navigate('/CaroselView')
        }

    }
    return(
        <View style={{flex:1}}>
            <Background/>
            <View style={styles.container}>
                <Button title="Login with Facebook" onPress={login} style={styles.getStarted}>Get Started</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        getStarted: {
            fontFamily: "Helvetica",
            fontSize: 14,
            color: "#FFFFFF",
            letterSpacing: 0,
            textAlign: "center",
        },
        container: {
            //flexDirection: "column",
            height: 48,
            width: 375,
            justifyContent: "center",
            backgroundColor: "#0F8CFF",
            opacity: 100,

        },
    }
)