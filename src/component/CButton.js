import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Cbutton = ({text, click}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={click}>
            <Text style={styles.texts}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{ height: 40, backgroundColor:'#0D46FB', margin: 30, justifyContent:'center', alignItems:'center', borderRadius:10},
    texts: {color: '#FFFFFF'}
})

export default Cbutton;
