import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Constants from 'expo-constants'

export default function Header() {
    return (
        <View style={[styles.header]}>
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <Entypo
                    name="youtube"
                    size={32}
                    color="red"
                    style={{ marginLeft: 20 }} />
                <Text style={[styles.headerText]}>YouTube</Text>
            </View>
            <View style={styles.headerIcons}>
                <MaterialIcons
                    name="cast-connected"
                    size={24} />
                <Ionicons
                    name="md-videocam"
                    size={24}
                />
                <Ionicons
                    name="md-search"
                    size={24}
                />
                <MaterialCommunityIcons
                    name="theme-light-dark"
                    size={24}
                />

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        marginTop: Constants.statusBarHeight

    },
    headerText: {
        fontSize: 22,
        marginLeft: 5,
        fontWeight: "bold",
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 150,
        margin: 5

    }

});
