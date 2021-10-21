import React, {useState} from 'react';
import { Text, View, ScrollView, ImageBackground, Dimensions, StyleSheet, useWindowDimensions} from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Item, Input, Label, Fab} from 'native-base';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';


const SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    return (
        //Container
        <ScrollView style={{flex: 1, backgroundColor: "#F9FBFC"}} showsVerticalScrollIndicator={false}>
            {/* Brand View */}
            <ImageBackground 
                source={require('../assets/thumbs.jpg')}
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
                            <Text style={{color:'black', fontWeight:'400', fontSize:30,}}>Sign In</Text>
                            <Text style={{color:'black',fontWeight:'800'}}>Don't have an account?

                            <Text style={{color:'#cc0033',fontStyle:'italic'}}>
                                {' '}
                                Register Now
                                </Text>
                            </Text>
                            {/* Form inputs view */}
                    <View style={{marginTop:20}}>
                        <CustomInput
                        placeholder="Email" 
                        value={email} 
                        setValue={setEmail}
                         />
                        <CustomInput 
                        placeholder="Password" 
                        value={password} 
                        setValue={setPassword} 
                        secureTextEntry={true}
                        />
                        <CustomButton/>
                     
                    </View>

                        
                        </View>
                    </View>

        </ScrollView>
        //end
    

    );
};

export default SignInScreen;

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