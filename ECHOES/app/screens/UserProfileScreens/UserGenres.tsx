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
import { MaterialIcons } from '@expo/vector-icons';
import { userInfo, popularPlaylists } from '@/data/userData';
import { userConcerts } from '@/data/concertData';

function genreCard() {
    return (
        <View style={styles.genreCard}>

        </View>
    );
}

export default function UserGenres() {
    return (
        <ScrollView style={[styles.container, { backgroundColor: '#101010' }]}>
            <View style={{ padding: 20 }}>
                <ThemedText style={styles.headerTitle}>{userInfo.username} has listened to
                    <ThemedText style={[styles.headerTitle, { color: '#FF9EDF' }]}>{' ' + userInfo.genres + ' '}</ThemedText>
                Genres:</ThemedText>
            </View>

            {/* sorting tab */}
            <View style={styles.sortingTab}>
                <ThemedText>Sort by</ThemedText>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    headerTitle: {
        fontFamily: 'InterBold',
        fontSize: 30,
        color: 'white',
        lineHeight: 30,
      },
    sortingTab: {
        backgroundColor: 'white',
        borderRadius: 20, 
        width: '25%',
        height: 27,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignContent: 'center',
    },
    genreCard: {
        backgroundColor: '#5B60F6',
        borderRadius: 30, 
        width: 161,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
});