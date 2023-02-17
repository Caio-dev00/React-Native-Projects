import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';
import House from '../components/House';
import Recommended from '../components/Recommended';


export default function Home() {
    const navigation = useNavigation();

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    style={{backgroundColor:'#fff'}}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
            <Feather name="search" size={24} color="black"/>
            <TextInput
            placeholder='O que está procurando?'
            style={styles.input}
            />
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
        <New
            cover={require('../assets/house1.jpg')}
            name="Casa de Praia"
            description="Casa nova, uma quadra do mar, lugar seguro e monitorado 24 horas."
            price="R$ 1.650,75"
            onPress={() => navigation.navigate('Detail')}
        />

        <New
            cover={require('../assets/house2.jpg')}
            name="Casa de Luxo"
            description="Casa nova, uma quadra do mar, lugar seguro e monitorado 24 horas."
            price="R$ 1.540,99"
            onPress={() => {}}
        />

        <New
            cover={require('../assets/house3.jpg')}
            name="Casa Condominio"
            description="Casa nova, uma quadra do mar, lugar seguro e monitorado 24 horas."
            price="R$ 5.240,75"
            onPress={() => {}}
        />

    </ScrollView>

    <View style={{flexDirection:'row', marginBottom:10, alignItems:'center'}}>
        <Text style={[styles.title, {marginTop:20}]}>Proximo de Você</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
        <House
        cover={require('../assets/house4.jpg')}
        description = 'Casa super moderna e de luxo com piscnina'
        price = 'R$ 95.554,99'
        />

        <House
        cover={require('../assets/house5.jpg')}
        description = 'Casa super moderna e de luxo com piscnina'
        price = 'R$ 100.214,99'
        />

        <House
        cover={require('../assets/house6.jpg')}
        description = 'Casa super moderna e de luxo com piscnina'
        price = 'R$ 200.554,99'
        />
    </ScrollView>

    <Text style={[styles.title, {marginTop:15}]}>
        Dica do dia
    </Text>

    <ScrollView horizontal showsHorizontaçScrollIndicator={false} style={{paddingHorizontal:15}}>

    <Recommended
        cover={require('../assets/house1.jpg')}
        house="Casa Floripa"
        offer="20%"
        onPress={() => navigation.navigate('Detail')}
        />

        <Recommended
        cover={require('../assets/house3.jpg')}
        house="Casa São Paulo"
        offer="35%"
        onPress={() => navigation.navigate('Detail')}
        />

        <Recommended
        cover={require('../assets/house6.jpg')}
        house="Casa Morumbi"
        offer="40%"
        onPress={() => navigation.navigate('Detail')}
        />


    </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        marginVertical: 20,  
    },
    inputArea:{
        paddingHorizontal: 15,
        flexDirection:'row',
        alignItems:'center',
        width:'98%',
        backgroundColor:'#fff',
        elevation: 2,
        height: 37,
        borderRadius: 10,
    },
    input:{
        fontFamily:'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%',
    },

    contentNew:{
        flexDirection:'row',
        width:'100%',
        alignItems: 'center'
    },

    title:{
        paddingHorizontal: 15,
        fontFamily:'Montserrat_700Bold',
        color:'#4f4a4a',
    }
});