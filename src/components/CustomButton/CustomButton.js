import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CustomButton = () => {
    return (
        <View style={styles.container}>
            <Text>Button</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3b71f3'
    },
    text: {}
})

export default CustomButton
