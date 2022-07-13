import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import Cbuttondeposite from '../component/CButtonDeposite';
import Cbuttonlogout from '../component/CButtonLogout';
import CGap from '../component/CGap';
import { dashboard } from '../service/masterApi';
import { clearToReduxToken } from '../store/action/actionauth';


const Dashboard = () => {
    const dispatch = useDispatch()
    const tokens = useSelector((state) => state.authReducer.userTokenInfo)
    const [total_assets, setTotal_assets] = useState(0);

    useEffect(() => {
       postDashboard()
    }, []);

    const postDashboard = async () => {
        const data= {
            "token" : tokens
        }
        try {
            const resutDashboard = await dashboard(data)
            const {status, total_asset} = resutDashboard.data
            if(status === 'ok'){
                setTotal_assets(total_asset)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <LinearGradient colors={['#152A53', '#000000']} style={styles.linearGradient}>
            <View style={styles.container}>
                <Image source={require('../assets/ads.png')} />
                <CGap height={20} />
                <View style={styles.containertext}>
                    <Text style={styles.text}>24H Changes </Text>
                    <Text style={styles.text2}>+ 11.34%</Text>
                </View>
                <CGap height={20} />
                <Text style={styles.textdolar}>{`$ ${total_assets}`}</Text>
                <CGap height={20} />
                <Cbuttondeposite />
                <CGap height={20} />
                <Cbuttonlogout onclick={() => dispatch(clearToReduxToken('')) } />
            </View>
          
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient:{
        flex: 1
    },
    container: {margin: 12, alignItems:'center'},
    containertext: {flexDirection:'row'},
    text: {color: '#9D9FA0', fontSize: 18, fontWeight:'bold'},
    text2: {color: '#05BE90', fontSize: 18, fontWeight:'bold'},
    textdolar: {color: '#FFFFFF', fontSize: 50, fontWeight:'bold'}

})

export default Dashboard;
