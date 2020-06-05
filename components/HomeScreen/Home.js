import React from 'react';
import { AsyncStorage, Image, StyleSheet, Text, View } from 'react-native';
import SplashPage from '../../assets/SplashNavigation.png'
export default function Home({navigation}){
    const [firstVisit,setFirstVisit] = React.useState(true);
    React.useEffect(()=>{
        async function checkVirgin(){
            try{
                let visit = await AsyncStorage.getItem('visitedBefore');
                console.log(visit);
                if(visit !== null){
                    navigation.navigate('Login');
                } else {
                    // i am new
                    redirectTimer();
                }
            } catch (e) {
                console.log('error retrieving asyncstorage')
            }
        }
        checkVirgin();
    },[]);
    const redirectTimer = () => {
        setTimeout(async ()=>{
            // set firstVisit
            await AsyncStorage.setItem('visitedBefore','yes');
            // redirect here
            navigation.navigate('Login');

        },2000)
    }
    return (
        <View style={{flex:1}}>
            <Image style={styles.image} source={SplashPage}/>
        </View>

)
}


const styles = StyleSheet.create({
    image:{
        width: '100%',
        flex:1
    }
})