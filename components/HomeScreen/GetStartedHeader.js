import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function GetStartedHeaders() {
    return (
        <View style={styles.container}>
            <Text style={styles.getStarted}>Get Started</Text>
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
