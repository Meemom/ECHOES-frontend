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

const genreData = [
    {genre: 'Pop', artistsnum: 54, minutes: 480},
    {genre: 'R&B', artistsnum: 77, minutes: 690},
    {genre: 'Indie Rock', artistsnum: 22, minutes: 120},
];

function GenreCard({ data }) {
    return (
        <View style={styles.genreCard}>
            <ThemedText style={[styles.headerTitle, { fontSize: 22, textAlign: 'center', flexWrap: 'wrap' }]}>{data.genre}</ThemedText>
            <ThemedText style={[styles.headerTitle, { fontSize: 18, textAlign: 'center', flexWrap: 'wrap' }]}>{data.artistsnum} Artists</ThemedText>
            <ThemedText style={[styles.headerTitle, { fontSize: 16, textAlign: 'center', flexWrap: 'wrap' }]}>
                minutes listened: {data.minutes}
            </ThemedText>
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

            <View>
                {genreData.map((item, index) => (
                    <GenreCard key={index} data={item} />
                ))}
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
        paddingHorizontal: 15,
        paddingVertical: 10, 
        margin: 20, 
        minWidth: 100, 
        justifyContent: 'center',
        alignItems: 'center',
    },
});