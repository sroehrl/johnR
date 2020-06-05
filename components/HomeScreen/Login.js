import React from 'react';
import { AsyncStorage, Image, StyleSheet, Text, Button, View } from 'react-native';
import Background from "./Background";
import * as Facebook from "expo-facebook";
export default function Login(props){
    const [token,setToken] = React.useState(null);
    React.useEffect(()=>{
        async function fire(){
            try{
                let token = await AsyncStorage.getItem('token');
                props.navigator.navigate('Carosel');
            } catch (e) {
                console.log('no token')
            }
        }
        fire();


    },[]);
    const login = async () => {

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
            props.navigation.navigate('/CaroselView')
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
            // fontFamily: "Helvetica",
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