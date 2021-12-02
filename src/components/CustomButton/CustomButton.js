import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({onPress,text, type = "PRIMARY", bgColor, fgColor}) => {
    return (
        <Pressable 
          onPress={onPress}
          style={[
              styles.container,
              styles[`container_${type}`],
              bgColor ? {backgroundColor: bgColor} : {}
          ]}>
          <Text
            style={[
                styles.text,
                styles[`text_${type}`],
                fgColor ? {color: fgColor} : {},
            ]}
            >
                {text}
            </Text>
 
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

    container_PRIMARY: {
        backgroundColor: '#3b71f3',
    },

    container_TERTIARY: {},

    text: {
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 10,
    },

    text_TERTIARY: {
        color: 'gray',

    }
})

export default CustomButton
