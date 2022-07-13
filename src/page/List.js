import React,{useEffect, useState} from 'react';
import {View, StyleSheet, Text, TextInput, Image, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Clist from '../component/CLIst';
import Csearch from '../component/CSearch';

import {list} from '../service/masterApi'
import { saveToReduxList } from '../store/action/actionauth';

const List = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const dataLIst = useSelector((state) => state.authReducer.dataList)

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        try {
            const result = await list()
            if(result.data.data){
                setData(result.data.data)
                dispatch(saveToReduxList(result.data.data))
            }else{
                setData([])
            }
        } catch (error) {
            console.log(error)
        }
    }

    const search = (value) => {
        if(value.length === 0){
            setData(dataLIst)
        }else{
            const values = value.trim().replace(/[\W_]+/g, '')
            const filterData = data.filter(name => name.ticker.includes(values.toUpperCase()))
            setData(filterData)
        }

    }

    return (
           <LinearGradient colors={['#152A53', '#000000']} style={styles.linearGradient}>
                <View style={{margin: 10, padding: 5, flexDirection:'row',alignItems:'center', }}>
                    <Icon name={'arrow-back-ios'} color={'#FFFFFF'} size={27}/>
                    <Csearch onchange={(value) => search(value) }  />
                </View>
                <FlatList 
                    data={data}
                    renderItem={({item}) =>(
                        <Clist  name={item.ticker} ammount={item.amount} imageUri={item.image} />
                    )}
                />
           </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient:{
        flex: 1
    }
})

export default List;
