import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder,secureTextEntry,maxLength}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                maxLength={maxLength}
                style={styles.input}
                /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        borderColor: '#F9FBFC',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        height: 45,
    },
    input: {},

})
export default CustomInput
