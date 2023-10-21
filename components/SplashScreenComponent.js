
import { AntDesign } from '@expo/vector-icons'; 
import { View,StyleSheet, Text } from 'react-native';
import { Colors } from '../constants/styles';

const SplashScreenComponent = () => {

    return(
        <View style={styles.container}>
             <AntDesign name="loading1" size={40} color={styles.color} />
             <Text style={styles.color}>Loading...</Text>
        </View>
    )
}

export default SplashScreenComponent;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    color:{
        color: Colors.primary500
    }
})