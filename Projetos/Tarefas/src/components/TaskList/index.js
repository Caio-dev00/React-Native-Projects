import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { StatusBar } from "expo-status-bar";

export default function TaskList({data, handleDelete}){
    return(
        <Animatable.View
        animation="bounceIn"
        useNativeDriver
        style={styles.container}>
            <TouchableOpacity onPress={() => handleDelete(data) }>
                <Ionicons name="md-checkmark-circle" size={25} color="#fff" />
            </TouchableOpacity>
            <View>
                <Text style={styles.task}>{data.task}</Text>
            </View>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#D81E5B',
        borderRadius: 5,
        padding: 7,
        elevation: 1.5,
        shadowColor:'#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 1,
            height: 3,
        }
    },
    task:{
        color:"#fff",
        fontSize: 17,
        marginLeft:5,
        marginRight:10,
    }
})