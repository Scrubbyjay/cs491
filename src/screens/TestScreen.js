import React, {useState} from 'react'
import { Text, View, ScrollView, ImageBackground, Dimensions, StyleSheet, useWindowDimensions, AppState} from 'react-native';
import sensors from 'react-native-sensors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../components/CustomButton/CustomButton';
import CustomInput from '../components/CustomInput';

const TestScreen = ({navigation}) => {


    const{height} = useWindowDimensions();
    const onStartPressed = () => {
        console.warn("Start Pressed");
    }
    const onStopPressed = () => {
        console.warn("Stop Pressed");
    }

    return (
        //Container
        <ScrollView style={{flex: 1, backgroundColor: "#F9FBFC"}} showsVerticalScrollIndicator={false}>
            {/* Brand View */}
            <ImageBackground 
                style={{
                    height: Dimensions.get('window').height / 2.5, resizeMode: 'contain', width: '100%', flex: 1,
                    }}>
                        <View style={styles.signInView}>
                            <FontAwesome name='heart' style={{color: '#cc0033',fontSize:100}}/>
                            <Text style={styles.brandViewText}></Text>
                        </View>
                    </ImageBackground>
                    {/* Bottom View */}

                    <View style={styles.bottomView}>
                        {/* Welcome View */}
                        <View style={{padding: 40}}>
                            <Text style={{color:'black', fontWeight:'400', fontSize:30,}}>Test Screen</Text>
                            {/* Form inputs view */}
                    <View style={{marginTop:20}}>

                        <CustomButton 
                         text="Start Recording" 
                         onPress={onStartPressed}
                          />
 
                         <CustomButton 
                         text="Stop Recording"
                         onPress={onStopPressed} 
                         type="TERTIARY"
                         bgColor='#fda172'
                         fgColor='#cc0033'
                         />

                    </View>

                        
                        </View>
                    </View>

        </ScrollView>
        //end
    

    );
};

export default TestScreen;

const styles=StyleSheet.create({
    signInView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //this is hiding the background image for now
        backgroundColor: '#F9FBFC',
    },
    brandViewText:{
        color: '#cc0033',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    bottomView:{
        flex: 1.5,
        backgroundColor: '#F9FBFC',
        bottom:50,
        borderTopStartRadius:60,
        borderTopEndRadius:60,

    }
})