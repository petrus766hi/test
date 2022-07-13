import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen')

const Cbuttonlogout = ({onclick}) => {
    return (
        <TouchableOpacity style={{backgroundColor:'red', width: width /1.5 , height: 50, alignItems:'center', justifyContent:'center', borderRadius: 10}} onPress={onclick}>
            <Text style={{color: '#FFFFFF', fontSize: 15, fontWeight:'bold'}}>Logout</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default Cbuttonlogout;
