import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {Entypo} from '@expo/vector-icons';

export default function ButtomNew({size, color, focused}) {
    return(
        <View style={[styles.container, {backgroundColor: focused ? '#3eccf5' : '#6fdfff'}]}>
            <Entypo name="plus" color={focused ? '#FFF' : '#F8F8F8'} size={size} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    }
})