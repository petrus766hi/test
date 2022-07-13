import React from 'react';
import {View, StyleSheet, TextInput, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('screen')

const Csearch = ({onchange}) => {
    return (
        <View style={{flexDirection:'row',alignItems:'center', backgroundColor:'#223965', padding: 2, borderRadius:10}}>
            <Icon name={'search'} color={'#FFFFFF'} size={22}/>
            <TextInput 
                placeholder='Search'  
                placeholderTextColor={'#FFFFFF'} 
                style={{ height: 40, width: width /1.3 , color: '#FFFFFF'}} 
                onChangeText={onchange}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Csearch;
