import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Placeholder" /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#cc0033',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        height: 30,
    },
    input: {},

})
export default CustomInput
