import React, {useState} from 'react';
import {StyleSheet, Text, Dimensions, Image, View} from 'react-native';
import { useDispatch, useSelector} from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import CGap from '../component/CGap';
import Ctextinput from '../component/CTextInput';
import Cbutton from '../component/CButton';
import { login } from '../service/masterApi';
import { saveToReduxToken } from '../store/action/actionauth';


const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const tokens = useSelector((state) => state.authReducer.userTokenInfo)

    const postLogin = async () =>{
        const data ={
            "email" : email,
            "password": password
        }
        try {
            const Login = await login(data)
            const {status, token, message} = Login.data
            if(status === 'ok'){
               dispatch(saveToReduxToken(token))
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
            <LinearGradient colors={['#152A53', '#000000']} style={styles.linearGradient}>
               <SafeAreaView style={styles.container}> 
                <Image source={require('../assets/icon.png')} style={styles.imageIcon} />
                <View style={styles.containertextinput}>
                     <Ctextinput 
                        placeholder={'E-mail Address'}
                        label={'E-Mail Address'}
                        errors={'Invalid E-mail Address'}
                        values={email}
                        onChange={(value) => setEmail(value)}
                     />
                     {/* <CGap height={10} />
                     <Text style={{color: '#F6BC45', fontWeight:'bold'}}>Invalid E-mail Address</Text>  */}
                     
                </View>
                <View style={styles.containertextinput}>
                    <Ctextinput 
                       placeholder={'Password'}
                       label={'Password'}
                       password
                       errors={'Invalid Password'}
                       onChange={(value) => setPassword(value)}
                       values={password}
                    />
                    {/* <CGap height={10} />
                    <Text style={{color: '#F6BC45', fontWeight:'bold'}}>Invalid password</Text> */}
                </View>
               </SafeAreaView>
               <Cbutton text={'Login'} click={() => postLogin()} />
            </LinearGradient>
       
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,  
    },
    imageIcon :{width: 70, height: 70, resizeMode:'contain', alignSelf:'center'},
    container: {flex: 1},
    containertextinput: {margin: 12}
})

export default Login;
