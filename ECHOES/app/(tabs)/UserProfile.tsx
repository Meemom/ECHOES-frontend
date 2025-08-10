import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatList
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { MaterialIcons } from '@expo/vector-icons';

const USERNAME = 'The Sound of Meowsic';
const FOLLOWERS = 409;
const FOLLOWING = 364; 
const PROFILE_PIC = require('@/assets/images/catpic.jpg');
const CONCERTS = 13; 
const REVIEWS = 987; 
const GENRES = 108;
const COUNTRIES = 18; 
const popularPlaylists = [
    {id: '1', name: 'Afterschool Madness', image: require('@/assets/images/war.png'), duration: '2 h 58 min', likes: 18},
    {id: '2', name: 'spiderverse vibez', image: require('@/assets/images/spiderverse.png'), duration: '14 hr 3 min', likes: 109},
    {id: '3', name: 'the last scene of a romcom', image: require('@/assets/images/romcom.png'), duration: '7 hr 6 min', likes: 22},
];

export default function UserProfile() {

    const showPlaylist = ( {data} ) => {
        return (
            <TouchableOpacity style={styles.playlistFrame}>
                <Image source={data.image} style={styles.playlistImage}/>
                <ThemedText>{data.name}</ThemedText>
                <View style={ { flexDirection: 'row' }}>
                    <ThemedText>{data.duration}</ThemedText>
                    <ThemedText>{data.likes}</ThemedText>
                </View>
            </TouchableOpacity>
        );
    }; 

    return (
        <ScrollView style={styles.container}>
            {/* Profile header */}
            <View style={styles.section}>
                <Image source={PROFILE_PIC} style={styles.profilePicture}/>
                <TouchableOpacity style={styles.editButton}>
                    <View style={{ alignSelf: 'center' }}>
                        <MaterialIcons name="edit" size={24} color='black' /> 
                    </View>
                </TouchableOpacity>
                <View style={{ alignSelf: 'center', marginTop: 10}}>
                    <ThemedText style={styles.headerTitle}>@{USERNAME}</ThemedText>
                </View>
            </View>
            
            {/* Following Info */}
            <View style={{ 
                    flexDirection: 'row', 
                    padding: 0, 
                    justifyContent: 'space-around',  
                    width: '100%',
                    }}>
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <ThemedText style={[styles.followText, { fontFamily: 'InterBold'}]}>{FOLLOWERS}</ThemedText>
                    <ThemedText style={[styles.followText, { fontFamily: 'InterRegular'}]}>Followers</ThemedText>
                </View>
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <ThemedText style={[styles.followText, { fontFamily: 'InterBold'}]}>{FOLLOWING}</ThemedText>
                    <ThemedText style={[styles.followText, { fontFamily: 'InterRegular'}]}>Following</ThemedText>
                </View>
            </View>

            {/* Dashboard */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12, paddingHorizontal: 20}}>
                <TouchableOpacity style={styles.dashboardTile}>
                    <ThemedText style={styles.dashboardText}>{CONCERTS} Concerts</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardTile}>
                    <ThemedText style={styles.dashboardText}>{REVIEWS} Reviews</ThemedText>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12, paddingHorizontal: 20}}>
                <TouchableOpacity style={styles.dashboardTile}>
                    <ThemedText style={styles.dashboardText}>{GENRES} Genres</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardTile}>
                    <ThemedText style={styles.dashboardText}>{COUNTRIES} Countries</ThemedText>
                </TouchableOpacity>
            </View>

            {/* Popular Playlists */}
            <View style={styles.header}>
                <ThemedText>Popular Playlists</ThemedText>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#101010'},
    section: {
        marginTop: 50,
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
      },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    profilePicture: {
        width: 165, 
        height: 165, 
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'white',
        alignSelf: 'center',
    }, 
    editButton: {
        backgroundColor: 'white',
        borderRadius: 20, 
        width: 50,
        padding: 4,
        position: 'absolute',
        bottom: 35,
        right: 80, 
    },
    followText: {
        color: 'white',
        fontSize: 15, 
    },
    dashboardTile: {
        backgroundColor: '#5B60F6',
        borderRadius: 30, 
        width: 161,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dashboardText: {
        color: 'white',
        fontFamily: 'InterBold',
        fontSize: 15,
        alignSelf: 'center',
    },
    playlistFrame: {
        backgroundColor: '#2F2F2F',
        borderRadius: 20, 
        width: 113,
        height: 170,
    },
    playlistImage: {
        borderRadius: 20,
        width: 120,
        height: 153,
    },
    playlistTitle: {
        color: 'white',
        fontFamily: 'InterBold',
        fontSize: 10,
    },
    playlistDescription: {
        color: 'white',
        fontFamily: 'InterMedium',
        fontSize: 8,
    },
});