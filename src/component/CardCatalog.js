import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, Dimensions, Image, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Rating } from 'react-native-ratings';
const {width, height} = Dimensions.get('screen')

const CardCatalog = ({item}) => {
    return (
            <View style={styles.container}>
                {item.new  &&  <Text style={{fontSize: 13, fontWeight:'bold'}}>New</Text> }
                {item.out_of_stock && <View style={styles.wrapBrand}>
                    <Text style={styles.Texts}>Out of Stock</Text>
                </View> }
                
                <View style={styles.wrapFav}>
                    <Icon name='favorite-outline' size={20} color="grey" />
                </View>
                <View style={styles.wrapImage}>
                    <Image source={{uri: `${item.image}`}}  style={{width: 75, height: 75}} />
                </View>
                <View>
                <Rating
                 ratingCount={5}
                 imageSize={13}
                 startingValue={item.rating}
                 style={{
                     alignSelf:'flex-start',
                     padding: 3,
                     marginVertical: 3
                 }}
                />
                <Text style={{fontSize: 14, fontWeight:'bold', color:'grey'}}>{item.name}</Text>
                <View style={styles.wrapPriceDisc}>
                    <Text style={{fontSize: 15, fontWeight:'bold', color:'black'}}>{item.price}</Text>
                    <Text style={{fontSize: 12,  color:'purple'}}>{item.off}</Text>
                </View>
                </View>
            </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF', 
        width: width / 2.4, 
        borderRadius: 10, 
        justifyContent:'center',
        alignContent:'center',
        shadowColor: "#000",
        padding: 10,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, 
        margin: 10
    },
    wrapBrand:{backgroundColor: 'red', width: 90, padding: 3, borderRadius: 5, alignItems:'center'},
    Texts: {fontSize: 13, fontWeight:'bold', color: 'white'},
    wrapFav: {flexDirection: 'row', justifyContent:'flex-end'},
    wrapImage: {justifyContent:'center', alignItems:'center'},
    wrapPriceDisc: {flexDirection:'row', justifyContent:'space-between'}
})

export default CardCatalog;
