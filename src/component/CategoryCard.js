import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';

const Categorycard = ({data}) => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
            {data.map((items) => (
                <View style={styles.container}>
                    <Text style={{fontWeight:'bold', padding: 1}}>{items.name}</Text>
                </View>
            ))}
           
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{ 
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3,
        backgroundColor: "#FFFFFF", 
        padding: 8, 
        justifyContent:'center',
        // alignItems:'center', 
        borderRadius: 5,
        margin: 10,
        // paddingVertical: 20
        height: 40
    }
})

export default Categorycard;
