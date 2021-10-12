import React from 'react';
import { Text, View, ScrollView, ImageBackground, Dimensions, StyleSheet} from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Input, Label, Fab} from 'native-base';
import Item from 'native-base'


const SignInScreen = ({navigation}) => {
    return (
        //Container
        <ScrollView style={{flex: 1, backgroundColor: "#ffff"}} showsVerticalScrollIndicator={false}>
            {/* Brand View */}
            <ImageBackground 
                source={require('../assets/thumbs.jpg')}
                style={{
                    height: Dimensions.get('window').height / 2.5, resizeMode: 'contain', width: '100%', flex: 1,
                    }}>
                        <View style={styles.signInView}>
                            <FontAwesome name='heart' style={{color: '#cc0033',fontSize:100}}/>
                            <Text style={styles.brandViewText}>Rutgers University</Text>
                        </View>
                    </ImageBackground>
                    {/* Bottom View */}

                    <View style={styles.bottomView}>
                        {/* Welcome View */}
                        <View style={{padding: 40}}>
                            <Text style={{color:'black', fontWeight:'400', fontSize:40,}}>Welcome</Text>
                            <Text style={{color:'black',fontWeight:'800'}}>Don't have an account?

                            <Text style={{color:'gold',fontStyle:'italic'}}>
                                {' '}
                                Register Now
                                </Text>
                            </Text>

                            {/* Form inputs view */}
                            <View style={{marginTop:50}}>
                                {/* <Item floatingLabel> 
                                    <Label>Email</Label>
                                    <Input value='test@test.com' keyboardType='email-address'/>
                                </Item> */}
                     
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
    },
    brandViewText:{
        color: '#cc0033',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    bottomView:{
        flex: 1.5,
        backgroundColor: '#cc0033',
        bottom:50,
        borderTopStartRadius:60,
        borderTopEndRadius:60,

    }
})