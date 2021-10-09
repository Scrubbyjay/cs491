import React from 'react';
import { Text, View, ScrollView, ImageBackground, Dimensions} from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const SignInScreen = ({navigation}) => {
    return (
        //Container
        <ScrollView style={{flex: 1, backgroundColor: "#008080"}} showsVerticalScrollIndicator={false}>
            {/* Brand View */}
            <ImageBackground 
                source={require('../assets/logo.png')}
                style={{
                    height: Dimensions.get('window').height / 2.5, 
                    }}>
                        <View>
                            <FontAwesome name='th-large' style={{fontSize:100}}/>
                            <Text>Rutgers University</Text>
                        </View>
                    </ImageBackground>
        </ScrollView>
    );
};

export default SignInScreen;