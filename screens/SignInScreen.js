import React from 'react';
import { Text, View, ScrollView, ImageBackground, Dimensions, StyleSheet} from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


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
        </ScrollView>
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
    }
})