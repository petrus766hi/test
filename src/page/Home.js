import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView, Dimensions, Image, FlatList} from 'react-native';
import CardCatalog from '../component/CardCatalog';
import Categorycard from '../component/CategoryCard';
import CGap from '../component/CGap';
import { Category, Product } from '../service/masterApi';
const {width, height} = Dimensions.get('screen')



const Home = () => {
    const [dataCategory , setDataCategory ] = useState([]);
    const [dataProduct, setDataProduct] = useState([]);

    useEffect(() => {
        getCategory()
        getProduct()
    }, []);

    const getCategory = async () => {
        try {
            const result = await Category()
            if(result.data.length > 0){
                setDataCategory(result.data)
            }else{
                setDataCategory([])
            }
        } catch (error) {
            setDataCategory([])
            console.log('error', error)
        }
    }

    const getProduct = async () => {
        try {
            const result = await Product()
            if(result.data.length > 0){
                setDataProduct(result.data)
            }else{
                setDataProduct([])
            }
        } catch (error) {
            setDataProduct([])
            console.log('error', error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <CGap height={10}/>
            <Categorycard data={dataCategory} />
            <CGap height={10}/>
            <FlatList 
                data={dataProduct}
                renderItem={({item}) => (
                    <CardCatalog item={item} />
                )}
                numColumns={2}
                key={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        
          
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {backgroundColor:'#F7F7F7', flex: 1, alignItems:'center'}
})

export default Home;
