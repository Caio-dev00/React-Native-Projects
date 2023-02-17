import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity} from 'react-native';

export default function Recommended(props) {
 return (
<TouchableOpacity onPress={props.onPress}>
    <ImageBackground
    source={props.cover}
    style={styles.container}
    blurRadius={3}
>
        <Text style={[styles.house, styles.shadow]}>
            {props.house}
        </Text>

        <Text style={[styles.offer, styles.shadow]}>
            {props.offer} OFF
        </Text>
    </ImageBackground>
</TouchableOpacity>  

);
}

const styles = StyleSheet.create({
    container:{
        height:130,
        width:230,
        marginRight: 20,
        marginBottom: 40,
        opacity: 0.8,
        backgroundColor: '#000',
        padding: 12,
        marginTop: 20,
    },

    house:{
        fontFamily: 'Montserrat_700Bold',
        color:'#FFF'
    },

    offer:{
        fontSize:12,
        fontFamily:'Montserrat_700Bold',
        color:'#fff',
    },

    shadow:{
        textShadowOffset:{width: 1, height: 2},
        textShadowRadius:3,
        textShadowColor: '#000',
    }
});