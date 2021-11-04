import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({onPress,text}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3b71f3',
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 10,
    }
})

export default CustomButton
