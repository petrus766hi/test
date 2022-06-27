import React from 'react';
import {View, StyleSheet} from 'react-native';
import Arrow from 'react-native-vector-icons/Ionicons'

const Iconback = () => {
    return (
        <View style={styles.container}>
            <Arrow name='arrow-back' size={25} color={'black'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        width: 35,
        height: 35,
        borderRadius: 100,
        justifyContent:'center',
        alignItems:'center', 
        alignSelf:'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        margin: 10
    }
})

export default Iconback;
