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
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

const USERNAME = 'The Sound of Meowsic';
const FOLLOWERS = 409;
const FOLLOWING = 364; 
const PROFILE_PIC = require('@/assets/images/catpic.jpg');
const popularPlaylists = [
    require('@/assets/images/war.png'),
    require('@/assets/images/spiderverse.png'),
    require('@/assets/images/romcom.png'),
];

export default function UserProfile() {
    return (
        <ScrollView style={styles.container}>
            {/* Profile header */}
            <View style={styles.section}>
                <Image source={PROFILE_PIC} style={styles.profilePicture}/>
                <TouchableOpacity style={styles.editButton}>
                    
                </TouchableOpacity>
            </View>
            
            {/* Following Info */}

            {/* Dashboard */}

            {/* Popular Playlists */}

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
        borderRadius: 12, 
        padding: 4,
        position: 'absolute',
        bottom: 20,
        right: 20, 
    }
    
});