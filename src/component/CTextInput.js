import React,{useState} from 'react';
import {View, StyleSheet, TextInput,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CGap from './CGap';

const Ctextinput = ({onChange, password, placeholder, label, errors, values}) => {
    const [visible, setVisible] = useState(false);
    return (
        <View>
            <Text style={{color: '#9D9FA0', fontSize: 15, fontWeight:'bold'}}>{label}</Text>
            <CGap height={10}/>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:"#11203C",  borderRadius: 5}}>
                 <TextInput
                      placeholder={placeholder}
                      style={{backgroundColor:"#11203C", color: '#EAEAEA',  flex: 0.9}}
                      placeholderTextColor="#EAEAEA"
                      textAlign='center'
                      secureTextEntry={password ? !visible ? true : false : null}
                      onChangeText={onChange}
                      value={values}
                 />
                 {
                     password ? <> 
                        <CGap width={10} />
                        <Icon name={visible ? 'eye' : 'eye-slash' } size={22}  color="white" onPress={() => setVisible(!visible) }/>
                     </>
                     :
                     null
                 }

            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({})

export default Ctextinput;
