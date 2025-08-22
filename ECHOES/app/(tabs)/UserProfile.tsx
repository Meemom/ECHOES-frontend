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
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { userInfo, popularPlaylists } from '@/data/userData';

export default function UserProfile() {

    const router = useRouter();

    // popular playlists design 
    function ShowPlaylist( {data} ) {
        return (
            <TouchableOpacity style={styles.playlistFrame}>
                <Image source={data.image} style={styles.playlistImage}/>
                <ThemedText 
                style={styles.playlistTitle}
                numberOfLines={2}
                ellipsizeMode='tail'
                >
                    {data.name}
                </ThemedText>
                <View style={styles.playlistRow}>
                    <ThemedText style={styles.playlistDescription}>{data.duration}</ThemedText>
                    <TouchableOpacity style={styles.playlistLikes}>
                        <ThemedText style={[styles.playlistDescription, { color: 'black' }]}>{data.likes}</ThemedText>
                        <MaterialIcons name="favorite-border" size={10} color='black' />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <ScrollView style={styles.container}>
            {/* Profile header */}
            <View style={styles.section}>
                <Image source={userInfo.profilePic} style={styles.profilePicture}/>
                <TouchableOpacity style={styles.editButton}>
                    <View style={{ alignSelf: 'center' }}>
                        <MaterialIcons name="edit" size={24} color='black' /> 
                    </View>
                </TouchableOpacity>
                <View style={{ alignSelf: 'center', marginTop: 10}}>
                    <ThemedText style={styles.headerTitle}>@{userInfo.username}</ThemedText>
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
                    <ThemedText style={[styles.followText, { fontFamily: 'InterBold'}]}>{userInfo.followers}</ThemedText>
                    <ThemedText style={[styles.followText, { fontFamily: 'InterRegular'}]}>Followers</ThemedText>
                </View>
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <ThemedText style={[styles.followText, { fontFamily: 'InterBold'}]}>{userInfo.following}</ThemedText>
                    <ThemedText style={[styles.followText, { fontFamily: 'InterRegular'}]}>Following</ThemedText>
                </View>
            </View>

            {/* Dashboard */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12, paddingHorizontal: 20}}>
                <TouchableOpacity 
                style={styles.dashboardTile}
                onPress={() => router.push('/screens/UserProfileScreens/UserConcerts')}
                >
                    <ThemedText style={styles.dashboardText}>{userInfo.concerts} Concerts</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.dashboardTile}
                onPress={() => router.push('/screens/UserProfileScreens/UserReviews')}
                >
                <ThemedText style={styles.dashboardText}>{userInfo.reviews} Reviews</ThemedText>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12, paddingHorizontal: 20}}>
                <TouchableOpacity 
                style={styles.dashboardTile}
                onPress={() => router.push('/screens/UserProfileScreens/UserGenres')}
                >
                    <ThemedText style={styles.dashboardText}>{userInfo.genres} Genres</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.dashboardTile}
                onPress={() => router.push('/screens/UserProfileScreens/UserLanguages')}>
                    <ThemedText style={styles.dashboardText}>{userInfo.countries} Languages</ThemedText>
                </TouchableOpacity>
            </View>

            {/* Popular Playlists */}
            <View>
                <View style={styles.header}>
                    <ThemedText style={styles.headerTitle}>Popular Playlists</ThemedText>
                    <TouchableOpacity style={styles.arrowButton}>
                        <Ionicons name="arrow-forward" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 20, marginLeft: 15 }}>
                    <FlatList 
                    data={popularPlaylists}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ShowPlaylist data={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
                    />
                </View>
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
        height: 185,
    },
    playlistImage: {
        borderRadius: 20,
        width: 113,
        height: 113,
    },
    playlistTitle: {
        color: 'white',
        fontFamily: 'InterBold',
        fontSize: 11,
        alignSelf: 'center', 
        width: 100,
        flexShrink: 1,
        lineHeight: 15, 
        marginTop: 5,
        height: 35, 
    },
    playlistRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '100%',
    },
    playlistDescription: {
        color: 'white',
        fontFamily: 'InterMedium',
        fontSize: 8,
    },
    playlistLikes: {
        backgroundColor: '#5B60F6',
        width: 36,
        height: 14,
        borderRadius: 30,
        padding: 6,
        flexDirection: 'row',      
        alignItems: 'center',      
        paddingHorizontal: 6,    
        paddingVertical: 3, 
        justifyContent: 'space-around',
    },
    arrowButton: {
        backgroundColor: '#5B60F6',
        borderRadius: 20,
        padding: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 8,
      },
});