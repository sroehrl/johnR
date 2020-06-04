import React from 'react';
import { AsyncStorage, Image, StyleSheet, Text } from 'react-native';
import SplashPage from '../../assets/SplashNavigation.png'
export default function Home({navigation}){
    const [firstVisit,setFirstVisit] = React.useState(true);
    React.useEffect(()=>{
        AsyncStorage.getItem('visitedBefore',(visit) =>{
            if(visit !== null){
                navigation.navigate('/Login');
            } else {
                // i am new
                redirectTimer();
            }
        })
    },[]);
    const redirectTimer = () => {
        setTimeout(()=>{
            // set firstVisit
            AsyncStorage.setItem('visitedBefore',true);
            // redirect here
            navigation.navigate('/Login');
        },2000)
    }
    return (
        <View style={{flex:1}}>
            <Image style={styles.image} source={SplashPage}/>
        </View>

)
}

import {View} from "react-native-web";

const styles = StyleSheet.create({
    image:{
        width: '100%',
        flex:1
    }
})