import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const Clist = ({name, ammount, imageUri}) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Image source={{uri: imageUri}} style={{ width: 30, height: 30}} /> 
            </View>
            <View style={{flex: 5}}>
                <Text style={styles.text}>{name}</Text>
            </View>
            <View style={{flex: 3}}>
                <Text style={styles.text}>{parseFloat(ammount).toFixed(8)}</Text> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {margin: 10,paddingBottom: 10, flexDirection:'row',alignItems:'center', borderBottomColor: '#FFFFFF', borderBottomWidth: 1},
    text: {color: '#FFFFFF', fontSize: 17, fontWeight:'bold'}
})

export default Clist;
