import React,{useState, useEffect, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen')

const Cbuttondeposite = () => {
    const timerRef = useRef(null);
    const [show, setShow] = useState(false);

    const sendMessage = () => {
      timerRef.current = setTimeout(() =>  setShow(true), 300);
    }

    useEffect(() => {
        timerRef.current = setTimeout(() =>  setShow(false), 7000);
        return () => {
            clearTimeout(timerRef.current)
            
        };
    }, [show]);

    return (
        <TouchableOpacity onPress={() => sendMessage() } style={{backgroundColor: show ? 'grey' : '#73D19B', width: width /1.5 , height: 50, alignItems:'center', justifyContent:'center', borderRadius: 10}}>
            <Text style={{color: '#FFFFFF', fontSize: 15, fontWeight:'bold'}}>Deposite</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

})

export default Cbuttondeposite;
